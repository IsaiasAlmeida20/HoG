const btn = document.querySelector('#back-to-top');

btn.addEventListener('click', function () {
  window.scrollTo(0, 0);
});

function showBackToTopButton() {
  if (window.screen.width > 992) {
    btn.style.display = 'block';
  }
}

function hideBackToTopButton() {
  if (window.screen.width > 992) {
    btn.style.display = 'none';
  }
}
