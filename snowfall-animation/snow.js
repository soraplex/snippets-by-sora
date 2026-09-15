const canvas = document.getElementById("snowCanvas");
const ctx = canvas.getContext("2d");

let width = (canvas.width = window.innerWidth);
let height = (canvas.height = window.innerHeight);

const snowflakes = [];
const TOTAL_SNOWFLAKES = 120; // Crisp balanced fallback counter

function createSnowflake() {
  return {
    x: Math.random() * width,
    y: Math.random() * height - height, // Start offscreen for clean initial cascade
    radius: Math.random() * 3.5 + 0.8, // Dynamic volumetric scaling
    speed: Math.random() * 1.2 + 0.6, // Falling vector speed
    density: Math.random() * 10, // Custom weight offset factor
    opacity: Math.random() * 0.5 + 0.4, // Varied depth opacities
    swingSpeed: Math.random() * 0.02 + 0.005, // Side-to-side sway velocity
  };
}

function updateAndDraw() {
  ctx.clearRect(0, 0, width, height);

  for (let flake of snowflakes) {
    // 1. Physical displacement logic
    flake.y += flake.speed;
    // Math.sin generates a fluid, continuous swaying vector over time
    flake.x += Math.sin(flake.density) * 0.5;
    flake.density += flake.swingSpeed;

    // 2. Loop recycling boundaries
    if (flake.y > height) {
      flake.y = -10;
      flake.x = Math.random() * width;
    }

    // 3. Render graphics pass
    ctx.beginPath();
    ctx.arc(flake.x, flake.y, flake.radius, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(255, 255, 255, ${flake.opacity})`;
    ctx.fill();
  }

  requestAnimationFrame(updateAndDraw);
}

function init() {
  for (let i = 0; i < TOTAL_SNOWFLAKES; i++) {
    snowflakes.push(createSnowflake());
    // Space out initial deployment values so they are evenly mixed immediately
    snowflakes[i].y = Math.random() * height;
  }
  updateAndDraw();
}

// Resizing guard
window.addEventListener("resize", () => {
  width = canvas.width = window.innerWidth;
  height = canvas.height = window.innerHeight;
});

init();