// Explain the function here
const assertEqual = function(actual, expected) {
  // If a parameter is empty, return a message and exit the function
  if (!actual || !expected) {
    console.log('The parameter is empty. Please input parameters. Example: (actual, expected)');
    return;
  }

  // If the actual and expected values are/are not the same, log a message.
  if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion Failed, ${actual} !== ${expected}`);
  } else {
    console.log(`✔️✔️✔️ Assertion Passed, ${actual} === ${expected}`);
  }
};



module.exports = assertEqual;