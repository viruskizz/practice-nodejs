const minus = (a, b) => {
    return a - b;
}
const mulitply = (a, b) => a * b;

const printX = (name, fn) => {
    fn(name);
}

let x = plus(1, 2);
console.log('x = ', x);
printName('Araiva', 3);
printName('Moke', 3);
printName('Kla', 3);
printX('Araiva', console.log);

// void funtion
function printName(name, n) {
    for (let i = 0; i < n; i ++) {
        console.log(name);
    }
}

// return fucntion
function plus(a, b) {
    return a + b;
}
module.exports.divide = (a, b) => a / b;

module.exports = {
    plus,
    minus,
    mulitply,
    printX,
    printName
}