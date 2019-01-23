// Create a callback function and invoke the function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.
  // Study both the problem and the solution to figure out the rest of the problems.

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

/*
  //Given this problem: 
  
  function firstItem(arr, cb) {
    // firstItem passes the first item of the given array to the callback function.
  }

  // Potential Solution:
  function firstItem(arr, cb) {
    return cb(arr[0]);
  }

  firstItem(items, function(first) {
    console.log(first)
  });

*/

// ########  SOLUTIONS  ######## 

// General callback function:
function generalCbFn(arg) {
  console.log(arg);
}


// Function 1
function getLength(arr, cb) {
  // getLength passes the length of the array into the callback.
  return cb(arr.length);
}
getLength(items, generalCbFn);


// Function 2
function last(arr, cb) {
  // last passes the last item of the array into the callback.
  return cb(arr[arr.length-1]);
}
last(items, generalCbFn);


// Function 3
function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  if ( typeof x === 'number' && typeof y === 'number') {
    return cb(x + y);
  } else {
    console.warn('Passed arguments are not numbers. Please enter numbers and rerun the function!')
  }
}
sumNums(2, 3, generalCbFn);



// Function 4
function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  if ( typeof x === 'number' && typeof y === 'number') {
    return cb(x * y);
  } else {
    console.warn('Passed arguments are not numbers. Please enter numbers and rerun the function!')
  }
}
multiplyNums(5, 3, generalCbFn);


// Function 5
function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.

  for (i = 0; i < list.length; i++) {
    if (list[i] === item) {
      return cb(item);
    }
  }

/* Another way to do it:
  if (list.includes(item)) {
    return cb(item);
  }
*/
  return false;
}
contains('yo-yo', items, generalCbFn);




/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
  const newArr = Array.from(array);
  console.log(newArr.filter(duplicatesCb));

}

function duplicatesCb(item, index, arr) {
  return arr.indexOf(item) === index;
}

const duplArray = [1, 2, 5, 6, 2, 1, 8, 9, 5, 2, 1, 0, 9];
removeDuplicates(duplArray, duplicatesCb)