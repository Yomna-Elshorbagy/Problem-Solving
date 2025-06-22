//Find Longest Word in a String
str = "yomna mohamed elshorbagy";

//sol1: for of

function longestWord(str) {
  const words = str.split(" ");
  let longest = "";
  for (let word of words) {
    if (word.length > longest.length) {
      longest = word;
    }
  }
  return longest;
}
console.log(longestWord(str));

//sol2 : sort

function longestWord2(str) {
  const words = str.split(" ").sort((a, b) => b.length - a.length);
  return words[0];
}
console.log(longestWord2(str));

//sol3: for loop

function longestWord3(str) {
  const words = str.split(" ");
  let longest = words[0];

  for (let i = 0; i < words.length; i++) {
    if (words[i].length > longest.length) {
      longest = words[i];
    }
  }
  return longest;
}
console.log(longestWord3(str));
