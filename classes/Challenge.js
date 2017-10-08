import Promise from 'bluebird';
import chalk from 'chalk';
import { choolk } from '../utilities';

class Challenge {
  constructor(params, procedure) {
    this._number = params.number || null;
    this._description = params.description || null;
    this._input = params.input || null;
    this._expectedOutput = params.expectedOutput || null;
    this._procedure = () => {
      return new Promise((resolve, reject) => {
        this._output = procedure();
        resolve();
      });
    };
    return this;
  }

  getNumber() {
    return this._number;
  }

  getInput() {
    return this._input;
  }

  run() {
    this._notifyOfRun();
    this._procedure()
      .then(() => {
        this._verify();
      });
  }

  _notifyOfRun() {
    console.log(chalk.yellow(chalk.underline('Running Challenge ' + this._number + '!')));
    if (this._description) {
      console.log(this._description);
    }
  }

  _verify(verbose = true) {
    const result = this._output === this._expectedOutput;
    console.log('Input: ' + chalk.magenta(this._input));
    if (verbose) {
      console.log('  => Output: ' + choolk(result, this._output) + '\n'
      + '  ' + choolk(result, '+', '-') + 'Expected: ' + choolk(result, this._expectedOutput));
    } else {
      console.log('  => Output ' + choolk(result, (result) ? '===' : '!==') + ' Expected');
    }
    // console.log((result) ? chalk.green(result) : chalk.red(result));
    console.log('');
  }
}

export default Challenge;
