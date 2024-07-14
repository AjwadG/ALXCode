import Editor, { DiffEditor, useMonaco, loader } from "@monaco-editor/react";
import Terminal from "./Terminal";
import Output from "./Output"

const fixOverflow = {
  height: "calc(100% - (48px))",
};

function CodeBlock({ isTerminalVisible, isOutputVisible, activeFile, fileContent }) {
  return (
    <div className="w-full bg-second relative" style={fixOverflow}>
      {activeFile && (
        <Editor
          height="100%"
          theme="vs-dark"
          defaultLanguage="javascript"
          value={fileContent}
        />
      )}

      {isTerminalVisible && <Terminal />}
      {isOutputVisible && <Output />}
    </div>
  );
}

export default CodeBlock;
