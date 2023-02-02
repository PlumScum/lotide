const assert = require('chai').assert;
const eqArrays = require('../eqArrays');


describe("#eqArrays", () => {
  it("returns false when the array lengths aren't the same", () => {
    assert.deepEqual(eqArrays([1, 2, 3, 4], [1, 2, 3]), false);
  });

  it("returns false when the array lengths ARE the same, but don't match", () => {
    assert.deepEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);
  });

  it("returns true when the arrays match", () => {
    assert.deepEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
  });
});

