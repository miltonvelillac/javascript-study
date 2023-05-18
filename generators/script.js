/****************** FIBONACCI Example *****************************/
function* fibonacciSequence() {
  let x = 0, y = 1;
  for(;;) {
    yield y;
    [x, y] = [y, x+y];  // Note: destructuring assignment
  }
}


// Return the nth Fibonacci number
function fibonacci(n) {
  for(let f of fibonacciSequence()) {
    if (n-- <= 0) return f;
  }
}
fibonacci(20)   // => 10946


// Yield the first n elements of the specified iterable object
function* take(n, iterable) {
  let it = iterable[Symbol.iterator](); // Get iterator for the iterable object
  while(n-- > 0) {         // Loop n times:
    let next = it.next();  // Get the next item from the iterator.
    if (next.done) return; // If there are no more values return early
    else yield next.value; // otherwise yield the value
  }
}

// An array of the first 5 Fibonacci numbers
[...take(5, fibonacciSequence())]  // => [1, 1, 2, 3, 5]

/****************** FIBONACCI Example *****************************/


/****************** zip Example *****************************/
function* oneDigitPrimes() { // Invoking this function does not run the code
  yield 2;                   // but just returns a generator object. Calling
  yield 3;                   // the next() method of that generator runs
  yield 5;                   // the code until a yield statement provides
  yield 7;                   // the return value for the next() method.
}

// Given an array of iterables, yield their elements in interleaved order.
function* zip(...iterables) {
  // Get an iterator for each iterable
  let iterators = iterables.map(i => i[Symbol.iterator]());
  let index = 0;
  while(iterators.length > 0) {         // While there are still some iterators
    if (index >= iterators.length)      // If we reached the last iterator
      index = 0;                        // go back to the first one.
    let item = iterators[index].next(); // Get next item from next iterator.
    if (item.done) {                    // If that iterator is done
      iterators.splice(index, 1);       // then remove it from the array.
    }
    else {                              // Otherwise,
      yield item.value;                 // yield the iterated value
      index++;                          // and move on to the next iterator.
    }
  }
}

// Interleave three iterable objects
[...zip(oneDigitPrimes(),"ab",[0])]     // => [2,'a',0,3,'b',5,7]

function* sequence(...iterables) {
  for(let iterable of iterables) {
    for(let item of iterable) {
      yield item;
    }
  }
}

[...sequence("abc",oneDigitPrimes())]  // => ['a','b','c',2,3,5,7]


/**
 * This process of yielding the elements of some other iterable object is common enough in generator
 * functions that ES6 has special syntax for it. The yield* keyword is like yield except that rather
 * than yielding a single value, it iterates an iterable object and yields each of the resulting values.
 * The sequence() generator function above can be simplified with yield* like this:
 */

function* sequence(...iterables) {
  for(let iterable of iterables) {
    yield* iterable;
  }
}

[...sequence("abc",oneDigitPrimes())]  // => ['a','b','c',2,3,5,7]

/**
 * The array forEach() method not work. yield and yield* can only be used within generator functions,
 * but nested arrow function in the code above is a regular function, not a function* generator function,
 * so yield is not allowed.
 */

function* sequence(...iterables) {
  iterables.forEach(iterable => yield* iterable );  // Error
}

/****************** zip Example *****************************/
