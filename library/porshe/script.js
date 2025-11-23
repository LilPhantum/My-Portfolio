// script.js
document.addEventListener("DOMContentLoaded", () => {
  const checkbox = document.getElementById("checkbox");
  const closeBtn = document.querySelector(".close-btn");

  closeBtn.addEventListener("click", () => {
    checkbox.checked = false; // uncheck the menu toggle
  });
});


const checkbox = document.getElementById("checkbox");
const closeBtn = document.querySelector(".close-btn");

checkbox.addEventListener("change", () => {
  if (checkbox.checked) {
    document.body.style.overflow = "hidden";
    document.body.style.position = "fixed";
    document.body.style.width = "100%";
  } else {
    document.body.style.overflow = "";
    document.body.style.position = "";
    document.body.style.width = "";
  }
});

// Close button also unchecks the menu
closeBtn.addEventListener("click", () => {
  checkbox.checked = false;
  document.body.style.overflow = "";
  document.body.style.position = "";
  document.body.style.width = "";
});


(function () {
  const track = document.getElementById('modelsTrack');
  const prevBtn = document.getElementById('modelsPrev');
  const nextBtn = document.getElementById('modelsNext');
  if (!track || !prevBtn || !nextBtn) return;

  const isAtStart = () => track.scrollLeft <= 6;
  const isAtEnd = () => (track.scrollLeft + track.clientWidth) >= (track.scrollWidth - 6);

  function updateButtons() {
    if (isAtStart()) { prevBtn.classList.add('hidden'); } else { prevBtn.classList.remove('hidden'); }
    if (isAtEnd()) { nextBtn.classList.add('hidden'); } else { nextBtn.classList.remove('hidden'); }
  }

  updateButtons();

  function throttle(fn, wait = 100) {
    let last = 0;
    return function (...args) {
      const now = Date.now();
      if (now - last >= wait) {
        last = now;
        fn.apply(this, args);
      }
    };
  }

  track.addEventListener('scroll', throttle(updateButtons, 80));

  let SCROLL_CHUNK = Math.round(track.clientWidth * 0.55);

  prevBtn.addEventListener('click', () => {
    track.scrollBy({ left: -SCROLL_CHUNK, behavior: 'smooth' });
    setTimeout(updateButtons, 420);
  });

  nextBtn.addEventListener('click', () => {
    track.scrollBy({ left: SCROLL_CHUNK, behavior: 'smooth' });
    setTimeout(updateButtons, 420);
  });

  window.addEventListener('resize', throttle(() => {
    SCROLL_CHUNK = Math.round(track.clientWidth * 0.78);
    updateButtons();
  }, 120));
})();
