import _ from 'lodash';
import fs from 'fs';
import readline from 'readline';
import Set from '../classes/Set';
import Challenge from '../classes/Challenge';
import * as algos from '../algos';
import * as utils from '../utilities';

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
  const result = algos.crypto.caesar.decrypt(bin);
  return result.char + ' => ' + result.plaintext;
});

// Challenge 4
const C4 = new Challenge({
  number: 4,
  description: 'detect single-character xor',
  input: utils.getFileLines('./files/c4.txt'),
}, () => {
  const results = _.map(C4.getInput(), (line) => {
    const bin = algos.convert.hex.toBin(line);
    let result = algos.crypto.caesar.decrypt(bin);
    result['ciphertext'] = line;
    return result;
  });

  const winner = _.maxBy(results, (result) => {
    return result.score;
  });

  return winner.ciphertext + ', ' + winner.char + ' => ' + winner.plaintext;
});

// Challenge 5
const C5 = new Challenge({
  number: 5,
  description: 'repeating-key xor',
  input: 'Burning \'em, if you ain\'t quick and nimble\nI go crazy when I hear a cymbal',
  key: 'ICE',
  expectedOutput: '0b3637272a2b2e63622c2e69692a23693a2a3c6324202d623d63343c2a26226324272765272a282b2f20430a652e2c652a3124333a653e2b2027630c692b20283165286326302e27282f',
}, () => {
  const input = algos.convert.ascii.toBin(C5.getInput());
  return algos.convert.bin.toHex(algos.crypto.vigenere.encrypt(input, C5.getKey()));
});

// Challenge 5
const C6 = new Challenge({
  number: 6,
  description: 'break repeating-key xor',
  input: utils.getFile('./files/c6.txt'),
}, () => {
  return algos.convert.bin.toAscii(
    algos.crypto.vigenere.decrypt(algos.convert.base64.toBin(C6.getInput()))
  );
});

// Adding Challenges to Set
Set1.addChallenge(C1);
Set1.addChallenge(C2);
Set1.addChallenge(C3);
Set1.addChallenge(C4);
Set1.addChallenge(C5);
Set1.addChallenge(C6);

export default Set1;
