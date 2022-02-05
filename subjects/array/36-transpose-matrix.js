// transpose > A[i][j] = A[j][i]
const a = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
]
let b = [];
let c = [];
for (let i = 0; i < a.length; i++) {
    b.push([]);
    for (let j = 0; j < a.length; j++) {
        b[i][j] = a[j][i];
    }
}
a.forEach((row, i) => {
    c.push([]);
    row.forEach((column, j) => {
        c[i][j] = a[j][i];
    });
});
console.log('NORMAL: ', b);
console.log('ES6: ', b);
let d = b;
console.log('CHECK', b === c);
console.log('CHECK', b === d);

let x = [10];
let y = [10];
let z = y;
console.log('x =', x);
console.log('z =', z);
console.log('z === x', z === x);
console.log('z === y', z === y);
// a = b
// b = c
// c == a?