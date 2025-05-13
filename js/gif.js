document.addEventListener('DOMContentLoaded', function() {
  const gifElement = document.getElementById('myGif');
  const staticSrc = gifElement.src;
  const animatedSrc = gifElement.dataset.animatedSrc;
  let animationTimeout;

  function playAnimation() {
    gifElement.src = animatedSrc;
  }

  function stopAnimation() {
    gifElement.src = staticSrc;
  }

  // Play on load for 3 seconds
  playAnimation();
  animationTimeout = setTimeout(stopAnimation, 1500);

  function handleInteraction() {
    clearTimeout(animationTimeout); // Stop any pending stop animation
    playAnimation();

    // Set a timeout to stop after a short duration (adjust as needed)
    animationTimeout = setTimeout(stopAnimation, 1500); // Play for 1 second on interaction
  }

  // Add event listeners for interaction
  gifElement.addEventListener('mouseover', handleInteraction);
  gifElement.addEventListener('touchstart', handleInteraction);
});