/**
 * Control When Effects Are Called

The useEffect() function calls its first argument (the effect) after each time a component renders. We’ve learned how to return a cleanup function so that we don’t create performance issues and other bugs, but sometimes we want to skip calling our effect on re-renders altogether.

It is common, when defining function components, to run an effect only when the component mounts (renders the first time), but not when the component re-renders. The Effect Hook makes this very easy for us to do! If we want to only call our effect after the first render, we pass an empty array to useEffect() as the second argument. This second argument is called the dependency array.

The dependency array is used to tell the useEffect() method when to call our effect and when to skip it. Our effect is always called after the first render but only called again if something in our dependency array has changed values between renders.

We will continue to learn more about this second argument over the next few exercises, but for now, we’ll focus on using an empty dependency array to call an effect when a component first mounts, and if a cleanup function is returned by our effect, calling that when the compound unmounts.

useEffect(() => {
  alert("component rendered for the first time");
  return () => {
    alert("component is being removed from the DOM");
  };
}, []); 

Without passing an empty array as the second argument to the useEffect() above, those alerts would be displayed before and after every render of our component, which is clearly not when those messages are meant to be displayed. Simply, passing [] to the useEffect() function is enough to configure when the effect and cleanup functions are called!

 */

import React, { useState, useEffect } from "react";

export default function Timer() {
  const [time, setTime] = useState(0);
  const [name, setName] = useState("");

  useEffect(() => {
    const intervalId = setInterval(() => {
      ////setInterval(function(){ alert("Hello"); }, 3000);
      setTime((prev) => prev + 1); //setTime() - our state setter function
      //state setter callback function - used by setTime() because we want to calculate
      //the next value of time based on the previous value of time.
    }, 1000);

    return () => {
      /*
        By default, the Effect Hook calls our effect after every render.
        Our effect is creating a new interval that updates the value of time each second.
        We keep adding more and more intervals that keep updating the same time variable.
        We need to clean up our old intervals before adding new ones!
        In your effect, use the return keyword to return a cleanup function.
        Our cleanup function will use the clearInterval() function.
        
        solves our way-too-many-intervals-all-updating-the-same-variable bug! 
        */
      clearInterval(intervalId);
    };
    /*
    We want that interval to start ticking away after our first render
    and we want it to be cleaned up after the final render. To accomplish this, use an empty dependency array!
    */
  }, []);

  //event handler with the input’s onChange event listener attribute.
  const handleChange = ({ target }) => setName(target.value);

  return (
    <>
      <h1>Time: {time}</h1>
      {/*text input element so that the user can type a message while the timer is counting up.  */}
      <input value={name} onChange={handleChange} type="text" />
    </>
  );
}

/**
 * Let’s get started by using four functions to advance the number stored by time each second:

    useEffect() - the Effect Hook, imported from the ‘react’ library
    setInterval() - W3Schools Documentation
    setTime() - our state setter function
    state setter callback function - used by setTime() because we want to calculate the next value of time based on the previous value of time

Add an effect that uses the setInterval() function to call setTime() every second (or 1000 ms).




We need to clean up our old intervals before adding new ones!

In your effect, use the return keyword to return a cleanup function. Our cleanup function will use the clearInterval() function.
 


create a new text input element so that the user can type a message while the timer is counting up.

    Add an input tag to our JSX whose value is managed by a current state variable called name with a state setter called setName().
    Define an event handler named handleChange() and call that event handler with the input’s onChange event listener attribute.


    Uh oh. More bugs. Did you notice it yet? Type your full name in the text input field. See how the timer seems to stop counting while you are typing? That’s not what we want!

What is going on here? We are creating a new interval after each render, that interval will call our state setter to update time exactly one second after each render. When we type in the input field, our component keeps re-rendering, cleaning up old intervals, and starting new ones… but our state setter never gets called until one second after we are done typing!

Let’s fix this once and for all! We really want to use a single interval. We want that interval to start ticking away after our first render and we want it to be cleaned up after the final render. To accomplish this, use an empty dependency array!

*/
