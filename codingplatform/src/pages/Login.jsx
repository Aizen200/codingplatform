import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import api from "../axios/axios";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    api.post("/auth/login", {
      email,
      password
    })
      .then((res) => {

        const { id, email, name, token } = res.data;

        localStorage.setItem("userId", id);
        localStorage.setItem("token", token);
        localStorage.setItem("email", email);
        localStorage.setItem("name", name);

        navigate("/question");
      })
      .catch((err) => {
        console.error(err);
        setError(
          err.response?.data?.message ||
          "Login failed. Please check your credentials."
        );
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
  <div className="min-h-screen bg-[#0e1015] flex items-center justify-center px-6">
    <form onSubmit={handleSubmit} className="w-full max-w-md">
      <div className="border border-[#222633] rounded-lg bg-[#151922] p-8 space-y-6">

        <div className="text-center space-y-2">
          <h1 className="text-xl font-semibold tracking-tight text-zinc-200">
            Algorythm
          </h1>
          <p className="text-sm text-zinc-400">
            Welcome back
          </p>
        </div>

        <div className="space-y-4">

          <div className="space-y-1">
            <label className="text-xs uppercase tracking-wide text-zinc-500">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 rounded-md bg-[#0e1015] border border-[#222633] text-sm text-zinc-200 focus:outline-none focus:border-zinc-500 transition"
            />
          </div>

          <div className="space-y-1">
            <label className="text-xs uppercase tracking-wide text-zinc-500">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 rounded-md bg-[#0e1015] border border-[#222633] text-sm text-zinc-200 focus:outline-none focus:border-zinc-500 transition"
            />
          </div>

          {error && (
            <div className="bg-red-500/10 border border-red-500/20 text-red-400 text-sm p-3 rounded-md">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full py-2 text-sm rounded-md bg-[#0e1015] border border-[#222633] hover:border-zinc-500 transition disabled:opacity-50 disabled:cursor-not-allowed text-white"
          >
            {loading ? "Logging in..." : "Login"}
          </button>

          <p className="text-center text-sm text-zinc-400">
            New user?{" "}
            <Link
              to="/auth/signup"
              className="text-zinc-200 hover:underline"
            >
              SignUp
            </Link>
          </p>

        </div>
      </div>
    </form>
  </div>
);
}
