// script.js
// // Helper function to apply fade and move animations

document.addEventListener("DOMContentLoaded", function () {

function animateOnScroll(selector, animationClass) {
  const elements = document.querySelectorAll(selector);
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add(animationClass);
        observer.unobserve(entry.target); // Animate only once
      }
    });
  }, {
    threshold: 0.1
  });

  elements.forEach(el => observer.observe(el));
}

// Animate hero text on load (from top down)
window.addEventListener("DOMContentLoaded", () => {
  const heroText = document.querySelector('.hero-text');
  heroText.classList.add('fade-down');
  
  const heroImg = document.querySelector('.hero-img');
  heroImg.classList.add('fade-up');
});

// Animate service cards (from bottom up)
animateOnScroll('.service-card', 'fade-up');

// Animate project text (from left to right)
animateOnScroll('.project-text', 'fade-left-right');

// Animate project images (from right to left)
animateOnScroll('.project-img', 'fade-right-left');

console.log('file hchfhx')

});

