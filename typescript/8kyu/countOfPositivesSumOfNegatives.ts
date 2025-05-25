// https://www.codewars.com/kata/576bb71bbbcf0951d5000044

/**
 * 8 kyu - Count of positives / sum of negatives
 * 
 * Given an array of integers.
 * 
 * Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 
 * 0 is neither positive nor negative.
 * 
 * If the input is an empty array or is null, return an empty array.
 * 
 * Example
 * For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].
 */

 export function countPositivesSumNegatives(input: number[] | null): number[] {
  if (!input) return [];

  let countPositives = 0;
  let sumNegatives = 0;

  input.forEach(i => {
    if (i > 0) countPositives++;
    else sumNegatives += i;
  })

  return countPositives ? [countPositives, sumNegatives] : [];
}

console.log(countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]))
