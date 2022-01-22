// variable with key value
const profile = {
    name: 'Araiva',
    height: 174,
    weight: 70,
    grades: [
        { subject: 'Social', score: 60 },
        { subject: 'Eng', score: 80 },
        { subject: 'Math',  score: 100 },
        { subject: 'Physic',  score: 50 },
    ],
}
console.log(profile.name);
profile.name = 'Mok';
console.log(profile.name);
console.log(profile.grades[1].score);   // 80
// javascript is object programing
console.log('subjects = ', profile.grades.length);   // 3

// create function name: getScore(subject) will return score of that subject if not found return 0;
// getScore('Eng') => 80
function getScore(subject) {
    for (let i = 0; i < profile.grades.length; i++) {
        if (profile.grades[i].subject === subject) {
            return profile.grades[i].score;
        }
    }
    return 0;
}
function readScore(subject) {
    let score = 0;
    profile.grades.forEach(el => {
        if (el.subject === subject) {
            score = el.score;
        }
    });
    return score;
}
const findScore = (subject) => profile.grades.find(el => el.subject === subject)?.score || 0;
console.log('Eng = ', getScore('Eng'));
console.log('Social = ', readScore('Social'));
console.log('Math = ', findScore('Math'));
console.log('XXX = ', findScore('XXX'));