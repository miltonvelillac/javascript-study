// BOOK: Advanced JavaScript, by Zachary Shute, Publisher: Packt Publishing, Release Date: January 2019

/* 
  When a variable is created with function scope, it's declaration automatically gets hoisted to the top of the scope.
  Hoisting means that the interpreter moves the instantiation of an entity to the top of the scope it was declared in,
  regardless of where in the scope block it is defined. Functions and variables declared using var are hoisted in JavaScript;
  that is, a function or a variable can be used before it has been declared. The following code demonstrates this,
  as follows:
*/

example = 5; // Assign value

console.log( example ); // Expect output: 5

var example; // Declare variable

/**
 * Note
    Since a hoisted variable that's been declared with var can be used before it is declared, we have to be careful to not use that
    variable before it has been assigned a value. If a variable is accessed before it has been assigned a value,
    it will return the value as undefined, which can cause problems, especially if variables are used in the global scope.
 */



 /**
  * BLOCK SCOPE
A new block scope in JavaScript is created with curly braces ({}). A pair of curly braces can be placed anywhere in the code to define a new scope block. If statements, loops, functions, and any other curly brace pairs will have their own block scope. This includes floating curly brace pairs not associated with a keyword (if, for, etc). The code in the following snippet is an example of the block scope rules:
  */

  // Top level scope

function scopeExample() {

  // Scope block 1

  for ( let i = 0; i < 10; i++ ){ /* Scope block 2 */ }

  if ( true ) { /* Scope block 3 */ } else { /* Scope block 4 */ }

  // Braces without keywords create scope blocks

  { /* Scope block 5 */ }

  // Scope block 1

}

// Top level scope

/**
 * Variables declared with the keywords let and const have block scope. When a variable is declared with block scope, it does NOT have the same variable hoisting as variables that are created in function scope. Block scoped variables are not hoisted to the top of the scope and therefore cannot be accessed until they are declared. This means that variables that are created with block scope are subject to the Temporal Dead Zone (TDZ). The TDZ is the period between when a scope is entered and when a variable is declared. It ends when the variable is declared rather than assigned. The following example demonstrates the TDZ:
 */

 // console.log( example ); // Would throw ReferenceError

let example;

console.log( example ); // Expected output: undefined

example = 5;

console.log( example ); // Expected output: 5


/**
 * Note
If a variable is accessed inside the Temporal Dead Zone, then a runtime error will be thrown. This is important because it allows our code to be built more robustly with fewer semantic errors arising from variable declaration.

To get a better understanding of scope blocks, refer to the following table:

 */

 /**
  * In summary, scope provides us with a way to separate variables and restrict access between blocks of code. Variable identifier names can be reused between blocks of scope. All new scope blocks that are created can access the parent scope, or the scope in which they were created or defined. JavaScript has two types of scope. A new function scope is created for each function defined. Variables can be added to function scope with the var keyword, and these variables are hoisted to the top of the scope. Block scope is a new ES6 feature. A new block scope is created for each set of curly braces. Variables are added to block scope with the let and const keywords. The variables that are added are not hoisted and are subject to the TDZ.
  */
