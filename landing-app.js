/* ChartControl Landing — customer-facing app script
 * ------------------------------------------------------------
 * Language auto-detect · switcher · reveal · terminal loop
 * (Twin of partners-app.js but reads window.CC_L_I18N and its own storage key)
 */
(function(){
  'use strict';

  const STORAGE_KEY = 'cc_landing_lang';
  const DEFAULT_LANG = 'en';
  const SUPPORTED = ['en','ko','ja','zh','tr','vi','es','pt','ru','de','fr','ar'];
  const LANG_CODES = { en:'EN', ko:'KO', ja:'JA', zh:'ZH', tr:'TR', vi:'VI', es:'ES', pt:'PT', ru:'RU', de:'DE', fr:'FR', ar:'AR' };

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
      const two = raw.toLowerCase().slice(0,2);
      if (raw.toLowerCase().startsWith('zh')) return 'zh';
      if (SUPPORTED.includes(two)) return two;
    }
    return DEFAULT_LANG;
  }

  function T(key, lang){
    const dict = window.CC_L_I18N || {};
    const l = dict[lang] || dict[DEFAULT_LANG] || {};
    if (l[key] != null) return l[key];
    if (dict[DEFAULT_LANG] && dict[DEFAULT_LANG][key] != null) return dict[DEFAULT_LANG][key];
    return key;
  }

  function applyLang(lang){
    const dict = window.CC_L_I18N || {};
    if (!dict[lang]) lang = DEFAULT_LANG;

    document.documentElement.lang = lang;
    document.documentElement.dir  = dict[lang]._dir || 'ltr';
    document.documentElement.setAttribute('data-lang', lang);

    document.querySelectorAll('[data-i]').forEach(el => {
      const key = el.getAttribute('data-i');
      const val = T(key, lang);
      if (el.hasAttribute('data-i-html')) el.innerHTML = val;
      else el.textContent = val;
    });
    document.querySelectorAll('[data-i-ph]').forEach(el => {
      el.setAttribute('placeholder', T(el.getAttribute('data-i-ph'), lang));
    });

    const label = document.getElementById('langLabel');
    if (label) label.textContent = LANG_CODES[lang] || lang.toUpperCase();

    // Pricing CTA labels — "Choose {name}" pattern per tier
    const ctaTpl = T('price.cta_paid', lang);
    [
      ['cta-basic',   'price.p2_name'],
      ['cta-pro',     'price.p3_name'],
      ['cta-premium', 'price.p4_name'],
      ['cta-elite',   'price.p5_name'],
    ].forEach(([cls, nameKey])=>{
      document.querySelectorAll('.'+cls).forEach(el=>{
        el.textContent = ctaTpl.replace('{name}', T(nameKey, lang));
      });
    });

    try { localStorage.setItem(STORAGE_KEY, lang); } catch(e){}
    restartTerminal();
  }

  function buildLangMenu(currentLang){
    const menu = document.getElementById('langMenu');
    if (!menu) return;
    const dict = window.CC_L_I18N || {};
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
    if (b) b.setAttribute('aria-expanded','false');
  }

  function initReveal(){
    if (!('IntersectionObserver' in window)) {
      document.querySelectorAll('.reveal').forEach(el => el.classList.add('in'));
      return;
    }
    const io = new IntersectionObserver((entries)=>{
      entries.forEach(entry => {
        if (entry.isIntersecting){
          entry.target.classList.add('in');
          io.unobserve(entry.target);
        }
      });
    }, {threshold:.12, rootMargin:'0px 0px -8% 0px'});
    document.querySelectorAll('.reveal').forEach(el => io.observe(el));
  }

  function restartTerminal(){
    const term = document.getElementById('heroTerminal');
    if (!term) return;
    const nodes = term.querySelectorAll('.q,.think,.a,.mk-line,.mk-zone,.mk-tag,.trendline');
    nodes.forEach(n => {
      n.style.animation = 'none';
      n.offsetHeight; // reflow
      n.style.animation = '';
    });
  }
  function loopTerminal(){ setInterval(restartTerminal, 12000); }

  /**
   * Wait for the i18n dictionary to be present before we try to translate.
   *
   * In production this is a single-tick affair because <script src="landing-i18n.js">
   * runs synchronously before us — but if a proxy strips one of the scripts, or if
   * we get race-loaded from a bfcache restore, we should not silently leave the
   * page in English. Poll for ~2s, then give up (and English fallback is fine).
   */
  function whenDictReady(cb){
    if (window.CC_L_I18N && window.CC_L_I18N.en) { cb(); return; }
    let tries = 0;
    const id = setInterval(()=>{
      tries++;
      if (window.CC_L_I18N && window.CC_L_I18N.en) { clearInterval(id); cb(); }
      else if (tries > 40) { clearInterval(id); cb(); } // ~2s, then apply anyway
    }, 50);
  }

  function init(){
    whenDictReady(()=>{
      const lang = detectLang();
      applyLang(lang);
      buildLangMenu(lang);
      hookMenu();
    });
    // Non-i18n bits can start immediately
    initReveal();
    loopTerminal();
  }

  function hookMenu(){

    const btn = document.getElementById('langBtn');
    const menu = document.getElementById('langMenu');
    if (btn && menu){
      btn.addEventListener('click', (e)=>{
        e.stopPropagation();
        menu.classList.toggle('open');
        btn.setAttribute('aria-expanded', menu.classList.contains('open') ? 'true' : 'false');
      });
      document.addEventListener('click', (e)=>{
        if (!menu.contains(e.target) && e.target !== btn) closeLangMenu();
      });
      document.addEventListener('keydown', (e)=>{ if (e.key === 'Escape') closeLangMenu(); });
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
