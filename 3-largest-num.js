// 3. Find the Largest Number in an Array

//sol1 math max
let arr = [1, 2, 80, 4, 19];
const maxNum = (arr) => Math.max(...arr); //spread operator //shallow copy
console.log(maxNum(arr));

//sol2 aply
const maxNumber = (arr) => Math.max.apply(null, arr); //apply(this , arr)
console.log(maxNumber(arr));

//sol3  reduce:
const largest = arr.reduce((max, num) => (max > num ? max : num), arr[0]);
console.log(largest);

//sol4 for of
let max = arr[0];
for (let i of arr) {
  if (i > max) {
    max = i;
  }
}
console.log(max);
