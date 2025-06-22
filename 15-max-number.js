//max number of an array
arr = [5, 4, 19, 12, 16];

//sol1: Math
const maxNum = Math.max(...arr);
console.log(maxNum);

//sol2: using loop
function maxNumber(arr) {
  let max = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (max < arr[i]) max = arr[i];
  }
  return max;
}
console.log(maxNumber(arr));

//sol3: using sort
const newArr = arr.slice().sort((a, b) => b - a);
const max = newArr[0];
console.log(max);

//sol4: using reduce
const maxNumb = (arr)=>{
    return arr.reduce((acc, item)=> item > acc ? item : acc, arr[0])
}
console.log(maxNumb(arr));