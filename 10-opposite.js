//given a number (integer / decimal / both depending on the language), find its opposite (additive inverse).
//sol1
function opposite(num) {
  return -num;
}
console.log(opposite(-18));

//sol2
const opposite2 = (n) => (n > 0 ? -n : Math.abs(n));
console.log(opposite2(-18));
