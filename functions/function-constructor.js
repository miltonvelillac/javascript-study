/**
 * Because functions are objects, there is a Function() constructor that can be used to create new functions:
 */
const f = new Function("x", "y", "return x*y;");

/**
 * This line of code creates a new function that is more or less equivalent to a function defined with the familiar syntax:
 */

const f = function(x, y) { return x*y; }

/**
 * The Function() constructor expects any number of string arguments. The last argument is the text of the function body; it can contain arbitrary JavaScript statements, separated from each other by semicolons. All other arguments to the constructor are strings that specify the parameters names for the function. If you are defining a function that takes no arguments, you simply pass a single string—the function body—to the constructor.
 * 
 * IMPORTANT!!!!
 * Notice that the Function() constructor is not passed any argument that specifies a name for the function it creates. Like function literals, the Function() constructor creates anonymous functions.
 */


 /** There are a few points that are important to understand about the Function() constructor:
  * The Function() constructor allows JavaScript functions to be dynamically created and compiled at runtime.
  * 
  * The Function() constructor parses the function body and creates a new function object each time it is called. If the call to the constructor appears within a loop or within a frequently called function, this process can be inefficient. By contrast, nested functions and function definition expressions that appear within loops are not recompiled each time they are encountered.
  * 
  * A last, very important point about the Function() constructor is that the functions it creates do not use lexical scoping; instead, they are always compiled as if they were top-level functions, as the following code demonstrates:
  * 
  */

 let scope = "global";
 function constructFunction() {
     let scope = "local";
     return new Function("return scope");  // Does not capture the local scope!
 }
 // This line returns "global" because the function returned by the
 // Function() constructor does not use the local scope.
 constructFunction()()  // => "global"


 /**
  * The Function() constructor is best thought of as a globally-scoped version of eval() that defines new variables and functions in its own private scope. You will probably never need to use this constructor in your code.
  */






