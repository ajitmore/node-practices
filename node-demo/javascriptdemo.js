"use strict"
// Public
// Using constructor
console.log("\nPublic section")
var Container = function(param) {
  this.member = param;
}

var newContainer = new Container('Ajit');
console.log(newContainer.member);
//prototype
Container.prototype.stamp = function (comment) {
  console.log(this.member + ' ' + comment);
};

newContainer.stamp('More')

console.log("\nPrivate section")

//Private member and variable
var priContainer = function(param) {
  //priMethod is private method, which can access private varible secret
  function priMethod () {
    if(secret > 0) {
      console.log('Greater than zero');
    } else {
      console.log('Less than zero');
    }
  };

  this.member = param;
  //this.priMethod = priMethod; // This is Privileged function, which make private method useful
  var secret = 3;
  var that = this; // param, secret and that are private variables
}
var newpriContainer = new priContainer('Ajit');
console.log(newpriContainer.member + ' ' + newpriContainer.secret);//secret is not able to access from outside
//newpriContainer.priMethod(); // It is not accessible from object, bcoz it is private method
