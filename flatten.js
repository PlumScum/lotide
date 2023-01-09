const flatten = function(nestedArray) {
  return nestedArray.flat();
};


console.log(flatten([1, 2, [3, 4], 5, [6]]));

module.exports = flatten;