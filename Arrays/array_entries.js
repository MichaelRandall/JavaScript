function getEntries(myArr){
  var psuedoObj = [],

  //.entries returns an iterator
  iterator = myArr.entries();

  for(let entry of iterator){
    psuedoObj.push(entry);
  }

  return psuedoObj;
}
