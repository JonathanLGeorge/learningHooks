/**
 * PropTypes
PropTypes in Function Components

Remember function components? You can see some familiar ones in Example.js.

How could you write propTypes for a function component?

// Usual way:
class Example extends React.component{
 
}
 
Example.propTypes = {
 
};
...
 
// Function component way:
const Example = (props) => {
  // ummm ??????
}

It turns out the process is fairly similar. To write propTypes for a function component, you define a propTypes object as a property of the function component itself. Here’s what that looks like:

const Example = (props) => {
  return <h1>{props.message}</h1>;
}
 
Example.propTypes = {
  message: PropTypes.string.isRequired
};

Instructions
1.

Select GuineaPigs.js.

You can see your GuineaPigs function component from earlier. Let’s give it a propType.

After the GuineaPigs class declaration, define a propTypes property on GuineaPigs. Use the example code above as a guide.

GuineaPigs is only expecting one prop, so it should only get one propType.

Give GuineaPigs one propType, matching its expected prop. Make the propType isRequired.

If you aren’t sure what prop GuineaPigs is expecting, check the render function in GuineaPigsContainer.js.

 */

// Normal way to display a prop:
export class MyComponentClass extends React.Component {
  render() {
    return <h1>{this.props.title}</h1>;
  }
}

// Functional component way to display a prop:
export const MyComponentClass = (props) => {
  return <h1>{props.title}</h1>;
};

// Normal way to display a prop using a variable:
export class MyComponentClass extends React.component {
  render() {
    let title = this.props.title;
    return <h1>{title}</h1>;
  }
}

// Functional component way to display a prop using a variable:
export const MyComponentClass = (props) => {
  let title = props.title;
  return <h1>{title}</h1>;
};
