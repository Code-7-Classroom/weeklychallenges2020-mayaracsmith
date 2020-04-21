// VERY EASY: What is the difference between the following JavaScript keywords: var, let and const.  
// Please provide a written explanation. You are able to include a code reference along with your written 
// explanation for each keyword.



// Before ES6, JavaScript had only two types of scope: Global Scope and Function Scope. 
// Variables declared with the var keyword can not have Block Scope. Variables declared inside a block {} can be 
// accessed from outside the block.
{
    var x = 2;
  }
  // x CAN be used here

// ES6 introduced two important new JavaScript keywords: let and const.
// These two keywords provide Block Scope variables (and constants) in JavaScript.

// Variables declared with the let keyword can have Block Scope. Variables declared inside a block {} can not 
// be accessed from outside the block:
{
    let x = 2;
  }
// x can NOT be used here


// Redeclaring Variables

// Redeclaring a variable using the var keyword can impose problems.
// Redeclaring a variable inside a block will also redeclare the variable outside the block:
var x = 10;
// Here x is 10
{
  var x = 2;
  // Here x is 2
}
// Here x is 2


// Redeclaring a variable using the let keyword can solve this problem.
// Redeclaring a variable inside a block will not redeclare the variable outside the block:
var x = 10;
// Here x is 10
{
  let x = 2;
  // Here x is 2
}
// Here x is 10

// CONST
// Variables defined with const behave like let variables, except they cannot be reassigned:
const PI = 3.141592653589793;
PI = 3.14;      // This will give an error
PI = PI + 10;   // This will also give an error