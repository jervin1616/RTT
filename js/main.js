/* ============================================================
   RECOVERY TRANSPARENCY — main.js
   Vanilla JS only. No jQuery, no external libraries.
   ============================================================ */

(function () {
  'use strict';

  /* ── Scroll Reveal ──────────────────────────────────────── */
  const revealObserver = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  document.querySelectorAll('.reveal').forEach(function (el) {
    revealObserver.observe(el);
  });

  /* ── Nav Scroll State ───────────────────────────────────── */
  var nav = document.getElementById('site-nav');

  function updateNav() {
    if (window.scrollY > 50) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  }

  window.addEventListener('scroll', updateNav, { passive: true });
  updateNav(); // run on load in case page is refreshed mid-scroll

  /* ── Smooth Scroll ──────────────────────────────────────── */
  document.querySelectorAll('a[href^="#"]').forEach(function (link) {
    link.addEventListener('click', function (e) {
      var targetId = link.getAttribute('href');
      if (targetId === '#') return;
      var target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        var navHeight = nav ? nav.offsetHeight : 0;
        var targetTop = target.getBoundingClientRect().top + window.scrollY - navHeight - 8;
        window.scrollTo({ top: targetTop, behavior: 'smooth' });
      }
    });
  });

  /* ── Screenshot Carousel ────────────────────────────────── */
  var slides = document.querySelectorAll('.screen-slide');
  var dots = document.querySelectorAll('.screen-dot');
  var currentSlide = 0;
  var carouselTimer = null;

  function goToSlide(index) {
    slides[currentSlide].classList.remove('active');
    dots[currentSlide].classList.remove('active');
    currentSlide = index;
    slides[currentSlide].classList.add('active');
    dots[currentSlide].classList.add('active');
  }

  function nextSlide() {
    var next = (currentSlide + 1) % slides.length;
    goToSlide(next);
  }

  function startCarousel() {
    carouselTimer = setInterval(nextSlide, 3200);
  }

  if (slides.length > 0) {
    // Wire up dot clicks
    dots.forEach(function (dot, i) {
      dot.addEventListener('click', function () {
        clearInterval(carouselTimer);
        goToSlide(i);
        startCarousel();
      });
    });

    // Start auto-rotation
    startCarousel();
  }

})();
