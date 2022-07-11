function reverseWord(str) {
  return str.split("").reverse().join("").split(" ").reverse().join(" ");
}

console.log(reverseWord("Lalit Patil"));
