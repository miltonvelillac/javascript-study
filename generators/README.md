# Generators (JavaScript: The Definitive Guide, 7th Edition)

* A generator is a kind of iterator defined in a function, is defined with the keyword function*.
When you invoke a generator function, it does not actually execute the function body,but instead returns a generator object. This generator object is aniterator. Calling its next() method causes the body of the generatorfunction to run from the start (or whatever its current position is)until it reaches a yield statement. yield is new in ES6 and issomething like a return statement. The value of the yieldstatement becomes the value returned by the next() call on theiterator. 

* Note that there is no generator equivalent of arrow functions. You cannot define a generator with ⇒*.

* The most common use of generator functions is to create iterators, butthe fundamental feature of generators is that they allow us to pause acomputation, yield intermediate results, and then resume thecomputation later. This means that generators have features beyondthose of iterators

* Generators Example
* * // A generator function that yields the set of one digit (base-10) primes.
function* oneDigitPrimes() { // Invoking this function does not run the code
  yield 2;                   // but just returns a generator object. Calling
  yield 3;                   // the next() method of that generator runs
  yield 5;                   // the code until a yield statement provides
  yield 7;                   // the return value for the next() method.
}

// When we invoke the generator function, we get a generator
let primes = oneDigitPrimes();

// A generator is an iterator object that iterates the yielded values
primes.next().value          // => 2
primes.next().value          // => 3
primes.next().value          // => 5
primes.next().value          // => 7
primes.next().done           // => true

// Generators have a Symbol.iterator method to make them iterable
primes[Symbol.iterator]()    // => primes

// We can use generators like other iterable types
[...oneDigitPrimes()]        // => [2,3,5,7]
let sum = 0;
for(let prime of oneDigitPrimes()) sum += prime;
sum                          // => 17

* * const seq = function*(from,to) {
    for(let i = from; i <= to; i++) yield i;
};
[...seq(3,5)]  // => [3, 4, 5]

* * let o = {
    x:1, y:2, z:3,
    // A generator that yields each of the keys of this object
    *g() {
        for(let key of Object.keys(this))
            yield key;
    }
}
[...o.g()] // => ['x', 'y', 'z', 'g']



* * SUMARY
The for/of loop and the ... spread operator work with iterable objects.

An object is iterable if it has a method with the symbolic name [Symbol.iterator] that returns an iterator object.

An iterator object has a next() method that returns an iteration result object.

An iteration result object has a value property that holds the next iterated value, if there is one. If the iteration has completed, then the result object must also have a done property set to true.

You can implement your own iterable objects by defining a [Symbol.iterator]() method that returns an object with a next() method that returns iteration result objects. You can also implement functions that accept iterator arguments and return iterator values.

Generator functions (functions defined with function* instead of function) are another way to define iterators.

When you invoke a generator function, the body of the function does not run right away; instead the return value is an iterable iterator object. Each time the next() method of the iterator is called, another chunk of the generator function runs.

Generator functions can use the yield operator to specify the values that are returned by the iterator. Each call to next() causes the generator function to run up to the next yield expression. The value of that yield expression then becomes value returned by the iterator. When there are no more yield expressions, then the generator function returns and the iteration is complete.