import React from "react";

import Questiondescritpon from "../components/Questiondescritpon";
import CodeEditor from "../components/CodeEditor";

const Description = () => {
  return (
    <div className="flex flex-row h-screen justify-evenly">
      <Questiondescritpon />
      <CodeEditor />
    </div>
  );
};

export default Description;
