import React, { useEffect, useState } from "react";
import { User, Mail, LayoutGrid, LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";
import api from "../axios/axios";

const Profile = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/auth/login");
  };

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (!storedUser || !storedUser.token) {
      navigate("/auth/login");
      return;
    }

    const fetchProfile = async () => {
      try {
        const res = await api.get(`/user/${storedUser.name}`, {
          headers: {
            Authorization: `Bearer ${storedUser.token}`,
          },
        });

        setUser(res.data);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [navigate]);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#0e1015] flex items-center justify-center">
        <div className="w-10 h-10 border-4 border-zinc-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen bg-[#0e1015] text-white flex flex-col items-center justify-center gap-4">
        <div className="text-xl font-semibold">User not found</div>
        <button
          onClick={() => navigate("/question")}
          className="px-4 py-2 bg-[#151922] border border-[#222633] rounded-lg text-sm"
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
            className="px-4 py-2 text-sm bg-[#151922] border border-[#222633] rounded-md"
          >
            ← Back
          </button>

          <button
            onClick={handleLogout}
            className="flex items-center gap-2 px-4 py-2 text-sm bg-[#151922] border border-[#222633] rounded-md hover:border-red-500"
          >
            <LogOut size={14} />
            Logout
          </button>
        </div>

        <div className="border border-[#222633] rounded-lg p-8 bg-[#151922] flex flex-col md:flex-row items-center gap-8">

          <div className="w-24 h-24 rounded-md bg-[#0e1015] border border-[#222633] flex items-center justify-center">
            <User size={36} />
          </div>

          <div className="flex-1 text-center md:text-left space-y-3">
            <h1 className="text-2xl font-semibold">
              {user.name}
            </h1>

            <div className="flex items-center justify-center md:justify-start gap-2 text-zinc-400 text-sm">
              <Mail size={14} />
              {user.email}
            </div>

            <div className="flex items-center justify-center md:justify-start gap-3 text-xs pt-2">
              <div className="px-3 py-1 bg-[#0e1015] border border-[#222633] text-zinc-400">
                Coder
              </div>

              <div className="px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                {user.questionTitle?.length || 0} Solved
              </div>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-4">
            Solved Problems
          </h2>

          {!user.questionTitle?.length ? (
            <div className="border border-[#222633] p-10 text-center bg-[#151922]">
              <LayoutGrid size={24} className="mx-auto text-zinc-500" />
              <p className="text-sm text-zinc-400 mt-2">
                No problems solved yet.
              </p>
            </div>
          ) : (
            <div className="border border-[#222633] rounded-lg overflow-hidden">
              {user.questionTitle.map((title, index) => (
                <div
                  key={index}
                  className="flex justify-between px-6 py-4 border-b border-[#222633]"
                >
                  <span>{index + 1}. {title}</span>
                  <span className="text-emerald-400 text-xs">Solved</span>
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