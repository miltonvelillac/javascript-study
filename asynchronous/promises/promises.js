/**
 * Asynchronous operations, particularly those that involve networking, can typically fail in a number of ways, and robust code has to be written to handle the
 * errors that will inevitably occur. For promises we can do this by passing a second function to the then() method:
 */

getJSON('/api/user/profile').then(displayUserProfile, handleProfileError);

/**
 * A Promise represents an asynchronous computation that is separated in time from the computation that creates it. Because it runs at a different time,
 * there is no way that the asynchronous computation can return a value to us, and no way that it can throw an exception that we can catch. The functions that we
 * pass to then() provide alternatives. When a synchronous computation completes normally, it simply returns its result to its caller. When a Promise-based asynchronous
 * computation completes normally, it passes its result to the function that is the first argument to then(). When something goes wrong in a synchronous computation,
 * it throws an exception that propagates up the call stack until there is a catch clause to handle it. When an asynchronous computation runs, its caller is no longer
 * on the stack, so if something goes wrong, it is simply not possible to throw an exception back to the caller. Instead, Promise-based asynchronous computations pass
 * the exception (typically as an Error object of some kind, though this is not required) to the second function passed to then(). So, in the code above, if getJSON()
 * runs normally, it passes its result to displayUserProfile(). If there is an error (the user is not logged in, the server is down, the user’s internet connection
 * dropped, the request timed out, etc.) then getJSON() passes an Error object to handleProfileError().
 */

 /**
  * In practice it is rare to see two functions passed to then(). There is a better and more idiomatic way of handling errors when working with Promises.
  * To understand it, first consider what happens if getJSON() completes normally, but an error occurs in displayUserProfile(). That callback function is invoked
  * asynchronously when getJSON() returns, so it is also asynchronous and cannot meaningfully throw an exception (because there is no code on the call stack to handle it).
  * The more idiomatic way to handle errors in this code looks like this:
  */

 getJSON('/api/user/profile').then(displayUserProfile).catch(handleProfileError);


 