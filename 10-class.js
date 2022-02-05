const Person = require('./class/person');
const Student = require('./class/student');
const cal = require('./0-function');
const {minus} = require('./0-function');
console.log(cal.plus(1, 3));
console.log(minus(5, 3));

let moke = new Person('Moke', 'Uuaa', 170, 65);
let mobile = new Person('Mobile', 'BNK', 165, 55);
let kla = new Student('Kla', 'Harn', 173, 75);

console.log(Person.unit);
console.log(moke.firstname)
console.log(mobile.firstname)
console.log(kla.height)
mobile.speak('555');
// mobile.firstname = '';
kla.speak('555');
kla.run();
