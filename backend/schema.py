from pydantic import BaseModel

class MindfulnessEntry(BaseModel):
    user_email: str
    minutes: int

class UserCreate(BaseModel):
    email: str
    password: str
