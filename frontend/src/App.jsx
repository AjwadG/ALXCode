import TopBar from "./Topbar"
import Explorer from "./Explorer"
import FileNavigation from "./FileNavigation"
import CodeBlock from "./CodeBlock"
import Footer from "./Footer"

const fixOverflow = {
  height: 'calc(100% - 48px)'
}
function App() {
  return (
    <div className="w-full h-screen bg-blue-950">
      <TopBar />
      <div className="flex w-full" style={fixOverflow}>
        <Explorer/>
        <div className="w-full">
            <FileNavigation/>
            <CodeBlock/>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default App