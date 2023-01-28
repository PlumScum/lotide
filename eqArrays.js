// Takes in two arrays and compares them. Returns true or false.
const eqArrays = function(array1, array2) {
  // If a parameter is empty, return a message and exit the function
  if (!array1 || !array2) {
    return "A parameter is missing or empty";
  }
  if (array1.length !== array2.length) {
    return false;
  }
  // We loop through our first array and match it with the second using indices against the arrays.
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

module.exports = eqArrays;
