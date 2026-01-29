import { useEffect, useState } from "react";
import { Filter, User } from "lucide-react";
import api from "../axios/axios";
import { useNavigate,Link } from "react-router-dom";
import Description from "./Description";

const Question = () => {
  const navigate = useNavigate();
  const [question, setQuestion] = useState([]);

  useEffect(() => {
    api
      .get("/questions/")
      .then((response) => {
        setQuestion(response.data);
      })
      .catch((err) => {
        return err;
      });
  }, []);
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-200 px-6 py-4">
      <div className="flex items-center justify-between mb-6">
        <h4 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Algorythm
        </h4>

        <div className="flex items-center gap-3">
          <input
            type="text"
            placeholder="Search problems"
            className="bg-slate-800/60 border border-slate-700 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-purple-500"
          />
          <button className="bg-gradient-to-r from-purple-500 to-pink-500 px-4 py-2 rounded-lg text-sm font-medium">
            <Filter />
          </button>
        </div>

        <button className="w-9 h-9 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center font-semibold">
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
            {question.map((x) => 
               (
                <tr className="border-b border-slate-800 hover:bg-slate-800/40 transition">
                  <td className=" px-4 sm:px-6 py-4 grid grid-cols-2 gap-4">
                   <Link to="/Description"><div>{x.title}</div> <div className="capitalize">{x.difficulty}</div></Link> 
                  </td>
                </tr>
              )
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Question;
