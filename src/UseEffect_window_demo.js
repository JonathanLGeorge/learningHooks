import React, { useEffect, useState } from "react";

function UseEffect_window_demo() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    //as we resize you want to call our custom handler
    window.addEventListener("resize", handleResize);

    //cleaning up the event listener
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div>
      <h1>this is the windows width</h1>
      {windowWidth}
    </div>
  );
}

export default UseEffect_window_demo;
