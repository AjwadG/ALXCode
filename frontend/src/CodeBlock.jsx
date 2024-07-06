const fixOverflow = {
  height: 'calc(100% - (48px))'
}

function CodeBlock() {
    return (
        <div className="w-full bg-second" style={fixOverflow}>
            CODE
        </div>
    )
}

export default CodeBlock;