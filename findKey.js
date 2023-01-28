// This function takes in an object and callback and returns the first key found from the callback
const findKey = function(object, callback) {
  if (!object || !callback) {
    console.log("A parameter is empty");
    return;
  }
  
  for (let key in object) {
    if (callback(object[key]))
      return key;
  }
};

module.exports = findKey;

/* Example
  console.log((findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 3)));
*/
