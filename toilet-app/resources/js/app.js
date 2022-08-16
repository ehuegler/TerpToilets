require('./bootstrap');

document.querySelector('[data-toggle-hide]').addEventListener('click', function() {
  console.log(this.dataset);
  document
    .querySelector(this.dataset.toggleHide)
    .classList
    .toggle('hidden');
});