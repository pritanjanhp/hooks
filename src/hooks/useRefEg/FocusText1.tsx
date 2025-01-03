// parent component manipulate the DOM inside of your component. For example, maybe you’re writing a MyInput component, but you want the parent to be able to focus the input (which the parent has no access to). You can create a ref in the parent and pass the ref as prop to the child component
import React, { useRef } from "react";
import MyInput from "./MyInput";

const FocusText1 = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  // const inputRef = useRef(null);
  // const inputRef = useRef(HTMLVideoElement)(null);

  const handleClick = () => {
    if (inputRef.current !== null) {
      inputRef.current.focus();
    }
  };

  return (
    <>
      <h3>FocusText1</h3>
      <MyInput ref={inputRef} />
      <button onClick={handleClick}>focus on the input</button>
    </>
  );
};

export default FocusText1;
