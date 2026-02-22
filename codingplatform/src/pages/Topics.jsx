import React, { useEffect, useState } from "react";
import { Filter, User, LogOut } from "lucide-react";
import { useNavigate, Link, useParams, useSearchParams } from "react-router-dom";
import api from "../axios/axios";

const Topics = () => {
  const { topic } = useParams();
  const navigate = useNavigate();
  const currentUserName = localStorage.getItem("name");



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
  <div className="min-h-screen bg-[#0e1015] text-zinc-200">
    <div className="max-w-6xl mx-auto px-6 py-10">

      {/* HEADER */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between mb-10">

        <button
          onClick={() => navigate("/question")}
          className="text-lg font-semibold tracking-tight"
        >
          Algorythm
        </button>

        <div className="flex items-center gap-3 relative w-full sm:w-auto">

          <input
            type="text"
            placeholder="Search problems..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-1 sm:flex-none bg-[#151922] border border-[#222633] rounded-md px-3 py-2 text-sm w-full sm:w-60 focus:outline-none focus:border-zinc-500 transition"
          />

          <button
            onClick={() => setOpen(!open)}
            className="bg-[#151922] border border-[#222633] px-3 py-2 rounded-md hover:border-zinc-500 transition"
          >
            <Filter size={16} />
          </button>

          {open && (
            <div className="absolute right-0 top-12 w-36 bg-[#151922] border border-[#222633] rounded-md overflow-hidden z-50">
              {["easy", "medium", "hard"].map((x) => (
                <button
                  key={x}
                  onClick={() => {
                    setSearchParams({ difficulty: x });
                    setOpen(false);
                  }}
                  className="w-full text-left px-4 py-2 capitalize text-sm hover:bg-[#1a1f2b] transition"
                >
                  {x}
                </button>
              ))}
              <button
                onClick={() => {
                  setSearchParams({});
                  setOpen(false);
                }}
                className="w-full text-left px-4 py-2 text-zinc-400 text-sm hover:bg-[#1a1f2b] border-t border-[#222633]"
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
            className="w-9 h-9 rounded-md bg-[#151922] border border-[#222633] flex items-center justify-center hover:border-zinc-500 transition"
          >
            <User size={16} />
          </button>
        </div>
      </div>

      {/* MAIN LAYOUT */}
      <div className="flex flex-col lg:flex-row gap-8">

        {/* LEFT SIDEBAR */}
        <div className="w-full lg:w-72 border border-[#222633] rounded-lg bg-[#151922] p-6 space-y-4">
          <h2 className="text-lg font-semibold tracking-tight">
            {topic}
          </h2>

          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-zinc-400">Easy</span>
              <span className="text-emerald-400">5</span>
            </div>
            <div className="flex justify-between">
              <span className="text-zinc-400">Medium</span>
              <span className="text-yellow-400">5</span>
            </div>
            <div className="flex justify-between">
              <span className="text-zinc-400">Hard</span>
              <span className="text-red-400">5</span>
            </div>
          </div>
        </div>

        {/* QUESTIONS LIST */}
        <div className="flex-1 border border-[#222633] rounded-lg overflow-hidden">

          {filteredQuestions.map((x, index) => (
            <Link
              to={`/solve/${x._id}`}
              key={x._id}
              className={`flex items-center justify-between px-6 py-4 text-sm transition hover:bg-[#151922]
              ${
                index !== filteredQuestions.length - 1
                  ? "border-b border-[#222633]"
                  : ""
              }`}
            >
              <div className="font-medium">
                {x.title}
              </div>

              <div
                className={`text-xs px-2 py-1 rounded-md capitalize
                  ${
                    x.difficulty === "easy"
                      ? "bg-emerald-500/10 text-emerald-400"
                      : x.difficulty === "medium"
                      ? "bg-yellow-500/10 text-yellow-400"
                      : "bg-red-500/10 text-red-400"
                  }`}
              >
                {x.difficulty}
              </div>
            </Link>
          ))}

        </div>
      </div>
    </div>
  </div>
);
};

export default Topics;
