function returnDuplicatesArray(myArr){
  let results = [];

  myArr.forEach(function(element, index){
    if(myArr.indexOf(element, index + 1) > -1){
      if(results.indexOf(element) === -1){
        results.push(element);
      }
    }
  });

  return results;
}
