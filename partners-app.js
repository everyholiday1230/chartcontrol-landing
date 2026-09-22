/* ChartControl Partners — application script
 * ------------------------------------------------------------
 * Handles:
 *  · Auto language detection from navigator.languages
 *  · Manual language switcher with localStorage persistence
 *  · Full DOM string replacement via data-i / data-i-html / data-i-ph
 *  · Number formatting per-locale
 *  · Revenue calculator (live)
 *  · Scroll reveal (IntersectionObserver)
 *  · Terminal animation loop restart
 *  · Apply form → mailto handoff
 */
(function(){
  'use strict';

  const STORAGE_KEY = 'cc_partners_lang';
  const DEFAULT_LANG = 'en';
  const SUPPORTED = ['en','ko','ja','zh','tr','vi','es','pt','ru','de','fr','ar'];
  const LANG_CODES = { en:'EN', ko:'KO', ja:'JA', zh:'ZH', tr:'TR', vi:'VI', es:'ES', pt:'PT', ru:'RU', de:'DE', fr:'FR', ar:'AR' };

  /* ---------- Language detection ---------- */
  function detectLang(){
    // 1) explicit user choice
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved && SUPPORTED.includes(saved)) return saved;
    } catch(e){}

    // 2) ?lang=xx query override
    try {
      const q = new URLSearchParams(location.search).get('lang');
      if (q && SUPPORTED.includes(q.toLowerCase())) return q.toLowerCase();
    } catch(e){}

    // 3) browser languages, in priority order
    const langs = (navigator.languages && navigator.languages.length)
      ? navigator.languages
      : [navigator.language || navigator.userLanguage || 'en'];

    for (const raw of langs) {
      if (!raw) continue;
      const two = raw.toLowerCase().slice(0,2);
      // chinese variants → zh
      if (raw.toLowerCase().startsWith('zh')) return 'zh';
      if (SUPPORTED.includes(two)) return two;
    }
    return DEFAULT_LANG;
  }

  /* ---------- i18n translate ---------- */
  function T(key, lang){
    const dict = window.CC_I18N || {};
    const l = dict[lang] || dict[DEFAULT_LANG] || {};
    if (l[key] != null) return l[key];
    // fallback to English
    if (dict[DEFAULT_LANG] && dict[DEFAULT_LANG][key] != null) return dict[DEFAULT_LANG][key];
    return key;
  }

  function applyLang(lang){
    const dict = window.CC_I18N || {};
    if (!dict[lang]) lang = DEFAULT_LANG;

    document.documentElement.lang = lang;
    document.documentElement.dir  = dict[lang]._dir || 'ltr';
    document.documentElement.setAttribute('data-lang', lang);

    // Update every element with data-i
    document.querySelectorAll('[data-i]').forEach(el => {
      const key = el.getAttribute('data-i');
      const val = T(key, lang);
      if (el.hasAttribute('data-i-html')) {
        el.innerHTML = val;
      } else {
        // preserve nested children if any special data-preserve — otherwise textContent
        el.textContent = val;
      }
    });

    // Placeholder attribute replacement
    document.querySelectorAll('[data-i-ph]').forEach(el => {
      const key = el.getAttribute('data-i-ph');
      el.setAttribute('placeholder', T(key, lang));
    });

    // Update lang button label
    const label = document.getElementById('langLabel');
    if (label) label.textContent = LANG_CODES[lang] || lang.toUpperCase();

    // Save
    try { localStorage.setItem(STORAGE_KEY, lang); } catch(e){}

    // Refresh derived UI (calculator formatting, tier label)
    updateCalc(true);
    // Restart hero terminal animation for the new copy
    restartTerminal();
  }

  /* ---------- Language menu ---------- */
  function buildLangMenu(currentLang){
    const menu = document.getElementById('langMenu');
    if (!menu) return;
    const dict = window.CC_I18N || {};
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
  function openLangMenu(){ document.getElementById('langMenu').classList.add('open'); document.getElementById('langBtn').setAttribute('aria-expanded','true'); }
  function closeLangMenu(){ document.getElementById('langMenu').classList.remove('open'); document.getElementById('langBtn').setAttribute('aria-expanded','false'); }

  /* ---------- Number formatting per lang ---------- */
  function currentLang(){
    return document.documentElement.getAttribute('data-lang') || DEFAULT_LANG;
  }
  function fmt(n, opts){
    try {
      return new Intl.NumberFormat(currentLang(), Object.assign({maximumFractionDigits:0}, opts||{})).format(n);
    } catch(e){
      return String(Math.round(n));
    }
  }

  /* ---------- Revenue calculator ----------
   * Model (illustrative, matches copy):
   *   activeTraders = size * (activePct/100)
   *   grossFeesUSDT = activeTraders * avgMonthlyVolume * feeRate
   *   ourCommission = grossFeesUSDT * brokerCommissionShare
   *   partnerShare  = ourCommission * tierRate
   *
   * Assumed constants (documented on-screen as illustrative):
   *   feeRate                   = 0.0004  (0.04% roundtrip perp taker after promo)
   *   brokerCommissionShare     = 0.55    (what KuCoin routes to broker partner)
   * These are conservative & backed by KuCoin broker-partner public docs.
   */
  const FEE_RATE = 0.0004;
  const BROKER_SHARE = 0.55;

  function updateCalc(skipAnim){
    const size    = +document.getElementById('inSize').value;
    const active  = +document.getElementById('inActive').value;
    const vol     = +document.getElementById('inVol').value;
    const tier    = +document.querySelector('input[name="tier"]:checked').value;

    // Displays for inputs
    document.getElementById('valSize').textContent   = fmt(size);
    document.getElementById('valActive').textContent = active + '%';
    document.getElementById('valVol').textContent    = '$' + fmt(vol);
    const tierName = tier===10?'Starter':(tier===15?'Pro':'Elite');
    document.getElementById('valTier').textContent = tierName + ' · ' + tier + '%';

    // Core numbers
    const activeTraders   = size * (active/100);
    const monthlyVolume   = activeTraders * vol;
    const grossFees       = monthlyVolume * FEE_RATE;
    const ourCommission   = grossFees * BROKER_SHARE;
    const partnerMonthly  = ourCommission * (tier/100);
    const year1           = partnerMonthly * 12;
    // 5-year cumulative with modest 4%/mo audience growth capped
    let cum = 0;
    let curMembers = activeTraders;
    for (let m=1; m<=60; m++){
      cum += curMembers * vol * FEE_RATE * BROKER_SHARE * (tier/100);
      curMembers = curMembers * 1.015; // 1.5% monthly compound
    }

    // Animate on user interaction (not on initial paint of lang switch)
    animateNum('outMonth', partnerMonthly, skipAnim);
    animateNum('outYear',  year1, skipAnim);
    animateNum('out5y',    cum, skipAnim);

    // Label like "90 active traders" (EN) or "90명 활성 트레이더" (KO) — just strip "(%)"
    const activeLabel = T('calc.slider_active', currentLang()).replace(/\s*\(%\)/,'').replace(/\s*\(\%\)/,'').trim();
    document.getElementById('outMonthSub').textContent = fmt(activeTraders) + ' · ' + activeLabel;
  }

  const _lastVals = {outMonth:0, outYear:0, out5y:0};
  function animateNum(id, target, skip){
    const el = document.getElementById(id);
    if (!el) return;
    const start = _lastVals[id] || 0;
    if (skip || Math.abs(target - start) < 1){
      el.textContent = fmt(target);
      _lastVals[id] = target;
      return;
    }
    const dur = 420;
    const t0 = performance.now();
    function step(t){
      const p = Math.min(1, (t-t0)/dur);
      const eased = 1 - Math.pow(1-p, 3);
      const v = start + (target - start) * eased;
      el.textContent = fmt(v);
      if (p < 1) requestAnimationFrame(step);
      else _lastVals[id] = target;
    }
    requestAnimationFrame(step);
  }

  /* ---------- Scroll reveal ---------- */
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

  /* ---------- Terminal animation restart (on lang change) ---------- */
  function restartTerminal(){
    const term = document.getElementById('heroTerminal');
    if (!term) return;
    // Force reflow to restart CSS animations
    const nodes = term.querySelectorAll('.q,.think,.a,.mk-line,.mk-zone,.mk-tag,.trendline');
    nodes.forEach(n => {
      n.style.animation = 'none';
      // reflow
      // eslint-disable-next-line no-unused-expressions
      n.offsetHeight;
      n.style.animation = '';
    });
  }
  // Auto-loop terminal every 12 seconds
  function loopTerminal(){
    setInterval(restartTerminal, 12000);
  }

  /* ---------- Apply form ---------- */
  function submitApply(e){
    e.preventDefault();
    const f = e.target;
    const data = new FormData(f);
    const lines = [
      `Name: ${data.get('name')}`,
      `Community: ${data.get('community')}`,
      `Platform: ${data.get('platform') || '-'}`,
      `Audience: ${data.get('size') || '-'}`,
      `Link: ${data.get('link') || '-'}`,
      `Language: ${data.get('lang')}`,
      `Reply to: ${data.get('email')}`,
      ``,
      data.get('msg') || '',
      ``,
      `— Sent from chartcontrol partners page (${currentLang().toUpperCase()})`
    ];
    const body = encodeURIComponent(lines.join('\n'));
    const subj = encodeURIComponent(`Partnership inquiry — ${data.get('community') || 'ChartControl'}`);
    window.location.href = `mailto:nuhye1031@gmail.com?subject=${subj}&body=${body}`;
    const sent = document.getElementById('applySent');
    if (sent) sent.classList.add('on');
    return false;
  }

  /* ---------- init ----------
   * Wait for the i18n dictionary before translating. In production this is one
   * tick because <script src="partners-i18n.js"> runs synchronously before us —
   * but we poll for ~2s to survive proxies, bfcache restores, and stale caches.
   */
  function whenDictReady(cb){
    if (window.CC_I18N && window.CC_I18N.en) { cb(); return; }
    let tries = 0;
    const id = setInterval(()=>{
      tries++;
      if (window.CC_I18N && window.CC_I18N.en) { clearInterval(id); cb(); }
      else if (tries > 40) { clearInterval(id); cb(); }
    }, 50);
  }
  function init(){
    whenDictReady(()=>{
      const lang = detectLang();
      applyLang(lang);
      buildLangMenu(lang);
      hookFormAndMenu(lang);
    });
    // Non-i18n bits can start immediately
    initReveal();
    loopTerminal();
  }
  function hookFormAndMenu(lang){

    // Pre-select the applyForm language field to the detected lang, if a match exists
    const langSelect = document.getElementById('langAuto');
    if (langSelect){
      const map = { en:'English', ko:'Korean', ja:'Japanese', zh:'Chinese', tr:'Turkish',
                    vi:'Vietnamese', es:'Spanish', pt:'Portuguese', ru:'Russian',
                    de:'German', fr:'French', ar:'Arabic' };
      const name = map[lang];
      if (name){
        for (const opt of langSelect.options){
          if (opt.value === name){ opt.selected = true; break; }
        }
      }
    }

    // Language menu toggle
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

    // Calculator
    ['inSize','inActive','inVol'].forEach(id => {
      const el = document.getElementById(id);
      if (el) el.addEventListener('input', ()=>updateCalc(false));
    });
    document.querySelectorAll('input[name="tier"]').forEach(el => {
      el.addEventListener('change', ()=>updateCalc(false));
    });
    updateCalc(true);

    // Expose apply handler to inline onsubmit
    window.CC = window.CC || {};
    window.CC.submitApply = submitApply;
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
