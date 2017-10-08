const toDec = (input) => {
  return parseInt(input, 2);
}

const toHex = (input) => {
  return toDec(input).toString(16);
};

const toBase64 = (input) => {
    // Need to do this!!!!
  return input;
}

export default {
  toDec: toDec,
  toHex: toHex,
  toBase64: toBase64,
};
