import _ from 'lodash';
import convert from '../convert';
import xor from '../xor';
import hamming from '../hamming';
import * as freq from '../freq';
import { printableAsciiChars, nonPrintableAsciiChars } from '../../constants';
import { getAsciiLength, repeatingStubString } from '../../utilities';

export const encrypt = (input, keyStub) => {
  const asciiLength = getAsciiLength(input);
  const key = repeatingStubString(keyStub, asciiLength);
  const keyBin = convert.ascii.toBin(key);
  return xor(input, keyBin);
}

const keyLengthLimits = [2, 40];

export const decrypt = (input) => {
  let results = [];
  for (let i = keyLengthLimits[0]; i <= keyLengthLimits[1]; i++) {
    console.log(i);
    // figure this out
  }

};
