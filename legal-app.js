/* ChartControl Legal — app script
 * ------------------------------------------------------------
 * · Hash router: #/business | #/terms | #/privacy | #/risk | #/refund
 * · 12-language auto-detect + switcher (localStorage 'cc_legal_lang')
 * · Side-nav active state sync
 * · Scroll to top on page change
 */
(function(){
  'use strict';

  const STORAGE_KEY = 'cc_legal_lang';
  const DEFAULT_LANG = 'en';
  const SUPPORTED = ['en','ko','ja','zh','tr','vi','es','pt','ru','de','fr','ar'];
  const LANG_CODES = { en:'EN', ko:'KO', ja:'JA', zh:'ZH', tr:'TR', vi:'VI', es:'ES', pt:'PT', ru:'RU', de:'DE', fr:'FR', ar:'AR' };

  const PAGES = {
    '/business': 'page-business',
    '/terms':    'page-terms',
    '/privacy':  'page-privacy',
    '/risk':     'page-risk',
    '/refund':   'page-refund'
  };
  const DEFAULT_PAGE = '/business';

  /* ============ Language detect / translate ============ */
  function detectLang(){
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved && SUPPORTED.includes(saved)) return saved;
    } catch(e){}
    try {
      const q = new URLSearchParams(location.search).get('lang');
      if (q && SUPPORTED.includes(q.toLowerCase())) return q.toLowerCase();
    } catch(e){}
    const langs = (navigator.languages && navigator.languages.length)
      ? navigator.languages
      : [navigator.language || navigator.userLanguage || 'en'];
    for (const raw of langs) {
      if (!raw) continue;
      if (String(raw).toLowerCase().startsWith('zh')) return 'zh';
      const two = String(raw).toLowerCase().slice(0,2);
      if (SUPPORTED.includes(two)) return two;
    }
    return DEFAULT_LANG;
  }

  function T(key, lang){
    const dict = window.CC_LEGAL_I18N || {};
    const l = dict[lang] || dict[DEFAULT_LANG] || {};
    if (l[key] != null) return l[key];
    if (dict[DEFAULT_LANG] && dict[DEFAULT_LANG][key] != null) return dict[DEFAULT_LANG][key];
    return key;
  }

  function applyLang(lang){
    const dict = window.CC_LEGAL_I18N || {};
    if (!dict[lang]) lang = DEFAULT_LANG;

    const html = document.documentElement;
    html.setAttribute('data-lang', lang);
    html.setAttribute('lang', lang);
    html.setAttribute('dir', dict[lang]._dir || 'ltr');

    document.querySelectorAll('[data-i]').forEach(el => {
      const key = el.getAttribute('data-i');
      const val = T(key, lang);
      if (el.hasAttribute('data-i-html')) el.innerHTML = val;
      else el.textContent = val;
    });

    const label = document.getElementById('langLabel');
    if (label) label.textContent = LANG_CODES[lang] || lang.toUpperCase();

    // Update <title> per current page + lang
    updateDocumentTitle(lang);

    try { localStorage.setItem(STORAGE_KEY, lang); } catch(e){}
  }

  function updateDocumentTitle(lang){
    const path = currentRoute();
    const pageKey = ({
      '/business':'sidenav.business',
      '/terms':'sidenav.terms',
      '/privacy':'sidenav.privacy',
      '/risk':'sidenav.risk',
      '/refund':'sidenav.refund'
    })[path] || 'sidenav.business';
    document.title = 'ChartControl — ' + T(pageKey, lang);
  }

  function buildLangMenu(currentLang){
    const menu = document.getElementById('langMenu');
    if (!menu) return;
    const dict = window.CC_LEGAL_I18N || {};
    menu.innerHTML = '';
    SUPPORTED.forEach(code => {
      const meta = dict[code];
      if (!meta) return;
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = (code === currentLang) ? 'on' : '';
      btn.innerHTML = `<span>${meta._name}</span><span class="code">${LANG_CODES[code]}</span>`;
      btn.addEventListener('click', () => {
        applyLang(code);
        buildLangMenu(code);
        closeLangMenu();
      });
      menu.appendChild(btn);
    });
  }
  function closeLangMenu(){
    const m = document.getElementById('langMenu');
    const b = document.getElementById('langBtn');
    if (m) m.classList.remove('open');
    if (b) b.setAttribute('aria-expanded', 'false');
  }

  /* ============ Hash router ============ */
  function currentRoute(){
    let h = location.hash || '#' + DEFAULT_PAGE;
    if (!h.startsWith('#')) h = '#' + h;
    let path = h.slice(1);
    const q = path.indexOf('?');
    if (q !== -1) path = path.slice(0, q);
    if (!path || path === '/') path = DEFAULT_PAGE;
    if (!PAGES[path]) path = DEFAULT_PAGE;
    return path;
  }

  function showPage(path){
    const target = PAGES[path] || PAGES[DEFAULT_PAGE];
    document.querySelectorAll('.page').forEach(p => p.classList.remove('on'));
    const el = document.getElementById(target);
    if (el) el.classList.add('on');

    // Update side-nav active state
    document.querySelectorAll('.sidenav a').forEach(a => a.classList.remove('on'));
    const activeLink = document.querySelector('.sidenav a[href="#' + path + '"]');
    if (activeLink) activeLink.classList.add('on');

    // Scroll to top of content
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Update document title
    updateDocumentTitle(currentLang());
  }
  function currentLang(){ return document.documentElement.getAttribute('data-lang') || DEFAULT_LANG; }

  function onHashChange(){
    showPage(currentRoute());
  }

  /* ============ Init ============ */
  function whenDictReady(cb){
    if (window.CC_LEGAL_I18N && window.CC_LEGAL_I18N.en) { cb(); return; }
    let tries = 0;
    const id = setInterval(() => {
      tries++;
      if (window.CC_LEGAL_I18N && window.CC_LEGAL_I18N.en) { clearInterval(id); cb(); }
      else if (tries > 40) { clearInterval(id); cb(); }
    }, 50);
  }

  function init(){
    whenDictReady(() => {
      const lang = detectLang();
      applyLang(lang);
      buildLangMenu(lang);
      showPage(currentRoute());

      // Hash navigation
      window.addEventListener('hashchange', onHashChange);

      // Language menu toggle
      const btn = document.getElementById('langBtn');
      const menu = document.getElementById('langMenu');
      if (btn && menu){
        btn.addEventListener('click', (e) => {
          e.stopPropagation();
          menu.classList.toggle('open');
          btn.setAttribute('aria-expanded', menu.classList.contains('open') ? 'true' : 'false');
        });
        document.addEventListener('click', (e) => {
          if (!menu.contains(e.target) && e.target !== btn) closeLangMenu();
        });
        document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeLangMenu(); });
      }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
