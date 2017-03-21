import fs from 'fs';
import convert from '../convert';
import constants from '../constants';

const getCharFrequencies = (input) => {
  let frequencies = {};
  for (let i in input) {
    const char = input[i];
    if (frequencies[char] == undefined) {
      frequencies[char] = 1;
    } else {
      frequencies[char]++;
    }
  }
  return frequencies;
}

const getScoreEnglish = (input) => {
  const unprintables = constants.asciiUnprintables;
  const refScores = constants.frequenciesEnglish;

  // Anything that has an unprintable ASCII character can't be real
  for (let i = 0; i < unprintables.length; i++) {
    if (input.indexOf(unprintables[i]) > -1) {
      return null;
    }
  }

  // Parse input to remove symbols, make lowercase, and get frequencies
  input = input.replace(/[`~1234567890-=!@#$%^&*()_+[\]{}\\|,.<>;:'"/?]/g, '')
               .toLowerCase();
  const frequencies = getCharFrequencies(input);

  // Jettison any input that doesn't look like English (ie has non-English characters)
  let nonEnglish = 0;
  for (let i in input) {
    if (refScores[input[i]] == undefined) {
      // return null;
      nonEnglish++;
    }
  }
  if (nonEnglish > 0) return null;
  // TODO: config settings for things like the above

  // Using chi-squared to get relative score
  let totalScore = 0;
  for (let i in refScores) {
    if (frequencies[i]) {
      const charScore = frequencies[i] / input.length;
      totalScore += (Math.pow((charScore - refScores[i]), 2) / refScores[i]);
    }
  }

  // Anything greater than a chi-squared of 5 isn't serious
  if (totalScore > 5) return null;

  return totalScore;
};

const getFileLines = (path) => {
  return fs.readFileSync(path, 'utf-8').toString().split('\n');
};

const findKey = (obj, val) => {
  return Object.keys(obj).filter((key) => {return obj[key] === val})[0];
}

export default {
  getCharFrequencies: getCharFrequencies,
  getScoreEnglish: getScoreEnglish,
  getFileLines: getFileLines,
  findKey: findKey
};
