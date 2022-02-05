// Object Oriented Programing
// encapsulation: public protect private
class Person {

    // attribute, property
    #firstname;
    #lastname;
    height;
    weight;
    static unit = 'old';

    constructor(fn, ln, h, w) {
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

    // method, function
    speak(msg) {
        console.log(`${this.#firstname} say: ${msg}`);
    }

    walk() {
        console.log('I`m walking');
    }

    run() {
        console.log('I`m running');
    }
}
// nodeJS, default export
module.exports = Person;

// JS
// export Person