// Do not use var
var x = 5;
// scope variable
let y = 10;
// Cannot be changed
const z = 40;
let a;
// use camelcase First Name => firstName
// starting with lowercase
// use camelcase for spacing
// not start with number or spcial characters
// understandable variable name
// let firstName = 'Thitiwut';

console.log(a);
console.log(x);
console.log(y);
console.log(z);
y = 20;
console.log('After: ', x);
console.log('After: ', y);

// สร้างตัวแปล ชื่อ นามสกุล แล้วแสดงผลทางหน้าจอ Thitiwut Somsa
let firstName = 'Thitiwut';
let lastName = 'Somsa';
console.log(firstName, lastName);
console.log(firstName + ' ' + lastName);
console.log(`${firstName} ${lastName}`);
