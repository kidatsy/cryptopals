import _ from 'lodash';
import Set from '../classes/Set';
import Challenge from '../classes/Challenge';
import * as algos from '../algos';
import * as exploits from '../exploits';

const Set1 = new Set(1);

// Challenge 1
const C1 = new Challenge({
  number: 1,
  description: 'hex to base64',
  input: '49276d206b696c6c696e6720796f757220627261696e206c696b65206120706f69736f6e6f7573206d757368726f6f6d',
  expectedOutput: 'SSdtIGtpbGxpbmcgeW91ciBicmFpbiBsaWtlIGEgcG9pc29ub3VzIG11c2hyb29t'
}, () => {
  return algos.convert.hex.toBase64(C1.getInput());
});

// Challenge 2
const C2 = new Challenge({
  number: 2,
  description: 'fixed xor',
  input: ['1c0111001f010100061a024b53535009181c', '686974207468652062756c6c277320657965'],
  expectedOutput: '746865206b696420646f6e277420706c6179'
}, () => {
  const inputs = _.map(C2.getInput(), (input) => {
    return algos.convert.hex.toBin(input);
  });
  const outputBin = algos.xor(inputs[0], inputs[1]);
  return algos.convert.bin.toHex(outputBin);
});

// Challenge 3
const C3 = new Challenge({
  number: 3,
  description: 'single-byte xor cipher',
  input: '1b37373331363f78151b7f2b783431333d78397828372d363c78373e783a393b3736',
}, () => {
  const bin = algos.convert.hex.toBin(C3.getInput());
  const result = exploits.xor.singleKeyBruteForce(bin);
  return result.char + ' => ' + result.plaintext;
});


// Adding Challenges to Set
Set1.addChallenge(C1);
Set1.addChallenge(C2);
Set1.addChallenge(C3);

export default Set1;
