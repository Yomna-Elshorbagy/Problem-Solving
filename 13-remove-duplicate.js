//12. Remove Duplicates from Array

arr = [30, 20, 20, 25, 40];
//sol1: set
function removeDuplicate(arr) {
  return [...new Set(arr)];
}
console.log(removeDuplicate(arr));

//sol2: reduce
function removeDuplicate2(arr) {
  return arr.reduce((withoutDup, elem) => {
    return withoutDup.includes(elem) ? withoutDup : [...withoutDup, elem];
  }, []);
}
console.log(removeDuplicate2(arr));

//sol3: for
const removeDuplicates = (arr) => {
  const result = [];
  for (let item of arr) {
    if (!result.includes(item)) {
      result.push(item);
    }
  }
  return result;
};
console.log(removeDuplicates(arr));

//sol4: filter
const removeDuplicates4 = (arr) => {
  return arr.filter((item, index) => arr.indexOf(item) === index);
};
console.log(removeDuplicates4(arr));
