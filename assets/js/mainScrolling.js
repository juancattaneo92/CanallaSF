document.addEventListener('DOMContentLoaded', function() {
  // Sticky nav
  var nav = document.getElementById('nav');
  if (nav) {
    var navOffset = nav.offsetTop;
    window.addEventListener('scroll', function() {
      if (window.scrollY >= navOffset) {
        nav.classList.add('sticky');
      } else {
        nav.classList.remove('sticky');
      }
    });
  }

  // Yellow background when header appears
  var wrapper = document.getElementById('wrapper');
  var header = document.getElementById('header');
  function checkHeaderVisible() {
    if (!header || !wrapper) return;
    var rect = header.getBoundingClientRect();
    // If the top of the header is at or above the top of the viewport
    if (rect.top <= 175) {
      wrapper.classList.add('bg-yellow');
    } else {
      wrapper.classList.remove('bg-yellow');
    }
  }
  window.addEventListener('scroll', checkHeaderVisible);
  checkHeaderVisible();
});

document.addEventListener('DOMContentLoaded', function() {
  // ...existing code...

  var wrapper = document.getElementById('wrapper');
  var header = document.getElementById('header');
  var logo = header ? header.querySelector('.logo') : null;

  function checkHeaderVisible() {
    if (!header || !wrapper) return;
    var rect = header.getBoundingClientRect();
    if (rect.top <= 170) {
      wrapper.classList.add('bg-yellow');
      if (logo) logo.classList.add('show-logo');
    } else {
      wrapper.classList.remove('bg-yellow');
      if (logo) logo.classList.remove('show-logo');
    }
  }
  window.addEventListener('scroll', checkHeaderVisible);
  checkHeaderVisible();
});