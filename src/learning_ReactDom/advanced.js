import React from "react";
import ReactDOM from "react-dom";

// Write code here:
ReactDOM.render(<h1>{2 + 3}</h1>, document.getElementById("app"));

//the {2+3} will actually add the numbers
//if it was no {} it would just render the numbers as typed

import React from "react";
import ReactDOM from "react-dom";

// Write code here:
const math = <h1>2 + 3 = {2 + 3}</h1>;

ReactDOM.render(math, document.getElementById("app"));

//variables can be used in JSX by using {variableNameHere}
