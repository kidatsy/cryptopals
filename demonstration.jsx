import algos from './algos';
import convert from './convert';

const s1c1 = () => {
  console.log('Set 1, Challenge 1: Hex to Base64');
  console.log('---------------------------------');
  const input = '49276d206b696c6c696e6720796f757220627261696e206c696b65206120706f69736f6e6f7573206d757368726f6f6d';
  const output = convert.hex.toBase64(input);
  console.log('Input: ' + input);
  console.log('Output: ' + output);
  console.log('\n');
};

const s1c2 = () => {
  console.log('Set 1, Challenge 2: XOR');
  console.log('-----------------------');
  let input1 = '1c0111001f010100061a024b53535009181c';
  let input2 = '686974207468652062756c6c277320657965';
  console.log('Input 1: ' + input1);
  console.log('Input 2: ' + input2);

  input1 = convert.hex.toBin(input1);
  input2 = convert.hex.toBin(input2);
  let output = algos.XOR(input1, input2);
  output = convert.bin.toHex(output);

  console.log('Output: ' + output);
  console.log('\n');
};

const s1c3 = () => {
  console.log('Set 1, Challenge 3: Single-byte XOR Cipher');
  console.log('-----------------------');
  const input = '1b37373331363f78151b7f2b783431333d78397828372d363c78373e783a393b3736';
  console.log('Input: ' + input);
  algos.findBestFixedXORKey(input);
  console.log('\n');
};

export default {
  set1: () => {
    s1c1();
    s1c2();
    s1c3();
  },
};
