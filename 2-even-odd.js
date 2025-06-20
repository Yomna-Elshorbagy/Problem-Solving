//sol1
function evenOdd(number) {
  if (number % 2 == 0) {
    return "even";
  } else {
    return "odd";
  }
}
console.log(evenOdd(50));

//sol2
function evenOdd2(num) {
  return num % 2 == 0 ? "even" : "odd";
}
console.log(evenOdd2(51));
