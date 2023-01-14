const eqObjects = require('./eqObjects');

// Using .inspect to easily turn an object into a string
const inspect = require('util').inspect;

const assertObjectsEqual = function(actual, expected) {
  // If a parameter is empty, return a message and exit the function
  if (!actual || !expected) {
    console.log('Please provide an actual and expected parameter. Example: assertObjectsEqual(actual, expected)');
    return;
  }

  // If the actual and expected objects are/are not equal, output a message
  const message = eqObjects(actual,expected) ? `✅✅✅ Assertion Passed [${inspect(actual)}] === [${inspect(expected)}]` : `🛑🛑🛑 Assertion Failed [${inspect(actual)}] !== [${inspect(expected)}]`;
  console.log(message);
};

// assertObjectsEqual("Row, row, row your boat", "Row, row, row your boat");


module.exports = assertObjectsEqual;