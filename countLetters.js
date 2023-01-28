// This function takes in a string and returns an object with a count of each letter.
const countLetters = function(sentence) {
  // If a parameter is empty, return a message and exit the function
  if (!sentence) {
    return "Parameter is missing";
  }

  let sentenceObject = {};
  for (const character of sentence) {
    if (sentenceObject[character]) { // If the letter exists in the object, increment by 1
      sentenceObject[character] += 1;
    } else { // else create the letter and give it a value of 1
      sentenceObject[character] = 1;
    }
  }
  delete sentenceObject[" "]; // Delete spaces afterwards for efficiency.
  return sentenceObject;
};

module.exports = countLetters;
