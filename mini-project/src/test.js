let ages = [3, 10, 18, 20];

// eslint-disable-next-line func-style
function checkAdult(age) {
  return age >= 18;
}

console.log(ages.find(checkAdult));