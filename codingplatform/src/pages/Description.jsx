import React from "react";
import { useParams } from "react-router-dom";

import Questiondescritpon from "../components/Questiondescritpon";
import CodeEditor from "../components/CodeEditor";

const Description = () => {
  const {id}=useParams()
  return (
    <div className="flex flex-row h-screen justify-evenly">
      <Questiondescritpon />
      <CodeEditor />
    </div>
  );
};

export default Description;
