// Q. Write a function to calculate the factorial of a number.

function factorial(n) {
    if (n === 0 || n === 1) {
      return 1; // 0! and 1! are both 1
    } else {
      return n * factorial(n - 1); // recursive formula: n! = n * (n-1)!
    }
  }

  console.log(factorial(5)); // 120
console.log(factorial(3)); // 6
console.log(factorial(0)); // 1