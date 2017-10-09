import _ from 'lodash';
import convert from '../convert';
import xor from '../xor';
import * as freq from '../freq';
import { printableAsciiChars, nonPrintableAsciiChars } from '../../constants';
import { getAsciiLength, repeatingStubString } from '../../utilities';

export const encrypt = (input, keyStub) => {
  const asciiLength = getAsciiLength(input);
  const key = repeatingStubString(keyStub, asciiLength);
  const keyBin = convert.ascii.toBin(key);
  return xor(input, keyBin);
}

export const decrypt = (input) => {
  let results = [];
  for (let i in printableAsciiChars) {
    // figure this out
  }

  return _.maxBy(results, (result) => {
    return result.score;
  });
};
