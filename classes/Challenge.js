import Promise from 'bluebird';

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
    console.log('Running Challenge ' + this.number + '!' + '\n--------------------');
    if (this.description) {
      console.log(this.description);
    }
  }

  verify(verbose = true) {
    console.log('Input: ' + this.input);
    if (verbose) {
      console.log('Verifying that Output: ' + this.output + '\n'
      + '  === Expected Output: ' + this.expectedOutput);
    } else {
      console.log('Verifying that Output === Expected Output');
    }
    console.log(this.output === this.expectedOutput);
    console.log('');
  }
}

export default Challenge;
