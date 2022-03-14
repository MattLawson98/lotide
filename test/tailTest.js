const assertEqual = require('../assertEqual');
const tail = require('../tail')
let words = ["Lighthouse", "Bootcamp"]
assertEqual(tail(words), "Bootcamp");