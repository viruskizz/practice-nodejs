// check prime
let value = 1;
let n = 100;
while (value <= n) {
    let i = 2;
    let isPrime = true;
    while (i * i < value) {
        if (value % i === 0) {
            isPrime = false;
            break;
        }
        i++;
    }
    if (isPrime) {
        console.log(value);
    }
    value++;
}