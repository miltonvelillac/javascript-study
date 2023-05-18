/** reference: https://codeburst.io/javascript-what-the-heck-is-a-callback-aba4da2deced
 * Why do we need Callbacks?
 * For one very important reason — JavaScript is an event driven language. This means that instead of waiting for a response before moving on, JavaScript will keep executing while listening for other events. Lets look at a basic example:
 */


function first(){
    console.log(1);
  }
  function second(){
    console.log(2);
  }
  first();
  second();
  // As you would expect, the function first is executed first, and the function second is executed second — logging the following to the console:
  // 1
  // 2

  /**
   * But what if function first contains some sort of code that can’t be executed immediately? For example, an API request where we have to send the request then wait for a response? To simulate this action, were going to use setTimeout which is a JavaScript function that calls a function after a set amount of time. We’ll delay our function for 500 milliseconds to simulate an API request. Our new code will look like this:
   */

   

