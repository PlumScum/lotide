const eqArrays = require('./eqArrays');
const eqObjects = require('./eqObjects');

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  const message = eqObjects(actual,expected) ? `✅✅✅ Assertion Passed [${inspect(actual)}] === [${inspect(expected)}]` : `🛑🛑🛑 Assertion Failed [${inspect(actual)}] !== [${inspect(expected)}]`;
  console.log(message);
};

assertObjectsEqual({ a: '1', b: 2 }, { b: 2, a: '1' }, true);