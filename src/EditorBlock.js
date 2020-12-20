import React from 'react';
import Editor from './Editor'

const EditorBlock = (props) => {

  const editorRef = React.useRef(null);

  const submit = () => {
    let editor = editorRef.current.reactQuill.current.editor
    props.setHTMLvalue(editorRef.current.state.HTMLvalue)
  }

  return (
    <div>
      <Editor ref={ editorRef } placeholder={ 'Write somethign with formulas...' }/>
      <button onClick={ submit } className="my-3 p-2 w-40 flex items-center justify-center rounded-md bg-black text-white">Submit</button>
    </div>
  )
}

export default EditorBlock
