import _ from 'lodash';
import { stdFrequencies } from '../constants';

export const chiSquared = (observed, expected = stdFrequencies.en) => {
  if (Object.keys(expected).length !== Object.keys(observed).length) return null;
  const arr = _.zip(Object.values(expected), Object.values(observed));
  return _.reduce(arr, (sum, vals) => {
    return sum + (Math.pow((vals[0] - vals[1]), 2) / vals[0]);
  }, 0);
};

export default chiSquared;
