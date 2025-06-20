//Convert number to reversed array of digits

function digitize(num) {
  return num
    .toString()
    .split("")
    .reverse()
    .map((num) => Number(num));
}
console.log(digitize(123));

//sol2
function digitize2(num) {
  return [...String(num)].map(Number).reverse();
}
console.log(digitize2(123));
