$(document).ready(function () {
  // 1. Smooth scroll on nav links (if using anchor sections)
  $('a[href^="#"]').on('click', function (e) {
    e.preventDefault();
    let target = $(this.getAttribute('href'));
    if (target.length) {
      $('html, body').animate({ scrollTop: target.offset().top - 70 }, 800);
    }
  });

  // 2. Hero text fade in
  $('.hero h1, .hero p, .hero .btn').hide().fadeIn(1000);

  // 3. Hover effect on product cards
  $('.card').hover(
    function () {
      $(this).addClass('shadow-lg').css('transform', 'scale(1.03)');
    },
    function () {
      $(this).removeClass('shadow-lg').css('transform', 'scale(1)');
    }
  );

  // 4. Scroll-reveal animation
function revealOnScroll() {
  $('.card, .featurette, .photo-frame').each(function () {
    let offset = $(this).offset().top;
    let scrollTop = $(window).scrollTop();
    let windowHeight = $(window).height();

    if (scrollTop + windowHeight > offset + 50 && !$(this).hasClass('visible')) {
      $(this).addClass('visible').animate({ opacity: 1, top: 0 }, 800); // 1300ms = 1.3s
    }
  });
}


  $('.card, .featurette, .photo-frame').css({ opacity: 0, position: 'relative', top: '20px' });
  revealOnScroll();
  $(window).on('scroll', revealOnScroll);

  // 5. Back to top button
  $('body').append('<button id="backToTop" style="position:fixed;bottom:30px;right:30px;display:none;padding:8px 15px;border:none;border-radius:50%;background:#8B5E3C;color:#fff;z-index:1000;">↑</button>');

  $(window).scroll(function () {
    if ($(this).scrollTop() > 200) {
      $('#backToTop').fadeIn();
    } else {
      $('#backToTop').fadeOut();
    }
  });

  $('#backToTop').click(function () {
    $('html, body').animate({ scrollTop: 0 }, 800);
    return false;
  });
});
