const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');

assertEqual(eqArrays(eqArrays([1, 2, 3], [1, 2, 3],)), true);