/*
11111
00000
11111
00000
11111
*/
let n = 5;
for (i = 0; i < n; i++) {
    for (j = 0; j < n; j++) {
        if (i % 2 === 0) {
            process.stdout.write('1');
        } else {
            process.stdout.write('0');
        }
    }
    process.stdout.write('\n');
}