//Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

const sheeps = [true, true, false, true, null, undefined, true];

//sol1: for
const countSheeps = (sheeps) => {
  let count = 0;
  for (let i = 0; i < sheeps.length; i++) {
    if (sheeps[i] == true) count++;
  }
  return count;
};
console.log(countSheeps(sheeps));

//sol2: reduce
const countSheeps2 = (sheeps) => {
  return sheeps.reduce(
    (count, sheep) => (sheep === true ? count + 1 : count),
    0
  );
};
console.log(countSheeps2(sheeps));

//sol3: map
const countSheeps3 = (sheeps) => {
  let count = 0;
  sheeps.map((sheep) => (sheep === true ? count++ : count));
  return count;
};
console.log(countSheeps3(sheeps));

//sol4: filter
const countSheeps4 = (sheeps) => {
  return sheeps.filter(Boolean).length;
};
console.log(countSheeps4(sheeps));
