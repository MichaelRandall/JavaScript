'use strict';
//constructor function for classes which are blueprints for objects
function Person(fname,lname){
  this.fname = fname;
  this.lname = lname;
}

Person.prototype.getFullName = function(){
  //without this, this would not work.
  //This refers to the person object that is created from Person class
  //and its properties
  return this.fname + " " + this.lname + " " + this;
};

Person.prototype.shoutName = function(){
  var bigName = this.fname + " " + this;
  return bigName.toUpperCase();
};


function Transportation(){
  this.type = "truck";
}
