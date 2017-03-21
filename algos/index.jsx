import _ from 'lodash';
import convert from '../convert';
import util from './util';

/* ----- XOR ----- */

const XOR = (input1, input2) => {
  let result = '';
  for (let i = 0; i < input1.length && i < input2.length; i++) {
    let int1 = parseInt(input1[i]);
    let int2 = parseInt(input2[i]);
    result += ((int1 || int2) && !(int1 && int2)) ? '1' : '0';
  }
  return result;
}

/* ----- Ciphers ----- */

// Caesar Cipher, or single-key XOR
// Takes a repeating single ASCII char and XORs it across the plaintext
// Accepts inputMain as bin, key as ASCII decimal
const caesarCipher = (inputMain, key) => {
  const inputBytes = inputMain.length / 8;

  let inputKey = '';  
  for (let i = 0; i < inputBytes; i++) {
    inputKey += convert.bin.padToByte(convert.dec.toBin(key));
  }

  return XOR(inputMain, inputKey);
}

// Break Caesar Cipher by testing keys against ciphertext
const breakCaesarCipher = (input) => {
  let highScore = 0;
  let key = '';
  let plaintext = '';
  for (let i = 0; i < 256; i++) {
    // For each dec representaton of ASCII char, get caesarCipher against ciphertext
    const cipherPrime = caesarCipher(input, i);
    const plainPrime = convert.bin.toAsciiRaw(cipherPrime);
    let score = util.getScoreEnglish(plainPrime);

    // Inverting non-zero scores to make comparisons easier
    score = (!score) ? score : (1 / score);
    if (score > highScore) {
      highScore = score;
      key = convert.dec.toAscii(i);
      plaintext = plainPrime;
    }
  }

  return {
    key: key,
    plaintext: plaintext,
    score: highScore
  };
}

export default {
  XOR: XOR,
  caesarCipher: caesarCipher,
  breakCaesarCipher: breakCaesarCipher
};
