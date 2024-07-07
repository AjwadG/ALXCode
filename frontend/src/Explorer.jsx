import FileExplorer from "./components/FileExplorer";

const SearchInput = {
    border: "1px solid #4f5966",
    fontSize: "12px",
    borderRadius: "3px",
};


function Explorer() {
    return (
        <div className="bg-main w-1/4 border-r-2 p-2 border-t-2 border-slate-700">
            <input type="search" placeholder="Ex: app.js" className="w-full bg-transparent p-1 text-white outline-none text-sm"  style={SearchInput}/>
            <FileExplorer />
        </div>
    );
}

export default Explorer;