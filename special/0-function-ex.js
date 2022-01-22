// สร้างฟังชั่น คำนวนเกรด โดยรับ score และ return เกรด
// แสดงผลลัพธ์เกรด ของ mobile และพี่เน
// mobile_score = 80;
// nay_score = 78;

let mobileScore = 80;
let nayScore = 78;
console.log(`Mobile grade is ${calGrade(mobileScore)}`);
console.log(`Nay grade is ${calGrade(nayScore)}`);

function calGrade(score) {
    if (score >= 80) {
        return 'A';
    } else if (score >= 70) {
        return 'B';
    } else if (score >= 60) {
        return 'C';
    } else if (score >= 50) {
        return 'D';
    } else {
        return 'F';
    }
}