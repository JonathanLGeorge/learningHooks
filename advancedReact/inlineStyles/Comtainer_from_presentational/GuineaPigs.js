import React from "react";
import ReactDOM from "react-dom";

const GUINEAPATHS = [
  "https://content.codecademy.com/courses/React/react_photo-guineapig-1.jpg",
  "https://content.codecademy.com/courses/React/react_photo-guineapig-2.jpg",
  "https://content.codecademy.com/courses/React/react_photo-guineapig-3.jpg",
  "https://content.codecademy.com/courses/React/react_photo-guineapig-4.jpg",
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

ReactDOM.render(<GuineaPigs />, document.getElementById("app"));

/**
   * Container Components From Presentational Components
Separate Container Components From Presentational Components

In this lesson, you will learn a programming pattern that will help organize your React code.

As you continue building your React application, you will soon realize that one component has too many responsibilities, but how do you know when you have reached that point?

Separating container components from presentational components helps to answer that question. It shows you when it might be a good time to divide a component into smaller components. It also shows you how to perform that division.
Instructions
1.

Click Run. You are looking at a rendered <GuineaPigs /> component.

<GuineaPigs />‘s job is to render a photo carousel of guinea pigs. It does this perfectly well! And yet, it has a problem: it does too much stuff. How might we divide this into a container component and a presentational component?





1.

GuineaPigs.js contains a lot of logic! It has to select the correct guinea pig to render, wait for the right amount of time before rendering, render an image, select the next correct guinea pig, and so on.

Let’s separate the logic from the GuineaPigs component into a container component.

Near the top left of the code editor, click on the folder icon. Create a new folder named containers. containers/ should be next to components/.

Inside of containers/, create a new file named GuineaPigsContainer.js. Make sure that GuineaPigs is plural, but Container is singular!

Once you have made containers/GuineaPigsContainer.js, click Run.
Checkpoint 2 Passed
2.

Good!

Open components/GuineaPigs.js.

You want to separate the logic of this component class into a container component. How do you do that?

To start, just make a copy. After that, you can delete the appropriate parts.

Highlight the entire contents of components/GuineaPigs.js, and copy it to the clipboard.

Now, open containers/GuineaPigsContainer.js.

Click inside the empty file, and paste. containers/GuineaPigsContainer.js and components/GuineaPigs.js should be identical.

   */
