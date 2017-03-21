import convert from '../convert';
import constants from '../constants';
import util from '../util';

/* ----- XOR ----- */

const XOR = (input1, input2) => {
  let result = '';
  for (let i = 0; i < input1.length && i < input2.length; i++) {
    let int1 = parseInt(input1[i]);
    let int2 = parseInt(input2[i]);
    result += ((int1 || int2) && !(int1 && int2)) ? '1' : '0';
  }
  return result;
};

/* ----- Ciphers ----- */

// Caesar Cipher, or single-key XOR
// Takes a repeating single ASCII char and XORs it across the plaintext
// Accepts text and key only in bin format
const caesarCipher = (text, key) => {
  const textBytes = text.length / 8;

  let fullKey = '';  
  for (let i = 0; i < textBytes; i++) {
    fullKey += key;
  }

  return XOR(text, fullKey);
};

const caesarCipherHuman = (textAscii, keyAscii) => {
  const text = convert.ascii.toBin(textAscii);
  const key = convert.ascii.toBin(keyAscii);
  const ciphertext = caesarCipher(text, key);
  return convert.bin.toHex(ciphertext);
}

// Break Caesar Cipher by testing keys against ciphertext
const breakCaesarCipher = (input) => {
  let bestScore = 999999999999;
  let bestKey = '';
  let bestPlaintext = '';
  for (let i = 0; i < 256; i++) {
    // For each dec representaton of ASCII char, get caesarCipher against ciphertext
    const key = convert.ascii.charNumToByte(i);
    const cipherPrime = caesarCipher(input, key);
    const plainPrime = convert.bin.toAsciiRaw(cipherPrime);
    const score = util.getScoreEnglish(plainPrime);

    // TODO once the run is done, only look at entries below average chi-squared?

    if (!score) continue;
    if (score < bestScore) {
      bestScore = score;
      bestKey = convert.dec.toAscii(i);
      bestPlaintext = plainPrime;
    }
  }

  return {
    key: bestKey,
    plaintext: bestPlaintext,
    score: bestScore
  };
};

export default {
  XOR: XOR,
  caesarCipher: caesarCipher,
  caesarCipherHuman: caesarCipherHuman,
  breakCaesarCipher: breakCaesarCipher
};
