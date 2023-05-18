/**
 * Arrow functions differ from functions defined in other ways in one critical way:
 * they inherit the value of the this keyword from the environment in which they are defined rather than
 * defining their own invocation context as functions defined in other ways do. This is an important and very
 * useful feature of arrow functions, and we’ll return to it again later in this chapter. Arrow functions also
 * differ from other functions in that they do not have a prototype property, which means that they can not be
 * used as constructor functions for new classes.
 */

const f = x => { return { value: x }; };  // Good: f() returns an object
const g = x => ({ value: x });            // Good: g() returns an object
const h = x => { value: x };              // Bad: h() returns nothing
const i = x => { v: x, w: x };            // Bad: Syntax Error
