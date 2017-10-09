import _ from 'lodash';
import { base64Chars } from '../../constants';
import dec from './dec';

const toBin = (input) => {
  return _.map(input, (char) => {
    const bin = dec.toBin(_.indexOf(base64Chars, char));
    return (bin.length < 6)
      ? _.fill(Array(6 - bin.length), '0').join('') + bin
      : bin;
  }).join('');
};

const toDec = (input) => {
  // TODO
}

const toHex = (input) => {
  // TODO
}

export default {
  toBin: toBin,
  toDec: toDec,
  toHex: toHex,
};
