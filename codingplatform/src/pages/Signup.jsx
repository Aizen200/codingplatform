import React from 'react'
import{Link,useNavigate} from "react-router-dom"
const Signup = () => {
  const navigate=useNavigate()
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 flex items-center justify-center">
      
      <div className="w-[380px] rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 p-8 shadow-2xl">
        

        <h1 className="text-3xl font-bold text-center text-white mb-6">
          Algorythm
        </h1>


        <div className="flex flex-col space-y-4">

          <div>
            <label className="block text-sm text-slate-300 mb-1">
              Username
            </label>
            <input
              type="text"
              className="w-full px-4 py-2 rounded-lg bg-slate-800/60 border border-slate-700 text-white focus:outline-none focus:border-purple-500"
            />
          </div>

          <div>
            <label className="block text-sm text-slate-300 mb-1">
              Email
            </label>
            <input
              type="email"
              className="w-full px-4 py-2 rounded-lg bg-slate-800/60 border border-slate-700 text-white focus:outline-none focus:border-purple-500"
            />
          </div>

          <div>
            <label className="block text-sm text-slate-300 mb-1">
              Password
            </label>
            <input
              type="password"
              className="w-full px-4 py-2 rounded-lg bg-slate-800/60 border border-slate-700 text-white focus:outline-none focus:border-purple-500"
            />
          </div>


          <button  onClick={()=>navigate("/question")}className="mt-4 w-full py-2 rounded-lg font-semibold text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:opacity-90 transition">
            Sign Up
          </button>
          <p className="text-center text-white">Already a user  <Link to="/Login"> login</Link></p>
        </div>

      </div>
    </div>
  )
}

export default Signup
