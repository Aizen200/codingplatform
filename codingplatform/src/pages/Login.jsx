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

    api.post("/auth/login", { email, password })
      .then((res) => {
        const data = res.data;

        const user = {
          id: data.id,
          email: data.email,
          name: data.name || data.username,
          token: data.token
        };

        localStorage.removeItem("user");
        localStorage.setItem("user", JSON.stringify(user));

        navigate("/question");
      })
      .catch((err) => {
        setError(
          err.response?.data?.message ||
          "Login failed. Please check your credentials."
        );
      })
      .finally(() => setLoading(false));
  };

  return (
    <div className="min-h-screen bg-[#0e1015] flex items-center justify-center px-6">
      <form onSubmit={handleSubmit} className="w-full max-w-md">
        <div className="border border-[#222633] rounded-lg bg-[#151922] p-8 space-y-6">

          <div className="text-center">
            <h1 className="text-xl text-zinc-200">Algorythm</h1>
          </div>

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 bg-[#0e1015] border border-[#222633] text-zinc-200"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 bg-[#0e1015] border border-[#222633] text-zinc-200"
          />

          {error && <div className="text-red-400 text-sm">{error}</div>}

          <button className="w-full py-2 border border-[#222633] text-white">
            {loading ? "Logging in..." : "Login"}
          </button>

          <p className="text-center text-sm text-zinc-400">
            New user? <Link to="/auth/signup">SignUp</Link>
          </p>

        </div>
      </form>
    </div>
  );
}