// https://www.codewars.com/kata/526989a41034285187000de4/train/javascript

/**
 * 5 kyu - Count IP Addresses
 * 
 * Implement a function that receives two IPv4 addresses, and returns the number of addresses 
 * between them (including the first one, excluding the last one).
 * 
 * All inputs will be valid IPv4 addresses in the form of strings. The last address will always
 *  be greater than the first one.
 * 
 * ### Examples
 * - With input "10.0.0.0", "10.0.0.50"  => return   50 
 * - With input "10.0.0.0", "10.0.1.0"   => return  256 
 * - With input "20.0.0.10", "20.0.1.0"  => return  246
 */
function ipsBetween(start, end){
  let result = 0

  const arr1 = start.split('.').map(i => +i)
  const arr2 = end.split('.').map(i => +i)

  for (let i = 0; i < 4; i++) {
    result += (arr2[i] - arr1[i]) * 256 ** (3 - i)
  }

  return result
}

console.log(ipsBetween("10.0.0.0", "10.0.0.50"))
console.log(ipsBetween("10.0.0.0", "10.0.1.0"))
console.log(ipsBetween("20.0.0.10", "20.0.1.0"))