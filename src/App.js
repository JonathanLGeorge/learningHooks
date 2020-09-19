import React, { useState } from "react";

import "./App.css";
import FunctionContextComponent from "./context_demo/FunctionContextComponent";
import { ThemeProvider } from "./context_demo/ThemeContext";
import Draggable from "./draggable/Draggable";
import SongList from "./forms/SongList";
import UseEffect_demo from "./UseEffect_demo";
import UseRef_demo from "./UseRef_demo";

function App() {
  // [current state, update current state]
  const [counter, setCounter] = useState(0);
  /**
   * useState can take in a function and it can take in a simple value.
   * lets say that we pass in a function useState(countInitial()) that does a console log and returns 4
   * you are going to see that it is run every time the state is updated
   *
   * but if you use a () =>
   * useState(() => countInitial())
   * you will notice it will only run the first time the component renders
   *
   *
   * function countInitial(){
   *  console.log('run funtion')
   * return 4
   * }
   *
   *
   * you can also pass in an object into useState
   * but, when you do this you nee to make sure that you
   * update and pass in the previous items when you updat anything in
   * the useState you made
   *
   * ex:
   * const [exampleSate, setExampleSate] = useState({count: 50, theme: 'red'})
   * const count = exampleSate.count
   * const theme = exampleSate.theme
   *
   * function doSomething(){
   *  setExampleState(prevState = {
   *    return (...prevState, count: prevState.count -1)
   *  })
   * }
   *
   * if you didnt do this then you will see if we did it like in previous examples
   * out state will not carry over previous items
   */

  function decrementCount() {
    setCounter((prevCount) => prevCount - 1);
  }

  function incrementCount() {
    setCounter((prevCount) => prevCount + 1);

    //this is wrong way it these will override eachother
    //setCounter(counter + 1);
    //setCounter(counter + 1);
  }
  return (
    <>
      <button onClick={decrementCount}>-</button>
      <span>{counter}</span>
      <button onClick={incrementCount}>+</button>
      <UseEffect_demo />
      <UseRef_demo />

      {/*notes on context
      we have our theme provider  that wraps all the logic for handling /updating
      our state and pushing out the different values to all of our children 
       look in themeContect component for more notes on this*/}
      <ThemeProvider>
        <FunctionContextComponent />
      </ThemeProvider>
      <Draggable />
      <br />
      <SongList />
    </>
  );
}

export default App;
