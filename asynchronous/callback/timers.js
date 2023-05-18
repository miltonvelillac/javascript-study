/**
 * One of the simplest kinds of asynchrony is when you want to run some code after a certain amount of time has elapsed. In both client-side JavaScript and Node, you can do this with the setTimeout() function:
 */
setTimeout(checkForUpdates, 60000);

/**
 * setTimeout() is not defined by the core JavaScript language, but it is globally available in web browsers and in Node. Its first argument is a function and the second is a time interval measured in milliseconds. In the code above, a hypothetical checkForUpdates() function will be called 60,000 milliseconds (1 minute) after the setTimeout() call. checkForUpdates() is a callback function that your program might define, and setTimeout() is the function that you invoke to register your callback function and specify under what asynchronous conditions it should be invoked.
 * 
 * setTimeout() calls the specified callback function one time, passing no arguments, and then forgets about it. If you are writing a function that really does check for updates, you probably want it to run repeatedly. You can do this by using setInterval() instead of setTimeout():
 */

 // Call checkForUpdates in one minute and then again every minute after that
let updateIntervalId = setInterval(checkForUpdates, 60000);

// setInterval() returns a value that we can use to stop the repeated
// invocations by calling clearInterval(). (Similarly, setTimeout()
// returns a value that you can pass to clearTimeout())
function stopCheckingForUpdates() {
    clearInterval(updateIntervalId);
}
