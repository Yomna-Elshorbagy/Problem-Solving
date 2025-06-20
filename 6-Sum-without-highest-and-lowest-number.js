//Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).

const arr = [6, 7, 15, 8, 10, 2];

//sol1: M ath - reduce
function sumArray(arr) {
  if (!Array.isArray(arr) || arr.length < 3) return 0;
  const minNum = Math.min(...arr);
  const maxNum = Math.max(...arr);

  return arr.reduce((sum, num) => {
    if (num === minNum) return sum;
    if (num === maxNum) return sum;
    return sum + num;
  }, 0);
}
console.log(sumArray(arr));

//sol2 slice // take a new array copy
function sumArray2(arr) {
  if (!Array.isArray(arr) || arr.length < 3) return 0;
  return arr
    .slice() // take a copy
    .sort((a, b) => a - b) //asn
    .slice(1, -1) // array from index 1 to index -1
    .reduce((sum, num) => sum + num, 0);
}
console.log(sumArray2(arr));

//sol3 :
function sumArray3(arr) {
  if (!Array.isArray(arr) || arr.length < 3) return 0;
  const minNum = Math.min(...arr);
  const maxNum = Math.max(...arr);

  const arrCopy = [...arr];
  arrCopy.splice(arrCopy.indexOf(minNum));
  arrCopy.splice(arrCopy.indexOf(maxNum));
  return arrCopy.reduce((sum, num) => sum + num, 0);
}
console.log(sumArray3(arr));
