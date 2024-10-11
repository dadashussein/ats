import React, { useState } from "react";

const TextArea = ({ maxWords = 200000, value, Id, name, placeholder, className, ...props }) => {
  // const maxWords = 200;

  const charactersLeft = maxWords - (value ? value.length : 0);
  return (
    <React.Fragment>
      <textarea
        {...props}
        id={Id}
        name={name}
        value={value}
        placeholder={placeholder}
        // onChange={handleTextChange}
        maxLength={maxWords}
        className={`w-full
        resize-none
        min-h-[150px]
      focus:outline-none
      focus:ring-0
      focus:border-black
         items-stretch self-stretch outline-none border
          border-[#D2D6DB] shadow-sm
           bg-white flex justify-between gap-2 px-3.5 py-2.5 rounded-md border-solid
            max-md:max-w-full max-md:flex-wrap ${className}`}
      ></textarea>
   
    </React.Fragment>
  );
};

export default TextArea;