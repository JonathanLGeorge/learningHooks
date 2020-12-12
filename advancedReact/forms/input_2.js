/**
 * Set the Input's Initial State

Good! Any time that someone types or deletes in <input />, the .handleUserInput() method will update this.state.userInput with the <input />‘s text.

Since you’re using this.setState, that means that Input needs an initial state! What should this.state‘s initial value be?

Well, this.state.userInput will be displayed in the <input />. What should the initial text in the <input /> be, when a user first visits the page?

The initial text should be blank! Otherwise it would look like someone had already typed something.
Instructions
1.

Give Input a constructor function which takes a parameter of props and calls super(props) on its first line.

Then, still in the constructor, set state equal to this object:

{ userInput: '' }

Feel free to use the example code as a guide.
Checkpoint 2 Passed
2.

Next, at the end of the constructor, bind .handleUserInput() to the current value of this.

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
        <input type="text" onChange={this.handleUserInput} />
        <h1>I am an h1.</h1>
      </div>
    );
  }
}

ReactDOM.render(<Input />, document.getElementById("app"));
