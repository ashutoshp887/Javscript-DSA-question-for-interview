// Q. Write a function to check if a given number is prime or not?

function isPrime(n) {
    if (n <= 1) {
      return false; // 0 and 1 are not prime numbers
    }
    for (let i = 2; i* i <= n; i++) {
        console.log("i"+i)
      if (n % i === 0) {
        return true; // if n is divisible by any number between 2 and sqrt(n), it's not prime
      }
    }
    return false; // if n is not divisible by any number between 2 and sqrt(n), it's prime
  }

  console.log(isPrime(11));