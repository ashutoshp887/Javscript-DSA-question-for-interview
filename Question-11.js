function areAnagrams(str1, str2) {
    if (str1.length !== str2.length) return false;
  
    let charCount = {};
  
    for (let i = 0; i < str1.length; i++) {
      let char = str1.charAt(i);
      if (charCount[char]) {
        charCount[char]++;
      } else {
        charCount[char] = 1;
      }
    }
  
    for (let i = 0; i < str2.length; i++) {
      let char = str2.charAt(i);
      if (charCount[char]) {
        charCount[char]--;
      } else {
        return false;
      }
    }
  
    for (let char in charCount) {
      if (charCount[char] !== 0) return false;
    }
  
    return true;
  }

  console.log(areAnagrams("listen", "silent")); // true
console.log(areAnagrams("hello", "world")); // false