import _ from 'lodash';
import constants from './constants.jsx';

const hex2bin = (hex) => {
  let bin = '';
  for (let i = 0; i < hex.length; i++) {
    bin += constants.hexEncodings[hex[i]];
  }
  return bin;
}

const bin2hex = (bin) => {
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

const bin2base64 = (bin) => {
  let base64 = '';
  for (let i = 0; i < bin.length; i += 6) {
    let dec = sextet2dec(bin.substr(i, 6));
    base64 += constants.base64Set[dec];
  }
  return base64;
}

const hex2base64 = (input) => {
  // return new Buffer(input, 'hex').toString('base64'); // The lazy, pre-built way
  const bin = hex2bin(input);
  return bin2base64(bin);
};

const XOR = (input1, input2) => {
  const bin1 = hex2bin(input1);
  const bin2 = hex2bin(input2);

  let result = '';
  for (let i = 0; i < bin1.length && i < bin2.length; i++) {
    let int1 = parseInt(bin1[i]);
    let int2 = parseInt(bin2[i]);
    result += ((int1 || int2) && !(int1 && int2)) ? '1' : '0';
  }

  return bin2hex(result);
}

const fixedXOR = (inputMain, key) => {
  let inputKey = '';
  for (let i = 0; i < inputMain.length; i++) {
    inputKey += key;
  }
  return XOR(inputMain, inputKey);
}

const findBestFixedXORKey = (input) => {
  for (let i = 0; i < constants.base64Set.length; i++) {
    let key = constants.base64Set[i];
    console.log(fixedXOR(input, key));
  }
}

export default {
  hex2base64: hex2base64,
  XOR: XOR,
  findBestFixedXORKey: findBestFixedXORKey
};
