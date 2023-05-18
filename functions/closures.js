/**
 * Closures are functions that work with other or others functions into them, those functions that are into the main function
 * can mantain their state
 * 
 */

 /**
  * Technically, all JavaScript functions are closures, but because most functions are invoked from the same scope that they were defined in,
  * it normally doesn’t really matter that there is a closure involved. Closures become interesting when they are invoked from a different
  * scope than the one they were defined in. This happens most commonly when a nested function object is returned from the function within
  * which it was defined. There are a number of powerful programming techniques that involve this kind of nested function closures,
  * and their use has become relatively common in JavaScript programming. Closures may seem confusing when you first encounter them,
  * but it is important that you understand them well enough to use them comfortably.
  * 
  * The first step to understanding closures is to review the lexical scoping rules for nested functions. Consider the following code
  */

 let scope = "global scope";          // A global variable
 function checkscope() {
     let scope = "local scope";       // A local variable
     function f() { return scope; }   // Return the value in scope here
     return f();
 }
 checkscope()                         // => "local scope"


 /**
  * The checkscope() function declares a local variable and then defines and invokes a function that returns the value of that variable.
  * It should be clear to you why the call to checkscope() returns “local scope”. Now let’s change the code just slightly.
  * Can you tell what this code will return?
  */

 var scope = "global scope";          // A global variable
 function checkscope() {
     var scope = "local scope";       // A local variable
     function f(a) { return scope + ' ' + a; }   // Return the value in scope here
     return f;
 }
 checkscope()('hello')                       // What does this return? R/: local scope hello


 /**
  * Remember the fundamental rule of lexical scoping: JavaScript functions are executed using the scope they were defined in.
  * The nested function f() was defined in a scope where the variable scope was bound to the value “local scope”.
  * That binding is still in effect when f is executed, no matter where it is executed from.
  * So the last line of code above returns “local scope”, not “global scope”. This, in a nutshell, is the surprising and powerful nature
  * of closures: they capture the local variable (and parameter) bindings of the outer function within which they are defined.
  */

  /**
   * we defined a uniqueInteger() function that used a property of the function itself to keep track of the next value to be returned. A shortcoming of that approach is that buggy or malicious code could reset the counter or set it to a noninteger, causing the uniqueInteger() function to violate the “unique” or the “integer” part of its contract. Closures capture the local variables of a single function invocation and can use those variables as private state. Here is how we could rewrite the uniqueInteger() using an immediately invoked function expression to define a namespace and a closure that uses that namespace to keep its state private:
   */

  let uniqueInteger = (function() {          // Define and invoke
    let counter = 0;  // Private state of function below
    return function() { return counter++; };
}());
uniqueInteger()  // => 0
uniqueInteger()  // => 1


/** IMPORTANT!!
 * Private variables like counter need not be exclusive to a single closure: it is perfectly possible for two or more nested functions to be defined within the same outer function and share the same scope. Consider the following code:
 * 
 * 
 * The counter() function returns a “counter” object. This object has two methods: count() returns the next integer, and reset() resets the internal state. The first thing to understand is that the two methods share access to the private variable n. The second thing to understand is that each invocation of counter() creates a new scope–independent of the scopes used by previous invocations–and a new private variable within that scope. So if you call counter() twice, you get two counter objects with different private variables. Calling count() or reset() on one counter object has no effect on the other.
 */

function counter() {
    let n = 0;
    return {
        count: function() { return n++; },
        reset: function() { n = 0; }
    };
}

let c = counter(), d = counter();   // Create two counters
c.count()                           // => 0
d.count()                           // => 0: they count independently
c.reset()                           // reset() and count() methods share state
c.count()                           // => 0: because we reset c
d.count()                           // => 1: d was not reset



/**
 * The following version of the counter() function is a variation on code that appeared earlier, but it uses closures for private state rather
 * than relying on a regular object property:
 */

function counter(n) {  // Function argument n is the private variable
    return {
        // Property getter method returns and increments private counter var.
        get count() { return n++; },
        // Property setter doesn't allow the value of n to decrease
        set count(m) {
            if (m > n) n = m;
            else throw Error("count can only be set to a larger value");
        }
    };
}

