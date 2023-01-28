// This function takes in an array and callback and returns a new array based on the callback
const map = function(array, callback) {
  if (!array || !callback) {
    console.log("A parameter is empty");
    return;
  }
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

module.exports = map;

// Example:
// const words = ["ground", "control", "to", "major", "tom"];
// const results = map(words, word => word[0]);
// console.log(results);
