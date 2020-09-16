import React, { useState, useMemo, useEffect } from "react";

function UseMemo_demo() {
  const [number, setnumer] = useState(0);
  const [dark, setDark] = useState(false);
  const doublenumber = useMemo(() => {
      return slowFunction(number);
  }, []);
  const themeStyle = useMemo(() =>{
      return {
    backgroundColor: dark ? "black" : "white",
    color: dark ? "white" : "black",
  }, [dark];

  return (
    <div>
      <input
        type="number"
        value={number}
        onChange={(e) => SVGAnimatedNumber(parseInt(e.target.value))}
      />
      <button onClick={() => setDark((prevDark) => !prevDark)}>
        Change Theme
      </button>
      <div style={themeStyle}>{doublenumber}</div>
    </div>
  );
  
  useEffect(() => {
      console.log('theme changed');

  }, [themeStyle])

export default UseMemo_demo;

function slowFunction(num){
    console.log("calling slow function")
    for(let i = 0; i <= 1000000000; i++){}
    return num * 2;
}

//referencial equality 
//when you compare two variables
