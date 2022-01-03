import React from 'react';
import { marked } from "marked";

marked.setOptions({
    breaks: true,
  });

const Previewer = ({ orginalText }) => {


    const getMarkdownText = () => {
        const rawMarkup = marked.parse(orginalText);
        return { __html: rawMarkup}
    }
    return(
        <div className='previewer'>
            <h2>Previewer</h2>
            <div id="preview" className="markdown"  dangerouslySetInnerHTML={getMarkdownText()}>
            </div>
        </div>
    )
}

export default Previewer;