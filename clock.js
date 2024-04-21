class Clock {
  constructor() {
    this.startTime = Date.now();
    this.lastFrameTime = this.startTime;
    this.elapsedTime = 0;
    this.deltaTime = 0;
    this.isDay = true; // Initially, it's day
  }

  update() {
    const currentTime = Date.now();
    this.deltaTime = (currentTime - this.lastFrameTime) / 1000; // Convert milliseconds to seconds
    this.elapsedTime = (currentTime - this.startTime) / 1000; // Convert milliseconds to seconds
    this.lastFrameTime = currentTime;

    // Check if the train has passed (pseudo code)
    if (trainPassed) {
      this.toggleDayNight(); // Toggle between day and night
    }
  }

  toggleDayNight() {
    this.isDay = !this.isDay; // Toggle between day and night
  }

  getElapsedTime() {
    return this.elapsedTime;
  }

  getDeltaTime() {
    return this.deltaTime;
  }

  isDaytime() {
    return this.isDay;
  }
}

export default Clock;
