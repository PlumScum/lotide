// const assertEqual = require('../assertEqual');
// const eqArrays = require('../eqArrays');

// assertEqual(eqArrays(eqArrays([1, 2, 3], [1, 2, 3],)), true);

const assert = require('chai').assert;
const eqArrays = require('../eqArrays');


describe("#eqArrays", () => {
  it("returns false when the array lengths aren't the same", () => {
    assert.strictEqual(eqArrays([1, 2, 3, 4], [1, 2, 3]), false);
  });

  it("returns false when the array lengths ARE the same, but don't match", () => {
    assert.strictEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);
  });

  it("returns true when the arrays match", () => {
    assert.strictEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
  });
});

