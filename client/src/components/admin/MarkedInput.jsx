import MarkdownEditor from '@uiw/react-markdown-editor';
import { useState } from 'react';

const mdStr = `# This is a H1  \n## This is a H2  \n###### This is a H6`;
const MarkedInput = ({ name, labelText, defaultValue }) => {
  const [markdown, setMarkdown] = useState(defaultValue || mdStr);
  return (
    <div className="form-row" data-color-mode="light">
      <label htmlFor="name" className="form-label">
        {labelText || name}
      </label>
      <MarkdownEditor
        id={name}
        value={markdown}
        height="300px"
        enableScroll={false}
        onChange={(value, viewUpdate) => setMarkdown(value)}
      />
    </div>
  );
};
export default MarkedInput;
