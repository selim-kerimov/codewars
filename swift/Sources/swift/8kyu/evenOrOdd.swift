// https://www.codewars.com/kata/53da3dbb4a5168369a0000fe/train/swift

/**
 * 8 kyu - Even or Odd
 * 
 * Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.
 */
func evenOrOdd(_ number:Int) -> String {
  return number.isMultiple(of: 2) ? "Even" : "Odd"
}