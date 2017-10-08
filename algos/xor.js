import _ from 'lodash';
import convert from './convert';

const xor = (input1, input2) => {
  const inputs = (input1.length > input2.length) ? [input1, input2] : [input2, input1];
  let output = [];
  for (let i in inputs[0]) {
    let int1 = parseInt(inputs[0][i]);
    let int2 = parseInt(inputs[1][i]) || 0;
    output.push((int1 || int2) && !(int1 && int2) ? '1' : '0');
  };

  return output.join('');
};

export default xor;
