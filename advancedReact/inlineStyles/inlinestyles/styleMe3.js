/**
 * Style
Style Name Syntax

In regular JavaScript, style names are written in hyphenated-lowercase:

const styles = {
  'margin-top': '20px',
  'background-color': 'green'
};

In React, those same names are instead written in camelCase:

const styles = {
  marginTop: '20px',
  backgroundColor: 'green'
};

This has zero effect on style property values, only on style property names.

 */
import React from "react";
import ReactDOM from "react-dom";
const styles = {
  background: "lightblue",
  color: "darkred",
  marginTop: "100px",
  fontSize: "50px",
};

const styleMe = <h1 style={styles}>Please style me! I am so bland!</h1>;

ReactDOM.render(styleMe, document.getElementById("app"));