let c = counter(1000);
c.count            // => 1000
c.count            // => 1001
c.count = 2000
c.count            // => 2000
c.count = 2000     // !Error: count can only be set to a larger value


/**
 * The next example is a generalization of the shared private state through closures technique we’ve been demonstrating here. This example defines an addPrivateProperty() function that defines a private variable and two nested functions to get and set the value of that variable. It adds these nested functions as methods of the object you specify:
 */


 // This function adds property accessor methods for a property with
// the specified name to the object o.  The methods are named get<name>
// and set<name>.  If a predicate function is supplied, the setter
// method uses it to test its argument for validity before storing it.
// If the predicate returns false, the setter method throws an exception.
//
// The unusual thing about this function is that the property value
// that is manipulated by the getter and setter methods is not stored in
// the object o.  Instead, the value is stored only in a local variable
// in this function.  The getter and setter methods are also defined
// locally to this function and therefore have access to this local variable.
// This means that the value is private to the two accessor methods, and it
// cannot be set or modified except through the setter method.
function addPrivateProperty(o, name, predicate) {
    let value;  // This is the property value

    // The getter method simply returns the value.
    o["get" + name] = function() { return value; };

    // The setter method stores the value or throws an exception if
    // the predicate rejects the value.
    o["set" + name] = function(v) {
        if (predicate && !predicate(v))
            throw Error("set" + name + ": invalid value " + v);
        else
            value = v;
    };
}

// The following code demonstrates the addPrivateProperty() method.
let o = {};  // Here is an empty object

// Add property accessor methods getName and setName()
// Ensure that only string values are allowed
addPrivateProperty(o, "Name", function(x) { return typeof x == "string"; });

o.setName("Frank");       // Set the property value
o.getName()               // => "Frank"
o.setName(0);             // !Error: try to set a value of the wrong type


/**
 * We’ve now seen a number of examples in which two closures are defined in the same scope and share access to the same private variable or variables. This is an important technique, but it is just as important to recognize when closures inadvertently share access to a variable that they should not share. Consider the following code:
 */

// This function returns a function that always returns v
function constfunc(v) { return () => v; }

// Create an array of constant functions:
let funcs = [];
for(var i = 0; i < 10; i++) funcs[i] = constfunc(i);

// The function at array element 5 returns the value 5.
funcs[5]()    // => 5


/**
 * When working with code like this that creates multiple closures using a loop, it is a common error to try to move the loop within the function that defines the closures. Think about the following code, for example:
 */

 // Return an array of functions that return the values 0-9
function constfuncs() {
    let funcs = [];
    for(var i = 0; i < 10; i++)
       funcs[i] = () => i
    return funcs;
}

let funcs = constfuncs();
funcs[5]()    // => 10; Why doesn't this return 5?


/**
 * The code above creates 10 closures, and stores them in an array. The closures are all defined within the same invocation of the function, so they share access to the variable i. When constfuncs() returns, the value of the variable i is 10, and all 10 closures share this value. Therefore, all the functions in the returned array of functions return the same value, which is not what we wanted at all. It is important to remember that the scope associated with a closure is “live.” Nested functions do not make private copies of the scope or make static snapshots of the variable bindings. Fundamentally, the problem here is that variables declared with var are defined throughout the function. Our for loop above declares the loop variable with var i, so the variable i is defined throughout the function rather than being more narrowly scoped to the body of the loop. The code above demonstrates a common category of bugs in ES5 and before, but the introduction of block-scoped variables in ES6 addresses the issue. If we just replace the var with a let or a const, the the problem goes away. Because let and const are block scoped, each iteration of the loop defines a scope that is independent of the scopes for all other iterations, and each of these scopes has its own independent binding of i.
 */

 /** IMPORTANT !!!!
  * Another thing to remember when writing closures is that this is a JavaScript keyword, not a variable. As discussed earlier,
  * arrow functions inherit the this value of the function that contains them, but functions defined with the function keyword do not. So if you’re writing a closure that needs to use the this value of its containing function, you should use an arrow function, or call bind() on the closure before returning it, or assign the outer this value to a variable that your closure will inherit:
  */

 const self = this;  // Make the this value available to nested functions


