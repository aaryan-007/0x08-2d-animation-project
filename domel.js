import Clock from './clock.js';

class Domel {
  constructor(canvasSelector) {
    this.canvasSel = canvasSelector;
    this.clock = new Clock();
  }

  async setup() {
    // Fetch the canvas and get its 2D context
    const { canvas, ctx, bb } = getCanvas(this.canvasSel);
    this.canvas = canvas;
    this.ctx = ctx;
    this.bb = bb;

    // Load any necessary resources or set up initial state
    // For example, load images, set up event listeners, etc.

    // Start the main loop
    this.run();
  }

  run() {
    // Main loop
    const loop = () => {
      this.clock.update(); // Update the clock

      // Perform any necessary rendering or animation based on the clock state
      if (this.clock.isDaytime()) {
        // Render daytime visuals
        this.renderDaytime();
      } else {
        // Render nighttime visuals
        this.renderNighttime();
      }

      // Request the next frame
      requestAnimationFrame(loop);
    };

    // Start the loop
    loop();
  }

  renderDaytime() {
    // Render daytime visuals
    // For example, draw a sunny sky, green fields, etc.
  }

  renderNighttime() {
    // Render nighttime visuals
    // For example, draw a starry sky, moon, etc.
  }
}

export default Domel;
