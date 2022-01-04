/*
 12345
2 1234
32 123
432 12
5432 1
*/
let n = 9;
for (i = 1; i <= n; i++) {
    for (j = i; j > 1; j--) {
        process.stdout.write(j.toString());
    }
    for (k = 1; k <= n - i + 1; k++) {
        process.stdout.write(k.toString());
    }
    process.stdout.write('\n');
}