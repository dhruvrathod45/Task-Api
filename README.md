
# TaskFlow 🚀

A full-stack Task Management Web Application built using **Node.js, Express.js, MongoDB Atlas, and Vanilla JavaScript** with authentication and complete CRUD functionality.

---

## 🌐 Live Demo

### Frontend  
🔗 https://dhruvrathod45.github.io/Task-Api/

### Backend API  
🔗 https://task-api-e23c.onrender.com

---

## ✨ Features

- 🔐 User Authentication (Register/Login)
- ✅ Create Tasks
- 📝 Update Tasks
- ❌ Delete Tasks
- 📌 Task Status Management
- 📊 Task Statistics Dashboard
- ☁️ MongoDB Atlas Database
- 🚀 Fully Deployed Online
- 🎨 Modern UI Design
- 📱 Responsive Layout

---

## 🛠️ Tech Stack

### Frontend
- HTML
- CSS
- JavaScript

### Backend
- Node.js
- Express.js

### Database
- MongoDB Atlas
- Mongoose

### Deployment
- GitHub Pages (Frontend)
- Render (Backend)

---

## 📂 Project Structure

Task-Api/
│
├── config/
│   └── db.js
│
├── middleware/
│
├── models/
│
├── routes/
│   ├── auth.routes.js
│   └── task.routes.js
│
├── .env
├── index.js
├── index.html
├── package.json
└── README.md

---

## ⚙️ Environment Variables

Create a `.env` file in the root directory:

PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key

---

## 🚀 Installation & Setup

### 1️⃣ Clone Repository

git clone https://github.com/dhruvrathod45/Task-Api.git
cd Task-Api

### 2️⃣ Install Dependencies

npm install

### 3️⃣ Add Environment Variables

Create a `.env` file and add:

PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key

### 4️⃣ Start Server

npm start

OR

node index.js

---

## 📡 API Routes

### Authentication Routes

#### Register User

POST /api/auth/register

#### Login User

POST /api/auth/login

---

### Task Routes

#### Get All Tasks

GET /api/tasks

#### Create Task

POST /api/tasks

#### Update Task

PUT /api/tasks/:id

#### Delete Task

DELETE /api/tasks/:id

---

## 🎯 Future Improvements

- Due Dates
- Task Priorities
- Drag & Drop Support
- Dark/Light Theme Toggle
- Team Collaboration
- Notifications
- Mobile Optimization

---

## 👨‍💻 Author

### Dhruv Rathod

🔗 GitHub:  
https://github.com/dhruvrathod45

🔗 LinkedIn:  
https://www.linkedin.com/in/dhruvrathod45/
---

## ⭐ Support

If you like this project, give it a ⭐ on GitHub!

---
