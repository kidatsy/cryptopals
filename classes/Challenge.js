import Promise from 'bluebird';
import chalk from 'chalk';
import { choolk } from '../utilities';

class Challenge {
  constructor(params, procedure) {
    this._number = params.number || null;
    this._description = params.description || null;
    this._input = params.input || null;
    this._key = params.key || null;
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

  getKey() {
    return this._key;
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
    console.log('Input: ' + chalk.magenta(
        (typeof this._input !== 'string' && this._input.length > 5)
          ? this._input.slice(0,5) + '... too many to list'
          : (this._input.length > 400)
            ? this._input.slice(0,400) + '...'
            : this._input
      )
    );
    if (this._expectedOutput) {
      const result = this._output === this._expectedOutput;
      if (verbose) {
        console.log('  => Output: ' + choolk(result, this._output) + '\n'
        + '  ' + choolk(result, '+', '-') + 'Expected: ' + choolk(result, this._expectedOutput));
      } else {
        console.log('  => Output ' + choolk(result, (result) ? '===' : '!==') + ' Expected');
      }
    } else {
      console.log('  => Output: ' + chalk.yellow(this._output));
    }
    console.log('');
  }
}

export default Challenge;
