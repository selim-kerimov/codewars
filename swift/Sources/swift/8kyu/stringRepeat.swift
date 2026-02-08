// https://www.codewars.com/kata/57a0e5c372292dd76d000d7e/train/swift

/**
8 kyu - String repeat

Write a function that accepts a non-negative integer n and a string s as parameters, and returns a string of s 
repeated exactly n times.

### Examples (input -> output)
- 6, "I"     -> "IIIIII"
- 5, "Hello" -> "HelloHelloHelloHelloHello"
*/

func stringRepeat(_ n: Int, _ string: String) -> String {
  return String(repeating: string, count: n)
}