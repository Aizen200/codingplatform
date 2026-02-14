import React, { useEffect, useState } from "react";
import { User, Mail } from "lucide-react";
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


  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-200 px-6 py-6">

      <button
        onClick={() => navigate(-1)}
        className="text-purple-400 mb-6 hover:text-purple-300 transition"
      >
        ← Back
      </button>


      <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 mb-8 shadow-lg">
        
        <div className="flex items-center gap-4 mb-6">
          <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
            <User size={28} />
          </div>

          <div>

            <h2 className="text-2xl font-semibold">{user.name}</h2>
            <div className="flex items-center gap-2 text-slate-400 text-sm">
              <Mail size={14} />
              {user.email}
            </div>
          </div>
        </div>

      </div>

      <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 shadow-lg">
        <h3 className="text-lg font-semibold mb-4">
          Solved Problems
        </h3>

        {user.questionTitle.length === 0 ? (
          <p className="text-slate-400 text-sm">
            No problems solved yet.
          </p>
        ) : (
          <ul className="space-y-3">
            {user.questionTitle.map((title, index) => (
              <li
                key={index}
                className="border border-slate-800 rounded-lg px-4 py-3 hover:bg-slate-800/40 transition"
              >
                {title}
              </li>
            ))}
          </ul>
        )}
      </div>

    </div>
  );
};

export default Profile;
