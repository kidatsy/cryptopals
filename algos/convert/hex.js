import _ from 'lodash';
import bin from './bin';
import { hexBitsFor } from '../../constants';

const toBin = (input) => {
  return _.map(input, (digit) => {
    return hexBitsFor[digit];
  }).join('');
};

const toDec = (input) => {
  // TODO
}

const toBase64 = (input) => {
  return bin.toBase64(toBin(input));
}

export default {
  toBin: toBin,
  toDec: toDec,
  toBase64: toBase64,
};
