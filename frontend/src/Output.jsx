import React from "react";
import { ResizableBox } from "react-resizable";
import "react-resizable/css/styles.css";
import "./assets/css/index.css";

function Output({ outPut }) {
  return (
    <ResizableBox
      className="resizable-box overflow-auto p-4 absolute bottom-2 w-full bg-second border-t-2 border-slate-600 text-white"
      width={Infinity}
      height={250}
      minConstraints={[Infinity, 50]}
      maxConstraints={[Infinity, 500]}
      axis="y"
      handle={<span className="custom-vertical-handle" />}
      resizeHandles={["n"]}
    >
      <pre className="output">{outPut}</pre>
    </ResizableBox>
  );
}

export default Output;
