import React, { useState, useEffect } from "react";

export default function Counter() {
  const [clickCount, setClickCount] = useState(0);

  /**
Write an event handler named increment(). Define this function so that it calls setClickCount() with a state setter callback function, adding 1 to the previous value of
clickCount.
 */
  const increment = () => setClickCount((prev) => prev + 1);

  /**
 Import the useEffect() hook and call it with an effect that adds an event listener for 'mousedown' events on the document object. When a "mousedown" event occurs anywhere on the document, we want our increment() event handler to be called.

 */
  useEffect(() => {
    document.addEventListener("mousedown", increment);

    /*
    Each time that our component renders, our effect is called, adding another event listener. With just a few clicks and rerenders, we have attached a lot of event listeners to the DOM! We need to clean up after ourselves!

Update our effect so that it returns a cleanup function that will remove our last event listener from the DOM.
     */
    return () => {
      document.removeEventListener("mousedown", increment);
    };
  });

  return <h1>Document Clicks: {clickCount}</h1>;
}
