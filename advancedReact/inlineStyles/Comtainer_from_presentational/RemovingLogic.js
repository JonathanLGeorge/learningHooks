/**
 * Remove Logic from Presentational Component

Our container component now renders the GuineaPigs presentational component instead of JSX statements!

The last step to separating the container component from the presentational component is to remove redundant logic in the presentational component. The presentational component should be left with the render function that contains JSX statements.


1.

Select components/GuineaPigs.js.

This component’s only job is to render HTML-like JSX. Delete everything inside of the GuineaPigs component class, except for the render function. When you’re done, the class should only have one method: render()!

Inside of the render() function, delete this line of logic:

let src = GUINEAPATHS[this.state.currentGP];

…and replace it with this:

let src = this.props.src;

Lastly, delete the GUINEAPATHS array.


before 


import React from 'react';

const GUINEAPATHS = [
  'https://content.codecademy.com/courses/React/react_photo-guineapig-1.jpg',
  'https://content.codecademy.com/courses/React/react_photo-guineapig-2.jpg',
  'https://content.codecademy.com/courses/React/react_photo-guineapig-3.jpg',
  'https://content.codecademy.com/courses/React/react_photo-guineapig-4.jpg'
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
 */

import React from "react";

export class GuineaPigs extends React.Component {
  render() {
    let src = this.props.src;
    return (
      <div>
        <h1>Cute Guinea Pigs</h1>
        <img src={src} />
      </div>
    );
  }
}
