class Set {
  constructor(number) {
    this.number = number;
    this.challenges = {};
  }

  getNumber() {
    return this.number;
  }

  notifyAll() {
    console.log('Running all Challenges!');    
  }

  notifySingle(number) {
    console.log('Running Challenge ' + number + '!');    
  }

  addChallenge(challenge) {
    this.challenges[challenge.getNumber()] = challenge;
    return this;
  }

  runChallenge(number) {
    this.notifySingle(number);
    this.challenges[number].run();
  }

  all() {
    this.notifyAll();
    for (const i in this.challenges) {
      this.runChallenge(i);
    }
  }
}

export default Set;
