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
  <div className="h-full w-[30%] min-w-[320px] bg-[#0e1015] text-zinc-200 border-r border-[#222633] overflow-y-auto">
    <div className="p-6 space-y-8">

      {!desc ? (
        <div className="text-zinc-500 text-sm">
          Loading question…
        </div>
      ) : (
        <>

          <div className="space-y-4">

            <button
              onClick={() => navigate(-1)}
              className="px-4 py-2 text-sm bg-[#151922] border border-[#222633] rounded-md hover:border-zinc-500 transition"
            >
              ← Back
            </button>

            <div className="space-y-2">
              <h2 className="text-xl font-semibold tracking-tight">
                {desc.title}
              </h2>

              <span
                className={`inline-block px-2 py-1 text-xs rounded-md capitalize
                  ${
                    desc.difficulty === "easy"
                      ? "bg-emerald-500/10 text-emerald-400"
                      : desc.difficulty === "medium"
                      ? "bg-yellow-500/10 text-yellow-400"
                      : "bg-red-500/10 text-red-400"
                  }`}
              >
                {desc.difficulty}
              </span>
            </div>
          </div>


          <div className="space-y-4 text-sm leading-relaxed text-zinc-300">
            <p>{desc.description}</p>
          </div>

          <div className="space-y-2">
            <h4 className="text-xs uppercase tracking-wide text-zinc-500">
              Constraints
            </h4>

            <div className="bg-[#151922] border border-[#222633] rounded-md p-4 text-sm text-zinc-400">
              {desc.constraints}
            </div>
          </div>
        </>
      )}

    </div>
  </div>
);
};

export default Questiondescritpon;
