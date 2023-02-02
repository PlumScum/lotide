// This function loops through an array and flattens it if it finds nested arrays
const flatten = function(array) {
  if (!array) {
    console.log("A parameter is empty");
    return;
  }

  const flatArray = [];


  for (arr of array) {
    if (Array.isArray(arr)) { // We loop through, if it finds an array we loop and push it to the flat array
      for (nestedArr of arr) {
        flatArray.push(nestedArr);
      }
    } else { // Otherwise, we push the value to the flat array
      flatArray.push(arr);
    }
  }

  return flatArray;
};


module.exports = flatten;
