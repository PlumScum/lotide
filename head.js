// Returns the first result of an array.
function head(array) {
  if (!array) {
    console.log("A parameter is empty");
    return;
  }
  return array[0];
}

module.exports = head;
