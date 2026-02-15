import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import api from "../axios/axios";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    api.post("/auth/signup", {
      username: name,
      email,
      password
    })
      .then((res) => {
        // Backend response doesn't include name, so we add it manually from state
        const user = { ...res.data, name: name };
        localStorage.setItem("user", JSON.stringify(user));
        navigate("/question");
      })
      .catch((err) => {
        console.error(err);
        setError(err.response?.data?.message || "Signup failed. Please try again.");
      })
      .finally(() => {
        setLoading(false);
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

            {error && (
              <div className="bg-red-500/10 border border-red-500/50 text-red-400 text-sm p-3 rounded-xl text-center">
                {error}
              </div>
            )}

            <button
               type="submit"
               disabled={loading}
               className="mt-4 py-2 rounded-lg font-semibold text-white bg-gradient-to-r from-purple-500 to-pink-500 disabled:opacity-50 disabled:cursor-not-allowed transition-opacity"
            >
              {loading ? "Signing up..." : "Sign Up"}
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
