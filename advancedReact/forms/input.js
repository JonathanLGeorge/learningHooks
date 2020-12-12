/**
 * Input onChange

A traditional form doesn’t update the server until a user hits “submit.” But you want to update the server any time a user enters or deletes any character.
Instructions
1.

Look at Input.js.

Can you find the bug? It’s somewhere in the render function. Scroll down once you have a guess.


There’s a self-closing tag without a forward slash! Find the missing forward slash and fill it in.
Checkpoint 2 Passed
2.

Look at Input‘s render function. View the result on the screen. Try typing into the <input /> in the browser.

Once Input has been set up correctly, then you will be able to change the <h1></h1>‘s inner text by typing into the <input /> in the browser.
Checkpoint 3 Passed

No need to edit code for this checkpoint—just click Run.
3.

You want to respond to any entered or deleted character in the <input /> field!

The best way to do that is by listening for a “change” event on the <input />.

Give <input /> an onChange attribute. Set onChange‘s value equal to {this.handleUserInput}. Don’t worry about the fact that there is no handleUserInput function yet - you’ll make one!

 */

import React from "react";
import ReactDOM from "react-dom";

export class Input extends React.Component {
  render() {
    return (
      <div>
        <input type="text" onChange={this.handleUserInput} />
        <h1>I am an h1.</h1>
      </div>
    );
  }
}

ReactDOM.render(<Input />, document.getElementById("app"));
