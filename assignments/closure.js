// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!

// const parent = () => {
//   let parentAge = 50;
//   const child = () => {
//     let childAage = 30;
//     const grandchild = () => {
//       let grandchildAge = 10;
//       console.log(parentAge, childAage, grandchildAge);
//     }
//     grandchild();
//   }
//   child();
// }
// parent();

// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  let num = 0;
  return function inner() {
    return ++num;
  }
};

const newCounter = counter();
newCounter();
newCounter();
newCounter();

/* STRETCH PROBLEM, Do not attempt until you have completed all previous tasks for today's project files */

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
  let counter = 0;
  return innerObject = {
    increment: function () {
      return ++counter;
    },
    decrement: function () {
      return --counter;
    }
  }
};

const valueStore = counterFactory();
valueStore.increment()
