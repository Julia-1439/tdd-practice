/**
 * @module caesar
 * @see https://www.asciitable.com/
 * Note that `26` is the English alphabet size
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
      if (!isLetter(char)) return char;
      const oldCode = char.charCodeAt(0);
      const newCode = !isUpper(char)
        ? computeNewCodeLowerCase(oldCode, key)
        : computeNewCodeUpperCase(oldCode, key);
      const newChar = String.fromCharCode(newCode);
      return newChar;
    })
    .join("");
}

function isLetter(char) {
  return char.match(/[a-z]/i); // i stands for case-insensitive
}

function isUpper(char) {
  return char.toUpperCase() === char;
}

const LOWER_A_DIST_FROM_0 = "a".charCodeAt(0); // 97
function computeNewCodeLowerCase(oldCode, key) {
  let newCode = oldCode + key;
  newCode = newCode - LOWER_A_DIST_FROM_0;

  // Mod it to loop the letters back around
  newCode = ((newCode % 26) + 26) % 26; // behaves like normal mod if newCode is positive. if negative, this expression circumvents JS's default way of modding negative numbers, in order to write the looping as expected

  newCode += LOWER_A_DIST_FROM_0;
  return newCode;
}

const UPPER_A_DIST_FROM_0 = "A".charCodeAt(0); // 65
function computeNewCodeUpperCase(oldCode, key) {
  let newCode = oldCode + key;
  newCode = newCode - UPPER_A_DIST_FROM_0;

  // Mod it to loop the letters back around
  newCode = ((newCode % 26) + 26) % 26; // behaves like normal mod if newCode is positive. if negative, this expression circumvents JS's default way of modding negative numbers, in order to write the looping as expected

  newCode += UPPER_A_DIST_FROM_0;
  return newCode;
}

export default caesarCipher;
