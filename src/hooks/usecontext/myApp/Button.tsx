import React, { useContext } from "react";
import ThemeContext from "./ThemeContext";

const Button = ({ children }) => {
  const theme = useContext(ThemeContext);
  const className = "button-" + theme;
  return (
    <>
      {/* <div>Button</div> */}
      <button className={className}>{children}</button>
    </>
  );
};

export default Button;

