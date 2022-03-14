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

module.exports = middle;
