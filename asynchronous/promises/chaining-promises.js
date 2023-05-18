/**
 * One of the most important benefits of Promises is that they provide a natural way to express a sequence of asynchronous operations as a linear chain of then() method
 * invocations, without having to nest each operation within the callback of the previous one. Here, for example is a long Promise chain I wrote in 2016 as part of the
 * initial WiFi setup for an IoT device prototype:
 */

wait(2000)
.then(() => wifi.stopAP())
.then(() => wait(5000))
.then(() => wifi.defineNetwork(ssid, password))
.then(() => waitForWifi(20, 3000))
.then(() => runNextStageAndExit())
.catch(() => {
  // Not much we can do at this point but log the error.
  console.error("Failed to bring up wifi in handleConnect()");
});


/**
 * 
 */

fetch('/api/user/profile')
.then(response => {
    return response.json();
})
.then(profile => {
    displayUserProfile(profile)
});

/**
 * When more than one method is invoked in a single expression like this, we call it a method chain. We know that the fetch() function returns a Promise object,
 * and we can see that the first .then() in this chain invokes a method on that returned Promise object. But there is a second .then() in the chain, which means that
 * the first invocation of the then() method must itself return a Promise.
 */
