// This function takes in an array and uses a callback to build and return a result
const takeUntil = function(array, callback) {
  if (array === null || callback === null) {
    console.log("A parameter is empty");
    return;
  }

  let result = [];

  // Loop through our array and callback to build our returned result
  for (let i = 0; i < array.length; i++) {
    if (!callback(array[i])) {
      result.push(array[i]);
    } else {
      break;
    }
  }

  return result;
};

module.exports = takeUntil;
