
const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion Failed, ${actual} !== ${expected}`);
  } else {
    console.log(`✔️✔️✔️ Assertion Passed, ${actual} === ${expected}`);
  }
};


// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual(1, 1);

const head = function(array) {
  return array[0];
};

assertEqual(head([5, 6, 7]), 9);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([]));
// console.log(head([1, 2, 3]));