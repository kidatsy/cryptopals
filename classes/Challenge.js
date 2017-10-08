import Promise from 'bluebird';
import chalk from 'chalk';
import { choolk } from '../utilities';

class Challenge {
  constructor(params) {
    this.number = params.number || null;
    this.description = params.description || null;
    this.input = params.input || null;
    this.expectedOutput = params.expectedOutput || null;
    this.procedure = params.procedure || function(){};
    return this;
  }

  setProcedure(procedure) {
    this.procedure = () => {
      return new Promise((resolve, reject) => {
        procedure();
        resolve();
      });
    };
    return this;
  }

  setOutput(output) {
    this.output = output;
    return this;
  }

  getNumber() {
    return this.number;
  }

  getInput() {
    return this.input;
  }

  run() {
    this.notifyOfRun();
    this.procedure()
      .then(() => {
        this.verify();
      });
  }

  notifyOfRun() {
    console.log(chalk.yellow(chalk.underline('Running Challenge ' + this.number + '!')));
    if (this.description) {
      console.log(this.description);
    }
  }

  verify(verbose = true) {
    const result = this.output === this.expectedOutput;
    console.log('Input: ' + chalk.magenta(this.input));
    if (verbose) {
      console.log('  => Output: ' + choolk(result, this.output) + '\n'
      + '  ' + choolk(result, '+', '-') + 'Expected: ' + choolk(result, this.expectedOutput));
    } else {
      console.log('  => Output ' + choolk(result, (result) ? '===' : '!==') + ' Expected');
    }
    // console.log((result) ? chalk.green(result) : chalk.red(result));
    console.log('');
  }
}

export default Challenge;
