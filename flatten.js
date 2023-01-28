// This function loops through an array and flattens it if it finds nested arrays
const flatten = function(array) {
  if (!array) {
    console.log("A parameter is empty");
    return;
  }

  const flatarray = [];


  for (arr of array) {
    if (Array.isArray(arr)) { // We loop through, if it finds an array we loop and push it to the flat array
      for (nestedarr of arr) {
        flatarray.push(nestedarr);
      }
    } else { // Otherwise, we push the value to the flat array
      flatarray.push(arr);
    }
  }

  return flatarray;
};


module.exports = flatten;
