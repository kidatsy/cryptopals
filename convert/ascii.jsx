import constants from '../constants';
import util from '../util';
import convertDec from './dec.jsx';
import convertBin from './bin.jsx';

const charNumToByte = (charNum) => {
  return convertBin.padToByte(convertDec.toBin(charNum));
}

const charToCharNum = (char) => {
  return util.findKey(constants.asciiEncodingsRaw, char);
}

const charToByte = (char) => {
  const charNum = charToCharNum(char);
  return charNumToByte(charNum);
}

const toBin = (input) => {
  let bin = '';
  for (let i in input) {
    bin += charToByte(input[i]);
  }
  return bin;
}

const toDec = (input) => {
  // sdfasfdasd
}

const toHex = (input) => {
  // sdfasfdasd
}

const toBase64 = (input) => {
  // sdfasfdasd
}

export default {
  charNumToByte: charNumToByte,
  toBin: toBin,
  toDec: toDec,
  toHex: toHex,
  toBase64: toBase64,
};
