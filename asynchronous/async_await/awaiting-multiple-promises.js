/**
 * Suppose that we’ve written our getJSON() function using async:
 * 
 */

async function getJSON(url) {
    let response = await fetch(url);
    let body = await response.json();
    return body;
}

/**
 * And now suppose that we want to fetch two JSON values with this function:
 */

let value1 = await getJSON(url1);
let value2 = await getJSON(url2);

/**
 * The problem with this code is that it is unnecessarily sequential: the fetch of the second url will not begin until the first fetch is complete.
 * If the second URL does not depend on the value obtained from the first URL, then we should probably try to fetch the two values at the same time.
 * This is a case where the Promise-based nature of async functions shows. In order to await a set of concurrently-executing async functions,
 * we use Promise.all() just as we would if working with Promises directly:
 */
let [value1, value2] = await Promise.all([getJSON(url1), getJSON(url2)]);

