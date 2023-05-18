
# What is context?
The context is the object where something is executed.

In JavaScript, “context” refers to an object. Within an object, the keyword “this” refers to that object (https://blog.kevinchisholm.com/javascript/context-object-literals/)

Context is always the value of the this keyword which is a reference to the object that “owns” the currently executing code or the function where it’s looked at. (https://towardsdatascience.com/javascript-context-this-keyword-9a78a19d5786)

# What is this?
The keyword this allows to access to the object (context) properties.


(https://www.w3schools.com/js/js_this.asp)
In JavaScript, the this keyword refers to an object.

Which object depends on how this is being invoked (used or called).

The this keyword refers to different objects depending on how it is used:

* In an object method, this refers to the object.
* Alone, this refers to the global object.
* In a function, this refers to the global object.
* In a function, in strict mode, this is undefined.
* In an event, this refers to the element that received the event.
* Methods like call(), apply(), and bind() can refer this to any object.

Note
this is not a variable. It is a keyword. You cannot change the value of this.

* Other definition of this: (https://www.simplilearn.com/tutorials/javascript-tutorial/javascript-this-keyword)
“This” keyword refers to an object that is executing the current piece of code. It references the object that is executing the current function. If the function being referenced is a regular function, “this” references the global objec