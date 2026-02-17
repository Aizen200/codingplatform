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

      // Backend returns: { output, status, time, memory }
      setOutput(data.output || "No output");

    } catch (error) {
      console.error("RUN ERROR:", error.response?.data || error.message);

      if (error.response) {
        setOutput(
          error.response.data?.message ||
          `Error ${error.response.status}`
        );
      } else {
        setOutput("Backend not reachable");
      }
    }
  }


  async function submit() {
    const code = coderef.current?.getValue();

    if (!code || code.trim() === "") {
      setOk({ verdict: "Write code before submitting" });
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

      if (error.response) {
        setOk({
          verdict:
            error.response.data?.message ||
            `Error ${error.response.status}`,
        });
      } else {
        setOk({ verdict: "Backend not reachable" });
      }
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
