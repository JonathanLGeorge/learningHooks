/*
Render Presentational Component in Container Component

We now have a container component (containers/GuineaPigsContainer.js) for logic and a presentational component (components/GuineaPigs.js) for rendering JSX!

The container component should now render the presentational component instead of rendering JSX.






before


*
 * import React from 'react';
import ReactDOM from 'react-dom';
import { GuineaPigs } from '../components/GuineaPigs';

const GUINEAPATHS = [
  'https://content.codecademy.com/courses/React/react_photo-guineapig-1.jpg',
  'https://content.codecademy.com/courses/React/react_photo-guineapig-2.jpg',
  'https://content.codecademy.com/courses/React/react_photo-guineapig-3.jpg',
  'https://content.codecademy.com/courses/React/react_photo-guineapig-4.jpg'
];

class GuineaPigs extends React.Component {
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

ReactDOM.render(
  <GuineaPigs />, 
  document.getElementById('app')
);





1.

Select containers/GuineaPigsContainer.js.

On line 12, change the component class’s name from GuineaPigs to GuineaPigsContainer. In the ReactDOM.render() call near the bottom of the file, change <GuineaPigs /> to <GuineaPigsContainer />.
2.

GuineaPigsContainer contains a lot of logic. It shouldn’t also have to render JSX.

Delete any JSX from GuineaPigsContainer‘s return statement in the render function. Instead, return an instance of GuineaPigs.

The new render function should look like this:

render() { 
  const src = GUINEAPATHS[this.state.currentGP]; 
  return <GuineaPigs />;
}

3.

Once your container component has chosen a guinea pig, it must pass that guinea pig to the presentational component.

In GuineaPigsContainer‘s render function, pass the chosen guinea pig by giving <GuineaPigs /> a prop of src = {src}.

 */

import React from "react";
import ReactDOM from "react-dom";
import { GuineaPigs } from "../components/GuineaPigs";

const GUINEAPATHS = [
  "https://content.codecademy.com/courses/React/react_photo-guineapig-1.jpg",
  "https://content.codecademy.com/courses/React/react_photo-guineapig-2.jpg",
  "https://content.codecademy.com/courses/React/react_photo-guineapig-3.jpg",
  "https://content.codecademy.com/courses/React/react_photo-guineapig-4.jpg",
];

class GuineaPigsContainer extends React.Component {
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
    return <GuineaPigs src={src} />;
  }
}

ReactDOM.render(<GuineaPigsContainer />, document.getElementById("app"));
