/**
 * A higher-order function is a function that operates on functions, taking one or more functions as arguments
 * and returning a new function. Here is an example:
 */

// This higher-order function returns a new function that passes its
// arguments to f and returns the logical negation of f's return value;
function not(f) {
    return function(...args) {             // Return a new function
        let result = f.apply(this, args);  // that calls f
        return !result;                    // and negates its result.
    };
}

const even = x => x % 2 === 0; // A function to determine if a number is even
const odd = not(even);         // A new function that does the opposite
[1,1,3,5,5].every(odd)         // => true: every element of the array is odd


/**
 * As another example, consider the mapper() function below. It takes a function argument and returns a new function that maps one array to another using that function. This function uses the map() function defined earlier, and it is important that you understand how the two functions are different:
 */

 // Return a function that expects an array argument and applies f to
// each element, returning the array of return values.
// Contrast this with the map() function from earlier.

const map = function(a, ...args) { return a.map(...args); }

function mapper(f) {
    return a => map(a, f);
}

const increment = x => x+1;
const incrementer = mapper(increment);
incrementer([1,2,3])  // => [2,3,4]


/**
 * Here is another, more general, example that takes two functions f and g and returns a new function that computes f(g()):
 */

 // Return a new function that computes f(g(...)).
// The returned function h passes all of its arguments to g, and then passes
// the return value of g to f, and then returns the return value of f.
// Both f and g are invoked with the same this value as h was invoked with.
function compose(f, g) {
    return function(...args) {
        // We use call for f because we're passing a single value and
        // apply for g because we're passing an array of values.
        return f.call(this, g.apply(this, args));
    };
}

const sum = (x,y) => x+y;
const square = x => x*x;
compose(square, sum)(2,3)  // => 25; the square of the sum


/**
 * The partial() and memoize() functions defined in the sections that follow are two more important higher-order functions.
 */

