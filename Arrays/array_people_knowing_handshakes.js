function getPeopleCountPerShake(){
  var i,j,curP,
  //p1Arr = arr,
  handShakeCt = 0;
  
  var shakes = [];
  for(var s = 0; s < 66; s++){
	shakes[s] = "sh" + s;
  }

  for(i=0; i < shakes.length; i++){
	curP = shakes.shift();
    
	
	handShakeCt += 1;
    console.log(curP + " " + shakes.length + " " + handShakeCt);
  }
  
  return handShakeCt;
}
