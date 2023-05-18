# await Expressions
The await keyword takes a Promise and turns it back into a return value or a thrown exception. Given a Promise object p, the expression await p waits until p settles. If p fulfills, then the value of await p is the fulfillment value of p. On the other hand, if p is rejected, then await p expression throws the rejection value of p. We don’t usually use await with a variable that holds a promise, and instead we use it before the invocation of a function that returns a Promise:

let response = await fetch('/api/user/profile');
let profile = await response.json();

It is critical to understand right away that the await keyword does not cause your program to block and literally do nothing until the specified Promise settles. The code remains asynchronous, and the await simply disguises the fact. This means that any code that uses await is itself asynchronous.

# async Functions
Because any code that uses await is asynchronous, there is one critical rule: you can only use the await keyword within functions that have been declared with the async keyword. Here’s a version of the getHighScore() function from earlier in the chapter, rewritten to use async and await:

async function getHighScore() {
    let response = await fetch('/api/user/profile');
    let profile = await response.json();
    return profile.highScore;
}

Declaring a function async means that the return value of the function will be a Promise even if no Promise-related code appears in the body of the function. If an async function appears to return normally, then the Promise object that is the real return value of the function will resolve to that apparent return value. And if an async function appears to throw an exception, then the Promise object that it returns will be rejected with that exception.

The getHighScore() function is declared async, so it returns a Promise. And because it returns a Promise, we can use the await keyword with it:

displayHighScore(await getHighScore());

But remember, that line of code will only work if it is inside another async function! You can nest await expressions within async functions as deeply as you want. But if you’re at the top-level or are inside a function that is not async for some reason, then you can’t use await and have to deal with a returned Promise in the regular way:

getHighScore().then(displayHighScore).catch(console.error)

You can use the async keyword with any kind of function. It works with the function keyword as a statement or as an expression. It works with arrow functions, and with the method shortcut form in classes and object literals.

# Asynchronous Iteration
We began this chapter with a discussion of callback and event-based asynchrony, and when we introduced Promises we noted that they were useful for single-shot asynchronous computations, but were not suitable for use with sources of repetitive asynchronous events such as setInterval() or the click event in a web browser or the data event on a Node stream. Because single Promises do not work for sequences of asynchronous events, we also cannot use regular async functions and the await statements for these things.

ECMAScript 2018 provides a solution, however. Asynchronous iterators are like the iterators described in Chapter 7, but they are Promise based, and are meant to be used with a new form of the for/of loop, for/await.
