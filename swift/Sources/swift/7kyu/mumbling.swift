// https://www.codewars.com/kata/5667e8f4e3f572a8f2000039/train/swift

/**
7 kyu - Mumbling

This time no story, no theory. The examples below show you how to write function accum:

### Examples:
- accum("abcd") -> "A-Bb-Ccc-Dddd"
- accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
- accum("cwAt") -> "C-Ww-Aaa-Tttt"
*/
func mumbling(_ s: String) -> String {
  return s
    .enumerated()
    .map { String(repeating: $1, count: $0 + 1).capitalized }
    .joined(separator: "-")
}