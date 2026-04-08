# 🚗 RideEase – Ride Sharing Web Application

## 📌 Overview

RideEase is a web-based ride-sharing application that connects users and drivers. It allows users to register, log in, request rides, and communicate with others through a messaging system. The project demonstrates a full-stack application using Node.js, Express, and MongoDB.

---

## 🎯 Features

* 👤 User Registration and Login
* 🚗 Ride Request Creation
* 📋 View Available Ride Requests
* 💬 Real-time Messaging System
* 🗄 Data Storage using MongoDB
* 🌐 Simple Web Interface using HTML, CSS, JavaScript

---

## 🏗 Architecture

The project follows a **client-server architecture**:

* **Frontend** → HTML, CSS, JavaScript
* **Backend** → Node.js + Express.js
* **Database** → MongoDB

### 🔄 Workflow

1. User interacts with frontend
2. Requests are sent to backend (Express server)
3. Backend processes logic
4. Data is stored/retrieved from MongoDB
5. Response sent back to frontend

---

## 🛠 Tech Stack

* **Frontend:** HTML, CSS, JavaScript
* **Backend:** Node.js, Express.js
* **Database:** MongoDB
* **ODM:** Mongoose
* **Other Tools:** dotenv, CORS

---

## 📂 Project Structure

```
RideEase/
│── routes/        # API route handlers
│── models/        # Mongoose schemas
│── public/        # Frontend files (HTML, CSS, JS)
│── server.js      # Main server file
│── package.json   # Project dependencies
│── .env           # Environment variables
```

---

## 🗄 Database Design

The application uses MongoDB collections:

* **Users** → Stores user details
* **Rides/Requests** → Stores ride booking information
* **Messages** → Stores chat data

Data is stored in **JSON-like documents**.

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository

```bash
git clone https://github.com/Deepika-Namburi/RideEase.git
cd RideEase
```

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Setup environment variables

Create a `.env` file and add:

```
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

### 4️⃣ Run the server

```bash
npm start
```

### 5️⃣ Open in browser

```
http://localhost:5000
```

---

## 🔐 Authentication

* Basic login and registration system
* User credentials stored securely in database

---

## 🚀 Future Enhancements

* 📍 Real-time GPS tracking
* 💳 Online payment integration
* 📱 Mobile app version
* ⚡ Real-time updates using WebSockets
* 🧠 Smart ride matching algorithm

---

## 📌 Conclusion

RideEase is a simple and scalable ride-sharing platform that demonstrates core concepts of full-stack web development, including REST APIs, database integration, and user interaction.

