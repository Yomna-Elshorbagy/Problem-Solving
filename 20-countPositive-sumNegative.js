//Given an array of integers.
//Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.
arr = [1, -2, 3, -4, 0, 5];

//sol1: for of
function countPosSumNeg(arr) {
  if (!Array.isArray(arr) || arr.length === 0) return [];

  let sum = 0,
    count = 0;
  newArr = [];
  for (const ele of arr) {
    if (ele > 0) {
      count++;
    } else {
      if (ele < 0) {
        sum += ele;
      }
    }
  }
  return [count, sum];
}
console.log(countPosSumNeg(arr));

//sol2: reduce
function countPosSumNeg2(arr) {
  if (!Array.isArray(arr) || arr.length === 0) return [];

  return arr.reduce(
    ([count, sum], num) => {
      return num > 0 ? [count + 1, sum] : [count, sum + num];
    },
    [0, 0]
  );
}
console.log(countPosSumNeg2(arr));

//sol3: filter
function countPosSumNeg3(arr) {
  if (!Array.isArray(arr) || arr.length === 0) return [];

  const postCount = arr.filter((num) => num > 0).length;
  const negSum = arr
    .filter((num) => num < 0)
    .reduce((sum, num) => sum + num, 0);
    return [postCount, negSum]
}
console.log(countPosSumNeg3(arr));
