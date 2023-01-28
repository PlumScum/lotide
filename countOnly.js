// This function takes in parameters and counts only the items that match the second paremeter.
const countOnly = function(allItems, itemsToCount) {
  // If a parameter is empty, return a message and exit the function
  if (!allItems || !itemsToCount) {
    return "A parameter is missing";
  }

  const results = {};

  // Look through all items and count for each item in the itemsToCount parameter.
  for (const item of allItems) {
    if (itemsToCount[item]) {
      if (results[item]) { // If the item exists in our results, increment by one
        results[item] += 1;
      } else { // else create the item and set it to 1
        results[item] = 1;
      }
    }
  }
  return results;
};

module.exports = countOnly;
