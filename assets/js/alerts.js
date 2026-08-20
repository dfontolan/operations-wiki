(function () {
  var alertTypes = {
    NOTE: { label: 'Note', icon: 'ℹ️' },
    TIP: { label: 'Tip', icon: '💡' },
    IMPORTANT: { label: 'Important', icon: '❗' },
    WARNING: { label: 'Warning', icon: '⚠️' },
    CAUTION: { label: 'Caution', icon: '⛔' }
  };

  document.querySelectorAll('article blockquote').forEach(function (quote) {
    var firstParagraph = quote.querySelector(':scope > p:first-child');
    if (!firstParagraph) return;

    var match = firstParagraph.textContent.trim().match(/^\[!(NOTE|TIP|IMPORTANT|WARNING|CAUTION)\]\s*([\s\S]*)$/);
    if (!match) return;

    var type = match[1];
    var details = alertTypes[type];
    quote.classList.add('alert', 'alert--' + type.toLowerCase());
    firstParagraph.textContent = match[2];

    var heading = document.createElement('span');
    heading.className = 'alert-title';
    heading.textContent = details.icon + ' ' + details.label;
    quote.insertBefore(heading, firstParagraph);
  });
}());
