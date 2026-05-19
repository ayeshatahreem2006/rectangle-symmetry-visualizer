const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// Transformation variables
let scaleX = 1;
let scaleY = 1;
let rotation = 0;

// Store operation history
let history = [];

// Draw rectangle and markers
function drawRectangle() {

  // Clear canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Save canvas state
  ctx.save();

  // Move origin to center
  ctx.translate(canvas.width / 2, canvas.height / 2);

  // Apply transformations
  ctx.scale(scaleX, scaleY);
  ctx.rotate(rotation);

  // Draw main rectangle
  ctx.fillStyle = "skyblue";
  ctx.fillRect(-100, -50, 200, 100);

  // Add asymmetric red marker
  ctx.fillStyle = "red";

  ctx.beginPath();
  ctx.arc(-70, -20, 10, 0, Math.PI * 2);
  ctx.fill();

  // Add text marker
  ctx.fillStyle = "black";
  ctx.font = "20px Arial";
  ctx.fillText("A", -15, 10);

  // Restore canvas state
  ctx.restore();
}

// Add operations to history
function addToHistory(operation) {

  history.push(operation);

  document.getElementById("history").innerText =
    history.join(" → ");
}

// Update current state text
function updateState() {

  let state = "";

  // Check rotation
  if (rotation % (2 * Math.PI) !== 0) {
    state += "180° Rotation ";
  }

  // Check vertical flip
  if (scaleX === -1) {
    state += "Vertical Flip ";
  }

  // Check horizontal flip
  if (scaleY === -1) {
    state += "Horizontal Flip ";
  }

  // Default state
  if (state === "") {
    state = "Identity";
  }

  document.getElementById("state").innerText =
    "Current State: " + state;
}

// Horizontal reflection
function flipHorizontal() {

  scaleY *= -1;

  addToHistory("h");

  updateState();

  drawRectangle();
}

// Vertical reflection
function flipVertical() {

  scaleX *= -1;

  addToHistory("v");

  updateState();

  drawRectangle();
}

// 180 degree rotation
function rotate180() {

  rotation += Math.PI;

  addToHistory("r");

  updateState();

  drawRectangle();
}

// Reset everything
function resetShape() {

  scaleX = 1;
  scaleY = 1;
  rotation = 0;

  history = [];

  document.getElementById("history").innerText = "";

  document.getElementById("state").innerText =
    "Current State: Identity";

  drawRectangle();
}

// Initial draw
drawRectangle();