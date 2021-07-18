const PI = 3.14;
PI = 42; // stop me from doing this!

console.log(PI)

// What is the difference between var and let?
// -> You can redeclare a variable with var. Var is also hoisted to the top of applications. Let exists in block scope.

// What is the difference between var and const?
// -> const cannot be reassigned or redeclared.

// What is the difference between let and const?
// ->  let and const also have block scope, however, let can be reassigned and const cannot.

// What is hoisting?
//  Hoisting means that your declaration is metaphorically hoisted to the top of the application. Vars will be hoisted to the top, as in declared immmediately when an application is run.  Let and const do not do this, they are declared sequentially, meaning referencing a const or let before it is declared will return undefined.
