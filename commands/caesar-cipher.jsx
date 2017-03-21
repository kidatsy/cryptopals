import prompt from 'prompt';
import chalk from 'chalk';
import algos from '../algos';

prompt.message = chalk.green('Caeser Cipher');
prompt.delimiter = chalk.white(': ');

prompt.start();

const schema = {
  properties: {
    plaintext: {
      message: chalk.green('Plaintext'),
      required: true
    },
    key: {
      message: chalk.green('Key'),
      pattern: /^.$/,
      required: true
    }
  }
};

prompt.get(schema, (err, result) => {
  const ciphertext = algos.caesarCipherHuman(result.plaintext, result.key);
  console.log(chalk.green('Ciphertext (hex)')
            + chalk.white(': ')
            + ciphertext);
});

