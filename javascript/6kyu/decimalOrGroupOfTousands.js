// https://www.codewars.com/kata/58379c3b51e3b680aa000164/train/javascript

/**
 * 6 kyu - Decimals or groups of thousands??
 * 
 * Countries such as the U.S. and China use a dot to represent a decimal point, 
 * they also use a comma to seperate groups of thousands e.g. 4,353.56
 * 
 * Other countries (mostly in Europe) instead use a comma to represent a decimal 
 * point, they also use a dot to seperate groups of thousands e.g. 4.353,56
 * 
 * Your task is to sum up an array of string repensentation of numbers being in one of the two 
 * formats mentioned above with AT MOST two decimal places. The resulted sum should be a string 
 * with the format of xx,xxx.xx (keep two decimal places, seperate groups of thousands with comma if necessary)
 * 
 * This Kata is inspired by one of the bugs that almost happened due to the differences in number formatting ( •̀ω•́ )σ
 */

function sumUpNumbers(arr) {
  console.log(arr.map(i => parseLocalizedNumber(i)))
  return arr
    .reduce((acc, item) => acc += parseLocalizedNumber(item), 0)
    .toLocaleString('en-US', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    })
}

function parseLocalizedNumber(str) {
  const indexOfComma = str.indexOf(',')
  const indexOfDot = str.indexOf('.')

  if (indexOfDot == -1 && [...str].filter(i => i == ',').length > 1) {
    return Number(str.replaceAll(',', ''))
  }
  else if (indexOfDot > indexOfComma) {
    return Number(str.replaceAll(',', ''))
  }
  else if (indexOfComma > indexOfDot) {
    return Number(str.replaceAll('.', '').replace(',', '.'));
  }
  else return Number(str.replaceAll(',', ''))
}

console.log(sumUpNumbers(["1,234.34", "1.324,2", "14"])) // should return: '2,572.54'
console.log(sumUpNumbers([ '4.44', '8', '14,56' ])) // should return: '27.00'
console.log(sumUpNumbers([ '4,444,999', '8.234,1', '14,56' ])) // should return 4,453,247.66
