import React, { useState, useEffect } from 'react';
import Editor, { DiffEditor, useMonaco, loader } from "@monaco-editor/react";
import Terminal from "./Terminal";
import Output from "./Output"
import { getFileExtension } from './utils';

const fixOverflow = {
  height: "calc(100% - (48px))",
};

function CodeBlock({ isTerminalVisible, isOutputVisible, activeFile, fileContent}) {

  const [language, setLanguage] = useState('plaintext');

  useEffect(() => {
    if (activeFile) {
      const fileExtension = getFileExtension(activeFile.name);

      const languageMap = {
        js: 'javascript',
        jsx: 'javascript',
        html: 'html',
        css: 'css',
        py: 'python',
        go: 'go',
      };

      const newLanguage = languageMap[fileExtension] || 'plaintext';
      setLanguage(newLanguage);
    } else {
      setLanguage('plaintext');
    }
  }, [activeFile]);


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
          
        />
      )}

      {isTerminalVisible && <Terminal />}
      {isOutputVisible && <Output />}
    </div>
  );
}

export default CodeBlock;
