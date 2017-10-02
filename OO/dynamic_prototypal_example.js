var workerDynaProto = function(name = "No name specified", age = 0, location = "No location specified", title = "No title specified"){
  if(arguments.length < 4){
  		//var argArr = Array.from(arguments);
      console.log(Array.from(arguments).toString());
      throw new Error("You don't have enough arguments " + arguments.length);
  }
  if(title === undefined || title == "No title specified"){
      throw new Error("Missing parameter");
  }
  this.name = name || "No name specified";
  this.age = age || 0;
  this.location = location || "No location specified";
  this.title = title || "No title specified";

  //If an object has not been created using this constructor, add a create a method for the prototype
  if(typeof this.printDetails !== 'function'){
    workerDynaProto.prototype.printDetails = function(){
      console.log(this.name + ", " + this.age + ", " + this.location + ", " + this.title);
    };
  }
};


var worker1 = new workerDynaProto("Mike","OR","General manager");

worker1.printDetails();
