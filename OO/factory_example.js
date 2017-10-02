var peopleFactory = function(name, age, location){
	var tempPer = {};

	tempPer.name = name;	
	tempPer.age = age;
	tempPer.location = location;

	tempPer.printDetails = function(){
	    console.log(this.name + ", " + this.age + ", " + this.location);
	};

	return tempPer;
}

var bigManager = peopleFactory("Marge",45,"OR");
var smallEmployee = peopleFactory("Willy",36,"WA");

bigManager.printDetails();
smallEmployee.printDetails();
