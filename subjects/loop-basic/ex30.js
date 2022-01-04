const nb = 371;
const len = nb.toString().length;
let i = 0;
let sum = 0;
while(i < len) {
    const x = parseInt(nb.toString()[i], 10);
    const y = Math.pow(x, len);
    sum += y;
    i++;
}
console.log(sum === nb ? 'YES' : 'NO');
