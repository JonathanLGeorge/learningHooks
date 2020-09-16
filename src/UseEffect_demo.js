import React, { useState, useEffect } from "react";

/**
 * when we use a useEffect hook we are basically saying
 * we want to trigger some side effect when something happens
 *
 *
 * we are using json placholder
 */

function UseEffect_demo() {
  const [resourceType, setResource] = useState("post");
  const [items, setItems] = useState([]);

  /**
   * basic  uesEffect
   * everything inside the arrow function will trigger everytime
   * our aplication renders. So every time we click a button this
   * will console.log out "render"
   */
  //   useEffect(() => {
  //     console.log("render anytime anything changes");
  //   });
  /**
   * more offten then not we are only goin to want to do things
   * when maybe out component mounts or when a specific resource on our page changes
   *
   * to do that useEffect takes in a second parameter that is an array
   */
  //   console.log(
  //     "this will get called because its outside the useeffect and somethin changed"
  //   );
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
      .then((response) => response.json())
      .then((json) => setItems((oldArray) => [...oldArray, json]));
    // console.log(
    //   "only happens when I click a new button: [post, user, comments]"
    // );
  }, [resourceType]); //if the array is empty then it will only triger onMount

  return (
    <div>
      <button onClick={() => setResource("posts")}>POSTS</button>
      <button onClick={() => setResource("users")}>USERS</button>
      <button onClick={() => setResource("comments")}>COMMENTS</button>
      <h1>{resourceType}</h1>
      <div>
        {items.map((item) => {
          return <pre>{JSON.stringify(item)}</pre>;
        })}
      </div>
    </div>
  );
}

export default UseEffect_demo;
