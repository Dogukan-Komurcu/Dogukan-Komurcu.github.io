(() => {
  'use strict';
  const root = document.documentElement;
  const buttons = Array.from(document.querySelectorAll('[data-language]'));
  const supported = value => value === 'tr' ? 'tr' : 'en';
  const selected = () => /^(#tr|#en)$/.test(location.hash) ? location.hash.slice(1) : (/^tr(?:-|$)/i.test(navigator.language || '') ? 'tr' : 'en');
  function apply(language, writeHash) {
    const lang = supported(language);
    root.lang = lang;
    buttons.forEach(button => button.setAttribute('aria-pressed', String(button.dataset.language === lang)));
    document.querySelectorAll('a[data-local]').forEach(link => { link.href = link.getAttribute('href').split('#')[0] + '#' + lang; });
    const title = document.querySelector('meta[name="title-' + lang + '"]');
    if (title) document.title = title.content;
    if (writeHash && history.replaceState) history.replaceState(null, '', '#' + lang);
  }
  buttons.forEach(button => button.addEventListener('click', () => apply(button.dataset.language, true)));
  addEventListener('hashchange', () => { if (/^(#tr|#en)$/.test(location.hash)) apply(location.hash.slice(1), false); });
  apply(selected(), false);
})();
