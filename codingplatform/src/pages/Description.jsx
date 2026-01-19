import React from "react";
import { PanelGroup, Panel, PanelResizeHandle } from "react-resizable-panels";

import Questiondescritpon from "../components/Questiondescritpon";
import CodeEditor from "../components/CodeEditor";

const Description = () => {
  return (
    <div className="h-screen bg-[#020617]">
      <PanelGroup direction="horizontal">

       
        <Panel defaultSize={35} minSize={20}>
          <div className="h-full">
            <Questiondescritpon />
          </div>
        </Panel>

        
        <PanelResizeHandle className="w-1 bg-gray-700 hover:bg-indigo-500 cursor-col-resize transition-colors" />

        
        <Panel defaultSize={65} minSize={40}>
          <div className="h-full">
            <CodeEditor />
          </div>
        </Panel>

      </PanelGroup>
    </div>
  );
};

export default Description;
