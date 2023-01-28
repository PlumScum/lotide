// This function takes in two paremeters and compares them with the second parameter being the expected result.
const assertEqual = function(actual, expected) {
  // If a parameter is empty, return a message and exit the function
  if (!actual || !expected) {
    return "Paremeter is empty";
  }

  // If actual is not expected fail the assertion, otherwise pass.
  if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion Failed, ${actual} !== ${expected}`);
  } else {
    console.log(`✔️✔️✔️ Assertion Passed, ${actual} === ${expected}`);
  }
};

module.exports = assertEqual;
