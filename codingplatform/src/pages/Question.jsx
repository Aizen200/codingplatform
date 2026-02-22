import { useEffect, useState } from "react";
import { Filter, User, LogOut } from "lucide-react";
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

  const currentUserName = localStorage.getItem("name");


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
        q.title.toLowerCase().includes(search.toLowerCase()),
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
  <div className="min-h-screen bg-[#0e1015] text-zinc-200">
    <div className="max-w-5xl mx-auto px-6 py-10">


      <div className="flex items-center justify-between mb-10">
        <h1 className="text-xl font-semibold tracking-tight">
          Algorythm
        </h1>

        <div className="flex items-center gap-3 relative">
          <input
            type="text"
            placeholder="Search problems..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="bg-[#151922] border border-[#222633] rounded-md px-3 py-2 text-sm w-60 focus:outline-none focus:border-zinc-500 transition"
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
                  onClick={() => applyFilter(x)}
                  className="w-full text-left px-4 py-2 capitalize hover:bg-[#1b1f2a] text-sm transition"
                >
                  {x}
                </button>
              ))}
              <button
                onClick={() => applyFilter(null)}
                className="w-full text-left px-4 py-2 text-zinc-400 hover:bg-[#1b1f2a] text-sm border-t border-[#222633]"
              >
                Clear
              </button>
            </div>
          )}
        </div>

        <button
          onClick={() => {
            if (currentUserName) {
              navigate(`/user/${currentUserName}`);
            } else {
              navigate("/");
            }
          }}
          className="w-9 h-9 rounded-md bg-[#151922] border border-[#222633] flex items-center justify-center hover:border-zinc-500 transition"
          title="Profile"
        >
          <User size={16} />
        </button>
      </div>

   
      <div className="flex gap-3 flex-wrap mb-8">
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
            className="px-4 py-2 rounded-md bg-[#151922] border border-[#222633] text-sm hover:border-zinc-500 transition"
          >
            {topic}
          </button>
        ))}
      </div>


      <div className="border border-[#222633] rounded-lg overflow-hidden">
        {filteredQuestions.map((x, index) => (
          <Link
            to={`/solve/${x._id}`}
            key={x._id}
            className={`flex items-center justify-between px-6 py-4 text-sm transition 
              ${index !== filteredQuestions.length - 1 ? "border-b border-[#222633]" : ""}
              hover:bg-[#151922]`}
          >
            <div className="font-medium">
              {x.title}
            </div>

            <div
              className={`text-xs font-medium px-2 py-1 rounded-md capitalize
                ${
                  x.difficulty === "easy"
                    ? "bg-green-500/10 text-green-400"
                    : x.difficulty === "medium"
                    ? "bg-yellow-500/10 text-yellow-400"
                    : "bg-red-500/10 text-red-400"
                }
              `}
            >
              {x.difficulty}
            </div>
          </Link>
        ))}
      </div>
    </div>
  </div>
);}
export default Question;
