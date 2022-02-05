const Person = require('./person');

class Student extends Person {

    #firstname;
    #lastname;

    constructor(fn, ln, h, w) {
        super();
        this.#firstname = fn;
        this.#lastname = ln;
        this.height = h;
        this.weight = w;
    }
    get firstname () {
        return `-` + this.#firstname;
    }

    get lastname () {
        return this.#lastname;
    }

    set firstname(name) {
        if (name === '') {
            throw new 'Cannot allow set firstname to empty string';
        }
        this.#firstname = name;
    }
    // overide method
    speak(msg) {
        console.log(`${this.#firstname} speak: ${msg}...`);
    }
}

// nodeJS
module.exports = Student;