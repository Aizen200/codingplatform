import React, { useEffect, useState } from "react";
import { User, Mail, LayoutGrid } from "lucide-react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../axios/axios";

const Profile = () => {
  const { name } = useParams();
  const navigate = useNavigate();

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

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
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-200 p-6 md:p-12 font-sans">
      <div className="max-w-4xl mx-auto space-y-8">
        

        <div>
          <button
            onClick={() => navigate(-1)}
            className="group flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/50 hover:bg-slate-800 border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300 backdrop-blur-md"
          >
            <span className="group-hover:-translate-x-1 transition-transform duration-300">←</span>
            <span className="font-medium text-sm">Back to Challenges</span>
          </button>
        </div>

        <div className="relative overflow-hidden rounded-3xl bg-slate-900/40 backdrop-blur-xl border border-white/5 shadow-2xl p-8 md:p-10">
   
          <div className="absolute top-0 right-0 -mt-16 -mr-16 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 -mb-16 -ml-16 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">

            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur opacity-40 group-hover:opacity-75 transition duration-500"></div>
              <div className="relative w-28 h-28 md:w-32 md:h-32 rounded-full bg-slate-950 flex items-center justify-center border-4 border-slate-900 shadow-xl">
                <User size={48} className="text-slate-300" />
              </div>
              <div className="absolute bottom-1 right-1 w-8 h-8 bg-emerald-500 rounded-full border-4 border-slate-900 flex items-center justify-center" title="Online">
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
              </div>
            </div>


            <div className="flex-1 text-center md:text-left space-y-3">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
                  {user.name}
                </h1>
                <div className="flex items-center justify-center md:justify-start gap-2 text-slate-400 mt-1">
                  <Mail size={16} />
                  <span className="font-medium">{user.email}</span>
                </div>
              </div>

              <div className="flex items-center justify-center md:justify-start gap-3 pt-2">
                 <div className="px-4 py-1.5 rounded-full bg-slate-800/80 border border-slate-700 text-xs font-semibold text-purple-300 uppercase tracking-wider">
                    Coder
                 </div>
                 <div className="px-4 py-1.5 rounded-full bg-slate-800/80 border border-slate-700 text-xs font-semibold text-emerald-300 uppercase tracking-wider">
                    {user.questionTitle?.length || 0} Solved
                 </div>
              </div>
            </div>
          </div>
        </div>


        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-white flex items-center gap-3">
              <span className="w-1 h-8 rounded-full bg-gradient-to-b from-purple-500 to-pink-500 block"></span>
              Solved Problems
            </h2>
            <span className="text-sm text-slate-500 font-medium">
              Recent Activity
            </span>
          </div>

          {!user.questionTitle?.length ? (
            <div className="rounded-3xl bg-slate-900/40 border border-slate-800/50 p-12 text-center backdrop-blur-sm">
              <div className="w-16 h-16 bg-slate-800/50 rounded-full flex items-center justify-center mx-auto mb-4">
                <LayoutGrid size={24} className="text-slate-500" />
              </div>
              <h3 className="text-lg font-medium text-white mb-1">No problems solved yet</h3>
              <p className="text-slate-400 text-sm mb-6">Start solving challenges to build your profile!</p>
              <button 
                onClick={() => navigate('/question')}
                className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40 hover:scale-105 transition-all duration-300"
              >
                Start Coding
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {user.questionTitle.map((title, index) => (
                <div
                  key={index}
                  onClick={() => {}}
                  className="group relative overflow-hidden rounded-2xl bg-slate-900/40 border border-slate-800/50 hover:border-purple-500/30 p-5 transition-all duration-300 hover:bg-slate-800/40 cursor-default"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-purple-500/0 to-purple-500/0 group-hover:via-purple-500/5 group-hover:to-purple-500/10 transition-all duration-500"></div>
                  <div className="flex items-center justify-between relative z-10">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center text-purple-400 font-bold text-sm">
                        {index + 1}
                      </div>
                      <span className="font-medium text-slate-200 group-hover:text-white transition-colors">
                        {title}
                      </span>
                    </div>
                    <div className="text-emerald-500 bg-emerald-500/10 px-3 py-1 rounded-full text-xs font-bold uppercase">
                      Solved
                    </div>
                  </div>
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
