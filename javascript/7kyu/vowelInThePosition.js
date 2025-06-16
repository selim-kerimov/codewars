// https://www.codewars.com/kata/5a2b7edcb6486a856e00005b

/**
 * 7 kyu - Is it a vowel on this position?
 * 
 * Check if it is a vowel(a, e, i, o, u,) on the n position in a string (the first argument). Don't forget about uppercase.
 * 
 * A few cases:
 * 1) checkVowel('cat', 1)  ->   true // 'a' is a vowel
 * 2) checkVowel('cat', 0)  ->   false // 'c' is not a vowel
 * 3) checkVowel('cat', 4)  ->   false // this position doesn't exist
 * 
 * P.S. If n < 0, return false
 */
function checkVowel(string, position) {
  if (position < 0) return false;
  return ['a', 'u', 'e', 'i', 'o'].includes(string[position]?.toLowerCase());
};

console.log(checkVowel('cat', -2))
