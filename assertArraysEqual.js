const eqArrays = require('./eqArrays');

// Takes in two arrays and asserts if they are equal or not.
const assertArraysEqual = function(array1,array2) {
  // If a parameter is empty, return a message and exit the function
  if (!array1 || !array2) {
    return "Parameter is missing";
  }
  const message = eqArrays(array1,array2) ? `✅✅✅ Assertion Passed [${array1}] === [${array2}]` : `🛑🛑🛑 Assertion Failed [${array1}] !== [${array2}]`;
  console.log(message);
};

module.exports = assertArraysEqual;
