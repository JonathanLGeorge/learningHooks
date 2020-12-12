/**
 * Apply PropTypes

In the code editor, take a look at MessageDisplayer‘s render function.

Notice the expression this.props.message. From this expression, you can deduce that MessageDisplayer expects to get passed a prop named message. Somewhere, at some time, this code is expected to execute:

<MessageDisplayer message="something" />

If a component class expects a prop, then you can use propTypes for that component class!

In order to start using propTypes, we need to import the 'prop-types' library.

import PropTypes from 'prop-types';

Then, you can declare propTypes as a static property for your component after the component has been defined. See the example of a propTypes property on lines 11-13. Notice that the value of propTypes is an object, not a function!

The second step is to add properties to the propTypes object. For each prop that your component class expects to receive, there can be one property on your propTypes object.

MessageDisplayer only expects one prop: message. Therefore, its propTypes object only has one property.
Instructions
1.

Select BestSeller.js.

Import the 'prop-types' library as PropTypes on line 2.
2.

Give the BestSeller component class a propTypes property. For now, set propTypes equal to an empty object literal.

 


import React from 'react';
import PropTypes from 'prop-types';

export class BestSeller extends React.Component {
  render() {
    return (
      <li>
        Title: <span>
          {this.props.title}
        </span><br />
        
        Author: <span>
          {this.props.author}
        </span><br />
        
        Weeks: <span>
          {this.props.weeksOnList}
        </span>
      </li>
    );
  }
}

BestSeller.propTypes = {};
*/

//part two

/**
 * Add Properties to PropTypes

In the code editor, look at the property on MessageDisplayer‘s propTypes object:

message: PropTypes.string 

What are the properties on propTypes supposed to be, exactly?

The name of each property in propTypes should be the name of an expected prop. In our case, MessageDisplayer expects a prop named message, so our property’s name is message.

The value of each property in propTypes should fit this pattern:

PropTypes.expected_data_type_goes_here

Since message is presumably going to be a string, we chose PropTypes.string. You can see this on line 12. Notice the difference in capitalization between the propTypes object and PropTypes!

Each property on the propTypes object is called a propType.

Select the next file in the code editor, Runner.js. Find Runner‘s propTypes object.

Runner has six propTypes! Look at each one. Note that bool and func are abbreviated, but all other data types are spelled normally.

If you add .isRequired to a propType, then you will get a console warning if that prop isn’t sent.

Try to find all six props from the propTypes object in Runner‘s render function: this.props.message, this.props.style, etc.
Instructions
1.

Select BestSeller.js.

In BestSeller‘s propTypes object, write one propType for each prop that BestSeller is expecting: title, author, and weeksOnList.

Make title and author strings. Make weeksOnList a number. Make all three isRequired.

If you get stuck, look to Runner.js for guidance.
Checkpoint 2 Passed
2.

Good! You just gave BestSeller three propTypes.

In the code editor, open the last file, BookList.js.

At the bottom of the file, render <BookList /> using ReactDOM.render.

 */

import React from "react";
import PropTypes from "prop-types";

export class BestSeller extends React.Component {
  render() {
    return (
      <li>
        Title: <span>{this.props.title}</span>
        <br />
        Author: <span>{this.props.author}</span>
        <br />
        Weeks: <span>{this.props.weeksOnList}</span>
      </li>
    );
  }
}

BestSeller.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  weeksOnList: PropTypes.number.isRequired,
};
