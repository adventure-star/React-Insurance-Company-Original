import React, { useState, useRef } from "react";

const ImageUpload = (props) => {
  const inputFile = useRef(null);

  const handleFileUpload = e => {
    const { files } = e.target;
    if (files && files.length) {
      props.onChange(files[0]);
    }
  };

  const onButtonClick = () => {
    inputFile.current.click();
  };

  return (
    <div>
      <input
        style={{ display: "none" }}
        // accept=".zip,.rar"
        ref={inputFile}
        onChange={handleFileUpload}
        type="file"
      />
      <div className={ props.classname} style={{display:"inline-block"}} onClick={onButtonClick}>
        { props.children }
      </div>
    </div>
  );
};

export default ImageUpload;
