const toBin = (input) => {
  // These will do for now - work on if inputs get huge
  return parseInt(input).toString(2);
};

export default {
  toBin: toBin,
};
