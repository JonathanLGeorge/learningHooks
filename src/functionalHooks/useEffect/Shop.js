/**
 * The Effect Hook
Rules of Hooks

There are two main rules to keep in mind when using Hooks:

    only call Hooks at the top level
    only call Hooks from React functions

As we have been practicing with the State Hook and the Effect Hook, we’ve been following these rules with ease, but it is helpful to keep these two rules in mind as you take your new understanding of Hooks out into the wild and begin using more Hooks in your React applications.

When React builds the Virtual DOM, the library calls the functions that define our components over and over again as the user interacts with the user interface. React keeps track of the data and functions that we are managing with Hooks based on their order in the function component’s definition. For this reason, we always call our Hooks at the top level; we never call hooks inside of loops, conditions, or nested functions.

Instead of confusing React with code like this:

if (userName !== '') {
  useEffect(() => {
    localStorage.setItem('savedUserName', userName);
  });
}

We can accomplish the same goal, while consistently calling our Hook every time: 

useEffect(() => {
  if (userName !== '') {
    localStorage.setItem('savedUserName', userName);
  }
});

Secondly, Hooks can only be used in React Functions. We cannot use Hooks in class components and we cannot use Hooks in regular 
JavaScript functions. We’ve been working with useState() and useEffect() in function components, and this is the most common use.
The only other place where Hooks can be used is within custom hooks. Custom Hooks are incredibly useful for organizing and reusing
stateful logic between function components. For more on this topic, head to the React Docs. https://reactjs.org/docs/hooks-custom.html

 */

import React, { useState, useEffect } from "react";
import { get } from "./mockBackend/fetch";

export default function Shop() {
  const [categories, setCategories] = useState();
  if (categories) {
    const [selectedCategory, setSelectedCategory] = useState();
    const [items, setItems] = useState({});
  }

  if (!categories) {
    useEffect(() => {
      get("/categories").then((response) => {
        setCategories(response.data);
      });
    });
  }

  // if (selectedCategory && !items[selectedCategory]) {
  //   useEffect(() => {
  //     get(`/items?category=${selectedCategory}`).then((response) => {
  //       setItems((prev) => ({ ...prev, [selectedCategory]: response.data }));
  //     });
  //   });
  // }

  if (!categories) {
    return <p>Loading..</p>;
  }

  return (
    <div className="App">
      <h1>Clothes 'n Things</h1>
      <nav>
        {categories.map((category) => (
          <button key={category} onClick={() => setSelectedCategory(category)}>
            {category}
          </button>
        ))}
      </nav>
      <h2>{selectedCategory}</h2>
      <ul>
        {!items[selectedCategory]
          ? null
          : items[selectedCategory].map((item) => <li key={item}>{item}</li>)}
      </ul>
    </div>
  );
}

/**
 * 
1.

The code that we are starting with has a lot of good ideas, but there are some bugs that we need to help sort out.
Let’s get started by refactoring the code so that the State Hook is always called at the top level.

It looks like the developers that wrote this code wanted to hold off on using the selectedCategory and items state variables until
after the categories have been fetched. Conceptually this makes sense, but React requires that all hooks be called on every render,
so nesting these useState() calls is not a valid option.

Let’s bring all of our State Hook calls to the top level. To be clear about initial values, let’s explicitly set the initial state value for
categories and selectedCategory to null.
Checkpoint 2 Passed

2.

It looks like the idea behind using this expression: if (!categories) was to only fetch the categories data from the server once. Nesting a call to the
Effect Hook inside of a condition like this will cause different hooks to be called on different re-renders, resulting in errors. Luckily, we know a better way!

Refactor this code so that the effect responsible for fetching the categories data from the backend and saving it to local state follows the rules for Hooks and only
fetches the categories data once.
Checkpoint 3 Passed

3.

Whew, we’re making great progress! It’s such a nice feeling to turn error screens into working code, isn’t it?

Now that we are fetching the list of categories from the backend and successfully rendering buttons for each of these to the screen, 
we are ready to use another effect to fetch the items for each of these categories, when the user clicks on each of them!

Uncomment the block of code that was attempting to do this, and refactor it so that we follow the rules of Hooks. To optimize performance, 
only call the backend for data when we don’t yet have it stored in the component’s state like this code was trying to do.

 */
