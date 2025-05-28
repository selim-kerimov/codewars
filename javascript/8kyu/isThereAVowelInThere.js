// https://www.codewars.com/kata/57cff961eca260b71900008f

/**
 * 8 kyu - Is there a vowel in there?
 * 
 * Given an array of numbers, check if any of the numbers are the character codes for lower case vowels (a, e, i, o, u).
 * 
 * If they are, change the array value to a string of that vowel.
 * 
 * input [100,100,116,105,117,121]=>[100,100,116,"i","u",121] output Return the resulting array.
 */

function isVow(a){
  const vowels = [97, 101, 105, 111, 117];
  return a.map(i => vowels.includes(i) ? String.fromCharCode(i) : i);
}

console.log(isVow([100,100,116,105,117,121]))
