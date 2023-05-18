/** Function Properties, Methods, and Constructor
 * 
 * We’ve seen that functions are values in JavaScript programs. The typeof operator returns the string “function” when applied to a function, but functions are really a specialized kind of JavaScript object. Since functions are objects, they can have properties and methods, just like any other object. There is even a Function() constructor to create new function objects. The subsections that follow document the length, name, and prototype properties, the call(), apply(), bind() and toString() methods, and the Function() constructor.
 * 
 * 
 * * The length Property
 * The read-only length property of a function specifies the arity of the function—the number of parameters it declares in its parameter list, which is usually the number of arguments that the function expects. If a function has a rest parameter, that parameter is not counted for the purposes of this length property.
 * 
 * * The name Property
 * The read-only name property of a function specifies the name that was used when the function was defined, if it was defined with a name, or the name of the variable or property that an unnamed function expression was assigned to when it was first created. This property is primarily useful when writing debugging or error messages.
 * 
 * * The prototype Property
 * All functions, except arrow functions, have a prototype property that refers to an object known as the prototype object. Every function has a different prototype object. When a function is used as a constructor, the newly created object inherits properties from the prototype object.
 * 
 * * The toString() Method
 * Like all JavaScript objects, functions have a toString() method. The ECMAScript spec requires this method to return a string that follows the syntax of the function declaration statement. In practice most (but not all) implementations of this toString() method return the complete source code for the function. Built-in functions typically return a string that includes something like “[native code]” as the function body.
 * 
 * 
 * 
 */


 /**
  * toString() example:
  */

 function w() {
	x = 10;
	function a() {
		return x;
	}
}

w.toString()

// "function w() {
// 	x = 10;
// 	function a() {
// 		return x;
// 	}
// }"