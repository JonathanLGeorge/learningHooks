/**
 * Update an Input's Value

When a user types or deletes in the <input />, then that will trigger a change event, which will call handleUserInput. That’s good!

handleUserInput will set this.state.userInput equal to whatever text is currently in the input field. That’s also good!

There’s only one problem: you can set this.state.userInput to whatever you want, but <input /> won’t care. You need to somehow make the <input />‘s text responsive to this.state.userInput.

Easy enough! You can control an <input />‘s text by setting its value attribute.
Instructions
1.

Inside of Input‘s render function, give <input /> the following attribute:

value={this.state.userInput}

2.

That should do it! An idiomatically correct React form!

This example doesn’t have a server per se, but any time that a user updates <input />, the new text is immediately stored in Input‘s state. We could easily connect that state with a server. What matters is that the text is sent somewhere to be stored on every character change.

Inside of the <h1></h1>, delete the text:

I am an h1.

Replace it with:

{this.state.userInput}

Click Run. Try typing into the <input /> in the browser.

 */

import React from "react";
import ReactDOM from "react-dom";

export class Input extends React.Component {
  constructor(props) {
    super(props);

    this.state = { userInput: "" };

    this.handleUserInput = this.handleUserInput.bind(this);
  }

  handleUserInput(e) {
    this.setState({ userInput: e.target.value });
  }

  render() {
    return (
      <div>
        <input
          type="text"
          onChange={this.handleUserInput}
          value={this.state.userInput}
        />
        <h1>{this.state.userInput}</h1>
      </div>
    );
  }
}

ReactDOM.render(<Input />, document.getElementById("app"));
