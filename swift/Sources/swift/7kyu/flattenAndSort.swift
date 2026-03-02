// https://www.codewars.com/kata/57ee99a16c8df7b02d00045f/train/swift

/**
7 kyu - Flatten and sort an array

Given a two-dimensional array of integers, return the flattened version of 
the array with all the integers in the sorted (ascending) order.

Example:

Given [[3, 2, 1], [4, 6, 5], [], [9, 7, 8]], your function should return [1, 2, 3, 4, 5, 6, 7, 8, 9].
*/
func flattenAndSort(_ arr: [[Int]]) -> [Int] {
  return arr.flatMap { $0 }.sorted()
}