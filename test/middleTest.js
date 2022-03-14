const assert = require('chai').assert;
const middle = require('../middle');


// assertArrayEqual(middle([1, 2, 3, 4, 5, 6]),[3,4]) // => [3, 4]
// assertArrayEqual(middle([1, 2, 3, 4, 5]),[3]) // => [3]
// assertArrayEqual(middle([1, 2, 3]),[2]) // => [2]

describe("#middle", () => {
  it("returns [3,4] for [1, 2, 3, 4, 5, 6]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4])
  });
  it("returns [3] for [1, 2, 3, 4, 5]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5]), [3])
  });
  it("returns [2] for [1, 2, 3]", () => {
    assert.deepEqual(middle([1, 2, 3]), [2])
  });
})