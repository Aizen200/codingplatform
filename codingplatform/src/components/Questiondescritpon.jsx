import React from "react";

const Questiondescritpon = () => {
  return (
    <div className="h-full overflow-y-auto  bg-[#020617] text-gray-200 p-6 static w-[30%]">
      
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">
          Question heading
        </h2>

        <h5 className="text-sm text-emerald-400 font-medium">
          question difficuilty
        </h5>

        <p className="text-sm leading-relaxed text-gray-300">
          question description
        </p>

        <div>
          <h4 className="font-semibold mb-1">Constraints</h4>
          <p className="text-sm text-gray-300">
            constraints
          </p>
        </div>

        <div>
          <h4 className="font-semibold mb-1">Input</h4>
          <p className="text-sm text-gray-300">
            input
          </p>
        </div>

        <div>
          <h4 className="font-semibold mb-1">Output</h4>
          <p className="text-sm text-gray-300">
            output
          </p>
        </div>
      </div>

    </div>
  );
};

export default Questiondescritpon;
