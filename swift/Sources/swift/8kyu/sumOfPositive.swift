// https://www.codewars.com/kata/5715eaedb436cf5606000381/train/swift

/**
 8 kyu - Sum of positive

 ### Task

 You get an array of numbers, return the sum of all of the positives ones.

 ### Example

 [1, -4, 7, 12] => 1 + 7 + 12 = 20
 */

func sumOfPositives (_ numbers: [Int] ) -> Int {
  return numbers
    .filter { $0 > 0 }
    .reduce(into: 0) { $0 += $1 }
}