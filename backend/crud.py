from sqlalchemy.orm import Session
from models import User, Message
from datetime import datetime, timedelta

def get_user_by_email(db: Session, email: str):
    return db.query(User).filter(User.email == email).first()

from werkzeug.security import generate_password_hash, check_password_hash

def create_user(db: Session, email: str, password: str):
    hashed_pw = generate_password_hash(password)
    user = User(email=email, password=hashed_pw)
    db.add(user)
    db.commit()
    db.refresh(user)
    return user

def authenticate_user(db: Session, email: str, password: str):
    user = get_user_by_email(db, email)
    if user and check_password_hash(user.password, password):
        return user
    return None


def create_message(db: Session, user_id: int, content: str, role: str):
    msg = Message(user_id=user_id, content=content, role=role)
    db.add(msg)
    db.commit()
    db.refresh(msg)
    return msg

def get_conversation(db: Session, user_id: int, limit=10):
    return db.query(Message).filter(Message.user_id == user_id).order_by(Message.timestamp.desc()).limit(limit).all()

# New: Update user's minutes and login streak

def update_user_activity(db: Session, user_id: int, minutes_spent: int = 0):
    user = db.query(User).filter(User.id == user_id).first()
    if not user:
        return None

    today = datetime.utcnow().date()
    last_active = user.last_active.date() if user.last_active else None

    if last_active == today - timedelta(days=1):
        user.login_streak += 1
    elif last_active != today:
        user.login_streak = 1

    user.last_active = datetime.utcnow()
    user.minutes += minutes_spent
    db.commit()
    return user