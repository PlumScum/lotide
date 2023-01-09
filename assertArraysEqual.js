const eqArrays = require('./eqArrays');

const assertArraysEqual = function(array1,array2) {
  const message = eqArrays(array1,array2) ? `✅✅✅ Assertion Passed [${array1}] === [${array2}]` : `🛑🛑🛑 Assertion Failed [${array1}] !== [${array2}]`;
  console.log(message);
};

module.exports = assertArraysEqual;