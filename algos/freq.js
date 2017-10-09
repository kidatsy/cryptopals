import _ from 'lodash';
import convert from './convert';
import chiSquared from './chiSquared';
import { stdFrequencies } from '../constants';

const getFrequencies = (input) => {
  const letters = Object.keys(stdFrequencies.en);
  let frequencies = _.zipObject(letters, _.fill(Array(letters.length), 0));
  _.forEach(input, (char) => {
    if (_.includes(letters, char)) frequencies[char]++;
  });
  return frequencies;
};

const getScoreByChiSquare = (input) => {
  const sanitized = input.toLowerCase().replace(/([^a-z\s])/g, '');
  let frequencies = {};
  _.forEach(getFrequencies(sanitized), (freq, char) => {
    frequencies[char] = freq / input.length;
  });

  return chiSquared(frequencies);
};

const getScoreByTally = (input) => {
  const sanitized = input.toLowerCase().match(/([a-z\s])/g, '');
  let frequencies = {};
  _.forEach(getFrequencies(sanitized), (freq, char) => {
    frequencies[char] = freq;
  });

  return _.reduce(frequencies, (result, freq, char) => {
    return result + (stdFrequencies.en[char] * freq);
  }, 0);
};

export const score = (input) => {
  return getScoreByTally(input);
  // const result = getScoreByChiSquare(input);
  // return (result) ? (1 / result) : 0;
};

