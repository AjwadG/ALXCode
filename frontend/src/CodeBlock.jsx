import Editor, { DiffEditor, useMonaco, loader } from '@monaco-editor/react';
import Terminal from './Terminal';

const fixOverflow = {
  height: 'calc(100% - (48px))'
}

function CodeBlock({ isTerminalVisible }) {
    return (
        <div className="w-full bg-second relative" style={fixOverflow}>
            <Editor height="100%" theme="vs-dark" defaultLanguage="javascript" defaultValue="// some comment" />
            {isTerminalVisible && <Terminal />}
        </div>
        
    )
}

export default CodeBlock;