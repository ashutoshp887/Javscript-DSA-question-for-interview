// Q. Write a function to find the largest number in an array.


function findLargest(arr) {
    let largest = arr[0];
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > largest) {
        largest = arr[i];
      }
    }
    return largest;
  }

  console.log(findLargest([3, 1, 4, 2, 5,5])); // Output: 5