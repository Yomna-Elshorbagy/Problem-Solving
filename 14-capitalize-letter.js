//11. Capitalize First Letter of Each Word
//focus on difference between (split - slice - join)
input = "yomna mohamed elshorbagy";

//sol1: split - slice
function capitalizeStr(input) {
  return input
    .split(" ")
    .map((elem) => elem.charAt(0).toUpperCase() + elem.slice(1))
    .join(" ");
}
console.log(capitalizeStr(input));

//sol2: for of
function capitalizeStr2(input) {
  let arrStr = input.split(" ");
  let capitalArr = [];
  for (item of arrStr) {
    capitalArr.push(item.charAt(0).toUpperCase() + item.slice(1));
  }
  return capitalArr.join(" ");
}
console.log(capitalizeStr2(input));

//sol3: for loop
function capitalizeStr3(input) {
  let arrStr = input.split(" ");
  for (let i = 0; i < arrStr.length; i++) {
    const ele = arrStr[i];
    arrStr[i] = ele[0].toUpperCase() + ele.slice(1);
  }
  return arrStr.join(" ");
}
console.log(capitalizeStr3(input));
