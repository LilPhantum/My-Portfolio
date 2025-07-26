 $(document).ready(function () {
    function animateOnScroll() {
      $('.fade-in-right').each(function () {
        const elemTop = $(this).offset().top;
        const winBottom = $(window).scrollTop() + $(window).height();

        if (elemTop < winBottom - 100) {
          $(this).addClass('visible');
        }
      });
    }

    animateOnScroll(); // Run on load
    $(window).on('scroll', animateOnScroll);
  });