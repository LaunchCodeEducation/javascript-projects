// function reverse(str) {
//   let lettersArray = str.split('');
//   let reversedLettersArray = lettersArray.reverse();
//   return reversedLettersArray.join('');
// }

// console.log(reverse("LaunchCode"));

let reverse = function (str) {
  let letterArray = str.split('');
  let reversedLetterArray = letterArray.reverse();
  return reversedLetterArray.join('');
}
console.log(reverse("LaunchCode"));