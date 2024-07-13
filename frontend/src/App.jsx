import { useState, useEffect } from "react";
import TopBar from "./Topbar";
import Explorer from "./Explorer";
import FileNavigation from "./FileNavigation";
import CodeBlock from "./CodeBlock";
import Footer from "./Footer";

const fixOverflow = {
  height: "calc(100% - 48px)",
};
function App() {
  const [isTerminalVisible, setIsTerminalVisible] = useState(false);

  const [openFiles, setOpenFiles] = useState([]);
  const [activeFile, setActiveFile] = useState(null);
  const [fileContent, setFileContent] = useState("");

  const handleNavFilesChange = (file, isAdd, refresh) => {
    if (refresh) {
      setOpenFiles([...openFiles]);
      return;
    }
    if (isAdd) {
      if (!openFiles.includes(file)) {
        setOpenFiles([...openFiles, file]);
      }
      setActiveFile(file);
    } else {
      const newOpenFiles = openFiles.filter((f) => f.id !== file.id);
      if (newOpenFiles.length !== 0) {
        setActiveFile(newOpenFiles[newOpenFiles.length - 1]);
      } else {
        setActiveFile(null);
      }
      setOpenFiles(newOpenFiles);
    }
  };

  useEffect(() => {
    if (activeFile) {
      setFileContent(activeFile.content);
    }
  }, [activeFile]);

  const handleToggleTerminal = () => {
    setIsTerminalVisible(!isTerminalVisible);
  };

  return (
    <div className="w-full h-screen bg-blue-950">
      <TopBar />
      <div className="flex w-full" style={fixOverflow}>
        <Explorer setNavFiles={handleNavFilesChange} />
        <div className="w-full">
          <FileNavigation
            navFiles={openFiles}
            activeFile={activeFile}
            setNavFiles={handleNavFilesChange}
          />
          <CodeBlock
            isTerminalVisible={isTerminalVisible}
            activeFile={activeFile}
            fileContent={fileContent}
          />
        </div>
      </div>
      <Footer
        handleToggleTerminal={handleToggleTerminal}
        isTerminalVisible={isTerminalVisible}
      />
    </div>
  );
}

export default App;
