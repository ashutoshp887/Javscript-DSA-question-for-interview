// Q. Write a function to find the sum of all elements in an array.

function sumArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    return sum;
  }

 
  let arr = [1,20,30,80,90,50];
  console.log(sumArray(arr));