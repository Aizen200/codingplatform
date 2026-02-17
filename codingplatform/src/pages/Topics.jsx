import React, { useEffect, useState } from "react";
import { Filter, User, LogOut } from "lucide-react";
import { useNavigate, Link, useParams, useSearchParams } from "react-router-dom";
import api from "../axios/axios";

const Topics = () => {
  const { topic } = useParams();
  const navigate = useNavigate();
  const currentUserName = localStorage.getItem("name");

  const handleLogout = () => {
    localStorage.removeItem("userId");
    localStorage.removeItem("token");
    localStorage.removeItem("email");
    localStorage.removeItem("name");
    navigate("/");
  };

  const [topicquestion, setTopicquestion] = useState([]);
  const [filteredQuestions, setFilteredQuestions] = useState([]);
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");

  const [searchParams, setSearchParams] = useSearchParams();
  const difficulty = searchParams.get("difficulty");


  useEffect(() => {
    api
      .get(`/questions/${topic}`, {
        params: difficulty ? { difficulty } : {},
      })
      .then((response) => {
        setTopicquestion(response.data);
        setFilteredQuestions(response.data);
      })
      .catch((err) => console.log(err));
  }, [topic, difficulty]);


  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      const filtered = topicquestion.filter((q) =>
        q.title.toLowerCase().includes(search.toLowerCase())
      );
      setFilteredQuestions(filtered);
    }, 300);

    return () => clearTimeout(delayDebounce);
  }, [search, topicquestion]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-200 px-4 sm:px-6 py-4">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between mb-8">
        <button
          onClick={() => navigate("/question")}
          className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
        >
          Algorythm
        </button>

        <div className="flex items-center gap-3 w-full sm:w-auto relative">
          <input
            type="text"
            placeholder="Search problems"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-1 sm:flex-none bg-slate-800/60 border border-slate-700 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-purple-500"
          />

          <button
            onClick={() => setOpen(!open)}
            className="bg-gradient-to-r from-purple-500 to-pink-500 px-3 py-2 rounded-lg"
          >
            <Filter size={16} />
          </button>

          {open && (
            <div className="absolute right-0 top-12 w-36 bg-slate-900 border border-slate-700 rounded-xl overflow-hidden z-50">
              {["easy", "medium", "hard"].map((x) => (
                <button
                  key={x}
                  onClick={() => {
                    setSearchParams({ difficulty: x });
                    setOpen(false);
                  }}
                  className="w-full text-left px-4 py-2 capitalize hover:bg-slate-800 transition"
                >
                  {x}
                </button>
              ))}
              <button
                onClick={() => {
                  setSearchParams({});
                  setOpen(false);
                }}
                className="w-full text-left px-4 py-2 text-slate-400 hover:bg-slate-800 transition border-t border-slate-700"
              >
                Clear
              </button>
            </div>
          )}

          <button
            onClick={() => {
              if (currentUserName) {
                navigate(`/user/${currentUserName}`);
              } else {
                navigate("/");
              }
            }}
            className="w-9 h-9 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center"
            title="Profile"
          >
            <User size={18} />
          </button>

          <button
            onClick={handleLogout}
            className="w-9 h-9 rounded-full bg-slate-800/60 border border-slate-700 hover:border-red-500/50 hover:bg-red-500/10 flex items-center justify-center transition-all duration-300"
            title="Logout"
          >
            <LogOut size={16} className="text-slate-400" />
          </button>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
        <div className="w-full lg:w-80 bg-slate-900/60 border border-slate-800 rounded-2xl p-6 backdrop-blur-md">
          <h2 className="text-xl font-semibold mb-4 text-purple-400">
            {topic}
          </h2>

          <div className="space-y-2 text-sm">
            <p className="text-green-400">Easy : 5</p>
            <p className="text-yellow-400">Medium : 5</p>
            <p className="text-red-400">Hard : 5</p>
          </div>
        </div>

        <div className="flex-1 bg-slate-900/60 border border-slate-800 rounded-2xl overflow-x-auto">
          <table className="min-w-full">
            <tbody>
              {filteredQuestions.map((x) => (
                <tr
                  key={x._id}
                  className="border-b border-slate-800 hover:bg-slate-800/40 transition"
                >
                  <td className="px-4 sm:px-6 py-4">
                    <Link to={`/solve/${x._id}`}>
                      <div>{x.title}</div>
                      <div className="capitalize text-sm text-slate-400">
                        {x.difficulty}
                      </div>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Topics;
