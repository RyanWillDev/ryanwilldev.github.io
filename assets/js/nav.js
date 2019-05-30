run();

function run() {
  var navLinks = document.querySelector('.nav-links');
  var links = navLinks.querySelectorAll('a');
  var menuButton = document.querySelector('.nav button');

  menuButton.addEventListener('click', function() {
    navLinks.classList.toggle('open');
  });

  links.forEach(function(l) {
    if (!isCurrentPage(l)) return;

    l.classList.add('active');
  });
}

function isCurrentPage(l) {
  return (
    l.pathname !== '/' && window.location.pathname.indexOf(l.pathname) >= 0
  );
}
