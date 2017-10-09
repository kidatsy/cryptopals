import _ from 'lodash';
import convert from '../convert';
import xor from '../xor';
import * as freq from '../freq';
import { printableAsciiChars, nonPrintableAsciiChars } from '../../constants';
import { getAsciiLength, singleCharString } from '../../utilities';

export const encrypt = (input, keyChar) => {
  const asciiLength = getAsciiLength(input);
  const key = singleCharString(keyChar, asciiLength);
  const keyBin = convert.ascii.toBin(key);
  return xor(input, keyBin);
}

// Brute-forcing w/ single-byte xors of all printable ascii chars
export const decrypt = (input) => {
  let results = [];
  for (let i in printableAsciiChars) {
    const char = printableAsciiChars[i];
    const xorResult = encrypt(input, char);
    const plaintext = convert.bin.toAscii(xorResult);
    const score = freq.score(plaintext);

    results.push({
      char: char,
      plaintext: plaintext,
      score: score,
    });
  }

  return _.maxBy(results, (result) => {
    return result.score;
  });
};
