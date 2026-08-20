(function () {
  var root = document.documentElement;
  var themeToggle = document.querySelector('.theme-toggle');
  var themeLabel = document.querySelector('.theme-label');
  var themeIcon = document.querySelector('.theme-icon');

  function updateThemeButton() {
    var dark = root.dataset.theme === 'dark';
    themeToggle.setAttribute('aria-pressed', String(dark));
    themeLabel.textContent = dark ? 'Light theme' : 'Dark theme';
    themeIcon.textContent = dark ? '☀' : '☾';
  }

  updateThemeButton();
  themeToggle.addEventListener('click', function () {
    root.dataset.theme = root.dataset.theme === 'dark' ? 'light' : 'dark';
    try { localStorage.setItem('theme', root.dataset.theme); } catch (error) {}
    updateThemeButton();
  });

  document.querySelectorAll('.nav-heading').forEach(function (button) {
    button.addEventListener('click', function () {
      var menu = document.getElementById(button.getAttribute('aria-controls'));
      var expanded = button.getAttribute('aria-expanded') === 'true';
      button.setAttribute('aria-expanded', String(!expanded));
      menu.hidden = expanded;
    });
  });
}());
