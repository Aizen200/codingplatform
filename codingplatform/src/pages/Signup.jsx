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
        const data = res.data;

        const user = {
          id: data.id,
          email: data.email,
          name: data.name,
          token: data.token
        };

        localStorage.removeItem("user");
        localStorage.setItem("user", JSON.stringify(user));

        navigate("/question");
      })
      .catch((err) => {
        console.error(err);
        setError(
          err.response?.data?.message ||
          "Signup failed. Please try again."
        );
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="min-h-screen bg-[#0e1015] flex items-center justify-center px-6">
      <div className="w-full max-w-md border border-[#222633] rounded-lg bg-[#151922] p-8 space-y-6">

        <div className="text-center">
          <h1 className="text-xl text-zinc-200">Algorythm</h1>
          <p className="text-sm text-zinc-400">Create your account</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">

          <input
            placeholder="Username"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-2 bg-[#0e1015] border border-[#222633] text-zinc-200"
          />

          <input
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

          {error && (
            <div className="text-red-400 text-sm">{error}</div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full py-2 border border-[#222633] text-white"
          >
            {loading ? "Signing up..." : "Sign Up"}
          </button>

          <p className="text-center text-sm text-zinc-400">
            Already have an account?{" "}
            <Link to="/auth/login" className="text-zinc-200">
              Login
            </Link>
          </p>

        </form>
      </div>
    </div>
  );
};

export default Signup;