// import React from "react";
import "./Upload.css";

import React, { useState } from 'react';
import axios from 'axios';

function Upload() {
  const [file, setFile] = useState(null);
  const [text, setText] = useState('');

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async () => {
    if (!file) {
      alert('Please select a file');
      return;
    }

    // console.log(file);
    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await axios.post('http://localhost:8080/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      setText(response.data.text);
    } catch (error) {
      console.error('Error uploading file:', error);
    }
  };

  return (
    <div className="form-container">
      <h1>Langchain File Upload</h1>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleSubmit}>Upload & Extract Text</button>
      {text && <div>Extracted Text: {text}</div>}
    </div>
  );
}

// export default App;

export default Upload;
