import MDEditor from '@uiw/react-md-editor';
import { useState } from 'react';

const MdEditor = () => {
    const [value, setValue] = useState("**Hello world!!!**");
    return (
        <div className="container">
          <MDEditor
            value={value}
            onChange={setValue}
          />
          <MDEditor.Markdown source={value} />
        </div>
      );
}

export default MdEditor;
