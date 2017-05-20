function returnDuplicatesObject(arr){
  var i,
  arrLength = arr.length,
  obj = {},
  results = [];


  for (i=0; i < arrLength; i++){
    if(typeof(obj[arr[i]]) === "undefined"){
      obj[arr[i]] = 0;
    }else{
      results.push(arr[i]);
    }
  }
  return results;
}
