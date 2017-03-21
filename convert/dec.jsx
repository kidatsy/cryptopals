import constants from '../constants';

const toBin = (input) => {
  return parseInt(input, 10).toString(2);
}

const toHex = (input) => {
  // sdfasfdasd
}

const toBase64 = (input) => {
  // sdfasfdasd
}

const toAscii = (input) => {
  return constants.asciiEncodingsNormalized[input];
}

const toAsciiRaw = (input) => {
  return constants.asciiEncodingsRaw[input];
}

export default {
  toBin: toBin,
  toHex: toHex,
  toBase64: toBase64,
  toAscii: toAscii,
  toAsciiRaw: toAsciiRaw,
};
