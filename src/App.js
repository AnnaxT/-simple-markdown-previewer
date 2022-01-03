import React, { useState }  from 'react';
import Previewer from './components/Previewer';
import Editor from './components/Editor';


const placeholder = 
`
# Markdown Previewer
Hi, I'm [Anna](https://annaxt.github.io), welcome to my Markdown Previewer! 
The project was built for learning purposes as a part of **Front End Libraries Certification** by [freeCodeCamp](https://www.freecodecamp.org/).

## Why Markdown?
-------------

It's easy.  It's not overly bloated, unlike \`HTML\`.  Also, as the creator of [markdown](https://daringfireball.net/projects/markdown/) says,
> The overriding design goal for Markdown's
> formatting syntax is to make it as readable
> as possible. The idea is that a
> Markdown-formatted document should be
> publishable as-is, as plain text, without
> looking like it's been marked up with tags
> or formatting instructions.

## How To Use It?
-------------------

1. Type in stuff on the left.
1. See the live updates on the right.


\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`
![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)

`

function App() {

  const [inputText, setInputText] = useState(placeholder);

  // Handle textarea input from Editor component
  const handleChange = (e) => {
    setInputText(e.target.value);
  };

  return (
    <div className="App">
        <Editor onChange={handleChange} inputText={inputText}/>
        <Previewer orginalText={inputText} test="test" />
    </div>
  );
}

export default App;
