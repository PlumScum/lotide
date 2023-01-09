const assertEqual = require('./assertEqual');


const countLetters = function(sentence) {
  let sentenceObject = {};
  for (const character of sentence) {
    if (sentenceObject[character]) {
      sentenceObject[character] += 1;
    } else {
      sentenceObject[character] = 1;
    }
    delete sentenceObject[" "];
  }
  return sentenceObject;
};

console.log(countLetters("Let our house light the way!"));