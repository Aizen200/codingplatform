import React, { useEffect, useState } from "react";
import { User, Mail, LayoutGrid, LogOut } from "lucide-react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../axios/axios";

const Profile = () => {
  const { name } = useParams();
  const navigate = useNavigate();

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const handleLogout = () => {
    localStorage.removeItem("userId");
    localStorage.removeItem("token");
    localStorage.removeItem("email");
    localStorage.removeItem("name");
    navigate("/");
  };

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await api.get(`/user/${name}`);
        setUser(res.data);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [name]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 flex items-center justify-center">
        <div className="w-10 h-10 border-4 border-purple-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white flex flex-col items-center justify-center gap-4">
        <div className="text-xl font-semibold">User not found</div>
        <button
          onClick={() => navigate("/question")}
          className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg text-sm font-semibold"
        >
          Go Home
        </button>
      </div>
    );
  }

  return (
  <div className="min-h-screen bg-[#0e1015] text-zinc-200">
    <div className="max-w-4xl mx-auto px-6 py-12 space-y-10">


      <div className="flex items-center justify-between">
        <button
          onClick={() => navigate(-1)}
          className="px-4 py-2 text-sm bg-[#151922] border border-[#222633] rounded-md hover:border-zinc-500 transition"
        >
          ← Back
        </button>

        <button
          onClick={handleLogout}
          className="flex items-center gap-2 px-4 py-2 text-sm bg-[#151922] border border-[#222633] rounded-md hover:border-red-500 transition"
        >
          <LogOut size={14} />
          Logout
        </button>
      </div>


      <div className="border border-[#222633] rounded-lg p-8 bg-[#151922] flex flex-col md:flex-row items-center md:items-start gap-8">

        <div className="w-24 h-24 rounded-md bg-[#0e1015] border border-[#222633] flex items-center justify-center">
          <User size={36} />
        </div>

  
        <div className="flex-1 text-center md:text-left space-y-3">
          <div>
            <h1 className="text-2xl font-semibold tracking-tight">
              {user.name}
            </h1>
            <div className="flex items-center justify-center md:justify-start gap-2 text-zinc-400 text-sm mt-1">
              <Mail size={14} />
              {user.email}
            </div>
          </div>

          <div className="flex items-center justify-center md:justify-start gap-3 pt-2 text-xs">
            <div className="px-3 py-1 rounded-md bg-[#0e1015] border border-[#222633] text-zinc-400 uppercase tracking-wide">
              Coder
            </div>

            <div className="px-3 py-1 rounded-md bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 uppercase tracking-wide">
              {user.questionTitle?.length || 0} Solved
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-6">

        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold tracking-tight">
            Solved Problems
          </h2>
          <span className="text-xs text-zinc-500 uppercase tracking-wide">
            Recent Activity
          </span>
        </div>

        {!user.questionTitle?.length ? (
          <div className="border border-[#222633] rounded-lg p-10 text-center bg-[#151922] space-y-4">
            <LayoutGrid size={24} className="mx-auto text-zinc-500" />
            <p className="text-sm text-zinc-400">
              No problems solved yet.
            </p>
            <button
              onClick={() => navigate("/question")}
              className="px-5 py-2 text-sm bg-[#0e1015] border border-[#222633] rounded-md hover:border-zinc-500 transition"
            >
              Start Coding
            </button>
          </div>
        ) : (
          <div className="border border-[#222633] rounded-lg overflow-hidden">

            {user.questionTitle.map((title, index) => (
              <div
                key={index}
                className={`flex items-center justify-between px-6 py-4 text-sm transition hover:bg-[#1a1f2b] 
                ${
                  index !== user.questionTitle.length - 1
                    ? "border-b border-[#222633]"
                    : ""
                }`}
              >
                <div className="flex items-center gap-4">
                  <span className="text-zinc-500 w-6">
                    {index + 1}
                  </span>
                  <span className="font-medium">
                    {title}
                  </span>
                </div>

                <span className="text-xs px-2 py-1 rounded-md bg-emerald-500/10 text-emerald-400">
                  Solved
                </span>
              </div>
            ))}
          </div>
        )}
      </div>

    </div>
  </div>
);
};

export default Profile;
