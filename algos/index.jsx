import _ from 'lodash';
import convert from '../convert';

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

const getFrequencies = (input) => {
  let frequencies = {};
  for (let i in input) {
    const char = input[i];
    if (frequencies[char] == undefined) {
      frequencies[char] = 1;
    } else {
      frequencies[char]++;
    }
  }
  return frequencies;
}

const getEnglishScore = (input) => {
  // Ditch out if we detect an unprintable ASCII character
  const unprintables = convert.constants.asciiUnprintables;
  for (let i = 0; i < unprintables.length; i++) {
    if (input.indexOf(unprintables[i]) > -1) {
      return 0;
    }
  }

  // Get the frequencies
  input = input.toLowerCase();
  const frequencies = getFrequencies(input);

  // Score them. this thing is bunk. make it better
  let totalScore = 0;
  const charScore = convert.constants.frequencyScoresEnglish;
  for (let i in charScore) {
    if (frequencies[i]) {
      totalScore += frequencies[i] * charScore[i];
    }
  }

  return totalScore;
};

// Break Caesar Cipher by testing keys against ciphertext
const breakCaesarCipher = (input) => {
  let highScore = 0;
  let key = '';
  let plaintext = '';
  for (let i = 0; i < 256; i++) {
    // For each dec representaton of ASCII char, get caesarCipher against ciphertext
    const cipherPrime = caesarCipher(input, i);
    const plainPrime = convert.bin.toAsciiRaw(cipherPrime);
    // console.log(plainPrime);

    const score = getEnglishScore(plainPrime);
    // console.log(score);
    if (score > highScore) {
      highScore = score;
      key = convert.dec.toAscii(i);
      plaintext = plainPrime;
    }
  }

  return {
    key: key,
    plaintext: plaintext
  };
}

export default {
  XOR: XOR,
  caesarCipher: caesarCipher,
  breakCaesarCipher: breakCaesarCipher
};
