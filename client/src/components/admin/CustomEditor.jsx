/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useCallback, useMemo, useRef, useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const CustomEditor = ({ name, labelText, defaultValue, setEditorContent }) => {
  const [value, setValue] = useState('');
  const quill = useRef();

  const imageHandler = useCallback(() => {
    const input = document.createElement('input');
    input.setAttribute('type', 'file');
    input.setAttribute('accept', 'image/*');
    input.click();
    input.onchange = async () => {
      if (input !== null && input.files !== null) {
        const file = input.files[0];
        const formData = new FormData();
        formData.append('file', file);
        formData.append('upload_preset', 'ml_default');
        const res = await fetch(
          'https://api.cloudinary.com/v1_1/djnmieevk/image/upload',
          {
            method: 'POST',
            body: formData,
          }
        );
        const data = await res.json();

        if (quill.current) {
          const editor = quill.current.getEditor();
          const range = editor.getSelection();
          range && editor.insertEmbed(range.index, 'image', data.url);
        }
      }
    };
  }, []);

  const videoHandler = useCallback(() => {
    const input = document.createElement('input');
    input.setAttribute('type', 'file');
    input.setAttribute('accept', 'video/*');
    input.click();
    input.onchange = async () => {
      if (input !== null && input.files !== null) {
        const file = input.files[0];
        const formData = new FormData();
        formData.append('file', file);
        formData.append('upload_preset', 'ml_default');
        const res = await fetch(
          'https://api.cloudinary.com/v1_1/djnmieevk/video/upload',
          {
            method: 'POST',
            body: formData,
          }
        );
        const data = await res.json();

        if (quill.current) {
          const editor = quill.current.getEditor();
          const range = editor.getSelection();
          range && editor.insertEmbed(range.index, 'video', data.url);
        }
      }
    };
  }, []);

  const modules = {
    toolbar: {
      container: [
        [{ header: [1, 2, 3, 4, false] }],
        ['bold', 'italic', 'underline', 'blockquote'],
        [{ color: [] }],
        [
          { list: 'ordered' },
          { list: 'bullet' },
          { indent: '-1' },
          { indent: '+1' },
        ],
        ['link', 'image', 'video'],
        ['clean'],
      ],
      handlers: {
        image: imageHandler,
        video: videoHandler,
      },
    },
    clipboard: {
      matchVisual: true,
    },
  };

  const formats = [
    'header',
    'bold',
    'italic',
    'underline',
    'strike',
    'blockquote',
    'list',
    'bullet',
    'indent',
    'link',
    'image',
    'video',
    'color',
    'clean',
  ];

  return (
    <div className="form-row">
      <label htmlFor="name" className="form-label">
        {labelText || name}
      </label>
      <ReactQuill
        ref={(el) => (quill.current = el)}
        theme="snow"
        value={value}
        formats={formats}
        modules={modules}
        onChange={(value) => {
          setValue(value);
          setEditorContent(value);
        }}
      />
    </div>
  );
};
export default CustomEditor;
