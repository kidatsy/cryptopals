import _ from 'lodash';
import { base64Chars } from '../../constants';
import { nSizeChunks } from '../../utilities';

const toDec = (input) => {
  // These will do for now - work on if inputs get huge
  return parseInt(input, 2).toString(10);
};

const toHex = (input) => {
  // These will do for now - work on if inputs get huge
  return parseInt(input, 2).toString(16);
};

const toBase64 = (input) => {
  const sextets = nSizeChunks(input, 6);
  return _.map(sextets, (sextet) => {
    return base64Chars[toDec(sextet)];
  }).join('');
};

export default {
  toDec: toDec,
  toHex: toHex,
  toBase64: toBase64,
};
