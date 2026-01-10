import Editor from "@monaco-editor/react";
import { useState } from "react";

export default function CodeEditor() {
  const [code, setCode] = useState("// type here");

  return (
    <div style={{ border: "1px solid #333" }}>
      <Editor
        height="400px"
        language="javascript"
        theme="vs-dark"
        value={code}
        onChange={(value) => setCode(value)}
      />
    </div>
  );
}
