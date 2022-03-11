function eqArrays(arr1,arr2){
  for(i = 0; i < arr1.length; i++){
    if(arr1[i] !== arr2[i]){
      return false;
    }
  }
  return true
}
const assertArrayEqual = function(arr1, arr2) {
  if (eqArrays(arr1,arr2)) {
    console.log(`✅✅✅Assertion Passed: ${arr1} === ${arr2}`);
  }
  else { 
    console.log(`🛑🛑🛑Assertion Failed: ${arr1} !== ${arr2}`)
  }
  
};

const words = ["ground", "control", "to", "major", "tom"];
const map = function(array, callback) {
  const results = [];
  for(let item of array){
    results.push(callback(item));
  }
 
  return results;
}
const results1 = map(words, word => word[0]);

assertArrayEqual(map(words, word => word[0]),map(words, word => word[0]));
assertArrayEqual(map(words, word => word),map(words, word => word));
assertArrayEqual(map(words, word => word.length),map(words, word => word.length));