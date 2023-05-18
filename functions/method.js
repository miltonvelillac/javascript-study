/**
 * A method is nothing more than a JavaScript function that is stored in a property of an object. If you have a function f and an object o, you can define a method named m of o with the following line:
 * 
 */

o.m = f;

o.m();


/**
 * Method invocations differ from function invocations in one important way, however: the invocation context. Property access expressions consist of two parts: an object (in this case o) and a property name (m). In a method invocation expression like this, the object o becomes the invocation context, and the function body can refer to that object by using the keyword this. Here is a concrete example:
 */

let calculator = { // An object literal
    operand1: 1,
    operand2: 1,
    add() {        // We're using method shorthand syntax for this function
        // Note the use of the this keyword to refer to the containing object.
        this.result = this.operand1 + this.operand2;
    }
};
calculator.add();  // A method invocation to compute 1+1.
calculator.result  // => 2




/**
 * Inside the nested function f() the this keyword is not equal to the object o. This is widely considered to be a flaw in the JavaScript language, and it is important to be aware of it. The code above demonstrates one common workaround. Within the method m, we assign the this value to a variable self, and within the nested function f we can use self instead of this to refer to the containing object.
 */

let o = {                 // An object o.
    m: function() {       // Method m of the object.
        let self = this;  // Save the this value in a variable.
        this === o        // => true: this is the object o.
        f();              // Now call the helper function f().

        function f() {    // A nested function f
           this === o     // => false: this is global or undefined
           self === o     // => true: self is the outer this value.
        }
    }
};
o.m();                    // Invoke the method m on the object o.

/**
 * In ES6 and later, another workaround to this issue is to convert the nested function f into an arrow function which will properly inherit the this value:
 */

const f = () => {
    this === o  // true, since arrow functions inherit this
};


/**
 * Another workaround, available in ES5 and later, that is still in common use is to invoke the bind() method of the nested function to define a new function that is implicitly invoked on a specified object:
 */


const f = (function() {
    this === o  // true, since we bound this function to the outer this
}).bind(this);