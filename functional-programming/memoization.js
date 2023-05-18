/**
 * we defined a factorial function that cached its previously computed results. In functional programming,
 * this kind of caching is called memoization. The code below shows a higher-order function, memoize()
 * that accepts a function as its argument and returns a memoized version of the function:
 */

 // Return a memoized version of f.
// It only works if arguments to f all have distinct string representations.
function memoize(f) {
    const cache = {};  // Value cache stored in the closure.

    return function(...args) {
        // Create a string version of the arguments to use as a cache key.
        let key = args.length + args.join("+");
        if (key in cache) return cache[key];
        else return cache[key] = f.apply(this, args);
    };
}

/**
 * The memoize() function creates a new object to use as the cache and assigns this object to a local variable, so that it is private to (in the closure of) the returned function. The returned function converts its arguments array to a string, and uses that string as a property name for the cache object. If a value exists in the cache, it returns it directly. Otherwise, it calls the specified function to compute the value for these arguments, caches that value, and returns it. Here is how we might use memoize():
 */

// Return the Greatest Common Divisor of two integers, using the Euclidian
// algorithm: http://en.wikipedia.org/wiki/Euclidean_algorithm
function gcd(a,b) {  // Type checking for a and b has been omitted
    if (a < b) {           // Ensure that a >= b when we start
        [a, b] = [b, a];   // Destructuring assignment to swap variables
    }
    while (b != 0) {       // This is Euclid's algorithm for GCD
        [a, b] = [b, a%b];
    }
    return a;
}

const gcdmemo = memoize(gcd);
gcdmemo(85, 187)  // => 17

// Note that when we write a recursive function that we will be memoizing,
// we typically want to recurse to the memoized version, not the original.
const factorial = memoize(function(n) {
                              return (n <= 1) ? 1 : n * factorial(n-1);
                          });
factorial(5)      // => 120: also caches values for 4, 3, 2 and 1.


