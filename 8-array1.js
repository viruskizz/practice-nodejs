// properties in array (ES8)
const numbers = ['A', 'B', 'C', 'D', 'E'];
console.log('size: ', numbers.length);
numbers.push(6);
console.log(numbers);
numbers.unshift(0);
console.log(numbers);
const mini = numbers.slice(1, 4);
console.log(mini);
numbers.forEach((el, i, arr) => {
    console.log(`${i} = ${el}`);
});