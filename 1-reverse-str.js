// 1. Reverse a String

//sol1
const str = "yomna";

const revStr = (str) => str.split("").reverse().join("");
console.log(revStr(str));

//sol2 : for of
const reverseFunc = (str) => {
  let result = "";
  for (let i of str) {
    result = i + result;
  }
  return result;
};
console.log(reverseFunc(str));

//sol3 : spread operator 
const reverseFun = (acc, char) => char + acc;
const reverseStr = (str) => [...str].reduce(reverseFun, "");
console.log(reverseStr(str));

//sol4 Using recursion:
const reverseString = (str) => {
  if (str == "") return "";
  else {
    return reverseString(str.slice(1)) + str[0];
  }
};
console.log(reverseString(str));
