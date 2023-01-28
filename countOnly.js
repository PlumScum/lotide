const countOnly = function(allItems, itemsToCount) {
  // If a parameter is empty, return a message and exit the function
  if (!allItems || !itemsToCount) {
    console.log("Please enter a valid input. Example: (array of strings, what to count)");
    return;
  }


  
  const results = {};

  // Loop through each item in the array. I'm using the for loop because it's what I've learned at the given moment.
  for (const item of allItems) {
    if (itemsToCount[item]) {
      if (results[item]) {
        results[item] += 1; //If key exists, increment count by 1
      } else {
        results[item] = 1; //If key does not exist  yet, create key
      }
    }
  }
  return results;
};


module.exports = countOnly;
