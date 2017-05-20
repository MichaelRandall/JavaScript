function returnUnique(arr){
  var i,
  arrLength = arr.length,
  obj = {},
  results = [];

  //If obj doesn't have a property that corresponds to array value, it creates it
  //If obj does have the property, that means it was created from previous value in array
  //and it sets that previous value to zero.
  for (i=0; i < arrLength; i++){
    obj[arr[i]] = 0;
  }
  //loops through object and passes each key-name of the object property to results array
  for (i in obj){
    results.push(i);
  }

  return results;
}
