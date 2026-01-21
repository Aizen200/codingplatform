import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState,useEffect } from "react";
import api from "../axios/axios";
export default function Login() {
  const[email,setEmail]=useState(null)
  const[password,setPassword]=useState(null)

  const navigate = useNavigate();
  const handleSubmit=(e)=>{
    e.preventDefault()
    api.post("/auth/login",{
      email:email,
      password:password
    }).then(()=>{
      navigate("/question")

    }).catch((err)=>{
      return (err)
    })
  }
  return (
    <div className="min-h-screen overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 flex items-center justify-center">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
      </div>
<form onSubmit={handleSubmit}>
      <div
        className="relative z-10  w-full max-w-md bg-slate-900/60  backdrop-blur-xl  border border-slate-700/50  rounded-3xl  shadow-2xl   p-8  space-y-6
        "
      >
       
        <h1 className="text-center text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Algorythm
        </h1>
        <div className="space-y-2">
          <label className="text-slate-300 text-sm">Email</label>
          <input
            type="email"
            onChange={(e)=>{
              setEmail(e.target.value)
            }}
            placeholder="you@example.com"
            className="  w-full bg-slate-800/60 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-purple-500 transition
              "
          />
        </div>

        <div className="space-y-2">
          <label className="text-slate-300 text-sm">Password</label>
          <input
            type="password"
            onChange={(e)=>{
              setPassword(e.target.value)
            }}
            placeholder="••••••••"
            className=" w-full bg-slate-800/60 border border-slate-700 rounded-xl  px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-purple-500 transition
              "
          />
        </div>

        <button
          className=" w-full py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-purple-500 to-pink-500  hover:from-purple-600 hover:to-pink-600 transition-all
            "
        >
          Login →
        </button>
        <p className="text-center text-white">
          if new user <Link to="/auth/signup"> Signup</Link>
        </p>
       
      </div>
      </form>
     
    </div>
  );
}
