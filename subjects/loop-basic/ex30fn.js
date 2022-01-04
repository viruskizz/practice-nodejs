let i = 0;
let n = 100;
while(i <= 400) {
    if (checkArm(i)) {
        console.log(i);
    }
    i++;
}

function checkArm(value) {
    let temp = value;
    let len = 0;
    while (temp > 0) {
        temp = Math.floor(temp / 10);
        len++;
    }
    temp = value;
    let sum = 0;
    while (temp > 0) {
        const y = Math.pow(temp % 10, len);
        sum += y;
        temp = Math.floor(temp / 10);
    }
    return sum === value;
}