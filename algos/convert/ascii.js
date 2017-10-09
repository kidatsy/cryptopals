const toBin = (input) => {
  var output = '';
  for (var i = 0; i < input.length; i++) {
    var bin = input[i].charCodeAt().toString(2);
    output += Array(8 - bin.length + 1).join("0") + bin;
  } 
  return output;
}

export default {
  toBin: toBin,
};
