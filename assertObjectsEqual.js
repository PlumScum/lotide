const eqObjects = require('./eqObjects');

// This helps with inspecting an object and keeps the code short.
const inspect = require('util').inspect;

// This asserts whether an object is equal or not.
const assertObjectsEqual = function(actual, expected) {
  // If a parameter is empty, return a message and exit the function
  if (!actual || !expected) {
    console.log("Parameter is empty");
    return;
  }
  const message = eqObjects(actual,expected) ? `✅✅✅ Assertion Passed [${inspect(actual)}] === [${inspect(expected)}]` : `🛑🛑🛑 Assertion Failed [${inspect(actual)}] !== [${inspect(expected)}]`;
  console.log(message);
};

module.exports = assertObjectsEqual;
