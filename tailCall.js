function recursiveFactorial(n, accumulator = 1) {
  if (n <= 0) return accumulator;

  return recursiveFactorial(n - 1, n * accumulator);
}

console.log(recursiveFactorial(10));