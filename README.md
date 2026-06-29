# Resume Builder

Resume Builder that helps users create, customize, and share professional ATS friendly resumes in minutes. Users can build resumes from scratch, upload existing resumes for automatic parsing, enhance content using AI, and download or share resumes with a public link.

##  Live Demo

Frontend: https://resume-builder-seven-khaki.vercel.app/

Backend: https://your-render-url.onrender.com

---

##  Features

-  AI-powered suggestions for summary, job description etc.
-  Upload an existing resume and automatically extract information
-  Multiple ATS friendly resume templates
-  Live resume preview
-  Customize accent colors
-  Download resume as PDF
-  Share resumes with a public link
-  Public/Private resume visibility
-  User authentication with JWT
-  Image upload with ImageKit
-  Fully responsive design

---

##  Tech Stack

### Frontend
- React.js
- Vite
- Tailwind CSS
- Redux Toolkit
- Axios
- React Router
- React Hot Toast
- Lucide React

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- Multer
- ImageKit
- Google Gemini API

---



## ⚙️ Installation

### Clone the repository

```bash
git clone https://github.com/Evilsoul1/Resume_Builder.git
```

```bash
cd Resume_Builder
```

---

## Backend Setup

```bash
cd server
npm install
```

Create a `.env` file:

```env
PORT=5000

MONGODB_URI=

JWT_SECRET=

GEMINI_API_KEY=
GEMINI_MODEL=

IMAGEKIT_PRIVATE_KEY=
```

Run backend

```bash
npm start
```

---

## Frontend Setup

```bash
cd client
npm install
```

Create a `.env` file

```env
VITE_BASE_URL=http://localhost:5000
```

Run frontend

```bash
npm run dev
```

---

##  Project Structure

```
Resume_Builder
│
├── client
│   ├── src
│   ├── public
│   └── package.json
│
├── server
│   ├── controllers
│   ├── middleware
│   ├── models
│   ├── routes
│   ├── config
│   └── package.json
│
└── README.md
```

---

##  Deployment

Frontend:
- Vercel

Backend:
- Render

Database:
- MongoDB Atlas



##  Author

**Arya Raj**

---

##  Support

If you found this project useful, consider giving it a ⭐ on GitHub.
