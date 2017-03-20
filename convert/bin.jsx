import constants from './constants.jsx';
import dec from './dec.jsx';

const padToByte = (input) => {
  // pad bin with left-ward zeros
  let output = input;
  for (let i = 0; i < (8 - input.length); i++) {
    output = '0' + output;
  }
  return output;
}

const toDec = (input) => {
  // console.log(input);
  // console.log(parseInt(input, 2));
  return parseInt(input, 2);
}

const toHex = (bin) => {
  let hex = '';
  for (let i = 0; i < bin.length; i += 4) {
    hex += constants.hexEncodingsInv[bin.substr(i, 4)];
  }
  return hex;
}

const sextet2dec = (sextet) => {
  return (32 * parseInt(sextet[0]))
      + (16 * parseInt(sextet[1]))
      + (8 * parseInt(sextet[2]))
      + (4 * parseInt(sextet[3]))
      + (2 * parseInt(sextet[4]))
      + parseInt(sextet[5]);
}

const toBase64 = (bin) => {
  let base64 = '';
  for (let i = 0; i < bin.length; i += 6) {
    let dec = sextet2dec(bin.substr(i, 6));
    base64 += constants.base64Set[dec];
  }
  return base64;
}

const toAscii = (input) => {
  const inputBytes = input.length / 8;
  let output = '';

  for (let i = 0; i < inputBytes; i++) {
    const bin = input.substr((i * 8), 8);
    output += dec.toAscii(toDec(bin));
  }
  return output;
}

const toAsciiRaw = (input) => {
  const inputBytes = input.length / 8;
  let output = '';

  for (let i = 0; i < inputBytes; i++) {
    const bin = input.substr((i * 8), 8);
    output += dec.toAsciiRaw(toDec(bin));
  }
  return output;
}

export default {
  padToByte: padToByte,
  toDec: toDec,
  toHex: toHex,
  toBase64: toBase64,
  toAscii: toAscii,
  toAsciiRaw: toAsciiRaw,
};
