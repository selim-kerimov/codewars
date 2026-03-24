// https://www.codewars.com/kata/54b42f9314d9229fd6000d9c/train/swift

/**
6 kyu - Duplicate Encoder

## Count the number of Duplicates

The goal of this exercise is to convert a string to a new string where each character 
in the new string is "(" if that character appears only once in the original string, or ")" 
if that character appears more than once in the original string. Ignore capitalization 
when determining if a character is a duplicate.

### Example
- "din"      =>  "((("
- "recede"   =>  "()()()"
- "Success"  =>  ")())())"
- "(( @"     =>  "))((" 

### Notes
Assertion messages may be unclear about what they display in some languages. If you read 
"...It Should encode XXX", the "XXX" is the expected result, not the input!
*/
func duplicateEncoder(_ word: String) -> String {
  var result = ""
  let lowercased = word.lowercased()

  for char in lowercased {
    let count = lowercased.filter { $0 == char }.count

    result += (count > 1 ? ")" : "(")
  }

  return result
}