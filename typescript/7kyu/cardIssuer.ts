// https://www.codewars.com/kata/5701e43f86306a615c001868

/**
 * 7 kyu - Credit card issuer checking
 * 
 * Given a credit card number we can determine who the issuer/vendor is with a few basic knowns.
 * 
 * Complete the function getIssuer() that will use the values shown below to determine the card issuer for a given card number. 
 * If the number cannot be matched then the function should return the string Unknown.
 * 
 * AMEX - begins with 34 or 37 - length 15
 * 
 * Discover - begins with 6011 - length 16
 * 
 * Mastercard - begins with 51, 52, 53, 54 or 55 - length 16
 * 
 * VISA - begins with 4 - length 13 or 16
 */
export const getIssuer = (x: number): keyof typeof Issuer => {
  const str = String(x)
  const length = str.length

  if ((str.startsWith('34') || str.startsWith('37')) && length == 15) return 'AMEX';

  if (str.startsWith('6011') && length == 16) return 'Discover';

  if (str.startsWith('4') && (str.length == 16 || length == 13)) return 'VISA';

  if (length === 16 && (
    str.startsWith('51') ||
    str.startsWith('52') ||
    str.startsWith('53') ||
    str.startsWith('54') ||
    str.startsWith('55')
  )) return 'Mastercard';

  return 'Unknown';
};

enum Issuer {
  VISA = 'VISA',
  AMEX = 'AMEX',
  Mastercard = 'Mastercard',
  Discover = 'Discover',
  Unknown = 'Unknown',
}


console.log(getIssuer(378282246310005))
