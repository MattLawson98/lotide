const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  }
  else { 
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`)
  }
  
}; 
function head(actual) {
  var head = actual[0]; 
  return head;
}

assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");