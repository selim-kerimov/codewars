// https://www.codewars.com/kata/5168bb5dfe9a00b126000018/train/swift

/**
8 kyu - Even or Odd

Complete the solution so that it reverses the string passed into it.

- 'world'  =>  'dlrow'
- 'word'   =>  'drow'
 */
func reverseString(_ str: String) -> String {
  return String(Array(str).reversed())
}