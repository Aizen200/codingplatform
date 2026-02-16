import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../axios/axios";

const Questiondescritpon = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [desc, setDesc] = useState(null);

  useEffect(() => {
    api.get(`/solve/${id}`)
      .then(res => setDesc(res.data))
      .catch(() => {});
  }, [id]);

  if (!desc) {
    return (
      <div className="h-full bg-[#020617] text-slate-400 p-6 w-[30%]">
        Loading question…
      </div>
    );
  }

  return (
    <div className="h-full overflow-y-auto bg-[#020617] text-slate-200 p-6 w-[30%]">
      <div className="space-y-6">

        <div className="space-y-2">
          <button
            onClick={() => navigate(-1)}
            className="px-5 py-2 bg-indigo-600 hover:bg-indigo-500 rounded-md text-sm font-semibold"
          >
            Back
          </button>

          <h2 className="text-2xl font-bold text-slate-100">
            {desc.title}
          </h2>

          <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-emerald-500/10 text-emerald-400">
            {desc.difficulty}
          </span>
        </div>

        <p className="text-sm leading-relaxed text-slate-300">
          {desc.description}
        </p>

        <div className="space-y-1">
          <h4 className="text-xs font-semibold uppercase text-slate-200">
            Constraints
          </h4>
          <p className="text-sm text-slate-400">
            {desc.constraints}
          </p>
        </div>

      </div>
    </div>
  );
};

export default Questiondescritpon;
