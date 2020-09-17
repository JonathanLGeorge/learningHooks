import React, { useState, useEffect, useRef } from "react";

function UseRef_demo() {
  const [name, setName] = useState("");
  //const [renderCount, setRenderCount] = useState(0);
  const renderCount = useRef(1);
  const inputRef = useRef();
  const prevName = useRef();

  useEffect(() => {
    //infinit loop
    //setRenderCount((prevRendCount) => prevRendCount + 1);
    renderCount.current = renderCount.current + 1;

    prevName.current = name;
  }, [name]);
  function focus() {
    console.log(inputRef.current);
    inputRef.current.focus();

    //this doesnt update state and you can tell because the Myn name area doesnt update.
    //dont do this. always use state or props
    inputRef.current.value = "Some value";
    //also do not: appendChild in ref
  }
  return (
    <div>
      {/*<input value={name} onChange={(e) => setName(e.target.value)} />*/}
      <input
        ref={inputRef}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <div>
        My name is {name}. I changed it from "{prevName.current}".
      </div>
      <div>I rendered {renderCount.current} times</div>
      <button onClick={focus}>focus</button>
    </div>
  );
}

export default UseRef_demo;

//keep in mide that when we set state we casue the component to re render
// so if you look at the coment on infinit loop, it will just never stop re rendering
//what we are trying to do is set the render count. but we cant do this with state
//in this way because of this infinit loop
//so we use refs. it presists in between renders of our component
//a ref will not cause a component to be updated when it gets changed though

//refs only return a single object. and this object  has a property called current
// current: 0

/**
 * biggest use of useRef is to refrence elements inside html
 * each element has a ref atribute, see our inputRef for example
 *
 *
 * a great use for refs is to store the previous values for your state
 *which is great again because it doesnt cause a re render
 ou need to useRefs if you want to presist values between renders
 */
