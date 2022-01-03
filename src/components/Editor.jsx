import React from 'react';

const Editor = ({inputText, onChange}) => {

    return(
        <div className="editor">
            <h2>Editor</h2>
            <textarea id="editor" className="textarea" value={inputText} onChange={onChange} />
        </div>
    )
}

export default Editor;