import _ from 'lodash';
import { base64Chars, hexDigitFor } from '../../constants';
import { nSizeChunks } from '../../utilities';

const toDec = (input) => {
  // These will do for now - work on if inputs get huge
  return parseInt(input, 2).toString(10);
};

const toHex = (input) => {
  const quartets = nSizeChunks(input, 4);
  return _.map(quartets, (quartet) => {
    return hexDigitFor[quartet];
  }).join('');
};

const toBase64 = (input) => {
  const sextets = nSizeChunks(input, 6);
  return _.map(sextets, (sextet) => {
    return base64Chars[toDec(sextet)];
  }).join('');
};

const toAscii = (input) => {
  var output = '';
  // investigate if this is better than using nSizeChunks
  var arr = input.match(/.{1,8}/g);
  for (var i = 0; i < arr.length; i++) {
    output += String.fromCharCode(parseInt(arr[i], 2).toString(10));
  }
  return output;
}

export default {
  toDec: toDec,
  toHex: toHex,
  toBase64: toBase64,
  toAscii: toAscii,
};
