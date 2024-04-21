import Domel from './domel.js';

class Experiment {
  // Candidate Details
  static teamName = 'animation engineers';
  static rollNo = '102103449,102103436'
  static name = 'Aaryan Duggal, Jaideep Singh'

  constructor() {
    this.canvasSelector = '#canvas';
    this.domel = new Domel(this.canvasSelector);
  }

  async setup() {
    // Initialize the Domel object
    await this.domel.setup();
  }
}

// Initialize the experiment
const experiment = new Experiment();
experiment.setup();
