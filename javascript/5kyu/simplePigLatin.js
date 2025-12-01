// https://www.codewars.com/kata/520b9d2ad5c005041100000f/train/javascript

/**
 * 5 kyu - Simple Pig Latin
 * 
 * Move the first letter of each word to the end of it, then add "ay" to the end of the word. 
 * Leave punctuation marks untouched.
 * 
 * ### Examples
 * - pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
 * - pigIt('Hello world !');     // elloHay orldway !
 */

function pigIt(str) {
  return str
    .split(' ')
    .map(word => {
      if (!word.match(/[a,u,e,o,i,y]/gi)) return word;
      return word.slice(1) + word[0] + 'ay'
    })
    .join(' ')
}

console.log(pigIt('Pig latin is cool')) // igPay atinlay siay oolcay
console.log(pigIt('Hello world !'))     // elloHay orldway !