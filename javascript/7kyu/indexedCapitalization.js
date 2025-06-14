// https://www.codewars.com/kata/59cfc09a86a6fdf6df0000f1

/**
 * 7 kyu - Indexed capitalization
 * 
 * Given a string of lowercase letters and an array of integer indices, capitalize all letters at the given indices. 
 * If an index is beyond the string, it should be ignored.
 * 
 * ### Examples:
 * 1) "abcdef", [1,2,5]     ==> "aBCdeF"
 * 2) "abcdef", [1,2,5,100] ==> "aBCdeF" // There is no index 100.
 */
function capitalize(string, indices) {
  return [...string].map((l, i) => indices.includes(i) ? l.toUpperCase() : l).join('');
}

console.log(capitalize("abcdef", [1,2,5]))
