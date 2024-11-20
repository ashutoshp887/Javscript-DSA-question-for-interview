// Q. Write a function to find the average of an array of numbers.


javascript
function findAverage(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum / numbers.length;
}

javascript
let numbers = [1, 2, 3, 4, 5];
let average = findAverage(numbers);
console.log(average);  // Output: 3