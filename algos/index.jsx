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
const caesarCipher = (inputMain, key) => {
  const inputBin = convert.hex.toBin(inputMain);
  const inputBytes = inputBin / 8;
  console.log(inputBin.length);

  let inputKey = '';  
  for (let i = 0; i < inputMain.length; i++) {
    inputKey += key;
  }

  return XOR(inputMain, inputKey);
}

const findBestFixedXORKey = (input) => {
  for (let i = 0; i < convert.constants.base64Set.length; i++) {
    // For each character, set up test
    let key = convert.constants.base64Set[i];
    console.log(caesarCipher(input, key));

    // get XOR
    // process for english-lang frequency
    // add to object w/ int as key, frequencies. sort
    // select the top and ascii-ize key
  }
}

export default {
  XOR: XOR,
  caesarCipher: caesarCipher,
  findBestFixedXORKey: findBestFixedXORKey
};
