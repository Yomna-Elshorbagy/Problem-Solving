//find the letter that appears the most times.
//###### difficult ######
str = "Yomna Mohamed Elshorbagyyyyyy";

//sol1:
const mostFrequentVowel = (str) => {
  const freq = {};
  let maxChar = "";
  let maxCount = 0;
  for (let ele of str.replace(/\s/g, "").toLowerCase()) { //regex remove spacing
    freq[ele] = (freq[ele] || 0) + 1; // || 0 as first time of character in object is undefined
    if (freq[ele] > maxCount) {
      maxCount = freq[ele];
      maxChar = ele;
    }
  }
  return maxChar;
};
console.log(mostFrequentVowel(str));


//sol2