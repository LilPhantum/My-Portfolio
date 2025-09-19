document.addEventListener("DOMContentLoaded", () => {
  // ================= IMAGE FADE (intersection observer) =================
  const images = document.querySelectorAll(".image-fade-wrapper");
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  images.forEach(img => observer.observe(img));


  // ================= CAROUSEL + DOTS =================
  const items = document.querySelectorAll(".item");   // 👈 unify here
  const dots = document.querySelectorAll(".dot");
  const next = document.getElementById("next");
  const prev = document.getElementById("prev");

  let index = 0;

  function updateDots(i) {
    dots.forEach((dot, idx) => {
      dot.classList.toggle("active", idx === i);
    });
  }

  function showItem(i) {
    items.forEach((item, idx) => {
      const video = item.querySelector("video");
      item.classList.remove("active");

      if (video) video.pause();

      if (idx === i) {
        item.classList.add("active");
        if (video) {
          video.play();
          video.onended = () => {
            index = (index + 1) % items.length;
            showItem(index);
          };
        }
      }
    });
    updateDots(i);
  }

  // Buttons
  next?.addEventListener("click", () => {
    index = (index + 1) % items.length;
    showItem(index);
  });

  prev?.addEventListener("click", () => {
    index = (index - 1 + items.length) % items.length;
    showItem(index);
  });

  // Dot click
  dots.forEach((dot, idx) => {
    dot.addEventListener("click", () => {
      index = idx;
      showItem(index);
    });
  });

  // Initialize
  showItem(index);


  // ================= MOBILE MENU =================
  const burger = document.getElementById('burger');
  const mobileMenu = document.getElementById('mobileMenu');
  const closeBtn = document.getElementById('closeBtn');

  function closeMenu() {
    mobileMenu.classList.remove('open');
    document.body.classList.remove('menu-open');
    burger?.setAttribute('aria-expanded', 'false');
  }

  function openMenu() {
    mobileMenu.classList.add('open');
    document.body.classList.add('menu-open');
    burger?.setAttribute('aria-expanded', 'true');
  }

  function toggleMenu() {
    mobileMenu.classList.contains('open') ? closeMenu() : openMenu();
  }

  if (burger && mobileMenu) {
    burger.setAttribute('aria-controls', 'mobileMenu');
    burger.setAttribute('aria-expanded', 'false');
    burger.addEventListener('click', toggleMenu);

    // close when clicking X
    closeBtn?.addEventListener('click', closeMenu);

    // close when clicking a link
    mobileMenu.addEventListener('click', (e) => {
      if (e.target.matches('a')) closeMenu();
    });

    // close on Escape
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeMenu();
    });

    // reset on resize
    const mq = window.matchMedia('(min-width: 801px)');
    mq.addEventListener('change', (ev) => {
      if (ev.matches) closeMenu();
    });
  }

const btn = document.querySelector(".play-pause-btn");
const playIcon = btn.querySelector(".play-icon");
const pauseIcon = btn.querySelector(".pause-icon");

btn.addEventListener("click", () => {
  const activeVideo = document.querySelector(".item.active video");
  if (!activeVideo) return;

  if (activeVideo.paused) {
    activeVideo.play();
    playIcon.style.display = "none";
    pauseIcon.style.display = "inline";
  } else {
    activeVideo.pause();
    pauseIcon.style.display = "none";
    playIcon.style.display = "inline";
  }
});


document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("dropdown-toggle");
  const mobileBar = document.getElementById("mobileBar");

  toggle.addEventListener("change", () => {
    if (toggle.checked) {
      mobileBar.style.display = "flex";
      requestAnimationFrame(() => {
        mobileBar.style.opacity = "1";
        mobileBar.style.transform = "translateY(0)";
      });

      // Animate links with bounce
      const links = mobileBar.querySelectorAll("a");
      links.forEach((link, i) => {
        link.style.opacity = "0";
        link.style.transform = "translateY(-30px)";
        setTimeout(() => {
          link.style.transition = "all 0.6s cubic-bezier(.68,-0.55,.27,1.55)";
          link.style.opacity = "1";
          link.style.transform = "translateY(0)";
        }, i * 120);
      });

    } else {
      mobileBar.style.opacity = "0";
      mobileBar.style.transform = "translateY(-20px)";
      setTimeout(() => {
        if (!toggle.checked) mobileBar.style.display = "none";
      }, 400);
    }
  });
});


  
});
