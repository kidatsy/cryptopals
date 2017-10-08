import _ from 'lodash';
import Set from '../classes/Set';
import Challenge from '../classes/Challenge';
import { convert, xor } from '../algos';

const Set1 = new Set(1);

// Challenge 1
const C1 = new Challenge({
  number: 1,
  description: 'hex to base64',
  input: '49276d206b696c6c696e6720796f757220627261696e206c696b65206120706f69736f6e6f7573206d757368726f6f6d',
  expectedOutput: 'SSdtIGtpbGxpbmcgeW91ciBicmFpbiBsaWtlIGEgcG9pc29ub3VzIG11c2hyb29t'
}, () => {
  const output = convert.hex.toBase64(C1.getInput());
  return output;
});

// Challenge 2
const C2 = new Challenge({
  number: 2,
  description: 'fixed XOR',
  input: ['1c0111001f010100061a024b53535009181c', '686974207468652062756c6c277320657965'],
  expectedOutput: '746865206b696420646f6e277420706c6179'
}, () => {
  const inputs = _.map(C2.getInput(), (input) => {
    return convert.hex.toBin(input);
  });
  const outputBin = xor(inputs[0], inputs[1]);
  return convert.bin.toHex(outputBin);
});

// Adding Challenges to Set
Set1.addChallenge(C1);
Set1.addChallenge(C2);

export default Set1;
