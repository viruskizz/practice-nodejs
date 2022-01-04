
let i = 1;
let n = 27;
let sum = 0;
while (sum < n) {
    if (n % i === 0) {
        sum += i;
    }
    i++;
}
console.log(n, sum === n ? 'YES' : 'NO');