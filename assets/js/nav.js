run();

function run() {
  var header = document.querySelector('header');
  var navLinks = document.querySelector('.nav-links');
  var links = navLinks.querySelectorAll('a');
  var menuButton = document.querySelector('.nav button');
  var content = document.querySelector('.content');

  document.addEventListener('click', function(event) {
    if (menuButtonClicked(event.target)) {
      navLinks.classList.toggle('open');
    }

    if (navLinksOpen() && !navClicked(event.target)) {
      navLinks.classList.toggle('open');
    }
  });

  menuButton.addEventListener('click', function() {});

  links.forEach(function(l) {
    if (!isCurrentPage(l)) return;

    l.classList.add('active');
  });

  function isCurrentPage(l) {
    return (
      l.pathname !== '/' && window.location.pathname.indexOf(l.pathname) >= 0
    );
  }

  function menuButtonClicked(clickedElement) {
    return clickedElement === menuButton || menuButton.contains(clickedElement);
  }

  function navClicked(clickedElement) {
    return event.target === header || header.contains(event.target);
  }

  function navLinksOpen() {
    return navLinks.classList.contains('open');
  }

  function isCurrentPage(l) {
    return (
      l.pathname !== '/' && window.location.pathname.indexOf(l.pathname) >= 0
    );
  }
}
