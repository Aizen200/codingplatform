import { useEffect, useState } from "react";
import { Filter, User } from "lucide-react";
import api from "../axios/axios";
import { useNavigate, Link, useSearchParams } from "react-router-dom";

const Question = () => {
  const navigate = useNavigate();
  const [question, setQuestion] = useState([]);
  const [filteredQuestions, setFilteredQuestions] = useState([]);
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");

  const [searchParams, setSearchParams] = useSearchParams();
  const difficulty = searchParams.get("difficulty");

  const currentUser = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    api
      .get("/questions", {
        params: difficulty ? { difficulty } : {},
      })
      .then((response) => {
        setQuestion(response.data);
        setFilteredQuestions(response.data);
      })
      .catch((err) => console.log(err));
  }, [difficulty]);

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      const filtered = question.filter((q) =>
        q.title.toLowerCase().includes(search.toLowerCase())
      );
      setFilteredQuestions(filtered);
    }, 300);

    return () => clearTimeout(delayDebounce);
  }, [search, question]);

  const applyFilter = (diff) => {
    if (diff) {
      setSearchParams({ difficulty: diff });
    } else {
      setSearchParams({});
    }
    setOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-200 px-6 py-4">
      <div className="flex items-center justify-between mb-6">
        <h4 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Algorythm
        </h4>

        <div className="flex items-center gap-3 relative">
          <input
            type="text"
            placeholder="Search problems"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="bg-slate-800/60 border border-slate-700 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-purple-500"
          />

          <button
            onClick={() => setOpen(!open)}
            className="bg-gradient-to-r from-purple-500 to-pink-500 px-4 py-2 rounded-lg text-sm font-medium"
          >
            <Filter />
          </button>

          {open && (
            <div className="absolute right-0 top-12 w-36 bg-slate-900 border border-slate-700 rounded-xl overflow-hidden z-50">
              {["easy", "medium", "hard"].map((x) => (
                <button
                  key={x}
                  onClick={() => applyFilter(x)}
                  className="w-full text-left px-4 py-2 capitalize hover:bg-slate-800 transition"
                >
                  {x}
                </button>
              ))}
              <button
                onClick={() => applyFilter(null)}
                className="w-full text-left px-4 py-2 text-slate-400 hover:bg-slate-800 transition border-t border-slate-700"
              >
                Clear
              </button>
            </div>
          )}
        </div>

        <button
          onClick={() => {
            if (currentUser?.name) {
              navigate(`/user/${currentUser.name}`);
            } else {
               // Fallback if name is missing (e.g. from old login), redirect to login or handle gracefully
               navigate("/");
            }
          }}
          className="w-9 h-9 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center font-semibold"
        >
          <User />
        </button>
      </div>

      <div className="flex gap-3 flex-wrap mb-6">
        {[
          "Arrays",
          "Dynamic-Programming",
          "Recursion",
          "Binary-Search",
          "Two-Pointers",
        ].map((topic) => (
          <button
            key={topic}
            onClick={() => navigate(`/questions/${topic}`)}
            className="px-4 py-2 rounded-full bg-slate-800/60 border border-slate-700 hover:border-purple-500 hover:text-white transition"
          >
            {topic}
          </button>
        ))}
      </div>

      <div className="bg-slate-900/60 border border-slate-800 rounded-2xl overflow-hidden">
        <table className="w-full text-left">
          <tbody>
            {filteredQuestions.map((x) => (
              <tr
                key={x._id}
                className="border-b border-slate-800 hover:bg-slate-800/40 transition"
              >
                <td className="px-4 sm:px-6 py-4 grid grid-cols-2 gap-4">
                  <Link to={`/solve/${x._id}`}>
                    <div>{x.title}</div>
                    <div className="capitalize">{x.difficulty}</div>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Question;
