// This function loops through an array and flattens it if it finds nested arrays
const flatten = function(array) {
  if (!array) {
    console.log("A parameter is empty");
    return;
  }

  const flatArray = [];


  for (const nestedArray of array) {
    if (Array.isArray(nestedArray)) { // We loop through, if it finds an array we loop and push it to the flat array
      for (const item of nestedArray) {
        flatArray.push(item);
      }
    } else { // Otherwise, we push the value to the flat array
      flatArray.push(nestedArray);
    }
  }

  return flatArray;
};


module.exports = flatten;
