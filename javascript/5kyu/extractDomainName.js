// https://www.codewars.com/kata/514a024011ea4fb54200004b/train/javascript

/**
 * 5 kyu - Extract the domain name from a URL
 * 
 * Write a function that when given a URL as a string, 
 * parses out just the domain name and returns it as a string. For example:
 * - url = "http://github.com/carbonfive/raygun" -> domain name = "github"
 * - url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
 * - url = "https://www.cnet.com"                -> domain name = "cnet"
 */
function domainName(url) {
  return url.replace(/((https?:\/\/)?(www\.)?)/g, '').split('.')[0]
}

console.log(domainName('http://github.com/carbonfive/raygun'))  // should return: github
console.log(domainName('http://www.zombie-bites.com'))  // should return: "zombie-bites"
console.log(domainName('www.xakep.ru'))  // should return: "xakep"
console.log(domainName('http://google.co.jp')) // should return: "google"