/**
 * Review

Congrats! You divided the GuineaPigs component into a container component and a presentational component: containers/GuineaPigsContainer.js and components/GuineaPigs.js.

Here are the steps we took:

    Identified that the original component needed to be refactored: it was handling both calculations/logic and presentation/rendering
    Copied the original component to a new containers/ folder and renamed it GuineaPigsContainer
    Removed all of the presentation/rendering code from the container component
    Removed all of the calculation/logic code from the presentational component
    Accessed the presentational component from within the container using import and export
    Edited the container’s render() method to render the presentational component with the proper props

In this programming pattern, the container component does the work of figuring out what to display. The presentational component does the work of actually displaying it. If a component does a significant amount of work in both areas, then that’s a sign that you should use this pattern!

If you’d like to learn more about this pattern, here are some articles to start with:
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
    const src = GUINEAPATHS[this.state.currentGP];
    return <GuineaPigs src={src} />;
  }
}

ReactDOM.render(<GuineaPigsContainer />, document.getElementById("app"));
