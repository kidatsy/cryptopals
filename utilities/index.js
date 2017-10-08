import chalk from 'chalk';

export const nSizeChunks = (input, size) => {
  let output = [];
  while (input !== '') {
    output.push(input.slice(0, size));
    input = input.slice(size);
  }
  return output;
};

export const choolk = (bool, string, negation) => {
  return (bool) ? chalk.green(string) : chalk.red((negation !== undefined) ? negation : string);
};