/*
Given a string, you have to return a string in which 
each character (case-sensitive) is repeated once.
*/


// Solution

const doubleChar = (str) => str.split("").map(c => c + c).join("");

// or

function doubleChar(str) {
  let word = '';

  for (let i = 0; i < str.length; i++) {
    word = word + str[i] + str[i];
  };
  return word;
};

// or

function doubleChar(str) {
  return str.replace(/(.)/g, "$1$1")
}