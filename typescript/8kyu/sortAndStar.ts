// JavaScript's default sort() for strings is already case-sensitive and based on ASCII values

// https://www.codewars.com/kata/57cfdf34902f6ba3d300001e

/**
 * 8 kyu - Sort and Star
 * 
 * You will be given a list of strings. You must sort it alphabetically (case-sensitive, and based on the ASCII values of the chars) 
 * and then return the first value.
 * 
 * The returned value must be a string, and have "***" between each of its letters.
 * 
 * You should not remove or add elements from/to the array.
 */

export function twoSort(s: string[]): string {
  return s.sort()[0].split('').join('***');
}

console.log(twoSort(["turns", "out", "random", "test", "cases", "are", "easier", "than", "writing", "out", "basic", "ones"]))