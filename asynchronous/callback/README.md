# Callbacks
At its most fundamental level asynchronous programming in JavaScript is done with callbacks. A callback is a function that you write and then pass to some other function. That other function then invokes (“calls back”) your function when some condition is met or some (asynchronous) event occurs. The invocation of the callback function you provide notifies you of the condition or event, and sometimes the invocation will include function arguments that provide additional details. This is easier to understand with some concrete examples, and the subsections that follow demonstrate various forms of callback-based asynchronous programming, using both client-side JavaScript and Node.


# What is a Callback?
Simply put: A callback is a function that is to be executed after another function has finished executing — hence the name ‘call back’.
More complexly put: In JavaScript, functions are objects. Because of this, functions can take functions as arguments, and can be returned by other functions. Functions that do this are called higher-order functions. Any function that is passed as an argument is called a callback function.