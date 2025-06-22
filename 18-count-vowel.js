//Count Vowels in a String
str = "Yomna Mohamed Elshorbagy";

function countVowels(str) {
  const vowels = "aeiou";
  let count = 0;

  for (const ele of str) {
    if (vowels.includes(ele.toLowerCase())) count++;
  }
  return count;
}
console.log(countVowels(str));

//sol2: filter
function countVowels2(str) {
  const vowels = "aeiou";
  return [...str.toLowerCase()].filter((ele) => vowels.includes(ele)).length;
}
console.log(countVowels2(str));

//sol3: using reduce
function countVowels3(str) {
  const vowels = "aeiou";
  return str
    .toLowerCase()
    .split("")
    .reduce((count, ele) => (vowels.includes(ele) ? count + 1 : count), 0);
}
console.log(countVowels3(str));
