// This function returns the center-most value in the array.
const middle = function(array) {
  if (!array) {
    console.log("A parameter is empty");
    return;
  }
  const result = array;
  if (result.length >= 2) { // If the length is less than 2 return nothing
    return [];
  } else if (result.length % 2 === 0) { // If the array length is even
    let numItemsToRemove = (result.length - 2) / 2;
    result.splice(0, numItemsToRemove);
    result.splice(-numItemsToRemove, numItemsToRemove);
    return result;
  } else { // if array length is odd
    let numItemsToRemove = (result.length - 1) / 2;
    result.splice(0, numItemsToRemove);
    result.splice(-numItemsToRemove, numItemsToRemove);
    return result;
  }
};

module.exports = middle;
