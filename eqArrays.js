function eqArrays(arr1,arr2){
  if(arr1.length !== arr1.length) {
    return false;
  }
  for(let i in arr1){
    if(Array.isArray(arr1[i])){
      if(!(eqArrays(arr1[i],arr2[i]))){
        return false;
      }
    }
    if(arr1[i] !== arr2[i]){
      return false;
    } 
  }
  return true
};



module.exports = eqArrays;