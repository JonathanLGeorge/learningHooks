/**
 * Fetch Data

When building software, we often start with default behaviors then modify them to improve performance. We’ve learned that the default behavior of the Effect Hook is to call the effect function after every single render. Next, we learned that we can pass an empty array as the second argument for useEffect() if we only want our effect to be called after the component’s first render. In this exercise, we’ll learn to use the dependency array to further configure exactly when we want our effect to be called!

When our effect is responsible for fetching data from a server, we pay extra close attention to when our effect is called. Unnecessary round trips back and forth between our React components and the server can be costly in terms of:

    Processing
    Performance
    Data usage for mobile users
    API service fees

When the data that our components need to render doesn’t change, we can pass an empty dependency array, so that the data is fetched after the first render. When the response is received from the server, we can use a state setter from the State Hook to store the data from the server’s response in our local component state for future renders. Using the State Hook and the Effect Hook together in this way is a powerful pattern that saves our components from unnecessarily fetching new data after every render!

An empty dependency array signals to the Effect Hook that our effect never needs to be re-run, that it doesn’t depend on anything. Specifying zero dependencies means that the result of running that effect won’t change and calling our effect once is enough.

A dependency array that is not empty signals to the Effect Hook that it can skip calling our effect after re-renders unless the value of one of the variables in our dependency array has changed. If the value of a dependency has changed, then the Effect Hook will call our effect again!

Here’s a nice example from the official React docs: https://reactjs.org/docs/hooks-effect.html#tip-optimizing-performance-by-skipping-effects

useEffect(() => {
  document.title = `You clicked ${count} times`;
}, [count]); // Only re-run the effect if the value stored by count changes
 */

import React, { useState, useEffect } from "react";
import { get } from "./mockBackend/fetch";

export default function Forecast() {
  //const [data, setData] = useState();
  const [data, setData] = useState(null);
  const [notes, setNotes] = useState({});
  const [forecastType, setForecastType] = useState("/daily");
  /*
  useEffect(() => {
    alert("Requested data from server...");
    get("/daily").then((response) => {
      alert("Response: " + JSON.stringify(response, "", 2));
    });
  });
  */
  useEffect(() => {
    alert("Requested data from server...");
    get(forecastType).then((response) => {
      alert("Response: " + JSON.stringify(response, "", 2));
      setData(response.data);
    });
    /*
    Each time that we type in an input field, the component re-renders to show the new value of that field. 
    Even though we don’t need any new data from the backend, our component is fetching new data after every render!
    Use an empty dependency array to ensure that data is only fetched after our component’s first render. 
    
    The server has two different endpoints called: /daily and /hourly. Let’s use the value of the forecastType state variable
    to determine which endpoint our effect should request data from. After making this change, our effect behaves differently
    based on the value of forecastType. You could say that how we use our effect depends on it! Add this variable to our dependency
    array so that the effect is called again, updating data appropriately, after re-renders where the user has selected a different forecast type.
    */
  }, [forecastType]);

  /*
  const handleChange = (index) => ({ target }) =>
    setNotes((prev) => ({
      ...prev,
      [index]: target.value,
    }));
*/

  const handleChange = (itemId) => ({ target }) =>
    setNotes((prev) => ({
      ...prev,
      [itemId]: target.value,
    }));

  /**
In our JSX, we are trying to map over an array stored by the data state variable, but our effect that fetches
this data doesn’t get called until after the first render. So during the first render, data is undefined and 
attempting to call map() on undefined is causing our error! Let’s prevent this error by checking to see if data
has loaded yet. If it hasn’t, then we want our function component to just return a paragraph tag with the text
“Loading…”. If data is no longer undefined, then the data has been loaded, and we can go ahead and render the full JSX!
 */
  if (!data) {
    return <p>Loading...</p>;
  }

  return (
    <div className="App">
      <h1>My Weather Planner</h1>
      <div>
        <button onClick={() => setForecastType("/daily")}>5-day</button>
        <button onClick={() => setForecastType("/hourly")}>Today</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Summary</th>
            <th>Avg Temp</th>
            <th>Precip</th>
            <th>Notes</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, i) => (
            <tr key={item.id}>
              <td>{item.summary}</td>
              <td> {item.temp.avg}°F</td>
              <td>{item.precip}%</td>
              <td>
                <input
                  value={notes[item.id] || ""}
                  onChange={handleChange(item.id)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/**
 * Our data fetching is being done in our effect. Notice how we are currently just using alert() messages to keep track of requesting and receiving data from our server. Instead of just stringifying the response data and showing it in an alert message, let’s store that data in our state.

When the data has been fetched, use our state setter function to store that data in our component’s state!

P.S. Remember that we want to store an array in our data state variable, not the whole response object.

 */
