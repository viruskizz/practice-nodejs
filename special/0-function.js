// void function
function logName(name) {
    // statement
    console.log('Your name is ' + name);
}
// return function
function plus(a, b) {
    return a + b;
}
const minus = (a, b) => {
    return a - b;
}
const multiply = (a, b) => a * b;

logName('Araiva');
let x = plus(1, 2);
console.log('x = ' + x);
console.log('2 * 3 = ', multiply(2, 3));

// สร้างฟังชั่น คำนวนเกรด โดยรับ score และ return เกรด
// แสดงผลลัพธ์เกรด ของ mobile และพี่เน
// mobile_score = 80;
// nay_score = 78;