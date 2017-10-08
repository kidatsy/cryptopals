import bin from './bin';

const toDec = (input) => {
  return parseInt(input, 16);
}

const toBin = (input) => {
  return toDec(input).toString(2);
};

const toBase64 = (input) => {
  return bin.toBase64(toDec(input));
}

export default {
  toBin: toBin,
  toDec: toDec,
  toBase64: toBase64,
};
