function getMaxVariance(arr){
  var i,j,
  arrLen = arr.length,
  elemHldArr = [],
  valHldrArr = [],
  bigVar = 0;

  for(i = 0; i < arrLen; i++){
    //console.log("Begin loop array-i = " + arr[i]);
    for(j = i; j < arrLen; j++){
    //console.log("Begin loop array-j = " + arr[j]);
      if(arr[i] < arr[j]){
        elemHldArr.push([arr[i],arr[j]]);
        valHldrArr.push(arr[j] - arr[i]);
      }
      // if(arr[i] < arr[j]){
      //   console.log("arrayi is less than arrayj - subtrack i from j");
      //   var ai = arr[i];
      //   var aj = arr[j];
      //   console.log("arrayi = " + arr[i] + ", arrayj = " + arr[j] + ". The difference is: " + (arr[j] - arr[i]));
      //   hldArr.push(aj - ai);
      //   //console.log("Ai: " + arr[i] + " Aj: " + arr[j]);
      //   //bigVar = arr[j] - arr[i];
      // }else{
      //   console.log("arrayi is greater than or equal to arrayj - do nothing with it");
      // }
    }
  }
  for(var k = 0; k < elemHldArr.length; k++){
    console.log(elemHldArr[k].toString() + "\n");
  }
  console.log("Array of difference values: " + valHldrArr);
  console.log("Array of initial values: " + arr);
  var biggie = Math.max.apply(Math,valHldrArr);
  var smalls = Math.min.apply(Math,valHldrArr);
  console.log(biggie + " : " + smalls);

  var b = valHldrArr.reduceRight(function(prev, cur){ return prev + cur;});

  console.log("This is all diff values added: " + b);
  return biggie;
}
