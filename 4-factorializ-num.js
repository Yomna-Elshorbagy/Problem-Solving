// 4. Factorialize a Number

//sol1
const num = 5;

const factFun = (num) => {
  let result = 1;

  for (let i = 1; i <= num; i++) {
    result *= i;
  }
  return result;
};
console.log(factFun(num));

//sol2 : using recursion
const factorial = (num) => {
  if (num <= 1) return 1;
  return num * factorial(num - 1);
};

console.log(factorial(num));

//sol3: using while
const factorialNum = (num) => {
  let result = 1;
  while (num > 1) {
    result *= num;
    num--;
  }
  return result;
};
console.log(factorialNum(num));

//sol4 using reduce
const factorialNumFun = (num) => {
  return [...Array(num)].map((_, i) => i + 1).reduce((acc, n) => acc * n, 1);
};
console.log(factorialNumFun(num));
//1===> [...Array(n)] >> create empty array of num [undefined , ...]
//1===> map((_, i) => i + 1) >> i is the index and map gives the numbers from 1 to num >> (_ is just a placeholder)
