//You get an array of numbers, return the sum of all of the positives ones.
//[1, -4, 7, 12] => 1+7+12 = 20

//sol1: using for
let arr = [5, 6, , -11, 7, 10, -4];
function positiveSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      sum += arr[i];
    }
  }
  return sum;
}
console.log(positiveSum(arr));

// sol2: for of
function posSum(arr) {
  let sum = 0;
  for (num of arr) {
    if (num > 0) {
      sum += num;
    }
  }
  return sum;
}
console.log(posSum(arr));

//sol3: using map
function positiveSumation(arr) {
  let sum = 0;
  arr.map((num) => {
    if (num > 0) {
      sum += num;
    }
  });
  return sum;
}
console.log(positiveSumation(arr));

//sol4: using while
function positiveSum2(arr) {
  let sum = 0,
    i = 0;
  while (arr.length > i) {
    if (arr[i] > 0) {
      sum += arr[i];
    }
    i++;
  }
  return sum;
}
console.log(positiveSum2(arr));

//sol4: using reduce
function positiveSum3(arr) {
   return arr.reduce((sum, num) => (num > 0 ? (sum + num) : sum), 0);
}
console.log(positiveSum3(arr));
