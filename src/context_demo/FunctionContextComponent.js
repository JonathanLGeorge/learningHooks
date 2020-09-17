import React, { useContext } from "react";
import { ThemeContext } from "../UseContext_demo";

function FunctionContextComponent() {
  const darkTheme = useContext(ThemeContext);
  const themeStyles = {
    backgroundColor: dark ? "#333" : "#ccc",
    color: dark ? "#ccc" : "#333",
    padding: "2rem",
    margin: "2rem",
  };
  return <div style={themeStyles}>Function Theme</div>;
}

export default FunctionContextComponent;
//you can see this is wayyyyy simpler than the class... no complex nessting involved
