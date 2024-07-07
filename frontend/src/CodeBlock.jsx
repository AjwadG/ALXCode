import Editor, { DiffEditor, useMonaco, loader } from '@monaco-editor/react';

const fixOverflow = {
  height: 'calc(100% - (48px))'
}

function CodeBlock() {
    return (
        <div className="w-full bg-second" style={fixOverflow}>
            <Editor height="100%" theme="vs-dark" defaultLanguage="javascript" defaultValue="// some comment" />
        </div>
    )
}

export default CodeBlock;