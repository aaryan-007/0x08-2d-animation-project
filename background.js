// background.js

// Define cloud positions
var cloud1X = 200;
var cloud2X = 400;
var cloud3X = 600;
var cloudSpeed = 0.5; // Speed of cloud movement

var isDayMode = true; // Variable to track day/night mode

function drawBackground(ctx, canvasWidth, canvasHeight) {
    // Draw sky
    if (isDayMode) {
        ctx.fillStyle = "#87CEEB"; // Light blue color for the sky in day mode
    } else {
        ctx.fillStyle = "#00008B"; // Dark blue color for the sky in night mode
    }
    ctx.fillRect(0, 0, canvasWidth, canvasHeight);

    // Draw celestial object
    if (isDayMode) {
        drawSun(ctx);
    } else {
        drawMoon(ctx);
        drawStars(ctx, canvasWidth, canvasHeight);
    }

    // Draw clouds
    drawCloud(ctx, cloud1X, 50);
    drawCloud(ctx, cloud2X, 100);
    drawCloud(ctx, cloud3X, 80);

    // Update cloud positions
    cloud1X += cloudSpeed;
    cloud2X += cloudSpeed;
    cloud3X += cloudSpeed;

    // Reset cloud positions if they move out of the canvas
    if (cloud1X > canvasWidth + 100) {
        cloud1X = -100;
    }
    if (cloud2X > canvasWidth + 100) {
        cloud2X = -100;
    }
    if (cloud3X > canvasWidth + 100) {
        cloud3X = -100;
    }

    // Draw ground
    ctx.fillStyle = "#90EE90"; // Light green color for the ground
    ctx.fillRect(0, canvasHeight - 100, canvasWidth, 100);

    // Draw railway station building
    ctx.fillStyle = "#A9A9A9"; // Dark gray color for the building
    ctx.fillRect(100, canvasHeight - 200, 600, 100); // Adjusted position and size for the building

    // Draw windows
    ctx.fillStyle = "white";
    ctx.fillRect(150, canvasHeight - 150, 30, 30); // First window
    ctx.fillRect(350, canvasHeight - 150, 30, 30); // Second window
    ctx.fillRect(550, canvasHeight - 150, 30, 30); // Third window

    // Draw door
    ctx.fillStyle = "#8B4513"; // Brown color for the door
    ctx.fillRect(350, canvasHeight - 150, 40, 50); // Adjusted position and size for the door

    // Draw signboard
    ctx.fillStyle = "white";
    ctx.fillRect(280, canvasHeight - 250, 240, 50); // Signboard background
    ctx.fillStyle = "black";
    ctx.font = "bold 20px Arial";
    ctx.fillText("RAILWAY STATION", 310, canvasHeight - 215); // Signboard text

    // Draw tracks
    ctx.fillStyle = "gray";
    for (var i = 0; i < canvasWidth; i += 100) {
        ctx.fillRect(i, canvasHeight - 10, 60, 10); // Adjusted y-coordinate for tracks
    }

    // Draw trees
    drawTree(ctx, 10, canvasHeight - 120);
    drawTree(ctx, 750, canvasHeight - 120);
}

function drawSun(ctx) {
    ctx.beginPath();
    ctx.fillStyle = "yellow";
    ctx.arc(100, 100, 50, 0, Math.PI * 2);
    ctx.fill();
    ctx.closePath();
}

function drawMoon(ctx) {
    ctx.beginPath();
    ctx.fillStyle = "white";
    ctx.arc(100, 100, 50, 0, Math.PI * 2);
    ctx.fill();
    ctx.closePath();
}

function drawStars(ctx, canvasWidth, canvasHeight) {
    ctx.fillStyle = "white";
    for (var i = 0; i < 50; i++) {
        var x = Math.random() * canvasWidth;
        var y = Math.random() * canvasHeight;
        ctx.fillRect(x, y, 2, 2); // Draw small squares as stars
    }
}

function drawCloud(ctx, x, y) {
    ctx.beginPath();
    ctx.fillStyle = "white";
    ctx.arc(x, y, 30, 0, Math.PI * 2);
    ctx.arc(x + 40, y, 30, 0, Math.PI * 2);
    ctx.arc(x + 80, y, 30, 0, Math.PI * 2);
    ctx.fill();
    ctx.closePath();
}

function drawTree(ctx, x, y) {
    // Draw trunk
    ctx.fillStyle = "#8B4513"; // Brown color for the trunk
    ctx.fillRect(x + 20, y - 10, 20, 40);

    // Draw leaves
    ctx.fillStyle = "#006400"; // Dark green color for the leaves
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x + 30, y - 40);
    ctx.lineTo(x + 60, y);
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.moveTo(x - 10, y - 20);
    ctx.lineTo(x + 70, y - 20);
    ctx.lineTo(x + 30, y - 60);
    ctx.fill();
    ctx.closePath();
}

// Event listener for key press
document.addEventListener("keydown", function(event) {
    if (event.key === "n") {
        toggleDayNightMode();
    }
});

function toggleDayNightMode() {
    isDayMode = !isDayMode; // Toggle day/night mode
    // Redraw the background
    drawBackground(ctx, canvas.width, canvas.height);
}
