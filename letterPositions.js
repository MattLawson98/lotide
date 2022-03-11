const letterPositions = function(sentence) {
  const results = {};
  for(let i = 0; i < sentence.length; i++){
    const string = sentence[i];
    if(string !== " "){
      if(!results[string]){
        results[string] = [i];
      }
      else{
        results[string].push(i);
      }
    }
  }
  return results;
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
assertArraysEqual(letterPositions("hello").l, [2,3]);