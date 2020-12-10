/**
 * Style
Style Value Syntax

In the last exercise, you learned how style names are slightly different in React than they are in regular JavaScript.

In this exercise, you will learn how style values are slightly different in React than they are in regular JavaScript.

In regular JS, style values are almost always strings. Even if a style value is numeric, you usually have to write it as a string so that you can specify a unit. For example, you have to write "450px" or "20%".

In React, if you write a style value as a number, then the unit "px" is assumed.

How convenient! If you want a font size of 30px, you can write:

{ fontSize: 30 }

If you want to use units other than “px,” you can use a string:

{ fontSize: "2em" }

Specifying “px” with a string will still work, although it’s redundant.

A few specific styles will not automatically fill in the “px” for you. These are styles where you aren’t likely to use “px” anyway, so you don’t really have to worry about it. Here is a list of styles that don’t assume “px”.
https://reactjs.org/docs/dom-elements.html
 */

import React from "react";
import ReactDOM from "react-dom";
const styles = {
  background: "lightblue",
  color: "darkred",
  marginTop: 100,
  fontSize: 50,
};

const styleMe = <h1 style={styles}>Please style me! I am so bland!</h1>;

ReactDOM.render(styleMe, document.getElementById("app"));
