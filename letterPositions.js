const eqArrays = require("./eqArrays");


const assertArraysEqual = function(array1, array2, assertArg) {
  if (eqArrays(array1, array2) === assertArg) {
    console.log(`✔️✔️✔️ Assertion Passed, ${array1} and ${array2} === ${assertArg}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed, ${array1} and ${array2} !== ${assertArg}`);
  }
};



const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] !== " ") {
      if (results[sentence[i]]) {
        results[sentence[i]].push(i);
      } else {
        results[sentence[i]] = [i];
      }
    }
  }
  return results;
};


console.log(letterPositions("lighthouse in the house"));

module.exports = letterPositions;