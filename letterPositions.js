// This function takes in a string and returns each letter and a list of index positions for each letter.
const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    // If string is not empty
    if (sentence[i] !== " ") {
      if (results[sentence[i]]) { // if letter exists, push the index to it.
        results[sentence[i]].push(i);
      } else {
        results[sentence[i]] = [i]; // otherwise, create and store the index
      }
    }
  }
  return results;
};

module.exports = letterPositions;
