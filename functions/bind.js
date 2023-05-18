/**
 * As its name implies, the primary purpose of bind() is to bind a function to an object. When you invoke the bind() method on a function f and pass an object o, the method returns a new function. Invoking the new function (as a function) invokes the original function f as a method of o. Any arguments you pass to the new function are passed to the original function. For example:
 */

function f(y) { return this.x + y; } // This function needs to be bound
let o = { x : 1 };                   // An object we'll bind to
let g = f.bind(o);                   // Calling g(x) invokes f() on o
g(2)                                 // => 3


/**
 * Arrow functions inherit their this value from the environment in which they are defined, and that value cannot be overridden with bind(), so if the function f() in the code above was defined as an arrow function, the binding would not work. The most common use case for calling bind() is to make non-arrow functions behave like arrow functions, however, so this limitation on binding arrow functions is not a problem in practice.
 * 
 * 
 * The bind() method does more than just bind a function to an object, however. It can also perform partial application: any arguments you pass to bind() after the first are bound along with the this value. This partial application feature of bind() does work with arrow functions. Partial application is a common technique in functional programming and is sometimes called currying. Here are some examples of the bind() method used for partial application:
 * 
 * 
 */

let sum = (x,y) => x + y;      // Return the sum of 2 args
let succ = sum.bind(null, 1);  // Bind the first argument to 1
succ(2)  // => 3: x is bound to 1, and we pass 2 for the y argument

function f(y,z) { return this.x + y + z; }
let g = f.bind({x:1}, 2);      // Bind this and y
g(3)     // => 6: this.x is bound to 1, y is bound to 2 and z is 3





