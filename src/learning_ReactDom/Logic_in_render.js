// Put Logic in a Render Function

// A render() function must have a return statement. However, that isn’t all that it can have.

// A render() function can also be a fine place to put simple calculations that need to happen right before a component renders. Here’s an example of some calculations inside of a render function:

// class Random extends React.Component {
//   render() {
//     // First, some logic that must happen
//     // before rendering:
//     const n = Math.floor(Math.random() * 10 + 1);
//     // Next, a return statement
//     // using that logic:
//     return <h1>The number is {n}!</h1>;
//   }
// }

// Watch out for this common mistake:

// class Random extends React.Component {
//   // This should be in the render function:
//   const n = Math.floor(Math.random() * 10 + 1);

//   render() {
//     return <h1>The number is {n}!</h1>;
//   }
// };

// In the above example, the line with the const n declaration will cause a syntax error, as is it should not be part of the class declaration itself, but should occur in a method like render().

import React from "react";
import ReactDOM from "react-dom";

const friends = [
  {
    title: "Yummmmmmm",
    src:
      "https://content.codecademy.com/courses/React/react_photo-monkeyweirdo.jpg",
  },
  {
    title: "Hey Guys!  Wait Up!",
    src:
      "https://content.codecademy.com/courses/React/react_photo-earnestfrog.jpg",
  },
  {
    title: "Yikes",
    src: "https://content.codecademy.com/courses/React/react_photo-alpaca.jpg",
  },
];

// New component class starts here:
class Friend extends React.Component {
  render() {
    let friend = friends[0];
    return (
      <div>
        <h1>{friend.title}</h1>
        <img src={friend.src} />
      </div>
    );
  }
}

ReactDOM.render(<Friend />, document.getElementById("app"));

import React from "react";
import ReactDOM from "react-dom";

const fiftyFifty = Math.random() < 0.5;

// New component class starts here:
class TonightsPlan extends React.Component {
  render() {
    if (fiftyFifty) {
      return <h1>Tonight I'm going out WOOO</h1>;
    } else {
      return <h1>Tonight I'm going to bed WOOO</h1>;
    }
  }
}

ReactDOM.render(<TonightsPlan />, document.getElementById("app"));
