/**
 * Components Render Other Components
A Component in a Render Function

Here is a .render() method that returns an HTML-like JSX element:

class Example extends React.Component {
  render() {
    return <h1>Hello world</h1>;
  }
}

You’ve seen render methods return <div></div>s, <p></p>s, and <h1></h1>s, just like in the above example.

Render methods can also return another kind of JSX: component instances.

class OMG extends React.Component {
  render() {
    return <h1>Whooaa!</h1>;
  }
}
 
class Crazy extends React.Component {
  render() {
    return <OMG />;
  }
}

In the above example, Crazy‘s render method returns an instance of the OMG component class. You could say that Crazy renders an <OMG />.

 */

/**
  * Apply a Component in a Render Function

This is new territory! You’ve never seen a component rendered by another component before.

You have seen a component rendered before, though, but not by another component. Instead, you’ve seen a component rendered by ReactDOM.render().

When a component renders another component, what happens is very similar to what happens when ReactDOM.render() renders a component.

  */
//navBar.js
import React from "react";

export class NavBar extends React.Component {
  render() {
    const pages = [
      "home",
      "blog",
      "pics",
      "bio",
      "art",
      "shop",
      "about",
      "contact",
    ];
    const navLinks = pages.map((page) => {
      return <a href={"/" + page}>{page}</a>;
    });

    return <nav>{navLinks}</nav>;
  }
}

//ProfilePage.js

import React from "react";
import ReactDOM from "react-dom";
import { NavBar } from "./NavBar";

class ProfilePage extends React.Component {
  render() {
    return (
      <div>
        <NavBar />
        <h1>All About Me!</h1>
        <p>I like movies and blah blah blah blah blah</p>
        <img src="https://content.codecademy.com/courses/React/react_photo-monkeyselfie.jpg" />
      </div>
    );
  }
}
