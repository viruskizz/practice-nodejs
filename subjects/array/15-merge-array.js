const arr1 = [1, 4, 6, 9, 15];
const arr2 = [2, 5, 8, 10];
const arr3 = [];
const arr4 = [];
for (let i = 0; i < arr1.length; i++) {
   arr3.push(arr1[i]);
}
for (let i = 0; i < arr2.length; i++) {
    arr3.push(arr2[i]);
 }
 console.log(arr3);
 console.log(arr1.concat(arr2));
 console.log([...arr1, ...arr2]);