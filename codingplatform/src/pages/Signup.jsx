import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import api from "../axios/axios";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    api.post("/auth/signup", {
      username: name,
      email,
      password
    })
      .then((res) => {
        localStorage.setItem("user", JSON.stringify(res.data));
        console.log(localStorage.getItem("user"))

        navigate("/question");
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 flex items-center justify-center">
      <div className="w-[380px] rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 p-8 shadow-2xl">
        <h1 className="text-3xl font-bold text-center text-white mb-6">
          Algorythm
        </h1>

        <form onSubmit={handleSubmit}>
          <div className="flex flex-col space-y-4">
            <input
              placeholder="Username"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="px-4 py-2 rounded-lg bg-slate-800/60 border border-slate-700 text-white"
            />

            <input
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="px-4 py-2 rounded-lg bg-slate-800/60 border border-slate-700 text-white"
            />

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="px-4 py-2 rounded-lg bg-slate-800/60 border border-slate-700 text-white"
            />

            <button className="mt-4 py-2 rounded-lg font-semibold text-white bg-gradient-to-r from-purple-500 to-pink-500">
              Sign Up
            </button>

            <p className="text-center text-white">
              Already a user? <Link to="/auth/login">Login</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
