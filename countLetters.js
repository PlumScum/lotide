const countLetters = function(sentence) {
  // If a parameter is empty, return a message and exit the function
  if (!sentence) {
    console.log("Please enter a sentence");
    return;
  }

  //Declare a object and loop through the sentence character by character, saving each character and returning a corresponding count of characters
  let sentenceObject = {};
  for (const character of sentence) {
    if (sentenceObject[character]) {
      sentenceObject[character] += 1; //If key exists, increment count by 1
    } else {
      sentenceObject[character] = 1; //If key does not exist  yet, create key
    }
  }
  delete sentenceObject[" "]; //Remove spaces from object
  return sentenceObject;
};



// console.log(countLetters("Let our house light the way!"));

module.exports = countLetters;