/** Asynchronous Generators
 * The easiest way to implement an iterator is often to use a generator. The same is true for asynchronous iterators,
 * which we can implement with generator functions that we declare async. An async generator has the features of
 * async functions and the features of generators: you can use await as you would in a regular async function,
 * and you can use yield as you would in a regular generator.
 * But values that you yield are automatically wrapped in Promises. Even the syntax for async generators is a
 * combination: async function and function * combine into async function *. Here is an example that shows how you
 * might use an async generator and a for/await loop to repetitively run code at fixed intervals, using loop syntax
 * instead of a setInterval() callback function:
 *
 */
// A Promise-based wrapper around setTimeout() that we can use await with.
// Returns a Promise that fulfills in the specified number of milliseconds
function elapsedTime(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// An async generator function that increments a counter and yields it
// a specified (or infinite) number of times at a specified interval.
async function* clock(interval, max=Infinity) {
    for(let count = 1; count <= max; count++) { // regular for loop
        await elapsedTime(interval);            // wait for time to pass
        yield count;                            // yield the counter
    }
}

// A test function that uses the async generator with for/await
async function test() {                      // Async so we can use for/await
    for await(let tick of clock(300, 100)) { // Loop 100 times every 300ms
        console.log(tick);
    }
}