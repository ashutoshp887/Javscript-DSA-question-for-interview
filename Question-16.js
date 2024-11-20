// Q. Write a function to merge two arrays into a single sorted array.


function addTwoArrays(arr1, arr2) {
    let start = arr1.length;
    for (let i = 0; i < arr2.length; i++) {
      arr1[start++] = arr2[i];
    }
    return arr1;
  }
  
  console.log(addTwoArrays([1, 2, 3, 4], [4, 3, 2, 1]));