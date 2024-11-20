// Write a function to check if a given array is sorted in ascending order or not.


function isSorted(numbers) {
    let n = numbers.length;
    for (let i = 0; i < n - 1; i++) {
        if (numbers[i] > numbers[i + 1]) {
            return false;
        }
    }
    return true;
}


let numbers = [1, 2, 3, 4, 5];
let isAscending = isSorted(numbers);
console.log(isAscending);  // Output: true

let numbers2 = [1, 3, 2, 4, 5];
let isAscending2 = isSorted(numbers2);
console.log(isAscending2);  // Output: false