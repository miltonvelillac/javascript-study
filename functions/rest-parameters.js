/**
 * Parameter defaults enable us to write functions that can be invoked with fewer arguments than parameters. Rest parameters enable the opposite case: they allow us to write functions that can be invoked with arbitrarily more arguments than parameters. Here is an example function that expects one or more numeric arguments and returns the largest one:
 */

function max(first=-Infinity, ...rest) {
    let maxValue = first; // Start by assuming the first arg is biggest
    // Then loop through the rest of the arguments, looking for bigger
    for (let n of rest) {
        if (n > maxValue) {
            maxValue = n;
        }
    }
    // Return the biggest
    return maxValue;
}

max(1, 10, 100, 2, 3, 1000, 4, 5, 6)  // => 1000


nums.reduce((acc, el) => {
    if (el > acc[0]) {
        acc[1] = acc[0];
        acc[0] = el;
    }
    return acc;
}, [0, 0]);




