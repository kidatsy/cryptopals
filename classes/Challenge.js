class Challenge {
  constructor(params) {
    this.number = params.number || null;
    this.inputs = params.inputs || null;
    this.procedure = params.procedure || function(){};
    return this;
  }

  setProcedure(procedure) {
    this.procedure = procedure;
    return this;
  }

  getNumber() {
    return this.number;
  }

  getInputs() {
    return this.inputs;
  }

  run() {
    this.procedure();
  }
}

export default Challenge;
