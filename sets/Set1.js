import Set from '../classes/Set';
import Challenge from '../classes/Challenge';
import { convert } from '../algos';

const Set1 = new Set(1);

// Challenge 1
const C1 = new Challenge({
  number: 1,
  description: 'hex to base64',
  input: '49276d206b696c6c696e6720796f757220627261696e206c696b65206120706f69736f6e6f7573206d757368726f6f6d',
  expectedOutput: 'SSdtIGtpbGxpbmcgeW91ciBicmFpbiBsaWtlIGEgcG9pc29ub3VzIG11c2hyb29t'
}).setProcedure(() => {
  const output = convert.hex.toBase64(C1.getInput());
  C1.setOutput(output);
});

// Adding Challenges to Set
Set1.addChallenge(C1);

export default Set1;
