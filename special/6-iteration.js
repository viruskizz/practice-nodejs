let i = 0;
while (i < 5) {
    console.log('Araiva', i);
    // i = i + 1;
    // i += 1;
    i++;
}
console.log('FIN: ', i);
for (let j = 0; j < 100; j++) {
    // log even number 1 - 100
    if (j % 10 === 0) {
        continue;
    }
    if (j % 2 == 0)  {
        console.log('Mobile: ', j);
    }
    if (j > 50) {
        break;
    }
}