function without(array,remove){
  let array2 = [];
  for(i = 0; i < array.length; i++){
    if(array[i] != remove){
      array2.push(array[i]);
    }
  }
  return array2
}
function eqArrays(arr1,arr2){
  for(i = 0; i < arr1.length; i++){
    if(arr1[i] !== arr2[i]){
      return false;
    }
  }
  return true
}
const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1,arr2)) {
    console.log(`✅✅✅Assertion Passed: ${arr1} === ${arr2}`);
  }
  else { 
    console.log(`🛑🛑🛑Assertion Failed: ${arr1} !== ${arr2}`)
  }
  
};
const words = ["hello", "world", "lighthouse"];
console.log(without(words, ["lighthouse"]));
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
