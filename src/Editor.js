import React from 'react';
import ReactQuill, { Quill } from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import mathquill4quill from 'mathquill4quill';
import 'mathquill4quill/mathquill4quill.css';


class Editor extends React.Component {

  reactQuill = React.createRef();

  /*
   * Quill modules to attach to editor
   * See https://quilljs.com/docs/modules/ for complete options
   */
  modules = {
    formula: true,
    toolbar: [
      [{ 'header': '1'}, 'bold', 'italic', 'underline', 'strike'],
      [{'list': 'ordered'}, {'list': 'bullet'}],
      ['link', 'image', 'formula']
    ],
    clipboard: {
      // toggle to add extra line breaks when pasting HTML:
      matchVisual: false,
    }
  }
  /*
   * Quill editor formats
   * See https://quilljs.com/docs/formats/
   */
  formats = [
    'header', 'bold', 'italic', 'underline', 'strike',
    'list', 'bullet', 'link', 'image', 'formula'
  ]

  constructor(props) {
    super(props)
    this.state = { HTMLvalue: '' }
  }

  onChange = (content, delta, source, editor) => {
    // console.log('content', content)  // same as editor.getHTML()
    // console.log('editor.getHTML()', editor.getHTML())
    // console.log('editor.getContents()', editor.getContents())
    // console.log('editor.getText()', editor.getText())
    this.setState({HTMLvalue: content})
  }

  componentDidMount() {
    const enableMathQuillFormulaAuthoring = mathquill4quill({ Quill });
    enableMathQuillFormulaAuthoring(this.reactQuill.current.editor,{
      operators: [["\\sqrt[n]{x}", "\\nthroot"], ["\\frac{x}{y}", "\\frac"]],
      displayHistory: true, // defaults to false
      historyCacheKey: '__mavka_quill_formula_history_cachekey_', // optional
      historySize: 3 // optional (defaults to 10)
      });

    }

  render () {
    return (
      <ReactQuill
        ref={this.reactQuill}
        theme="snow"
        onChange={this.onChange}
        value={this.state.HTMLvalue}
        modules={this.modules}
        formats={this.formats}
        bounds={'.app'}
        placeholder={this.props.placeholder}
       />
     )
  }
}

export default Editor
