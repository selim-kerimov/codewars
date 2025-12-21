// https://www.codewars.com/kata/54d81488b981293527000c8f/train/javascript

/**
 * 5 kyu - Sum of Pairs
 * 
 * Given a list of integers and a single sum value, return the first two values 
 * (parse from the left please) in order of appearance that add up to form the sum.
 * 
 * If there are two or more pairs with the required sum, the pair whose second element has the smallest 
 * index is the solution.
 */
function sumPairs(numbers, sum) {
  const pairs = new Set()

  for (let i = 0; i < numbers.length; i++) {
    const diff = sum - numbers[i]

    if (pairs.has(diff)) return [diff, numbers[i]]

    pairs.add(numbers[i])
  }
}

console.log(sumPairs([11, 3, 7, 5],         10))
//              ^--^      3 + 7 = 10
// == [3, 7]

console.log(sumPairs([4, 3, 2, 3, 4],         6))
//          ^-----^         4 + 2 = 6, indices: 0, 2 *
//             ^-----^      3 + 3 = 6, indices: 1, 3
//                ^-----^   2 + 4 = 6, indices: 2, 4
//  * the correct answer is the pair whose second value has the smallest index
// == [4, 2]

console.log(sumPairs([0, 0, -2, 3], 2))
//  there are no pairs of values that can be added to produce 2.
//== None/nil/undefined/Nothing (Based on the language)

console.log(sumPairs([10, 5, 2, 3, 7, 5], 10))
//              ^-----------^   5 + 5 = 10, indices: 1, 5
//                    ^--^      3 + 7 = 10, indices: 3, 4 *
//  * the correct answer is the pair whose second value has the smallest index
// == [3, 7]