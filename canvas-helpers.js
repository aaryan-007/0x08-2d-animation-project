export function initCanvas(canvasSelector, width, height) {
    const canvas = document.querySelector(canvasSelector);
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext('2d');
    return { canvas, ctx };
}

export function drawTrain(ctx, x, y, width, height) {
    // Function to draw a train
    ctx.fillStyle = 'blue';
    ctx.fillRect(x, y, width, height);
}

export function animateTrain(ctx, canvasWidth, canvasHeight) {
    let x = 0; // Initial position of the train
    const trainWidth = 100;
    const trainHeight = 50;
    const speed = 2; // Speed of the train

    function drawFrame() {
        // Clear the canvas
        ctx.clearRect(0, 0, canvasWidth, canvasHeight);

        // Draw the train at current position
        drawTrain(ctx, x, canvasHeight - trainHeight, trainWidth, trainHeight);

        // Update the position of the train
        x += speed;

        // Loop the train back to the left side when it reaches the right side
        if (x > canvasWidth) {
            x = -trainWidth;
        }

        // Request next frame
        requestAnimationFrame(drawFrame);
    }

    // Start the animation
    drawFrame();
}
