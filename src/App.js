import React from 'react';
import EditorBlock from './EditorBlock'
import './App.css';


function App() {

  const [HTMLvalue, setHTMLvalue] = React.useState('<p class="text-gray-500 italic">Submit to render..</p>')

  return (
    <div className="app flex py-6">

        <div className="flex-none w-1/2 p-4">
          <p className="pb-2">Editor:</p>
          <EditorBlock setHTMLvalue={setHTMLvalue}/>
        </div>


        <div className="w-1/2 flex-auto p-4">
          <p className="pb-2">Display as HTML from Editor:</p>
          <div className="display" dangerouslySetInnerHTML={{__html: HTMLvalue}}></div>
        </div>

    </div>
  );
}

export default App;
