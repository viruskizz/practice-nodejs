// Condition
// TRUE FALSE, 1 0
// > >= < <= === !
// && , ||
// T && T = T,
// F || F = F
// false, undefined, NaN, 0, ''

let a = 11;
let b = 2;
let c;
if (a > b && c) {
    console.log('TRUE');
} else {
    console.log('FALSE');
}

// กำหนดค่า x, y และหาค่า max
// เช่น x = 1, y = 2, ผลลัพธ์: y is greater
let x = 20;
let y = 20;
if (x > y) {
    console.log('x is greater');
} else if (x < y) {
    console.log('y is greater');
} else {
    console.log('x and y is equal');
}
const value = 1 > 2 ? 'greater' : 'lower';