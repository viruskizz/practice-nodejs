// do..while
// while
// for
let i = 0;
while (/*condition*/ i < 10) {
    // run statement if true
    console.log('While', i);
    // change iteration condition value
    // i = i + 1;
    // i += 1;

    // if (i % 3 === 0) {
    //     i += 2;
    // } else {
    //     i++;
    // }
    i += (i % 3 === 0) ? 2 : 1;
}
// แสดงตัวเลข 1 - 100
console.log('i = ', i);
for (let i = 0; i <= 100; i++) {
    if (i % 10 === 0) {
        continue;
    }
    if (i % 2 === 0) {
        console.log(i);
    }
    if (i === 10) {
        break;
    }
}
// ใช้ for แสดงเลขคู่ 0 - 100