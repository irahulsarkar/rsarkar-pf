const japanRed = document.querySelector('.japan-red');
let lastScrollTop = 0;

window.addEventListener('scroll', () => {
  const scrollTop = window.scrollY || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    // Scrolling down
    japanRed.style.opacity = 0;
    japanRed.style.transition = 'opacity 0.3s ease-in-out'; // Add smooth transition
  } else {
    // Scrolling up
    japanRed.style.opacity = 1;
    japanRed.style.transition = 'opacity 0.3s ease-in-out'; // Add smooth transition
  }

  lastScrollTop = scrollTop;
});