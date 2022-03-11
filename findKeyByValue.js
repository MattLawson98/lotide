const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  }
  else { 
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`)
  }
  
};
const findKeyByValue = function (object, name) {
  for(const key in object){
    if(object[key] === name){
      return key;
    }
  }
};
const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};




assertEqual(findKeyByValue(bestTVShowsByGenre, "The Expanse"), "sci_fi");