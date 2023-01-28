// Without takes in two arrays. The first array is the input and the second array excludes from the input array.
// This function should return an array without the excluded values
const without = function(sourceArray, itemsToRemoveArray) {
  // If a parameter is empty, return a message and exit the function
  if (sourceArray === null || itemsToRemoveArray === null) {
    console.log("A parameter is empty");
    return;
  }
  const results = [];
  for (const value of sourceArray) {
    // If a value is not excluded, push it into our new array.
    if (!itemsToRemoveArray.includes(value)) {
      results.push(value);
    }
  }
  return results;
};

module.exports = without;
