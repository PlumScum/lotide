const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion Failed, ${actual} !== ${expected}`);
  } else {
    console.log(`✔️✔️✔️ Assertion Passed, ${actual} === ${expected}`);
  }
};


const bestTVShowsByGenre = {
  sciFi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire"
};


function findKeyByValue(object, value) {
  for (let genre in object) {
    if (object[genre] === value) {
      return genre;
    }
  }
}



assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);