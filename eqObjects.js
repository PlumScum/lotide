const eqArrays = require('./eqArrays.js');

//Compares object keys and values
const eqObjects = function(object1 = null, object2 = null) {
  // If a parameter is empty, return a message and exit the function
  if (!object1 || !object2) {
    console.log("Error: No objects to compare");
    return;
  }
  

  // Declare our object keys
  const object1Keys = Object.keys(object1);
  const object2Keys = Object.keys(object2);

  // If both objects dont equal the same length, return false
  if (object1Keys.length !== object2Keys.length) {
    return false;
  }

  // We loop our keys against both objects to make sure they are arrays. Then return false if they do not match.
  // Otherwise return true.
  for (const key of object1Keys) {
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      return eqArrays(object1[key], object2[key]);
    } else if (object1[key] !== object2[key]) {
      return false;
    }
  }
  return true;
};

module.exports = eqObjects;
