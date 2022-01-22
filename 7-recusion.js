function factLoop(x) {
    sum = 1;
    for (let i = x; i > 0; i--) {
        sum *= i;
    }
    return sum;
}

function factRecursive(x) {
    if (x > 0)
        return x * factRecursive(--x);
    return 1;
}

console.log('FACT_LOOP 5 : ', factLoop(0));
console.log('FACT_RECURSIVE 5 : ', factRecursive(0));