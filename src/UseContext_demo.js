import React, { useSate } from "react";
import ClassContextComponent from "./context_demo/ClassContextComponent";
import FunctionContextComponent from "./context_demo/FunctionContextComponent";

function UseContext_demo() {
  //simple state of ture or false
  const [darkTheme, setDarkTheme] = useState(true);

  //function to toogle between enabled disabled
  function toggleTheme() {
    setDarkTheme((prevDarkTheme) => !prevDarkTheme);
  }

  return (
    <div>
      <ThemeContext.Provider value={darkTheme}>
        {/*button that will toggle the code (light and dark theme) */}
        <button onClick={toggleTheme}>Toggle theme</button>
        {/* function and class will do the same, just different examples*/}
        <FunctionContextComponent />
        <ClassContextComponent />
      </ThemeContext.Provider>
    </div>
  );
}
//we are creating a context and exporting it so we can use it in the rest of our application
export const ThemeContext = React.createContext();
export default UseContext_demo;

/**
 * when we are using context its brolemn into two different section
 * it has a content provider, which is what you want to wrap all of code that
 * needs access your the info in the context.
 * it will have a single prop called value that will be set to whatever your context is
 * so in this example ThemeContext.Provider value={darkTheme}
 *
 * important note
 * everything inside our provider, which is out button, function and class component in this example
 * as well aas all their children and their children.... so on...
 * all have acsess to the context being passed. so you dont need to pass props
 * into all of them. NICE!!! its like a global state
 *
 *
 */
