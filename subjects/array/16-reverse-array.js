const array = [10, 5, 16, 35, 500];
console.log(array);
for (let i = 0; i < array.length / 2; i++) {
    const temp = array[i];
    array[i] = array[array.length - 1 - i];
    array[array.length - 1 - i] = temp;
}
console.log('NORMAL:', array);
console.log('ES6:', array.reverse());
