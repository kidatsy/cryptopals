import Promise from 'bluebird';
import chalk from 'chalk';

class Set {
  constructor(number) {
    this._number = number;
    this._challenges = {};
  }

  getNumber() {
    return this._number;
  }

  _notifyAll() {
    console.log(chalk.yellow('Running all Challenges for Set ' + this._number + '!'
      + '\n=================================\n'));
  }

  addChallenge(challenge) {
    this._challenges[challenge.getNumber()] = challenge;
    return this;
  }

  runChallenge(number) {
    if (this._challenges[number]) {
      this._challenges[number].run();
    }
  }

  all() {
    this._notifyAll();
    Promise.each(Object.keys(this._challenges), (number) => {
      this.runChallenge(number);
    })
  }
}

export default Set;
