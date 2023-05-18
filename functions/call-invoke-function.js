/**
 * call() and apply() allow you to indirectly invoke (§4.2.4) a function as if it were a method of some other object. The first argument to both call() and apply() is the object on which the function is to be invoked; this argument is the invocation context and becomes the value of the this keyword within the body of the function. To invoke the function f() as a method of the object o (passing no arguments), you could use either call() or apply()
 */

f.call(o);
f.apply(o);

/**
 * Either of the lines of code above are similar to the following (which assume that o does not already have a property named m):
 */

o.m = f;     // Make f a temporary method of o.
o.m();       // Invoke it, passing no arguments.
delete o.m;  // Remove the temporary method.

/**
 * Remember that arrow functions inherit the this value of the context where they are defined. This cannot be overridden with the call() and apply() methods. If you call either of those methods on an arrow function, the first argument is effectively ignored.
 */

 /**
  * Any arguments to call() after the first invocation context argument are the values that are passed to the function that is invoked (and these arguments are not ignored for arrow functions). For example, to pass two numbers to the function f() and invoke it as if it were a method of the object o, you could use code like this:
  */

 f.call(o, 1, 2);

 /**
  * The apply() method is like the call() method, except that the arguments to be passed to the function are specified as an array:
  */

 f.apply(o, [1,2]);


 /**
  * If a function is defined to accept an arbitrary number of arguments, the apply() method allows you to invoke that function on the contents of an array of arbitrary length. In ES6 and later we can just use the spread operator, but you may see ES5 code that uses apply instead. For example, to find the largest number in an array of numbers, without using the spread operator you could use the apply() method to pass the elements of the array to the Math.max() function:
  */

 let biggest = Math.max.apply(Math, array_of_numbers);

    