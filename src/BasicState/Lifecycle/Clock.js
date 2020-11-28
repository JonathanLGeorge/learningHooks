import React from "react";

export class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }
  render() {
    return <div>{this.state.date.toLocaleTimeString()}</div>;
  }
  componentDidMount() {
    const oneSecond = 1000;
    this.intervalID = setInterval(() => {
      this.setState({ date: new Date() });
    }, oneSecond);
  }
  componentWillUnmount() {
    clearInterval(this.intervalID);
  }
}

/**
 * componentDidMount

We’ve made a clock component, but it’s static. Wouldn’t it be nice if it updated?

At a high level, we’d like to update this.state.date with a new date once per second.

JavaScript has a helpful function, setInterval(), that will help us do just this. It lets us run a function on a set interval. In our case, we’ll make a function that updates this.state.date, and call it every second.

We’ll want to run some code that looks like this:

// NOTE: This code doesn't clean itself up properly.
// We'll explore that in the next exercise.
const oneSecond = 1000;
setInterval(() => {
  this.setState({ date: new Date() });
}, oneSecond);

We have the code we want to run—that’s great. But where should we put this code? In other words, where in the component’s lifecycle should it go?

Remember, the component lifecycle has three high-level parts:

    Mounting, when the component is being initialized and put into the DOM for the first time
    Updating, when the component updates as a result of changed state or changed props
    Unmounting, when the component is being removed from the DOM

It’s certainly not in the unmounting phase—we don’t want to start our interval when the clock disappears from the screen! It’s also probably not useful during the updating phase—we want the interval to start as soon as the clock appears, and we don’t want to wait for an update. It probably makes sense to stick this code somewhere in the mounting phase.

We’ve seen two functions: the render() and the constructor. Can we put this code in either of those places?

    render() isn’t a good candidate. For one, it executes during the mounting phase and the updating phase—too often for us. It’s also generally a bad idea to set up any kind of side-effect like this in render(), as it can create subtle bugs in the future.
    constructor() is also not great. It does only execute during the mounting phase, so that’s good, but you should generally avoid side-effects like this in constructors because it violates something called the Single Responsibility Principle. In short, it’s not a constructor’s responsibility to start side-effects. (You can read more about the principle on Wikipedia.)

If it’s not render() or the constructor, then where? Enter a new lifecycle method, componentDidMount().

componentDidMount() is the final method called during the mounting phase. The order is:

    The constructor
    render()
    componentDidMount()

In other words, it’s called after the component is rendered. This is where we’ll want to start our timer.

(Another method, getDerivedStateFromProps(), is called between the constructor and render(), but it is very rarely used and usually isn’t the best way to achieve your goals. We won’t be talking about it in this lesson.)

 */

/**
  * componentWillUnmount

Our clock is working, but it has an important problem. We never told the interval to stop, so it’ll keep running that function forever (or at least, until the user leaves/refreshes the page).

When the component is unmounted (in other words, removed from the page), that timer will keep on ticking, trying to update the state of a component that’s effectively gone. This means your users will have some JavaScript code running unnecessarily, which will hurt the performance of your app.

React will log a warning that looks something like this:

Warning: Can't perform a React state update on an unmounted component. This is a no-op, but it indicates a memory leak in your application. To fix, cancel all subscriptions and asynchronous tasks in the componentWillUnmount method.

Imagine if the clock gets mounted and unmounted hundreds of times—eventually, this will cause your page to become sluggish because of all of the unnecessary work. You’ll also see warnings in your browser console. Even worse, this can lead to subtle, annoying bugs.

All this bad stuff can happen if we fail to clean up a side-effect of a component. In our case this is a call to setInterval(), but components can have lots of other side-effects: loading external data with AJAX, doing manual tweaking of the DOM, setting a global value, and more. We try to limit our side-effects, but it’s difficult to build an interesting app with truly zero side-effects.

In general, when a component produces a side-effect, you should remember to clean it up.

JavaScript gives us the clearInterval() function. setInterval() can return an ID, which you can then pass into clearInterval() to clear it. Here’s the code we’ll want to use:

const oneSecond = 1000;
this.intervalID = setInterval(() => {
  this.setState({ date: new Date() });
}, oneSecond);
 
// Some time later...
clearInterval(this.intervalID);

At a high level, we want to continue to set up our setInterval() in componentDidMount(), but then we want to clear that interval when the clock is unmounted.

Let’s introduce a new lifecycle method: componentWillUnmount(). componentWillUnmount() is called in the unmounting phase, right before the component is completely destroyed. It’s a useful time to clean up any of your component’s mess.

In our case, we’ll use it to clean up the clock’s interval.

  */

/**
   * componentDidUpdate

Remember the three parts of a component’s lifecycle:

    Mounting, when the component is being initialized and put into the DOM for the first time
    Updating, when the component updates as a result of changed state or changed props
    Unmounting, when the component is being removed from the DOM

We’ve looked at mounting (constructor(), render(), and componentDidMount()). We’ve looked at unmounting (componentWillUnmount()). Let’s finish by looking at the updating phase.

An update is caused by changes to props or state. You’ve already seen this happen a bunch of times. Every time you’ve called setState() with new data, you’ve triggered an update. Every time you change the props passed to a component, you’ve caused it to update.

When a component updates, it calls several methods, but only two are commonly used.

The first is render(), which we’ve seen in every React component. When a component’s props or state changes, render() is called.

The second, which we haven’t seen yet, is componentDidUpdate(). Just like componentDidMount() is a good place for mount-phase setup, componentDidUpdate() is a good place for update-phase work.

   */
