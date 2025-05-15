# 🌿 Uplift — Mental Wellness Platform

**Uplift** is a modern mental health platform designed to empower individuals on their wellness journey. From guided mindfulness exercises to intelligent chatbot support and a vibrant community space, Uplift blends psychology and technology to promote daily emotional well-being.

---

## 🚀 Features

- 🧘‍♀️ **Mindfulness Exercises**  
  Guided breathing, meditation, and journaling sessions tailored for mental clarity.

- 💬 **Mental Healthcare Chatbot**  
  AI-powered conversational agent for emotional support, tips, and coping strategies.

- 🫂 **Community Forum**  
  Connect with like-minded users, share experiences, and support each other anonymously.

- 📈 **Progress Tracking**  
  Track daily streaks, session minutes, and emotional check-ins to stay consistent.

- 🎵 **Sleep Music & Relaxation Sounds**  
  Royalty-free music to help you unwind, sleep, or stay focused.

- 🔐 **User Authentication**  
  Secure sign-up/login with JWT-based authentication and session handling.

---

## 🛠️ Tech Stack

| Layer        | Tech                                       |
|--------------|--------------------------------------------|
| **Frontend** | [Next.js](https://nextjs.org/) + Tailwind CSS |
| **Backend**  | [Flask](https://flask.palletsprojects.com/en/stable/) (Python) |
---

## 📦 Installation

### Prerequisite: You have to configure a database in the backend (Postgres) with the following schema and store the DATABASE_URL in a .env file. Additionally, You will need to generate an API key for Gemini and store it with GOOGLE_API_KEY in the same .env file in the backend folder. These are integral to running the app. More information about API keys can be found at Google API dashboard; [link](https://ai.google.dev/gemini-api/docs)

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/uplift.git
cd uplift
```

### 2. Backend Setup (Flask)

```bash
cd backend
python -m venv venv
source venv/bin/activate
pip install -r requirements.txt
python app.py
```

### 3. Frontend Setup (Next.js)

```bash
cd ../frontend
npm install
npm run dev
```

## Previews
![Screenshot 2025-05-14 020119](https://github.com/user-attachments/assets/6a4323ca-cea9-448e-8a34-1a70c305fba0)

![Screenshot 2025-05-14 020135](https://github.com/user-attachments/assets/0b26457e-9ffc-46ef-b167-c3a64f67c1e8)

![Screenshot 2025-05-14 020153](https://github.com/user-attachments/assets/9be51d3b-9ff5-44eb-8eac-2d18fc9ba434)

![Screenshot 2025-05-14 020635](https://github.com/user-attachments/assets/7c8162c3-187c-4b46-9dbc-255769321af9)

[![Watch on YouTube](https://img.youtube.com/vi/lyDl0EGybyw/maxresdefault.jpg)](https://www.youtube.com/watch?v=lyDl0EGybyw)


## 🧠 AI Chatbot & Trends
Chatbot: Context-aware GPT integration using Flask (Google Gemini)

Trends & Insights: LSTM-ready data and anomaly detection (coming soon)

## 🤝 Contributing
We welcome all contributions! Start by:

Forking the repo

Creating a new branch:

```bash
git checkout -b feature/my-feature
Making your changes
```
Submitting a PR

## 📃 License
MIT License. See LICENSE for more info.
