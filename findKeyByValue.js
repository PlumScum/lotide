// This function finds a key by value. It requires an object and value to search for.
const findKeyByValue = function(object, value) {
  if (!object || !value) {
    console.log("A parameter is empty");
    return;
  }
  // Loop through each key and check to see if the value is found. If found, return the key.
  for (let key in object) {
    if ((object[key]) === value) {
      return key;
    }
  }
};

module.exports = findKeyByValue;
