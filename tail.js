const assertEqual = require('./assertEqual');

//new version
function tail(array) {
  return array.pop();
}

//old version
// const tail = function(array) {
//   return array.pop();
// }

// console.log(tail([1,2,3]));

module.exports = tail;