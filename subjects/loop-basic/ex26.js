// check prime
const value = 997;
let i = 2;
let isPrime = true;
while (i * i < value) {
    if (value % i === 0) {
        isPrime = false;
        break;
    }
    i++;
}

console.log('Value is prime ', isPrime, count);