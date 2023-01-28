const eqArrays = require('./eqArrays.js');

// Takes two objects and compares them
const eqObjects = function(object1, object2) {
  // If a parameter is empty, return a message and exit the function
  if (!object1 || !object2) {
    return "Parameter is empty";
  }

  // Declare our object keys
  const object1Keys = Object.keys(object1);
  const object2Keys = Object.keys(object2);

  // If both objects dont equal the same length, return false
  if (object1Keys.length !== object2Keys.length) {
    return false;
  }

  for (const key of object1Keys) {
    // We loop our keys against both objects to make sure they are arrays. Then return false if they do not match.
    // Otherwise return true.
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      // If the arrays do not match return false.
      // Without this statement, it will still return true because they pass as arrays.
      if (!eqArrays(object1[key], object2[key])) {
        return false;
      }
    } else if (object1[key] !== object2[key]) {
      return false;
    }
  }
  return true;
};

module.exports = eqObjects;
