// Q. Write a program to remove all whitespace characters from a string.

function removeWhitespace(str) {
    let result = '';
    for (let i = 0; i < str.length; i++) {
      if (str[i] !== ' ' && str[i] !== '\t' && str[i] !== '\n' && str[i] !== '\r') {
        result += str[i];
      }
    }
    return result;
  }

  const originalString = "Hello   World!   ";
const result = removeWhitespace(originalString);
console.log(result); // Output: "HelloWorld!"