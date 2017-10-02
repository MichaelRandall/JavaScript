'use strict';
//prototype properties automatically available on object instances
//object instance inherit properties from the prototype
//prototype is also an object - all objects inherit from Object and Object.prototype

//methods inherited from Object.prototype: hasOwnProperty, propertyIsEnumerable,
//isPrototypeOf, valueOf, toString

//Method 1
function Rectangle(length, width){
  this.length = length;
  this.width = width;
}
Rectangle.prototype.getArea = function(){
  return this.length * this.width;
};
Rectangle.prototype.toString = function(){
  return "[Rectangle " + this.length + " x " + this.width + "]";
};

function Square(size){
  this.length = size;
  this.width = size;
}
Square.prototype = new Rectangle();
Square.prototype.constructor = Square;
Square.prototype.toString = function(){
  return "[Square " + this.length + " x " + this.width + "]";
};

var rect = new Rectangle(5,10);
var sqr = new Square(6);

console.log(rect.getArea());
console.log(sqr.getArea());
console.log(rect.toString());
console.log(sqr.toString());
console.log(sqr instanceof Square);
console.log(sqr instanceof Rectangle);
console.log(sqr instanceof Object);

//Method 2 - utilizes Rectangle, but different from above
//in this version, you don't have to worry about causing an Error
//by calling the constructor without arguments
function SQ(size){
  this.length = size;
  this.width = size;
}

SQ.prototype = Object.create(Rectangle.prototype,{
  constructor: {
    configurable: true,
    enumerable: true,
    value: SQ,
    writable: true
  }
});

SQ.prototype.toString = function(){
  return "[Square " + this.length + " x " + this.width + "]";
};
