// Select the result div to display the user's choice
const resultDiv = document.getElementById("result");

// Select both buttons for size adjustments
const yesButton = document.getElementById("yesBtn");
const noButton = document.getElementById("noBtn");

// Initial sizes for the buttons
let yesButtonSize = 1;
let noButtonSize = 1;

document.getElementById("yesBtn").addEventListener("click", function () {
  resultDiv.textContent = "LESGOOO !!!";
  resultDiv.style.color = "#4CAF50"; // Green color for Yes

  // Reset the button sizes when "Yes" is clicked
  yesButton.style.transform = "scale(1)";
  noButton.style.transform = "scale(1)";
  yesButtonSize = 1;
  noButtonSize = 1;
  yesButton.style.flexGrow = "1";
  noButton.style.flexGrow = "1";
});

document.getElementById("noBtn").addEventListener("click", function () {
  // Hide any result text when clicking "No"
  resultDiv.textContent = "";

  // Reduce the size of the "No" button and increase the size of the "Yes" button
  noButtonSize -= 0.1;
  yesButtonSize += 0.1;

  // Set the new sizes with scaling
  noButton.style.transform = `scale(${noButtonSize})`;
  yesButton.style.transform = `scale(${yesButtonSize})`;

  // Use flex-grow to adjust the size of the buttons dynamically without overlap
  noButton.style.flexGrow = `${noButtonSize}`;
  yesButton.style.flexGrow = `${yesButtonSize}`;

  // Ensure "No" button doesn't completely disappear
  if (noButtonSize < 0.4) {
    noButtonSize = 0.4;
    noButton.style.flexGrow = "0.4";
  }
});

// Create particle effect
function createParticle() {
  const particle = document.createElement("div");
  particle.classList.add("particle");
  particle.style.left = `${Math.random() * 100}vw`; // Random horizontal position
  particle.style.top = `${Math.random() * 100}vh`; // Random vertical position
  particle.style.animationDuration = `${Math.random() * 10 + 5}s`; // Random speed

  // Random size
  const sizeClass =
    Math.random() > 0.5 ? "large" : Math.random() > 0.5 ? "medium" : "";
  if (sizeClass) particle.classList.add(sizeClass);

  document.getElementById("particles").appendChild(particle);

  setTimeout(() => {
    particle.remove(); // Remove particle after animation ends
  }, 15000); // Matches the animation duration
}

// Create particles every second
setInterval(createParticle, 1000);

document.addEventListener("mousemove", handleMouseMove);
document.addEventListener("touchmove", handleTouchMove);

function handleMouseMove(event) {
  const { clientX, clientY } = event;
  updateBackgroundPosition(clientX, clientY);
}

function handleTouchMove(event) {
  const { clientX, clientY } = event.touches[0];
  updateBackgroundPosition(clientX, clientY);
}

function updateBackgroundPosition(x, y) {
  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;

  // Calculate new background position based on mouse or touch location
  const xPercent = (x / windowWidth) * 100;
  const yPercent = (y / windowHeight) * 100;

  // Set new background position based on mouse movement
  document.body.style.backgroundPosition = `${xPercent}% ${yPercent}%`;
}
