/**
 * Container Components From Presentational Components
Separate Presentational Component

Now that we’ve created a container component for the logic, we can dedicate the original component, GuineaPigs, to be a presentational component.

The presentational component’s only job is to contain HTML-like JSX. It should be an exported component and will not render itself because a presentational component will always get rendered by a container component.

As a separate example, say we have Presentational and Container components. Presentational.js must export the component class (or function, when applicable):

export class Presentational extends Component {

Container.js must import that component:

import { Presentational } from 'Presentational.js';


1.

Select components/GuineaPigs.js.

Look at the GuineaPigs component class, starting on line 11. This is going to be your presentational component class. That means that its only job will be to contain JSX.

On line 2, delete import ReactDOM from 'react-dom'.

At the bottom of the file, delete the ReactDOM.render() call.

Export GuineaPigs by adding the keyword export to the beginning of class GuineaPigs.
2.

Good! But why did you just do that?

GuineaPigs will get rendered by GuineaPigsContainer. Any component that gets rendered by a different component should use export.

Select containers/GuineaPigsContainer.js.

Make a new line after line 2. On your new line, import GuineaPigs.

This will be slightly different from what you’ve done before! As you saw when you opened the file navigator, GuineaPigs.js and GuineaPigsContainer.js are not neighbors. The file path that you pass to import will have to navigate up one level, and then down into the components folder.

 */

import React from "react";

const GUINEAPATHS = [
  "https://content.codecademy.com/courses/React/react_photo-guineapig-1.jpg",
  "https://content.codecademy.com/courses/React/react_photo-guineapig-2.jpg",
  "https://content.codecademy.com/courses/React/react_photo-guineapig-3.jpg",
  "https://content.codecademy.com/courses/React/react_photo-guineapig-4.jpg",
];

export class GuineaPigs extends React.Component {
  constructor(props) {
    super(props);

    this.state = { currentGP: 0 };

    this.interval = null;

    this.nextGP = this.nextGP.bind(this);
  }

  nextGP() {
    let current = this.state.currentGP;
    let next = ++current % GUINEAPATHS.length;
    this.setState({ currentGP: next });
  }

  componentDidMount() {
    this.interval = setInterval(this.nextGP, 5000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    let src = GUINEAPATHS[this.state.currentGP];
    return (
      <div>
        <h1>Cute Guinea Pigs</h1>
        <img src={src} />
      </div>
    );
  }
}
