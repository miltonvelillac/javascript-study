/** Classes and Prototypes
 * In JavaScript, a class is a set of objects that inherit properties from the same prototype object. The prototype object,
 * therefore, is the central feature of a class. If we define a prototype object, and then use Object.create() to create
 * objects that inherit from it, we have defined a JavaScript class. Usually, the instances of a class require further
 * initialization, and it is common to define a function that creates and initializes the new object. Example 5-1
 * demonstrates this: it defines a prototype object for a class that represents a range of values and also defines a
 * “factory” function that creates and initializes a new instance of the class.
 */

 // This is a factory function that returns a new range object.
function range(from, to) {
    // Use Object.create() to create an object that inherits from the
    // prototype object defined below.  The prototype object is stored as
    // a property of this function, and defines the shared methods (behavior)
    // for all range objects.
    let r = Object.create(range.methods);

    // Store the start and end points (state) of this new range object.
    // These are noninherited properties that are unique to this object.
    r.from = from;
    r.to = to;

    // Finally return the new object
    return r;
}

// This prototype object defines methods inherited by all range objects.
range.methods = {
    // Return true if x is in the range, false otherwise
    // This method works for textual and Date ranges as well as numeric.
    includes(x) { return this.from <= x && x <= this.to; },

    // A generator function that makes instances of the class iterable.
    // Note that it only works for numeric ranges.
    *[Symbol.iterator]() {
        for(let x = Math.ceil(this.from); x <= this.to; x++) yield x;
    },

    // Return a string representation of the range
    toString() { return "(" + this.from + "..." + this.to + ")"; }
};

module.exports = range;

// Here are example uses of a range object.
let r = range(1,3);      // Create a range object
r.includes(2)            // => true: 2 is in the range
r.toString()             // => "(1...3)"
[...r]                   // => [1, 2, 3]; convert to an array via iterator

/**
 * There are a few things worth noting in the code of Example 5-1:

* This code defines a factory function range() for creating new range objects.

* It uses the methods property of this range() function as a convenient place to store the prototype object that defines the class.
There is nothing special or idiomatic about putting the prototype object here.

* The range() function defines from and to properties on each range object. These are the unshared, noninherited properties
that define the unique state of each individual range object.

* The range.methods object uses the ES6 shorthand syntax for defining methods, which is why you don’t see the function keyword
in the prototype.

* One of the methods in the prototype has the computed name Symbol.iterator which means that it is defining an iterator for
range objects. The name of this method is prefixed with * which indicates that it is a generator function instead of a regular
function. For now, the upshot is that instances of this range class can be used with the for/of loop, and with the ... spread operator.

* The shared, inherited methods defined in range.methods all use the from and to properties that were initialized in the range() factory function. In order to refer to them, they use the this keyword to refer to the object through which they were invoked. This use of this is a fundamental characteristic of the methods of any class.
 */


 /**
  * Next we have the old way to create objects
  * 
  */

// This is a constructor function that initializes new Range objects.
// Note that it does not create or return the object. It just initializes this.
function Range(from, to) {
    // Store the start and end points (state) of this new range object.
    // These are noninherited properties that are unique to this object.
    this.from = from;
    this.to = to;
}

// All Range objects inherit from this object.
// Note that the property name must be "prototype" for this to work.
Range.prototype = {
    // Return true if x is in the range, false otherwise
    // This method works for textual and Date ranges as well as numeric.
    includes: function(x) { return this.from <= x && x <= this.to; },

    // A generator function that makes instances of the class iterable.
    // Note that it only works for numeric ranges.
    [Symbol.iterator]: function*() {
        for(let x = Math.ceil(this.from); x <= this.to; x++) yield x;
    },

    // Return a string representation of the range
    toString: function() { return "(" + this.from + "..." + this.to + ")"; }
};

module.exports = Range;

// Here are example uses of this new Range class
let r = new Range(1,3);   // Create a Range object
r.includes(2)             // => true: 2 is in the range
r.toString()              // => "(1...3)"
[...r]                    // => [1, 2, 3]; convert to an array via iterator



 /**
  * Debemos tener en cuenta que todo en javascript es un objeto (funciones, arrays, Date, classes, etc), a exepcion de
  * los tipos de dato nativos como string, number, boolean, etc; y todos los objetos tienen su propio prototype, este depende del tipo de objeto,
  * hay un prototype para arrays, otro para Date, otro para las classes y a su vez estos prototype heredan del mismo prototype que proviene de object
  * 
  * Por ejemplo creamos una función fruit que tiene dos atributos, title y price,ademas luego le agregamos una funcion
  * llamada priceInfo, esto quiere decir que el objeto fruit tendrá dos atributos y un prototype con un constructor y la función
  * fruit, pero además ese prototype hereda el prototype de object
  * 
  * Si creamos un array, este tiene su propio prototype con funciones como find, filter, map, etc, y a su vez ese prototype
  * hereda del prototype de object.
  * 
  */
 function fruit(title, price) {
     this.title = title;
     this.price = price;
 }

 fruit.prototype.priceInfo = function() {
     return `Price of ${this.title} is ${this.price}`;
 }

 const orange = new fruit('Orange', 2000);
 const apple = new fruit('Apple', 1000);

 function fruit2(title, price) {
    this.title = title;
    this.price = price;
}

fruit2.prototype = fruit.prototype;


 /**
  * Importantly, note that neither of the two range examples uses arrow functions when defining constructors or methods. Recall that functions defined
  * in this way do not have a prototype property and so can not be used as constructors. Also, arrow function inherit the this keyword from the context
  * in which they are defined rather than setting it based on the object which they are invoked through, and this makes them useless for methods,
  * because the defining characteristic of methods is that they use this to refer to the instance on which they were invoked.
  * 
  * Arrow function inherit "this" scope from the parent, is important to know this, because sometimes the parent is window or other function
  */



/**
 * Classes with the class Keyword
 * The introduction of the class keyword to the language does not alter the fundamental nature of JavaScript’s prototype-based classes. 
 * 
 * All code within the body of a class declaration is implicitly in strict mode even if no "use strict" directive appears. This means, for example, that you can’t use octal integer literals or the with statement within class bodies, and that you are more likely to get syntax errors if you forget to declare a variable before using it.
 *
 * Unlike function declarations, class declarations are not “hoisted”. Recall that function definitions behave as if they had been moved to the top of the enclosing file or enclosing function, meaning that you can invoke a function in code that comes before the actual definition of the function. Although class declarations are like function declarations in some ways, they do not share this hoisting behavior: you can not instantiate a class before you declare it.
 */


 class Range {
    constructor(from, to) {
        // Store the start and end points (state) of this new range object.
        // These are noninherited properties that are unique to this object.
        this.from = from;
        this.to = to;
    }

    // Return true if x is in the range, false otherwise
    // This method works for textual and Date ranges as well as numeric.
    includes(x) { return this.from <= x && x <= this.to; }

    // A generator function that makes instances of the class iterable.
    // Note that it only works for numeric ranges.
    *[Symbol.iterator]() {
        for(let x = Math.ceil(this.from); x <= this.to; x++) yield x;
    }

    // Return a string representation of the range
    toString() { return "(" + this.from + "..." + this.to + ")"; }
}

module.exports = Range;

// Here are example uses of this new Range class
let r = new Range(1,3);   // Create a Range object
r.includes(2)             // => true: 2 is in the range
r.toString()              // => "(1...3)"
[...r]                    // => [1, 2, 3]; convert to an array via iterator