import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import api from "../axios/axios";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    api.post("/auth/login", {
      email,
      password
    })
      .then((res) => {
        localStorage.setItem("userId", res.data.id);
        navigate("/question");
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div className="min-h-screen overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 flex items-center justify-center">
      <form onSubmit={handleSubmit}>
        <div className="relative z-10 w-full max-w-md bg-slate-900/60 backdrop-blur-xl border border-slate-700/50 rounded-3xl shadow-2xl p-8 space-y-6">
          <h1 className="text-center text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Algorythm
          </h1>

          <div className="space-y-2">
            <label className="text-slate-300 text-sm">Email</label>
            <input
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-slate-800/60 border border-slate-700 rounded-xl px-4 py-3 text-white"
            />
          </div>

          <div className="space-y-2">
            <label className="text-slate-300 text-sm">Password</label>
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-slate-800/60 border border-slate-700 rounded-xl px-4 py-3 text-white"
            />
          </div>

          <button className="w-full py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-purple-500 to-pink-500">
            Login →
          </button>

          <p className="text-center text-white">
            New user? <Link to="/auth/signup">Signup</Link>
          </p>
        </div>
      </form>
    </div>
  );
}

