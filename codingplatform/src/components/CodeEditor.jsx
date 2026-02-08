import Editor from "@monaco-editor/react";
import { useRef, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../axios/axios";

export default function CodeEditor() {
  const { id: questionId } = useParams();
  const userId = localStorage.getItem("userId");

  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [verdict, setVerdict] = useState(null);

  const coderef = useRef();

  function mount(editor) {
    coderef.current = editor;
  }

  async function runbutton() {
    const code = coderef.current.getValue();
    setOutput("Running...");

    try {
      const res = await api.post("/submission/run", {
        code,
        input
      });

      setOutput(
        res.data.run?.stdout ||
        res.data.run?.stderr ||
        "No output"
      );
    } catch {
      setOutput("Error while executing code");
    }
  }

  async function submit() {
    const code = coderef.current.getValue();

    const res = await api.post("/submission/submit", {
      code,
      questionId,
      userId
    });

    setVerdict(res.data.verdict);
  }

  return (
    <div className="min-h-screen bg-[#020617] text-gray-200 p-6 flex flex-col gap-6 w-[70%]">

      <div className="flex gap-4 flex-row-reverse">
        <button
          onClick={submit}
          className="px-5 py-2 bg-indigo-600 hover:bg-indigo-500 rounded-md text-sm font-semibold"
        >
          Submit
        </button>

        <button
          onClick={runbutton}
          className="px-5 py-2 bg-indigo-600 hover:bg-indigo-500 rounded-md text-sm font-semibold"
        >
          Run
        </button>
      </div>

      {verdict && (
        <div className="text-emerald-400 font-semibold">
          Verdict: {verdict}
        </div>
      )}

      <Editor
        height="60vh"
        language="python"
        theme="vs-dark"
        onMount={mount}
      />

      <textarea
        placeholder="Enter input here..."
        onChange={(e) => setInput(e.target.value)}
        className="w-full h-32 bg-[#020617] text-gray-200 font-mono text-sm p-4 outline-none border border-gray-700 resize-none"
      />

      <textarea
        value={output}
        readOnly
        className="w-full h-32 bg-[#020617] text-gray-300 font-mono text-sm p-4 outline-none resize-none"
      />
    </div>
  );
}
