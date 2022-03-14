const assert = require('chai').assert;
const tail = require('../tail')

// let words = ["Lighthouse", "Bootcamp"]
// assertEqual(tail(words), "Bootcamp");

describe("#tail", () => {
  it("returns Bootcamp for [Lighthouse, Bootcamp]", () => {
    assert.strictEqual(tail(["Lighthouse", "Bootcamp"]), "Bootcamp")
  });
})