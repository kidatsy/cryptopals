import constants from './constants.jsx';
import convertBin from './bin.jsx';

const toBin = (hex) => {
  let bin = '';
  for (let i = 0; i < hex.length; i++) {
    bin += constants.hexEncodings[hex[i]];
  }
  return bin;
}

const toDec = (input) => {
  // sdfasfdasd
}

const toBase64 = (input) => {
  // return new Buffer(input, 'hex').toString('base64'); // The lazy, pre-built way
  const bin = toBin(input);
  return convertBin.toBase64(bin);
};

const toAscii = (input) => {
  // sdfasfdasd
}

export default {
  toBin: toBin,
  toDec: toDec,
  toBase64: toBase64,
  toAscii: toAscii,
};
