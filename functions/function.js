/**
 * The return statement causes the function to stop executing and to return the value of its expression (if any) to the caller. If the return statement does not have an associated expression, the return value of the function is undefined. If a function does not contain a return statement, it simply executes each statement in the function body and returns the undefined value to the caller.
 */


 /** Function Definition Expressions
  *  Note that the function name is optional for functions defined as expressions, and most of the function definition expressions above omit it. A function declaration statement actually declares a variable and assigns a function object to it. A function definition expression, on the other hand, does not declare a variable: it is up to you to assign the newly-defined function object to a constant or variable if you are going to need to refer to it multiple times
  *
  */

// This function expression defines a function that squares its argument.
// Note that we assign it to a variable
const square = function(x) { return x*x; }

// Function expressions can include names, which is useful for recursion.
const f = function fact(x) { if (x <= 1) return 1; else return x*fact(x-1); };

// Function expressions can also be used as arguments to other functions:
[3,2,1].sort(function(a,b) { return a-b; });

// Function expressions are sometimes defined and immediately invoked:
let tensquared = (function(x) {return x*x;}(10));

/**
 * If a function definition expression includes a name, the local function scope for that function will include a binding of that name to the function object. In effect, the function name becomes a local variable within the function. Most functions defined as expressions do not need names, which makes their definition more compact 
 * Variable declarations are hoisted, but assignments to those variables are not hoisted, so functions defined with expressions cannot be invoked before they are defined
 * 
 */

 /**
  * For function invocation in nonstrict mode (and prior to ES5 which defined strict mode), the invocation context (the this value) is the global object. In strict mode, however, the invocation context is undefined. Note that in ES6 and later functions defined using the arrow syntax behave differently: they always inherit the this value that is in effect where they are defined.
  */