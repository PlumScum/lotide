
const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};


const assertArraysEqual = function(array1, array2, assertArg) {
  if (eqArrays(array1, array2) === assertArg) {
    console.log(`✔️✔️✔️ Assertion Passed, ${array1} and ${array2} === ${assertArg}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed, ${array1} and ${array2} !== ${assertArg}`);
  }
};

assertArraysEqual([1, 2, 3], [1, 2, 3], true);

const without = function(sourceArray, itemsToRemoveArray) {
  let copiedArray = [];
  for (let i = 0; i < sourceArray.length; i++) {
    copiedArray.push(sourceArray[i]);
  }
  for (let q = 0; q < itemsToRemoveArray.length; q++) {
    for (let u = 0; u < copiedArray.length; u++) {
      if (itemsToRemoveArray[q] === copiedArray[u]) {
        copiedArray.splice(copiedArray[u - 1], 1);
      }
    }
  }
  return copiedArray;
};

console.log(without([1, 2, 3], [1]));
console.log(without(["1", "2", "3"], [1, 2, "3"]));