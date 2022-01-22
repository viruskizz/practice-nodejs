// เขียนโปรแกรมคำนวณเกรด
// A, B, C, D, F ตามมาตรฐาน

let score = 79;
let grade;
if (score >= 80) {
    grade = 'A';
} else if (score >= 70) {
    grade = 'B';
} else if (score >= 60) {
    grade = 'C';
} else if (score >= 50) {
    grade = 'D';
} else {
    grade = 'F';
}
console.log(`Your grade is ${grade}`);