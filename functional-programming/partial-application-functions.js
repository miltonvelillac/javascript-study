/**
 * The bind() method of a function f (see §4.7.5) returns a new function that invokes f in a specified
 * context and with a specified set of arguments. We say that it binds the function to an object and partially applies the arguments. The bind() method partially applies arguments on the left—that is, the arguments you pass to bind() are placed at the start of the argument list that is passed to the original function. But it is also possible to partially apply arguments on the right:
 */

 // The arguments to this function are passed on the left
function partialLeft(f, ...outerArgs) {
    return function(...innerArgs) { // Return this function
        let args = outerArgs.concat(innerArgs); // Build the argument list
        return f.apply(this, args);             // Then invoke f with it
    };
}

// The arguments to this function are passed on the right
function partialRight(f, ...outerArgs) {
    return function(...innerArgs) {  // Return this function
        let args = innerArgs.concat(outerArgs);  // Build the argument list
        return f.apply(this, args);              // Then invoke f with it
    };
}

// The arguments to this function serve as a template.  Undefined values
// in the argument list are filled in with values from the inner set.
function partial(f, ...outerArgs) {
    return function(...innerArgs) {
        let args = [...outerArgs]; // local copy of outer args template
        let innerIndex=0;          // which inner arg is next
        // Loop through the args, filling in undefined values from inner args
        for(let i = 0; i < args.length; i++)
            if (args[i] === undefined) args[i] = innerArgs[innerIndex++];
        // Now append any remaining inner arguments
        args = args.concat(innerArgs.slice(innerIndex))
        return f.apply(this, args);
    };
}

// Here is a function with three arguments
const f = function(x,y,z) { return x * (y - z); };
// Notice how these three partial applications differ
partialLeft(f, 2)(3,4)         // => -2: Bind first argument: 2 * (3 - 4)
partialRight(f, 2)(3,4)        // =>  6: Bind last argument: 3 * (4 - 2)
partial(f, undefined, 2)(3,4)  // => -6: Bind middle argument: 3 * (2 - 4)



/**
 * These partial application functions allow us to easily define interesting functions out of functions we already have defined. Here are some examples:
 */
const increment = partialLeft(sum, 1);
const cuberoot = partialRight(Math.pow, 1/3);
String.prototype.first = partial(String.prototype.charAt, 0);
String.prototype.last = partial(String.prototype.substr, -1, 1);
cuberoot(increment(26))  // => 3
"JS".first()             // => "J"

/**
 * Partial application becomes even more interesting when we combine it with other higher-order functions. Here, for example, is a way to define the not() function shown above using composition and partial application:
 */

const not = partialLeft(compose, x => !x);
const even = x => x % 2 === 0;
const odd = not(even);
const isNumber = not(isNaN)
odd(3) && isNumber(2)  // => true


/**
 * We can also use composition and partial application to redo our mean and standard deviation calculations in extreme functional style:
 */

 // sum() and square() functions are defined above. Here are some more:
const product = (x,y) => x*y;
const neg = partial(product, -1);
const sqrt = partial(Math.pow, undefined, .5);
const reciprocal = partial(Math.pow, undefined, -1);

// Now compute the mean and standard deviation. This is all function
// invocations with no operators, and it starts to look like Lisp code!
let data = [1,1,3,5,5];   // Our data
let mean = product(reduce(data, sum), reciprocal(data.length));
let stddev = sqrt(product(reduce(map(data,
                                     compose(square,
                                             partial(sum, neg(mean)))),
                                 sum),
                          reciprocal(sum(data.length,-1))));


