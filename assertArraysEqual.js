const eqArrays = require('./eqArrays');

// Explain the function here (can include examples for padding)
const assertArraysEqual = function(array1,array2) {
  // If a parameter is empty, return a message and exit the function
  if (!array1 || !array2) {
    console.log('The arrays are empty. Use assertArraysEqual(). Example: assertArraysEqual([1,2,3], [1, 2, 3])');
    return;
  }

  // If the arrays are not the same length, return a message and exit the function
  const message = eqArrays(array1,array2) ? `✅✅✅ Assertion Passed [${array1}]=== [${array2}]` : `🛑🛑🛑 Assertion Failed [${array1}] !== [${array2}]`;
  console.log(message);
};


// assertArraysEqual([1, 2, 3], [1, 2, 6]);

module.exports = assertArraysEqual;