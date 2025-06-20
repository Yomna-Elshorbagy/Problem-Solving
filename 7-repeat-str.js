//String repeat ==> Write a function that accepts a non-negative integer n and a string s as parameters, and returns a string of s repeated exactly n times.

//sol1: repeat
const repeatStr = (n, s) => s.repeat(n);
console.log(repeatStr(3, "yomna"));

//sol2: array
const repeatStr2 = (n, s) => Array(n).fill(s).join("");
console.log(repeatStr2(3, "yomna"));

//sol3: for loop
const repeatStr3 = (n, s) => {
  let result = "";
  for (let i = 0; i < n; i++) {
    result += s;
  }
  return result;
};
console.log(repeatStr3(3, "yomna"));

//sol4: reduce
const repeatStr4 = (n, s) => {
  return [...Array(n)].reduce((add) => add + s, "");
};
console.log(repeatStr4(3, "yomna"));
