const btn = document.querySelector('#back-to-top');

btn.addEventListener('click', function () {
  window.scrollTo(0, 0);
});

function showBackToTopButton() {
  btn.style.display = 'block';
}

function hideBackToTopButton() {
  btn.style.display = 'none';
}
