import React, { useState } from "react";

function Musical() {
  const [state, setState] = useState({
    title: "Best Musical Ever",
    actors: ["George Wilson", "Tim Hughes", "Larry Clements"],
    locations: {
      Chicago: {
        dates: ["1/1", "2/2"],
        address: "chicago theater",
      },
      SanFrancisco: {
        dates: ["5/2"],
        address: "sf theater",
      },
    },
  });
}

function MusicalRefactored() {
  const [title, setTitle] = useState("Best Musical Ever");
  const [actors, setActors] = useState([
    "George Wilson",
    "Tim Hughes",
    "Larry Clements",
  ]);
  const [locations, setLocations] = useState({
    Chicago: {
      dates: ["1/1", "2/2"],
      address: "chicago theater",
    },
    SanFrancisco: {
      dates: ["5/2"],
      address: "sf theater",
    },
  });
}

/**
 * The State Hook
Separate Hooks for Separate States

While there are times when it can be helpful to store related data in a data collection like an array or object, it can also be helpful to separate data that changes separately into completely different state variables. Managing dynamic data is much easier when we keep our data models as simple as possible.

For example, if we had a single object that held state for a subject you are studying at school, it might look something like this:

function Subject() {
  const [state, setState] = useState({
    currentGrade: 'B',
    classmates: ['Hasan', 'Sam', 'Emma'],
    classDetails: {topic: 'Math', teacher: 'Ms. Barry', room: 201};
    exams: [{unit: 1, score: 91}, {unit: 2, score: 88}]);
  });

This would work, but think about how messy it could get to copy over all the other values when we need to update something in this big state object. For example, to update the grade on an exam, we would need an event handler that did something like this:

setState((prev) => ({
 ...prev,
  exams: prev.exams.map((exam) => {
    if( exam.unit === updatedExam.unit ){
      return { 
        ...exam,
        score: updatedExam.score
      };
    } else {
      return exam;
    }
  }),
}));

Yikes! Complex code like this is likely to cause bugs! Luckily, there is another option… We can make more than one call to the State Hook. In fact, we can make as many calls to useState() as we want! It’s best to split state into multiple state variables based on which values tend to change together. We can rewrite the previous example as follows…

function Subject() {
  const [currentGrade, setGrade] = useState('B');
  const [classmates, setClassmates] = useState(['Hasan', 'Sam', 'Emma']);
  const [classDetails, setClassDetails] = useState({topic: 'Math', teacher: 'Ms. Barry', room: 201});
  const [exams, setExams] = useState([{unit: 1, score: 91}, {unit: 2, score: 88}]);
  // ...
}

Managing dynamic data with separate state variables has many advantages, like making our code more simple to write, read, test, and reuse across components.

Often, we find ourselves packaging up and organizing data in collections to pass between components, then separating that very same data within components where different parts of the data change separately. The wonderful thing about working with Hooks is that we have the freedom to organize our data the way that makes the most sense to us!

If you’d like, have a look at another example of using multiple State Hooks for managing separate data.

 */
