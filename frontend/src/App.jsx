import { useState, useEffect } from "react";
import TopBar from "./Topbar";
import Explorer from "./Explorer";
import FileNavigation from "./FileNavigation";
import CodeBlock from "./CodeBlock";
import Footer from "./Footer";
import { QueryClient, QueryClientProvider } from "react-query";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import { BASE_URL, NOT_FOUND } from "./components/constants";
import { buildStructure } from "./components/helpers";
import {
  handleNavFilesChange,
  handleSaveFileContent,
  handleRunButtonClick,
  handleTopBarSearch,
} from "./components/api";

const queryClient = new QueryClient();

const fixOverflow = {
  height: "calc(100% - 48px)",
};

function App() {
  const [isTerminalVisible, setIsTerminalVisible] = useState(false);
  const [isOutputVisible, setIsOutputVisible] = useState(false);
  const [openFiles, setOpenFiles] = useState([]);
  const [activeFile, setActiveFile] = useState(null);
  const [fileContent, setFileContent] = useState("");
  const [outPut, setOutput] = useState("");
  const [structure, setStructure] = useState(NOT_FOUND);
  const [newDirectory, setNewDirectory] = useState();

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
    width: "calc(100% - 22%)",
  };

  const handleSaveButtonClick = () => {
    if (activeFile) {
      handleSaveFileContent(activeFile);
    }
  };

  const navFilesChangeHandler = async (file, isAdd, refresh) => {
    await handleNavFilesChange(
      file,
      isAdd,
      refresh,
      openFiles,
      setOpenFiles,
      setActiveFile
    );
  };
  

  const runButtonClickHandler = async () => {
    await handleRunButtonClick(activeFile, setOutput, outPut);
  };

  const topBarSearchHandler = async (path) => {
    await handleTopBarSearch(
      path,
      setOpenFiles,
      setActiveFile,
      setFileContent,
      setStructure,
      setNewDirectory
    );
  };

  return (
    <QueryClientProvider client={queryClient}>
      <div className="w-full h-screen bg-blue-950 overflow-hidden">
        <TopBar
          onSaveButtonClick={handleSaveButtonClick}
          onRunButtonClick={runButtonClickHandler}
          onTopBarSearch={topBarSearchHandler}
        />
        <div className="flex w-full" style={fixOverflow}>
          <Explorer
            setNavFiles={navFilesChangeHandler}
            structure={structure}
            setStructure={setStructure}
          />
          <div style={CustomWidth}>
            <FileNavigation
              navFiles={openFiles}
              activeFile={activeFile}
              setNavFiles={navFilesChangeHandler}
            />
            <CodeBlock
              isTerminalVisible={isTerminalVisible}
              isOutputVisible={isOutputVisible}
              activeFile={activeFile}
              outPut={outPut}
              fileContent={fileContent}
              onSaveFileContent={handleSaveFileContent}
              newDirectory={newDirectory}
              setNewDirectory={setNewDirectory}
            />
          </div>
        </div>
        <Footer
          handleToggleTerminal={handleToggleTerminal}
          isTerminalVisible={isTerminalVisible}
          isOutputVisible={isOutputVisible}
          handleToggleOutput={handleToggleOutput}
        />
        <ToastContainer />
      </div>
    </QueryClientProvider>
  );
}

export default App;
