// https://www.codewars.com/kata/515e271a311df0350d00000f/train/swift

/**
8 kyu - Square(n) Sum

For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9
*/
func squareSum(_ vals: [Int]) -> Int {
  return vals.reduce(into: 0) { $0 += ($1 * $1) }
}