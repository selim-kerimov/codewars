import Foundation

// https://www.codewars.com/kata/5583090cbe83f4fd8c000051/train/swift

/**
8 kyu - Convert number to reversed array of digits

Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

### Example (Input => Output):
- 35231 => [1,3,2,5,3]
- 0     => [0]
*/
func numberToReversedArray(_ num: Int) -> [Int] {
  return String(num)
    .reversed()
    .compactMap { Int(String($0)) }
}