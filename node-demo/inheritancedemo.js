"use strict"
// Parent class with setValue, getValue and toString method
function Parent(value) {
  var setValue = function (value) {
    this.value = value;
    return this;
  },
  getValue = function() {
    return this.value;
  },
  toString = function() {
    return '(' + this.getValue() + ')';
  };

  this.setValue = setValue;
  this.getValue = getValue;
  this.toString = toString;
  this.setValue(value);//Initialize setValue
}

var myParent = new Parent('Ajit'); //Object initialization of Parent
console.log(myParent.toString()); // Called toString method only

Child.prototype = new Parent(); // Child class inheriting from Parent
Child.prototype.constructor = Child; // constructor method is added for class Child

function Child(value) {
  this.setValue(value);
}

//Overriding toString method of Parent class
Child.prototype.toString = function() {
  return '-' + this.getValue() + '-';
}

var mynewParent = new Parent('AjitMore');
console.log(mynewParent.toString());
var myChild = new Child('More'); // Child class object initialization
console.log(myChild.toString()); // Overridden toString method
