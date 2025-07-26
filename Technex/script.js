$(document).ready(function () {
  function animateOnScroll() {
    $(".fade-in-right").each(function () {
      const elementTop = $(this).offset().top;
      const windowBottom = $(window).scrollTop() + $(window).height();

      if (elementTop < windowBottom - 50) {
        $(this).addClass("visible");
      }
    });
  }

  animateOnScroll(); // initial check

  $(window).on("scroll", function () {
    animateOnScroll();
  });
});
