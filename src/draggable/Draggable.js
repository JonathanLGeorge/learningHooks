import React from "react";

function Draggable() {
  return (
    <div>
      <div className="container">
        <p className="draggable" draggable="true">
          1
        </p>
        <p className="draggable" draggable="true">
          2
        </p>
      </div>
      <div className="container">
        <p className="draggable" draggable="true">
          1
        </p>
        <p className="draggable" draggable="true">
          2
        </p>
      </div>
    </div>
  );
}

export default Draggable;
