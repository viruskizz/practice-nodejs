// check prime
let value = 1;
let n = 100;
while (value <= n) {
    if (checkPrime(value)) {
        console.log(value);
    }
    value++;
}

function checkPrime(value) {
    let i = 2;
    while (i * i < value) {
        if (value % i === 0) {
            return false;
        }
        i++;
    }
    return true;
}