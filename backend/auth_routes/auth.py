from flask import Flask, request, jsonify, abort
from flask_sqlalchemy import SQLAlchemy
from passlib.hash import bcrypt

# Initialize the Flask app and database
app = Flask(__name__)
app.config["SQLALCHEMY_DATABASE_URI"] = "postgresql://username:password@localhost/dbname"
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
db = SQLAlchemy(app)

# Define your User model
class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(255), nullable=False)

# Register Route
@app.route("/auth/register", methods=["POST"])
def register():
    data = request.get_json()
    email = data.get("email")
    password = data.get("password")

    if not email or not password:
        return jsonify({"error": "Email and password are required"}), 400

    # Check if email already exists
    user = User.query.filter_by(email=email).first()
    if user:
        return jsonify({"error": "Email already exists."}), 400

    # Hash the password
    hashed_pw = bcrypt.hash(password)

    # Create new user
    new_user = User(email=email, password=hashed_pw)
    db.session.add(new_user)
    db.session.commit()

    # Return the new user without the password
    return jsonify({
        "email": new_user.email,
        "id": new_user.id
    }), 201


# Login Route
@app.route("/auth/login", methods=["POST"])
def login():
    data = request.get_json()
    email = data.get("email")
    password = data.get("password")

    if not email or not password:
        return jsonify({"error": "Email and password are required"}), 400

    # Check if user exists
    user = User.query.filter_by(email=email).first()
    if not user or not bcrypt.verify(password, user.password):
        return jsonify({"error": "Invalid credentials"}), 401

    return jsonify({"message": f"Welcome, {user.email}!"}), 200
