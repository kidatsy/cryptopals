class Set {
  constructor(number) {
    this._number = number;
    this._challenges = {};
  }

  getNumber() {
    return this._number;
  }

  _notifyAll() {
    console.log('Running all Challenges for Set ' + this._number + '!'
      + '\n=================================\n');    
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
    for (const i in this._challenges) {
      this.runChallenge(i);
    }
  }
}

export default Set;
