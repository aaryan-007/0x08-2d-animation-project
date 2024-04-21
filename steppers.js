class Stepper {
  constructor() {
    this.train = document.getElementById("train");
    this.trainPosition = -300; // Initial position off-screen
    this.trainSpeed = 2; // Speed of train animation
    this.intervalId = null;
    this.isDay = true; // Flag for day/night mode
    this.dayNightInterval = 5000; // Interval for switching day/night mode in milliseconds
    this.dayNightTimer = null;
  }

  start() {
    this.intervalId = setInterval(() => {
      this.moveTrain();
    }, 1000 / 60); // 60 FPS

    // Start the timer for switching day/night mode
    this.startDayNightTimer();
  }

  moveTrain() {
    this.trainPosition += this.trainSpeed;
    this.train.style.transform = `translateX(${this.trainPosition}px)`;

    // Reset train position when it goes off-screen
    if (this.trainPosition > window.innerWidth) {
      this.trainPosition = -300; // Reset train position off-screen
    }
  }

  startDayNightTimer() {
    this.dayNightTimer = setInterval(() => {
      this.toggleDayNightMode();
    }, this.dayNightInterval);
  }

  toggleDayNightMode() {
    // Toggle day/night mode
    this.isDay = !this.isDay;

    // Change background color based on day/night mode
    if (this.isDay) {
      document.body.style.backgroundColor = "#87CEEB"; // Set background to blue for day
    } else {
      document.body.style.backgroundColor = "#000033"; // Set background to dark blue for night
    }
  }
}

const stepper = new Stepper();
stepper.start();
