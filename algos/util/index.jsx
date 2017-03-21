import convert from '../../convert';

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
  // Ditch out if we detect an unprintable ASCII character
  const unprintables = convert.constants.asciiUnprintables;
  for (let i = 0; i < unprintables.length; i++) {
    if (input.indexOf(unprintables[i]) > -1) {
      return 0;
    }
  }

  // Get the frequencies
  input = input.toLowerCase();
  const frequencies = getCharFrequencies(input);

  // Score them. this thing is bunk. make it better
  let totalScore = 0;
  const refScores = convert.constants.frequenciesEnglish;
  for (let i in refScores) {
    if (frequencies[i]) {
      const charScore = frequencies[i] / input.length;
      totalScore += Math.pow((charScore - refScores[i]), 2) / refScores[i];
    }
  }

  return totalScore;
};

export default {
  getCharFrequencies: getCharFrequencies,
  getScoreEnglish: getScoreEnglish,
};
