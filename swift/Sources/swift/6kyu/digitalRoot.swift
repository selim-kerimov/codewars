// https://www.codewars.com/kata/541c8630095125aba6000c00/train/swift

/**
6 kyu - Sum of Digits / Digital Root

Digital root is the recursive sum of all the digits in a number.

Given n, take the sum of the digits of n. If that value has more than one digit, continue
reducing in this way until a single-digit number is produced. The input will be a non-negative integer.

### Examples
- 16  -->  1 + 6 = 7
- 942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
- 132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
- 493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2
*/
func digitalRoot(of number: Int) -> Int {
  var result = 0

  var temp = number
  var div = 10

  while (temp != 0) {
    let value = temp % div

    result += value / (div / 10)

    div *= 10
    temp -= value
  }
  
  if (result / 10 < 1) { return result }

  return digitalRoot(of: result)
}