const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion Failed, ${actual} !== ${expected}`);
  } else {
    console.log(`✔️✔️✔️ Assertion Passed, ${actual} === ${expected}`);
  }
};

const tail = arr => (arr.length > 1 ? arr.slice(1) : arr);

// console.log(tail(["Hello", "Lighthouse", "Labs"]));

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words);
assertEqual(words.length, 3);

console.log(tail(words));


 










// Create a tail function that returns the tails of an array;
// Function should not modify the array that is passed; should return new array




// const tail = function(array) {
//   return array.shift();
// };