import _ from 'lodash';
import convert from './convert';
import chiSquared from './chiSquared';
import { stdFrequencies } from '../constants';

export const getFrequencies = (input) => {
  const letters = Object.keys(stdFrequencies.en);
  let frequencies = _.zipObject(letters, _.fill(Array(letters.length), 0));
  _.forEach(input, (char) => {
    frequencies[char]++;
  });
  return frequencies;
};

export const getChiSquared = (input) => {
  input = input.toLowerCase().replace(/([^a-z])/g, '');
  let frequencies = {};
  _.forEach(getFrequencies(input), (freq, letter) => {
    frequencies[letter] = freq / input.length;
  });
  return chiSquared(frequencies);
};

export const score = (input) => {
  const result = getChiSquared(input);
  return (result) ? (1 / result) : 0;
};
