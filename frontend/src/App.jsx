import { useState, useEffect } from "react";
import TopBar from "./Topbar";
import Explorer from "./Explorer";
import FileNavigation from "./FileNavigation";
import CodeBlock from "./CodeBlock";
import Footer from "./Footer";
import axios from "axios";

const BASE_URL = "http://localhost:3000";

const fixOverflow = {
  height: "calc(100% - 48px)",
};
function App() {
  const [isTerminalVisible, setIsTerminalVisible] = useState(false);
  const [isOutputVisible, setIsOutputVisible] = useState(false);

  const [openFiles, setOpenFiles] = useState([]);
  const [activeFile, setActiveFile] = useState(null);
  const [fileContent, setFileContent] = useState("");

  const handleNavFilesChange = async (file, isAdd, refresh) => {
    if (refresh) {
      setOpenFiles([...openFiles]);
      return;
    }
    if (isAdd) {
      try {
        const response = await axios.put(`${BASE_URL}/api/readFile`, {
          path: file.path,
        });
        if (response.data.succeed) {
          file.content = response.data.output;
        } else {
          alert(response.data.output);
        }
      } catch (err) {
        console.error(err);
      }
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

  const handleToggleOutput = () => {
    setIsOutputVisible(!isOutputVisible);
  };

  const CustomWidth = {
    width: "calc(100% - 22%)"
  }

  return (
    <div className="w-full h-screen bg-blue-950 overflow-hidden">
      <TopBar />
      <div className="flex w-full" style={fixOverflow}>
        <Explorer setNavFiles={handleNavFilesChange} />
        <div style={CustomWidth}>
          <FileNavigation 
            navFiles={openFiles}
            activeFile={activeFile}
            setNavFiles={handleNavFilesChange}
          />
          <CodeBlock
            isTerminalVisible={isTerminalVisible}
            isOutputVisible={isOutputVisible}
            activeFile={activeFile}
            fileContent={fileContent}
    
          />
        </div>
      </div>
      <Footer
        handleToggleTerminal={handleToggleTerminal}
        isTerminalVisible={isTerminalVisible}
        isOutputVisible={isOutputVisible}
        handleToggleOutput={handleToggleOutput}
      />
    </div>
  );
}

export default App;
export { BASE_URL };
