
// Q. Write a function that returns the reverse of a string?/*

function reverse1(str){
  let r = "";
  for(let i = str.length-1; i >= 0; i--){
    r += str[i];
  }
  return r;
}

console.log(reverse1("rahul"))

 