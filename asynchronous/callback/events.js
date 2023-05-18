/**
 * Client-side JavaScript programs are almost universally event-driven: rather that running some kind of pre-determined computation they typically wait for the user to do something and then respond to the user’s actions. The web browser generates an event when the user presses a key on the keyboard, moves the mouse, clicks a mouse button or touches a touchscreen device. Event-driven JavaScript programs register callback functions for specified types of events in specified contexts, and the web browser invokes those functions whenever the specified events occur. These callback functions are called event handlers or event listeners and they are registered with addEventListener():
 */

// Ask the web browser to return an object representing the HTML
// <button> element that matches this CSS selector
okay = document.querySelector('#confirmUpdateDialog button.okay')

// Now register a callback function to be invoked when the user
// clicks on that button.
okay.addEventListener('click', applyUpdate);

/**
 * In this example, applyUpdate() is a hypothetical callback function that we assume is implemented somewhere else. The call to document.querySelector() returns an object that represents a single specified element (specified via CSS selector) in the web page. We call addEventListener() on that element to register our callback. The first argument to addEventListener() is a string that specifies the kind of event we’re interested in—a mouse click or touchscreen tap in this case. If the user clicks or taps on that specific element of the web page, then the browser will invoke our applyUpdate() callback function, passing an object that includes details (such as the time and the mouse pointer coordinates) about the event.
 */


