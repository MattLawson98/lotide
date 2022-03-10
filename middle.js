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

function middle(arr1){
  let newArr = [];
  for(i = 0; i < arr1.length; i++){
    if(arr1.length / 2 === arr1[i]){
      newArr.push(arr1[(arr1[i])]);
    }
    else if((arr1.length / 2) - 1  === arr1[i]){
      newArr.push(arr1[(arr1[i])]);
    }
    else if((arr1.length - 1) / 2  === arr1[i]){
      newArr.push(arr1[(arr1[i])]);
    }
  }
  return newArr;
}
console.log(middle([1, 2, 3, 4, 5, 6])) // => [3, 4]
console.log(middle([1, 2, 3, 4, 5])) // => [3]
console.log(middle([1, 2, 3])) // => [2]
