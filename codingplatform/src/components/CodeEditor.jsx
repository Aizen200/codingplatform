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
  const userID = localStorage.getItem("userId");

  function mount(editor) {
    coderef.current = editor;
  }

  async function runbutton() {
    const code = coderef.current.getValue();
    setOutput("Running...");

    try {
      const response = await api.post("/submission/run", {
        code: code,
        input: input,
      });

      const data = response.data;

      // ✅ FIXED HERE (removed .run)
      setOutput(
        data.stderr
          ? data.stderr
          : data.stdout
          ? data.stdout
          : "No output"
      );
    } catch (error) {
      console.error(error);
      setOutput("Error while executing code");
    }
  }

  async function submit() {
    const code = coderef.current.getValue();

    try {
      const response = await api.post("/submission/submit", {
        code,
        questionId,
        userId: userID,
      });

      setOk(response.data);
    } catch (err) {
      console.error(err);
      setOk({ verdict: "Submission failed" });
    }
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

      {ok && (
        <div className="text-green-400 font-semibold">
          Verdict: {ok.verdict}

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

      <div className="border border-gray-700 rounded-md overflow-hidden">
        <Editor
          height="60vh"
          language="python"
          theme="vs-dark"
          onMount={mount}
        />
      </div>

      <div className="border border-gray-700 rounded-md">
        <div className="flex border-b border-gray-700 text-sm">
          <div className="px-4 py-2 text-indigo-400 border-b-2 border-indigo-500">
            INPUT
          </div>
        </div>

        <textarea
          placeholder="Enter input here..."
          onChange={(e) => setInput(e.target.value)}
          className="w-full h-32 bg-[#020617] text-gray-200 font-mono text-sm p-4 outline-none border-b border-gray-700 resize-none"
        />

        <textarea
          value={output}
          readOnly
          className="w-full h-32 bg-[#020617] text-gray-300 font-mono text-sm p-4 outline-none resize-none"
        />
      </div>
    </div>
  );
}
