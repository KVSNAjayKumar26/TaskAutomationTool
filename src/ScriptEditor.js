import { Editor } from '@monaco-editor/react'
import React from 'react'

const ScriptEditor = ({ script, setScript }) => {
  return (
    <div style={{ marginTop: '20px '}}>
        <Editor
        height="400px"
        defaultLanguage='javascript'
        value={script}
        onChange={(value) => setScript(value)}
        theme='vs-dark'
        />
    </div>
  );
};

export default ScriptEditor;