// https://www.codewars.com/kata/55c04b4cc56a697bb0000048/train/javascript

/**
 * 5 kyu - Scramblies
 * 
 * Complete the function scramble(str1, str2) that returns true if a portion of 
 * str1 characters can be rearranged to match str2, otherwise returns false.
 * 
 * Complete the function scramble(str1, str2) that returns true if a portion of str1 characters 
 * can be rearranged to match str2, otherwise returns false.
 * 
 * ### Notes:
 * - Only lower case letters will be used (a-z). No punctuation or digits will be included.
 * - Performance needs to be considered.
 * 
 * ### Examples:
 * - scramble('rkqodlw', 'world') ==> True
 * - scramble('cedewaraaossoqqyt', 'codewars') ==> True
 * - scramble('katas', 'steak') ==> False
 */
function scramble(str1, str2) {
  const letterCount = {}

  for (const letter of str1) {
    letterCount[letter] = (letterCount[letter] || 0) + 1
  }

  for (const letter of str2) {
    if (!letterCount[letter]) return false
    letterCount[letter] = letterCount[letter] - 1
  }

  return true
}

console.log(scramble('rkqodlw', 'world'))  // -> true
console.log(scramble('cedewaraaossoqqyt', 'codewars'))  // -> true
console.log(scramble('lorem2000', 'steak'))  // -> false

