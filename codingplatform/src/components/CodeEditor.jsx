import Editor from "@monaco-editor/react";
import { useRef, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../axios/axios";

export default function CodeEditor() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [ok, setOk] = useState(null);

  const coderef = useRef();
  const { id: questionId } = useParams();

  function mount(editor) {
    coderef.current = editor;
  }

  async function runbutton() {
    const code = coderef.current?.getValue();

    if (!code || code.trim() === "") {
      setOutput("Please write some code first.");
      return;
    }

    setOutput("Running...");

    try {
      const response = await api.post("/submission/run", {
        code,
        input: input || "",
      });

      const data = response.data;
      setOutput(data.output || "No output");
    } catch (error) {
      console.error("RUN ERROR:", error.response?.data || error.message);
      setOutput(
        error.response?.data?.message || `Error ${error.response?.status}` || "Backend not reachable"
      );
    }
  }

  async function submit() {
    const code = coderef.current?.getValue();

    if (!code || code.trim() === "") {
      setOk({ verdict: "Write code before submitting" });
      return;
    }

    const userID = localStorage.getItem("userId");
    if (!userID) {
      setOk({ verdict: "User not logged in" });
      return;
    }

    try {
      const response = await api.post("/submission/submit", {
        code,
        questionId,
        userId: userID,
      });

      setOk(response.data);
    } catch (error) {
      console.error("SUBMIT ERROR:", error.response?.data || error.message);
      setOk({
        verdict: error.response?.data?.message || "Backend not reachable",
      });
    }
  }

return (
  <div className="min-h-screen  w-[70%] bg-[#0e1015] text-zinc-200">
    <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col gap-8">


      <div className="flex justify-end  items-center gap-3">
       <h2 className="text-sm font-medium text-zinc-300">
    Python
  </h2>

        <button
          onClick={runbutton}
          className="px-5 py-2 text-sm bg-[#151922] border border-[#222633] rounded-md hover:border-zinc-500 transition"
        >
          Run
        </button>

        <button
          onClick={submit}
          className="px-5 py-2 text-sm bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded-md hover:bg-emerald-500/20 transition"
        >
          Submit
        </button>

      </div>


      {ok && (
        <div className="border border-[#222633] bg-[#151922] rounded-lg p-4 text-sm space-y-2">
          <div className="font-medium">
            Verdict:{" "}
            <span className="text-zinc-100">{ok.verdict}</span>
          </div>

          {ok.actual !== undefined && (
            <div className="text-red-400">
              Actual: {ok.actual}
            </div>
          )}

          {ok.expected !== undefined && (
            <div className="text-yellow-400">
              Expected: {ok.expected}
            </div>
          )}
        </div>
      )}


      <div className="border border-[#222633] rounded-lg overflow-hidden">
        <Editor
          height="60vh"
          language="python"
          theme="vs-dark"
          onMount={mount}
        />
      </div>


      <div className="border border-[#222633] rounded-lg overflow-hidden">

        <div className="flex border-b border-[#222633] text-xs uppercase tracking-wide text-zinc-400">
          <div className="px-4 py-2">Input</div>
          <div className="px-4 py-2 border-l border-[#222633]">Output</div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2">

          <textarea
            placeholder="Enter input..."
            onChange={(e) => setInput(e.target.value)}
            className="w-full h-40 bg-[#0e1015] text-zinc-200 font-mono text-sm p-4 outline-none resize-none border-b md:border-b-0 md:border-r border-[#222633]"
          />

          <textarea
            value={output}
            readOnly
            className="w-full h-40 bg-[#0e1015] text-zinc-400 font-mono text-sm p-4 outline-none resize-none"
          />

        </div>

      </div>

    </div>
  </div>
);
}
