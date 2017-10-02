//behaves like a class in Java
var workerConstructor = function(name, age, location, position){
    this.name = name;
    this.age = age;
    this.location = location;
    this.position = position;

    this.printDetails = function(){
        console.log(this.name + ", " + this.age + ", " + this.location + ", " + this.position);
    };
};

var worker1 = new workerConstructor("Bob",45,"WA","Chief Executive Officer");
var worker2 = new workerConstructor("Marge",36,"OR","Marketing Manager");
var worker3 = new workerConstructor("Prince",37,"WA","Chief Technical Officer");

worker1.printDetails();
worker2.printDetails();

//problem - each new object has its own methods which is a waste of resources
