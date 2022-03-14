const assertArrayEqual = require('../assertArraysEqual');
const middle = require('../middle');


assertArrayEqual(middle([1, 2, 3, 4, 5, 6]),[3,4]) // => [3, 4]
assertArrayEqual(middle([1, 2, 3, 4, 5]),[3]) // => [3]
assertArrayEqual(middle([1, 2, 3]),[2]) // => [2]
