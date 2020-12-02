import React from "react";
import ReactDOM from "react-dom";

export const NewFriend = (props) => {
  return (
    <div>
      <img src={props.src} />
    </div>
  );
};

ReactDOM.render(
  <NewFriend src="https://content.codecademy.com/courses/React/react_photo-squid.jpg" />,
  document.getElementById("app")
);

/**
 * function component. Here’s a recap:

    Function components are React components defined as JavaScript functions
    Function components must return JSX
    Function components may accept a props parameter. Expect it to be a JavaScript object

Although function components and class components can do the same things, you’ll see a lot of 
function components in the React documentation and example apps. Some developers prefer them over 
class components for their simplicity and straightforward features, like Hooks, which you’ll learn 
later in your coding journey.
 */
