import React, { useContext } from "react";
import ThemeContext from "./ThemeContext";

const Panel = ({ title, children }) => {
  const theme = useContext(ThemeContext);
  const className = "panel -" + theme;
  return (
    <>
      <div>Panel</div>
      <section className={className}>
        <h1>{title}</h1>
        {children}
      </section>
    </>
  );
};

export default Panel;
