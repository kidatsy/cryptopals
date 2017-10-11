import _ from 'lodash';
import convert from '../convert';
import xor from '../xor';
import hamming from '../hamming';
import * as caesar from './caesar';
import * as freq from '../freq';
import * as utils from '../../utilities';

export const encrypt = (input, keyStub) => {
  const asciiLength = utils.getAsciiLength(input);
  const key = utils.repeatingStubString(keyStub, asciiLength);
  const keyBin = convert.ascii.toBin(key);
  return xor(input, keyBin);
}

export const decrypt = (input) => {
  const key = getKey(input);
  return {
    key: key,
    plaintext: convert.bin.toAscii(encrypt(input, key)),
  };
};

const keyLengthLimits = [2, 40];

const getKey = (input) => {
  const probableKeyLength = getProbableKeyLength(input);
  const bytes = probableKeyLength * 8;
  const chunks = _.map(utils.nSizeChunks(input, bytes), (row) => {
    return utils.nSizeChunks(row, 8);
  });
  return _.map(_.unzip(chunks), (col) => {
    const colString = col.join('');
    return caesar.decrypt(colString).key;
  }).join('');
};

const getProbableKeyLength = (input) => {
  let hammingScores = [];
  for (let keyLength = keyLengthLimits[0]; keyLength <= keyLengthLimits[1]; keyLength++) {
    const bytes = keyLength * 8;
    const chunks = utils.nSizeChunks(input, bytes);
    const lastChunk = chunks[chunks.length - 1];
    const countChunks = (lastChunk && lastChunk.length === bytes)
      ? chunks.length : chunks.length - 1;

    let score = 0;
    for (let chunkId = 0; chunkId < countChunks - 1; chunkId++) {
      score += hamming(chunks[chunkId], chunks[chunkId + 1]);
    }
    if (score) {
      hammingScores.push({
        keyLength: keyLength,
        score: score / ((countChunks - 1) * bytes),
      });
    }
  }
  return _.minBy(hammingScores, (entry) => {
    return entry.score;
  }).keyLength;
};
