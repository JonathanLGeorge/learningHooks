/**
 * Style
Make A Style Object Variable

That’s all that you need to apply basic styles in React! Simple and straightforward.

One problem with this approach is that it becomes obnoxious if you want to use more than just a few styles. An alternative that’s often nicer is to store a style object in a variable, and then inject that variable into JSX.

Look in the code editor for an example. The style object is defined on lines 3-6, and then injected on line 11.

If you aren’t used to using modules, then this code may have made you twitch uncontrollably:

const style = {
  color: 'darkcyan',
  background: 'mintcream'
};

Defining a variable named style in the top-level scope would be an extremely bad idea in many JavaScript environments! In React, however, it’s totally fine.

Remember that every file is invisible to every other file, except for what you choose to expose via module.exports. You could have 100 different files, all with global variables named style, and there could be no conflicts.

 */
