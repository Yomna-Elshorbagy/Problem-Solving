//Given an array (called haystack) containing random items and exactly one "needle", return: "found the needle at position X" where X is the index of "needle".

const arr = ["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"];

//sol1
function needle(arr) {
  const index = arr.indexOf("needle");
  return `found the needle at position ${index}`;
}

//sol2
function needle(arr) {
  const index = arr.findIndex((ele) => ele == "needle");
  return `found the needle at position ${index}`;
}

//sol3
function needle(arr) {
  let index = 0;
  for (let ele of arr) {
    if (ele === "needle") return `found the needle at position ${index}`;
    index++;
  }
}
console.log(needle(arr));
