// https://www.codewars.com/kata/57037ed25a7263ac35000c80

/**
 * 8 kyu - Generate user links
 * 
 * Your task is to create userlinks for the url, you will be given a username and must return a valid link.
 * 
 * # Example
 * 
 * generate_link('matt c')
 * 
 * http://www.codewars.com/users/matt%20c
 */

function generateLink(user) {
  return 'http://www.codewars.com/users/' + encodeURIComponent(user)
}

console.log(generateLink('matt c'))
