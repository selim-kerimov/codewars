// https://www.codewars.com/kata/56e2f59fb2ed128081001328

/**
 * 8 kyu - Printing Array elements with Comma delimiters
 * 
 * Input: Array of elements
 * 
 * ["h","o","l","a"]
 * 
 * Output: String with comma delimited elements of the array in th same order.
 * 
 * "h,o,l,a"
 * 
 * Note: the input data can be: boolean array, array of objects, array of string arrays, array of number arrays... 😕
 */

export function printArray(array: unknown[]): string{
  return array.join(',');
}

console.log(printArray(["h","o","l","a"]))
