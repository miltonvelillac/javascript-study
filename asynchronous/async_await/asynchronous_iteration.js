/**
 * The for/await Loop
 * 
 * Node 10 makes its readable streams asynchronously iterable. This means you can read successive chunks of data from a stream with
 * a for/await loop like this one:
 */

const fs = require('fs');

async function parseFile(filename) {
    let stream = fs.createReadStream(filename, { encoding: 'utf-8'});
    for await(let chunk of stream) {
        parseChunk(chunk); // Assume parseChunk() is defined elsewhere
    }
}

/**
 * Like a regular await expression, the for/await loop is Promise-based. Roughly speaking, the asynchronous iterator produces a Promise,
 * the for/await loop waits for that Promise to fulfill, assigns the fulfillment value to the loop variable and runs the body of
 * the loop. And then it starts over, getting another Promise from the iterator and waiting for that new Promise to fulfill.
 * 
 * Suppose you have an array of URLs:    
 */

const urls = [url1, url2, url3];

/**
 * You can call fetch() on each url to get an array of Promises:
 */

const promises = urls.map(url => fetch(url));

/**
 * We saw earlier in the chapter that we could now use Promise.all() to wait for all the Promises in the array to be fulfilled. But suppose we want the results of
 * the first fetch as soon as they become available, and don’t want to wait for all the URLs to be fetched. Arrays are iterable so we can iterate through the array of
 * promises with a regular for/of loop:
 */

for(const promise of promises) {
    response = await promise;
    handle(response)
}

/**
 * This code above uses a regular for/of loop with a regular iterator. But because this iterator returns Promises, we can also use the new for/await for slightly simpler code:
 */

for await(const response of promises) {
    handle(response)
}

/**
 * In this case, the for/await loop just builds the await call into the loop and makes our code slightly more compact, but the two examples do exactly the same thing.
 * Importantly, both examples will only work if they are within functions declared async: a for/await loop is no different than a regular await expression in that way.
 * 
 * It is important to realize, however that we’re using for/await with a regular iterator in this example. Things are more interesting with fully asynchronous iterators.
 */
