# CLASSES

* PROTOTYPE
function x {}
x.prototype.constructor === x

In javascript each function has a function constructor

If you create a class the typeof ot that class is function

In javascript a function is an object, all objects have a prototype method, prototype really contains the object (constructor and functions); (https://www.w3schools.com/js/js_object_prototypes.asp)


Importantly, note that neither of the two range examples uses arrow functions when defining constructors or methods. Recall that functions defined in this way do not have a prototype property and so can not be used as constructors. Also, arrow function inherit the this keyword from the context in which they are defined rather than setting it based on the object which they are invoked through, and this makes them useless for methods, because the defining characteristic of methods is that they use this to refer to the instance on which they were invoked.
