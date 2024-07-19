import React, { useState, useEffect, useCallback } from "react";
import Editor, { DiffEditor, useMonaco, loader } from "@monaco-editor/react";
import Terminal from "./Terminal";
import Output from "./Output";
import { getFileExtension } from "./utils";

const fixOverflow = {
  height: "calc(100% - (48px))",
};

function CodeBlock({
  isTerminalVisible,
  isOutputVisible,
  activeFile,
  fileContent,
  onSaveFileContent,
  outPut,
  newDirectory,
  setNewDirectory,
}) {
  const [language, setLanguage] = useState("plaintext");
  const [content, setContent] = useState(fileContent);

  useEffect(() => {
    if (activeFile) {
      const fileExtension = getFileExtension(activeFile.name);

      const languageMap = {
        js: "javascript",
        jsx: "javascript",
        html: "html",
        css: "css",
        py: "python",
        go: "go",
      };

      const newLanguage = languageMap[fileExtension] || "plaintext";
      setLanguage(newLanguage);
    } else {
      setLanguage("plaintext");
    }
  }, [activeFile]);

  const handleEditorChange = (value) => {
    activeFile.content = value;
    fileContent = value;
    setContent(value);
  };

  const handleKeyDown = useCallback(
    (event) => {
      if ((event.ctrlKey || event.metaKey) && event.key === "s") {
        event.preventDefault();
        if (activeFile) {
          onSaveFileContent(activeFile, content);
        }
      }
    },
    [activeFile, content, onSaveFileContent]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]);

  return (
    <div className="w-full bg-second relative" style={fixOverflow}>
      {activeFile && (
        <Editor
          key={language}
          height="100%"
          width="100%"
          defaultLanguage={language}
          theme="vs-dark"
          value={fileContent}
          onChange={handleEditorChange}
        />
      )}

      {isTerminalVisible && (
        <Terminal
          newDirectory={newDirectory}
          setNewDirectory={setNewDirectory}
        />
      )}
      {isOutputVisible && <Output outPut={outPut} />}
    </div>
  );
}

export default CodeBlock;
