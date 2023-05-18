/**
 * You can define a static method within a class body by prefixing the method declaration with the static keyword.
 * Static methods are defined as properties of the constructor function rather than properties of the prototype
 * object
 */

static parse(s) {
    let matches = s.match(/^\((\d+)\.\.\.(\d+)\)$/);
    if (!matches) {
        throw new TypeError(`Cannot parse Range from "${s}".`)
    }
    return new Range(parseInt(matches[1]), parseInt(matches[2]));
}

/**
 * The method defined by this code is Range.parse(), not Range.prototype.parse(), and you must invoke it through
 * the constructor, not through an instance:
 */

let r = Range.parse('(1...10)'); // Returns a new Range object
r.parse('(1...10)');             // TypeError: r.parse is not a function

/**
 * You’ll sometimes see static methods called class methods because they are invoked using the name of
 * the class/constructor. When this term is used, it is to contrast class methods with the regular instance
 * methods that are invoked on instances of the class. Because static methods are invoked on the constructor rather
 * than on any particular instance, it almost never makes sense to use the this keyword in a static method.
 */