(() => {
  const queryLanguage = new URLSearchParams(location.search).get('lang');
  const defaultLanguage = document.querySelector('meta[name="default-language"]')?.content || 'tr';
  const preferredLanguage = (navigator.languages || [navigator.language]).find(value => /^(tr|en)(-|$)/i.test(value || ''));
  let savedLanguage = null;
  try { savedLanguage = localStorage.getItem('number-war-site-language'); } catch { /* Language still works when storage is unavailable. */ }
  let language = ['tr', 'en'].includes(queryLanguage) ? queryLanguage
    : defaultLanguage === 'en' ? 'en'
    : ['tr', 'en'].includes(savedLanguage) ? savedLanguage
    : preferredLanguage?.toLowerCase().startsWith('en') ? 'en' : 'tr';
  let move = 0;
  const text = (tr, en) => language === 'en' ? en : tr;
  function paintDemo() {
    const board = document.querySelector('[data-demo-board]');
    if (!board) return;
    const values = move === 0 ? ['3','2','5'] : move === 1 ? ['·','5','5'] : ['·','·','10'];
    board.querySelectorAll('[data-tile]').forEach((tile, index) => {
      tile.textContent = values[index];
      tile.classList.toggle('player', index === move);
      tile.classList.toggle('cleared', index < move);
    });
    const descriptions = [
      text('Gücün 3. Sağındaki 2, gücünden küçük olduğu için alınabilir. Sarı kare sensin.', 'Your power is 3. The 2 on your right is within your power, so you can capture it. You are the yellow tile.'),
      text('3 + 2 = 5. Gücün 5 oldu. Geride bıraktığın kare kapandı; şimdi sağındaki 5 alınabilir.', '3 + 2 = 5. Your power is now 5. The tile you left is closed; you can now capture the 5 on your right.'),
      text('5 + 5 = 10. Bu küçük örnekte tüm sayı karelerini temizledin. Gerçek tahtada her hamle sonraki rotanı belirler.', '5 + 5 = 10. You cleared all number tiles in this small example. On a real board, every move shapes your next route.')
    ];
    document.querySelector('[data-demo-status]').textContent = descriptions[move];
    const next = document.querySelector('[data-demo-next]');
    next.textContent = move === 0 ? text('İlk hamleyi yap →','Make the first move →') : move === 1 ? text('Sonraki kareyi al →','Capture the next tile →') : text('Tamamlandı ✓','Completed ✓');
    next.disabled = move === 2;
    board.setAttribute('aria-label', text(`Öğretici örnek. Hamle ${move}. Güç ${[3,5,10][move]}.`,`Learning example. Move ${move}. Power ${[3,5,10][move]}.`));
  }
  function setLanguage(next, updateURL = true) {
    language = next;
    document.documentElement.lang = language;
    document.querySelectorAll('[data-tr][data-en]').forEach(element => { element.textContent = element.dataset[language]; });
    document.querySelectorAll('[data-alt-tr][data-alt-en]').forEach(element => { element.alt = language === 'en' ? element.dataset.altEn : element.dataset.altTr; });
    document.querySelectorAll('[data-href-tr][data-href-en]').forEach(element => { element.href = language === 'en' ? element.dataset.hrefEn : element.dataset.hrefTr; });
    document.querySelectorAll('[data-src-tr][data-src-en]').forEach(element => { element.src = language === 'en' ? element.dataset.srcEn : element.dataset.srcTr; });
    document.querySelectorAll('[data-language]').forEach(button => { button.setAttribute('aria-pressed', String(button.dataset.language === language)); });
    const title = document.querySelector('meta[name="title-tr"]');
    if (title) document.title = language === 'en' ? document.querySelector('meta[name="title-en"]').content : title.content;
    document.querySelectorAll('[data-meta-tr][data-meta-en]').forEach(element => {
      element.content = language === 'en' ? element.dataset.metaEn : element.dataset.metaTr;
    });
    const locale = document.querySelector('meta[property="og:locale"]');
    if (locale) locale.content = language === 'en' ? 'en_US' : 'tr_TR';
    const page = document.querySelector(`meta[name="page-${language}"]`)?.content;
    if (page) {
      const canonical = new URL(page, location.href);
      const link = document.querySelector('link[rel="canonical"]');
      if (link) link.href = canonical;
      const socialURL = document.querySelector('meta[property="og:url"]');
      if (socialURL) socialURL.content = canonical;
    }
    const description = document.querySelector('meta[name="description"]');
    if (description?.dataset[language]) description.content = description.dataset[language];
    paintDemo();
    if (updateURL) {
      const url = new URL(location.href);
      if (page) url.pathname = new URL(page, location.href).pathname;
      url.searchParams.delete('lang');
      try { localStorage.setItem('number-war-site-language', language); } catch { /* No persistence is required. */ }
      try { history.replaceState(null,'',url); } catch { /* Local previews still support language selection. */ }
    }
  }
  document.querySelectorAll('[data-language]').forEach(button => button.addEventListener('click', () => setLanguage(button.dataset.language)));
  document.querySelector('[data-demo-next]')?.addEventListener('click', () => { move = Math.min(2, move + 1); paintDemo(); });
  document.querySelector('[data-demo-reset]')?.addEventListener('click', () => { move = 0; paintDemo(); document.querySelector('[data-demo-next]').focus(); });
  setLanguage(language, language !== defaultLanguage || ['tr', 'en'].includes(queryLanguage));
})();
