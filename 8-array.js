const numbers = [0, 1, 2];
const fruits = ['banana', 'orange', 'apple'];
const students = [
    ['Araiva', 174, 71],
    ['Kla', 170, 60],
    ['Mok', 180, 75],
];
console.log(numbers[0]);        // 0
console.log(fruits[1]);         //orange
console.log(students[2][0]);    //orange

for (let i = 0; i < 3; i++) {
    console.log(fruits[i]);
}
fruits[0] = 'mango';
console.log(fruits[0]);         //mango

// swap element in array
// console.log(arr) => [1, 2];
let arr = [2, 1];
let temp = arr[0];
arr[0] = arr[1];
arr[1] = temp;
console.log(arr);

// reverse arr
// console.log(numbs) // [5, 4, 3, 2, 1];
const numbs = ['A', 2, 3, 4, 5];
const n = 5;
for (let i = 0; i < n / 2; i++) {
    let temp = numbs[i];
    numbs[i] = numbs[n - i - 1];
    numbs[n - i - 1] = temp;
}
console.log(numbs);
