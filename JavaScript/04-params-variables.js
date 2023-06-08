function sum(a, b, ...others) {
  let result =  a + b;

  for (const other of others) {
    result += other;
  }

  return result;
}

// console.log(sum(1)); // NaN
// console.log(sum('1', '2')); // '12'
// console.log(sum(1, 2, 3, 4, 5)); // 3

console.log(sum(1, 2, 3, 4, 5));
