import _ from 'lodash';
import xor from './xor';

export default (input1, input2) => {
  if (input1.length !== input2.length) return null;
  return _.reduce(Array.from(xor(input1, input2)), (sum, digit) => {
    return sum + parseInt(digit);
  }, 0);
};
