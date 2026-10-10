document.addEventListener('DOMContentLoaded', function () {
  const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.main-nav');

  if (menuToggle && nav) {
    menuToggle.addEventListener('click', function () {
      nav.classList.toggle('open');
    });
  }

  const quickForm = document.querySelector('.quick-form');
  const footerForm = document.querySelector('.footer-form');

  const handleSubmit = function (event) {
    event.preventDefault();
    const button = event.target.querySelector('button');
    const label = button ? button.textContent : 'Gönder';
    button.textContent = 'İletildi';
    button.disabled = true;
    setTimeout(function () {
      button.textContent = label;
      button.disabled = false;
      event.target.reset();
    }, 1800);
  };

  if (quickForm) quickForm.addEventListener('submit', handleSubmit);
  if (footerForm) footerForm.addEventListener('submit', handleSubmit);
});
