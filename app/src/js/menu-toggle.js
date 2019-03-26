const overlayToggleButton = document.querySelector('.js-overlay-toggle');
const overlayMenu = document.querySelector('.js-overlay');
const overlayToggleContainer = document.querySelector('.js-overlay-toggle-container');
const overlayToggleLabel = document.querySelector('.js-overlay-toggle-label');

overlayToggleButton.addEventListener('click', (e) => {
  e.preventDefault();
  overlayToggleButton.classList.toggle('is-active');
  overlayMenu.classList.toggle('is-open');
  overlayToggleContainer.classList.toggle('is-active');

  overlayToggleButton.classList.contains('is-active') ? overlayToggleLabel.textContent = "Close" : overlayToggleLabel.textContent = "Menu";
});