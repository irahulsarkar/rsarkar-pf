document.addEventListener('DOMContentLoaded', function() {
  const gifElement = document.getElementById('myGif');
  const wrapper = document.querySelector('.memoji-wrapper');
  const staticSrc = gifElement.src;
  const animatedSrc = gifElement.getAttribute('data-animated-src');
  
  // 1. Initial 1.5s rotation on load
  setTimeout(() => {
    wrapper.classList.add('active');
    setTimeout(() => {
      wrapper.classList.remove('active');
    }, 1500);
  }, 500);
  
  // 2. Continuous rotation on hover/click
  wrapper.addEventListener('mouseenter', activateRotation);
  wrapper.addEventListener('touchstart', activateRotation);
  wrapper.addEventListener('mouseleave', deactivateRotation);
  wrapper.addEventListener('touchend', deactivateRotation);
  
  function activateRotation() {
    wrapper.classList.add('active');
  }
  
  function deactivateRotation() {
    wrapper.classList.remove('active');
  }
  
  // GIF animation logic
  function playAnimation() {
    if (gifElement.src === staticSrc) {
      gifElement.src = animatedSrc;
      setTimeout(() => {
        if (gifElement.src === animatedSrc) {
          gifElement.src = staticSrc;
        }
      }, 1500);
    }
  }
  
  gifElement.addEventListener('mouseenter', playAnimation);
  gifElement.addEventListener('touchstart', playAnimation);
  
  // Scroll into view
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        playAnimation();
      }
    });
  }, { threshold: 0.3 });
  
  observer.observe(gifElement);
});