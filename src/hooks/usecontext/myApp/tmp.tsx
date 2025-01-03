import React, { useContext, useState } from "react";
import ThemeContext from "./ThemeContext.jsx";
import Form from "./Form.tsx";
import "./MyApp.css";

const MyApp = () => {
  const [theme, setTheme] = useState("dark");
  return (
    <>
      <ThemeContext.Provider value={theme}>
        <Form children={undefined} />
        <label>
          <input
            type="checkbox"
            checked={theme === "dark"}
            onChange={(e) => {
              setTheme(e.target.checked ? "dark" : "light"); // Fixed typo
            }}
          />
          Use Dark Mode
        </label>
      </ThemeContext.Provider>
    </>
  );
};

export default MyApp;
