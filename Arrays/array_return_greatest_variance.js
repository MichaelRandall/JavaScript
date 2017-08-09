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
    }
  }
  for(var k = 0; k < elemHldArr.length; k++){
    //console.log(elemHldArr[k].toString() + "\n");
  }
  //console.log("Array of difference values: " + valHldrArr);
  //console.log("Array of initial values: " + arr);
  var biggie = Math.max.apply(Math,valHldrArr);
  var smalls = Math.min.apply(Math,valHldrArr);
  //console.log(biggie + " : " + smalls);

  var b = valHldrArr.reduceRight(function(prev, cur){ return prev + cur;});

  //console.log("This is all diff values added: " + b);
  return biggie;
}


function compare(el,ar){
	var topHolder = [];
	for(var i = 0; i < ar.length; i++){
		if(el < ar[i]);
		topHolder.push(el - ar[i]);
	}	
	return Math.max.apply(topHolder)
}

function getMaxVar2(arr,callback){
	
	var countString, i,
	arrLen = arr.length,
	valHldrArr = [];
	
	//countString += arrLen.toString();
	for(i = 0; i<arrLen; i++){
		var topEl = arr.shift();
		var dif = compare(topEl,arr);
	}

	//return countString;
}
