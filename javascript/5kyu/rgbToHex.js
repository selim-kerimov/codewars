// https://www.codewars.com/kata/513e08acc600c94f01000001/train/javascript

/**
 * 5 kyu - Human Readable Time
 * 
 * The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in a 
 * hexadecimal representation being returned. Valid decimal values for RGB are 0 - 255. Any values 
 * that fall out of that range must be rounded to the closest valid value.
 * 
 * Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.
 * 
 * ### Examples (input --> output):
 * - 255, 255, 255 --> "FFFFFF"
 * - 255, 255, 300 --> "FFFFFF"
 * - 0, 0, 0       --> "000000"
 * - 148, 0, 211   --> "9400D3"
 */

function rgb(r, g, b) {
  return getHex(r) + getHex(g) + getHex(b)
}

const getHex = (bits) => {
  let value = bits

  if (bits > 255) value = 255
  else if (bits < 0) value = 0

  return value.toString(16).padStart(2, '0').toUpperCase()
}

console.log(rgb(255, 255, 255)) // should return: "FFFFFF"
console.log(rgb(255, 255, 300))   // should return: "FFFFFF"
console.log(rgb(0, 0, 0))       // should return: "000000"
console.log(rgb(148, 0, 211))   // should return: "9400D3"