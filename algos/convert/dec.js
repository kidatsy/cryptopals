import bin from './bin';

const toBin = (input) => {
  // These will do for now - work on if inputs get huge
  return parseInt(input).toString(2);
};

const toAscii = (input) => {
  return bin.toAscii(toBin(input));
};

export default {
  toBin: toBin,
  toAscii: toAscii,
};
