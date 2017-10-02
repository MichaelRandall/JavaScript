//advantage: it is light weight, the function is associated with the object's prototype
//and not each individual object

//disadvantage: you have to specify everything individually and not in one line like constructor
//also when you assign an object to a property, confusion
var workerProto = function(){};

workerProto.prototype.name = "no name specified";
workerProto.prototype.age = 0;
workerProto.prototype.location = "no location specified";
workerProto.prototype.title = "no title specified";

workerProto.prototype.printDetails = function(){
    console.log(this.name + ", " + this.age + ", " + this.location + ", " + this.title);
};

var worker1 = new workerProto();
worker1.name = "Bob";
//worker1.age = 37;
worker1.location = "IL";
worker1.title = "Chief Executive Officer";
worker1.printDetails();

console.log('age' in worker1); //returns true because there is an age property that comes from prototype
console.log(worker1.hasOwnProperty('age')); //returns false because we have commented it out
