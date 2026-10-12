document.addEventListener('DOMContentLoaded', function () {
  const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.main-nav');
  const whatsappNumber = '905054543099';

  if (menuToggle && nav) {
    menuToggle.addEventListener('click', function () {
      nav.classList.toggle('open');
    });
  }

  const quickForm = document.querySelector('.quick-form');
  const footerForm = document.querySelector('.footer-form');

  const buildWhatsAppLink = function (form) {
    const inputs = Array.from(form.querySelectorAll('input, select, textarea'));
    const data = inputs
      .filter(function (field) {
        return field.name && field.value.trim();
      })
      .map(function (field) {
        return field.name + ': ' + field.value.trim();
      });

    const text = encodeURIComponent(data.length ? data.join('\n') : 'Yeni randevu talebi');
    return 'https://wa.me/' + whatsappNumber + '?text=' + text;
  };

  const handleSubmit = function (event) {
    event.preventDefault();

    const button = event.target.querySelector('button');
    const label = button ? button.textContent : 'Gönder';

    const whatsappLink = buildWhatsAppLink(event.target);

    if (button) {
      button.textContent = 'Gönderildi';
      button.disabled = true;
    }

    window.open(whatsappLink, '_blank');

    setTimeout(function () {
      if (button) {
        button.textContent = label;
        button.disabled = false;
      }
      event.target.reset();
    }, 1800);
  };

  if (quickForm) quickForm.addEventListener('submit', handleSubmit);
  if (footerForm) footerForm.addEventListener('submit', handleSubmit);
});
