import React from "react";
import Panel from "./Panel.tsx";
import Button from "./Button.tsx";

const Form = ({ children }) => {
  return (
    <>
      <div>Form</div>
      <Panel title="welcome" children={children}>
        {" "}
        {children}
        <Button children={children}> Sign up</Button>
        <Button children={children}> Log in</Button>
      </Panel>
    </>
  );
};

export default Form;
