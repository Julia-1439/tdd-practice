/**
 * @module caesar
 * @see https://www.asciitable.com/
 */


/**
 *
 * @param {String} str able to contain lower case, upper case, and punctuation.
 * NO numbers.
 * @param {Integer} key negatives and 0 permitted
 * @returns {String} ciphered string according to the Caesar Cipher encryption
 */
function caesarCipher(str, key) {
  // convert each letter to its ascii code with .charCodeAt(), add the key, convert back with String.fromCharCode()
  return str
    .split("")
    .map((char) => {
      const newAscii = (char.charCodeAt(0) + key - 96) % 26 + 96;
      const newChar = String.fromCharCode(newAscii);
      return newChar;
    })
    .join("");
}


export default caesarCipher;
