// https://www.codewars.com/kata/53369039d7ab3ac506000467/train/swift

/**
8 kyu - Convert boolean values to strings 'Yes' or 'No'.

Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.
*/
func boolToWord(_ bool: Bool) -> String {
  return bool ? "Yes" : "No"
}