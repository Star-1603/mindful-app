from flask import Flask, request, jsonify
from flask_cors import CORS
from database import get_db, Base, engine
from models import User, Message
from crud import get_user_by_email, create_user, create_message, get_conversation, update_user_activity
from crud import authenticate_user
from dotenv import load_dotenv
import google.generativeai as genai
import os

load_dotenv()

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}})  # Use a specific origin for production

Base.metadata.create_all(bind=engine)

# Gemini Setup
genai.configure(api_key=os.getenv("GOOGLE_API_KEY"))
model = genai.GenerativeModel("gemini-2.0-flash-lite")

@app.route("/signup", methods=["POST"])
def signup():
    db = next(get_db())  # Assuming get_db() returns a session generator
    data = request.json
    email = data.get("email")
    password = data.get("password")

    if not email or not password:
        return jsonify({"success": False, "error": "Email and password are required"}), 400

    if get_user_by_email(db, email):
        return jsonify({"success": False, "error": "Email already registered"}), 400

    user = create_user(db, email, password)
    return jsonify({"success": True, "user": {"id": user.id, "email": user.email}})

@app.route("/login", methods=["POST"])
def login():
    db = next(get_db())
    data = request.json
    email = data.get("email")
    password = data.get("password")

    if not email or not password:
        return jsonify({"success": False, "error": "Email and password are required"}), 400

    user = authenticate_user(db, email, password)
    if not user:
        return jsonify({"success": False, "error": "Invalid credentials"}), 401

    return jsonify({
        "success": True,
        "user": {
            "id": user.id,
            "email": user.email,
            "minutesSpent": user.minutes,
            "loginStreak": user.login_streak
        }
    })

@app.route("/chat", methods=["POST"])
def chat():
    db = next(get_db())
    data = request.json
    user_email = data.get("email")
    user_message = data.get("message")
    minutes_spent = data.get("minutes_spent", 0)  # Minutes spent on mindfulness (if tracked)

    if not user_email or not user_message:
        return jsonify({"error": "Missing email or message"}), 400

    user = get_user_by_email(db, user_email)
    if not user:
        user = create_user(db, user_email, "dummy-password")  # You can adjust password setup later

    # Update user activity (minutes and streak)
    updated_user = update_user_activity(db, user.id, minutes_spent)

    create_message(db, user.id, user_message, "user")

    previous_msgs = get_conversation(db, user.id)
    history = [f"{msg.role.capitalize()}: {msg.content}" for msg in reversed(previous_msgs)]
    prompt = (
        "You are Uplift, a gentle and emotionally supportive assistant. You offer assistance and advice; along with steps one should take in case they share their problems. Avoid using asterisks.\n\n"
        + "\n".join(history)
        + f"\nUplift:"
    )

    try:
        response = model.generate_content(prompt)
        bot_reply = response.text.strip()
        create_message(db, user.id, bot_reply, "uplift")

        return jsonify({
            "reply": bot_reply,
            "total_minutes": updated_user.minutes,
            "login_streak": updated_user.login_streak
        })

    except Exception as e:
        return jsonify({"reply": "Uplift ran into a problem 💔", "error": str(e)})

if __name__ == "__main__":
    port = int(os.environ.get("PORT", 8000))
    app.run(host="0.0.0.0", port=port, debug=True)
