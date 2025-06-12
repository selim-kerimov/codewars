// https://www.codewars.com/kata/5a905c2157c562994900009d

/**
 * 7 kyu - Product Array (Array Series #5)
 * 
 * ### Task
 * Given an array/list [] of integers , Construct a product array Of same size 
 * Such That prod[i] is equal to The Product of all the elements of Arr[] except Arr[i].
 * 
 * ### Notes
 * 1) Array/list size is at least 2 .
 * 2) Array/list's numbers Will be only Positives
 * 3) Repetition of numbers in the array/list could occur.
 * 
 * productArray ({1,5,2}) ==> return {10,2,5}
 * 
 * ### Explanation:
 * 1) The first element 10 is the product of all array's elements except the first element 1
 * 2) The second element 2 is the product of all array's elements except the second element 5
 * 3) The Third element 5 is the product of all array's elements except the Third element 2.
 */
export function productArray(nums: number[]): number[] {
  return nums.map((_, index) => (
    nums.filter((_, filterIndex) => filterIndex != index).reduce((acc, item) => acc *= item, 1)
  ));
};

console.log(productArray([1, 5, 2]));