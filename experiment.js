// Get the canvas element
var canvas = document.getElementById("trainCanvas");
var ctx = canvas.getContext("2d");

function updateNameInfo() {
  var infoDiv = document.querySelector('.info');
  var teamName = 'Animation Engineers';
  var rollNo = '102103449, 102103436';
  var names = 'Aaryan Duggal, Jaideep Singh';
  infoDiv.innerHTML = `
      <p>Team Name: ${teamName}</p>
      <p>Roll No: ${rollNo}</p>
      <p>Names: ${names}</p>
  `;
}


// Train properties
var boxWidth = 120;
var engineBoxHeight = 80; // Height of the engine box
var passengerBoxHeight = 60; // Height of the passenger boxes
var trainSpeed = 1; // Slowed down the train
var spaceBetweenBoxes = 20;
var numPassengerBoxes = 4; // Number of passenger boxes

// Function to draw a single box (engine or traveler)
function drawBox(x, y, isEngine) {
    var boxHeight = isEngine ? engineBoxHeight : passengerBoxHeight;
    
    ctx.fillStyle = isEngine ? "red" : "blue"; // Engine box has a different color
    ctx.fillRect(x, y, boxWidth, boxHeight);

    // Draw windows
    ctx.fillStyle = "white";
    ctx.fillRect(x + 10, y + 10, 30, 20);
    ctx.fillRect(x + boxWidth - 40, y + 10, 30, 20);

    // Draw wheels
    ctx.fillStyle = "black";
    ctx.fillRect(x + 20, y + boxHeight - 10, 20, 10);
    ctx.fillRect(x + boxWidth - 40, y + boxHeight - 10, 20, 10);

    // Add additional details to the engine box
    if (isEngine) {
        // Draw headlights
        ctx.fillStyle = "yellow";
        ctx.fillRect(x + 5, y + 30, 10, 10); // Adjusted the position of headlights
        ctx.fillRect(x + boxWidth - 15, y + 30, 10, 10); // Adjusted the position of headlights
    }
}

// Function to update the train's position
function updateTrain(train) {
    train.x += train.speed;
    if (train.x > canvas.width) {
        train.x = -boxWidth;
    }
}

// Function to clear the canvas
function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

// Function to animate the train
function animate(train) {
    clearCanvas();
    drawBackground(ctx, canvas.width, canvas.height); // Draw the background
    for (var i = 0; i < train.length; i++) {
        drawBox(train[i].x, train[i].y, i === 0); // First box is the engine
        updateTrain(train[i]);
    }
    requestAnimationFrame(function() {
        animate(train);
    });
}

// Define the train
var train = [];
// Create the engine box
train.push({
    x: -boxWidth,
    y: canvas.height - engineBoxHeight - 10, // Adjusted y position based on engine box height
    speed: trainSpeed
});
// Create the passenger boxes
for (var i = 1; i <= numPassengerBoxes; i++) {
    train.push({
        x: -boxWidth - i * (boxWidth + spaceBetweenBoxes),
        y: canvas.height - passengerBoxHeight - 10, // Adjusted y position based on passenger box height
        speed: trainSpeed
    });
}

// Start the animation
animate(train);

updateNameInfo();
