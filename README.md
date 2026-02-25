#  Algorythm

**Algorythm** is a high-performance competitive programming and technical interview preparation platform. It empowers developers to solve complex algorithmic challenges with a premium, real-time coding experience.

---

##  Features

- ** Premium Editor**: Integrated with **Monaco Editor** for a VS Code-like experience.
- ** Fast Code Execution**: Real-time feedback via **Judge0 CE** integration.
- ** Organized Problems**: Challenged categorized by specific algorithmic topics.
- ** User Analytics**: Track your progress, monitor solved counts, and manage your profile.
- ** Secure Access**: JWT-based session management for data privacy.

---

##  Tech Stack

| Component | Technology |
| :--- | :--- |
| **Frontend** | React 19, Vite, Tailwind CSS, Axios, Lucide Icons |
| **Backend** | Node.js, Express.js |
| **Database** | MongoDB (Mongoose) |
| **Execution** | Judge0 API (RapidAPI) |
| **Security** | JSON Web Tokens (JWT), Bcrypt |

---

##  Getting Started

Follow these steps to set up **Algorythm** locally.

### 1. Prerequisite Checklist
- **Node.js**: v18.0.0+ installed.

### 2. Clone the Repository
```bash
git clone https://github.com/Aizen200/codingplatform
```

### 3. Backend Setup (`/backend`)
Configure the server settings and database connection.

```bash
cd backend
npm install
```

**Environment Configuration**
Create a `.env` file in the `backend` directory:
```env
# Server Configuration
PORT=3000

# Database
MONGO_URI=your_mongodb_connection_string

# Security
JWT_SECRET=your_secure_random_string
```

> [!TIP]
> Use a strong, unique string for `JWT_SECRET` to ensure user sessions remain secure.

### 4. Frontend Setup (`/codingplatform`)
Configure the client-side application to communicate with the API.

```bash
cd codingplatform
npm install
```

**Environment Configuration**
Create a `.env` file in the `codingplatform` directory:
```env
# API Gateway
VITE_API_URL=http://localhost:3000
```

---

##  Project Structure

```text
├── backend/            # Express.js Server
│   ├── authentication/ # JWT Auth & Logic
│   ├── function/      # Execution engine (Judge0)
│   ├── middleware/    # Request guards (Auth)
│   ├── model/         # Mongoose Schemas
│   ├── routes/        # API Endpoints
│   └── seed/          # Initial Data Seeding
├── codingplatform/     # React (Vite) Application
│   ├── src/
│   │   ├── axios/     # Axios client configuration
│   │   ├── components/ # Shared UI components
│   │   └── pages/      # Views: Editor, Topics, Profile
└── README.md           # Documentation
```

---


