import constants from './constants.jsx';

const toDec = (input) => {
  // sdfasfdasd
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
  // convert bin to int
  // Get ascii from JSON
}

export default {
  toDec: toDec,
  toHex: toHex,
  toBase64: toBase64,
  toAscii: toAscii,
};
