// tail() takes in an array and returns everything except for the first value
function tail(array) {
  // If a parameter is empty, return a message and exit the function
  if (!array) {
    console.log('The parameter is empty. Please input parameters.');
    return;
  }

  const result = [];
  // Iterate through our input array and push them to our result if
  for (let i = 0; i < array.length; i++) {
    if (i !== 0) {
      result.push(array[i]);
    }
  }
  return result;
}


module.exports = tail;
