//compare lengths of two arrays and returns true or false
const eqArrays = function(array1, array2) {
  // If a parameter is null, blank, return a message and exit the function
  if (!array1 || !array2) {
    console.log("Error: One or more arrays are invalid.");
    return false;
  }
  
  //compare lengths of two arrays and returns true or false
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

// console.log(eqArrays([1, 2, 3], [1, 2, 4]));

module.exports = eqArrays;
