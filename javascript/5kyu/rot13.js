// https://www.codewars.com/kata/530e15517bc88ac656000716/train/javascript

/**
 * 5 kyu - Human Readable Time
 * 
 * ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 
 * letters after it in the alphabet. ROT13 is an example of the Caesar cipher.
 * 
 * Create a function that takes a string and returns the string ciphered with Rot13. If there are 
 * numbers or special characters included in the string, they should be returned as they are. 
 * Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".
 */

function rot13(message){
  return message
    .split('')
    .map(letter => {
      if (!letter.match(/[a-z]/gi)) return letter;

      const code = letter.toLowerCase().charCodeAt(0) - 13
      const char = String.fromCharCode(code < 97 ? code - 6 : code)

      if (letter.match(/[A-Z]/g)) return char.toUpperCase();
      return char.toLowerCase()
    })
    .join('')
}


console.log(rot13('Test')) // should return: 'grfg'