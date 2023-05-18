/**
 * In JavaScript, functions may be nested within other functions. For example:
 */

function hypotenuse(a, b) {
    function square(x) { return x*x; }
    return Math.sqrt(square(a) + square(b));
}

/**
 * The interesting thing about nested functions is their variable scoping rules: they can access the parameters and variables of the function (or functions) they are nested within. In the code above, for example, the inner function square() can read and write the parameters a and b defined by the outer function hypotenuse().
 */

const epale = 9;

function hypotenuse6(a, b) {
    function square() {
        function myfn() {
            return a* epale;
        } 
        return myfn();
    }
    return square();
}