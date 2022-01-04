/*
12345
21234
32123
43212
54321
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