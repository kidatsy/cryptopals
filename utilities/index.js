import fs from 'fs';
import _ from 'lodash';
import * as algos from '../algos';
import chalk from 'chalk';

export const nSizeChunks = (input, size) => {
  let output = [];
  while (input !== '') {
    output.push(input.slice(0, size));
    input = input.slice(size);
  }
  return output;
};

export const getAsciiLength = (bin) => {
  return algos.convert.bin.toAscii(bin).length;
}

export const singleCharString = (char, length) => {
  return _.fill(Array(length), char).join('');
};

export const repeatingStubString = (stub, length) => {
  const multiplier = Math.floor(length / stub.length) + 1;
  return _.fill(Array(multiplier), stub).join('').slice(0, length);
};

export const choolk = (bool, string, negation) => {
  return (bool) ? chalk.green(string) : chalk.red((negation !== undefined) ? negation : string);
};

export const getFileLines = (path) => {
  return fs.readFileSync(path, 'utf-8').toString().split('\n');
};
