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

// assertArraysEqual([1, 2, 3], [1, 2, 5], true);


const middle = function(array1) {
  if (array1.length <= 2) {
    return [];
  } else if (array1.length % 2 !== 0) {
    return [array1[array1.length / 2 - .5]];
  } else {
    return [array1[array1.length / 2 - 1], array1[array1.length / 2]];
  }
    
};

assertArraysEqual(middle([1, 2, 3, 4, 5, 6, 7, 8, 9]), [5], true);

