// Q. Write a function that returns the longest word in the sentence.

function longestWord(sentence) {
    const words = sentence.split(" ");
    let longestWord = "";
  
    for (let i = 0; i < words.length; i++) {
      if (words[i].length > longestWord.length) {
        longestWord = words[i];
      }
    }
  
    return longestWord;
  }
  
  // Example usage:
  const sentence = "The quick brown fox jumps over the lazy dog";
  const longest = longestWord(sentence);
  console.log(longest); // Output: "jumps"