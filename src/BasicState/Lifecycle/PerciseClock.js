import React from "react";

export class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }
  render() {
    return (
      <div>
        {this.props.isPrecise
          ? this.state.date.toISOString()
          : this.state.date.toLocaleTimeString()}
      </div>
    );
  }
  startInterval() {
    let delay;
    if (this.props.isPrecise) {
      delay = 100;
    } else {
      delay = 1000;
    }
    this.intervalID = setInterval(() => {
      this.setState({ date: new Date() });
    }, delay);
  }
  componentDidMount() {
    this.startInterval();
  }
  componentDidUpdate(prevProps) {
    if (this.props.isPrecise === prevProps.isPrecise) {
      return;
    }
    clearInterval(this.intervalID);
    this.startInterval();
  }
  componentWillUnmount() {
    clearInterval(this.intervalID);
  }
}

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
Instructions
1.

We’ve made a small update to the clock app. Our <Clock /> component will still render the current time, but it can also be in “precise mode”, where a more standardized, exact version of the time will be shown.

Run the app. Click on the “Toggle precise mode” button and change the clock back and forth from “precise” mode a few times to see how it works.
Checkpoint 2 Passed
2.

Everything looks okay, but the updates aren’t happening super frequently in precise mode. Even though the data changes many times a second, it’s only being updated and re-rendered once a second. Can we do better?

We’d like the clock to update more frequently in precise mode. Instead of updating every second, we’d like it to update 10 times a second (every 100 milliseconds instead of every 1000). Let’s get started on that.

Create a new empty method, componentDidUpdate(). It should take one argument, prevProps, which will be the props this component had the last time it was rendered. We’ll fill it in next.
Checkpoint 3 Passed
3.

Let’s fill in componentDidUpdate() with three high-level steps:

    If this.props.isPrecise hasn’t changed, stop now and don’t do the next steps.
    Clear the existing interval, like we do in componentWillUnmount().
    Start a new interval. If in “precise” mode, it should run every 100 milliseconds. Otherwise, it should run every 1000 milliseconds as before.

In code, step 1 will be to check if isPrecise has changed by comparing it to prevProps. Copy paste this code at the beginning:

if (this.props.isPrecise === prevProps.isPrecise) {
  return;
}

For step 2, copy-paste the body of componentWillUnmount()—the single line that starts with clearInterval(....

We’ll fill in step 3 next.

Play around with the solution and notice that changing to/from “precise mode” completely stops the interval, effectively freezing the clock. We’ll fix that.
Checkpoint 4 Passed
4.

Now that we’ve cleared the interval, we need to start a new one. At the bottom of componentDidUpdate(), declare a new variable, called delay. If we’re in “precise” mode, it should be set to 100. Otherwise, it should be set to 1000.

Once we have that, we’ll start a new interval much like we do in componentDidMount().

Here’s a skeleton of what the code should look like:

let delay;
// ...
this.intervalID = setInterval(() => {
  this.setState({ date: new Date() });
}, delay);

Once you’ve done this, try entering “precise” mode. The clock should update more frequently!
Checkpoint 5 Passed
5.

Time for some final cleanup. Our little app works, but has two problems:

    If the clock is started in “precise” mode, the wrong interval is started and the clock won’t be updated frequently enough.
    Some of the code is duplicated.

Let’s refactor our component to solve both of these problems.

At a high level, we’re going to create a new method called startInterval(). It’ll be responsible for calculating the interval delay (either 100 or 1000 milliseconds) and calling setInterval(). Then we’ll call it from both componentDidMount() and componentDidUpdate().

Create a new method, startInterval(), which will include all of the code for setting up the interval. Next, find the code that sets up the interval in componentDidUpdate(). (It should start with let delay and end with the call to setInterval().) Cut and paste those into the body of startInterval(). In its place, put a call to this.startInterval().

Finally, remove the call to setInterval() from componentDidMount() and replace it with a call to this.startInterval(), so that both methods use the same code path.

See that everything works as before, but with the bug fixed!

 */
