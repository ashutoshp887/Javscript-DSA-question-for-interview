// Q. Write a function to sort an array of numbers in ascending order.

javascript
function sortArray(numbers) {
    let n = numbers.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (numbers[j] > numbers[j + 1]) {
                let temp = numbers[j];
                numbers[j] = numbers[j + 1];
                numbers[j + 1] = temp;
            }
        }
    }
    return numbers;
}

javascript
let numbers = [5, 2, 8, 1, 3];
let sortedNumbers = sortArray(numbers);
console.log(sortedNumbers);  // Output: [1, 2, 3, 5, 8]