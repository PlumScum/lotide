// This function loops through an array and flattens it if it finds nested arrays
const flatten = function(array) {
  if (!array) {
    console.log("A parameter is empty");
    return;
  }

  const flatArray = [];


  for (array of array) {
    if (Array.isArray(array)) { // We loop through, if it finds an array we loop and push it to the flat array
      for (nestedArr of array) {
        flatArray.push(nestedArr);
      }
    } else { // Otherwise, we push the value to the flat array
      flatArray.push(array);
    }
  }

  return flatArray;
};


module.exports = flatten;
