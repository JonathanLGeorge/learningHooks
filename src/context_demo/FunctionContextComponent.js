import React, { useContext } from "react";
import { ThemeContext } from "../UseContext_demo";
import { useTheme, useThemeUpdate } from "./ThemeContext";
function FunctionContextComponent() {
  //const darkTheme = useContext(ThemeContext);
  const darkTheme = useTheme();
  const toggleTheme = useThemeUpdate();
  const themeStyles = {
    backgroundColor: dark ? "#333" : "#ccc",
    color: dark ? "#ccc" : "#333",
    padding: "2rem",
    margin: "2rem",
  };
  return (
    <>
      <button onClick={toggleTheme}>Toggle theme</button>
      <div style={themeStyles}>Function Theme</div>
    </>
  );
}

export default FunctionContextComponent;
//you can see this is wayyyyy simpler than the class... no complex nessting involved
