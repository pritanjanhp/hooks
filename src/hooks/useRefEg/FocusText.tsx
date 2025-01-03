// clicking the button will focus the input:
import React from "react";
import { useRef } from "react";

const FocusText = () => {
  // const inputRef = useRef(null);
  
  // const inputRef = useRef<HTMLInputElement>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  let handleClick = () => {
    inputRef.current.focus();
  };

  return (
    <>
      <h3>FocusText</h3>
      <input ref={inputRef} />
      <button onClick={handleClick}>Focus the input</button>
    </>
  );
};

export default FocusText;



