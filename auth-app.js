/* ChartControl Auth — app script
 * ------------------------------------------------------------
 * · Hash router (#/login | #/2fa | #/signup | #/verify-email | #/password-reset | #/reset-sent)
 * · 12-language auto-detect + switcher (persists to localStorage 'cc_auth_lang')
 * · OTP auto-focus & auto-submit
 * · Password strength meter + confirm-mismatch feedback
 * · Country dropdown populated from i18n
 * · Terminal restart on lang change
 * · Form handlers (all local — real backend is wired inside pages-auth.jsx in the SPA)
 */
(function(){
  'use strict';

  const STORAGE_KEY = 'cc_auth_lang';
  const DEFAULT_LANG = 'en';
  const SUPPORTED = ['en','ko','ja','zh','tr','vi','es','pt','ru','de','fr','ar'];
  const LANG_CODES = { en:'EN', ko:'KO', ja:'JA', zh:'ZH', tr:'TR', vi:'VI', es:'ES', pt:'PT', ru:'RU', de:'DE', fr:'FR', ar:'AR' };

  const PAGES = {
    '/login':         'page-login',
    '/2fa':           'page-2fa',
    '/signup':        'page-signup',
    '/verify-email':  'page-verify',
    '/password-reset':'page-reset',
    '/reset-sent':    'page-reset-sent',
    '/recovery':      'page-2fa'   // reuse 2FA screen for now
  };

  const COUNTRY_KEYS = ['KR','US','JP','CN','TW','SG','HK','GB','DE','TR','VN','ES','PT','BR','RU','FR','SA','AE','OTHER'];

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

  function T(key, lang, vars){
    const dict = window.CC_AUTH_I18N || {};
    const l = dict[lang] || dict[DEFAULT_LANG] || {};
    let val = (l[key] != null) ? l[key] : (dict[DEFAULT_LANG] && dict[DEFAULT_LANG][key]);
    if (val == null) return key;
    if (vars) {
      Object.keys(vars).forEach(k => {
        val = val.split('{' + k + '}').join(String(vars[k]));
      });
    }
    return val;
  }

  function applyLang(lang){
    const dict = window.CC_AUTH_I18N || {};
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
    document.querySelectorAll('[data-i-ph]').forEach(el => {
      el.setAttribute('placeholder', T(el.getAttribute('data-i-ph'), lang));
    });

    // Language label in switcher button
    const label = document.getElementById('langLabel');
    if (label) label.textContent = LANG_CODES[lang] || lang.toUpperCase();

    // Populate country <select>
    populateCountries(lang);

    try { localStorage.setItem(STORAGE_KEY, lang); } catch(e){}

    // Restart hero terminal so the copy changes stream in fresh
    restartTerminal();
  }

  function populateCountries(lang){
    const sel = document.getElementById('countrySelect');
    if (!sel) return;
    const cur = sel.value || 'KR';
    sel.innerHTML = '';
    COUNTRY_KEYS.forEach(code => {
      const opt = document.createElement('option');
      opt.value = code;
      opt.textContent = T('country.' + code, lang);
      sel.appendChild(opt);
    });
    sel.value = cur;
  }

  function buildLangMenu(currentLang){
    const menu = document.getElementById('langMenu');
    if (!menu) return;
    const dict = window.CC_AUTH_I18N || {};
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
    let h = location.hash || '#/login';
    if (!h.startsWith('#')) h = '#' + h;
    let path = h.slice(1);
    const q = path.indexOf('?');
    if (q !== -1) path = path.slice(0, q);
    if (!path || path === '/') path = '/login';
    return path;
  }

  function showPage(path){
    const target = PAGES[path] || 'page-login';
    document.querySelectorAll('.page').forEach(p => p.classList.remove('on'));
    const el = document.getElementById(target);
    if (el) el.classList.add('on');

    // Focus first field
    setTimeout(() => {
      const firstInput = el && el.querySelector('input:not([type="checkbox"]):not([disabled])');
      if (firstInput && typeof firstInput.focus === 'function') {
        try { firstInput.focus(); } catch(e){}
      }
    }, 40);

    // Reset any transient state
    hideAlert('loginError'); hideAlert('mfaError');
    hideAlert('signupError'); hideAlert('verifyError'); hideAlert('resetError');
    document.getElementById('verifyResent') && (document.getElementById('verifyResent').style.display = 'none');
  }

  function hideAlert(id){
    const el = document.getElementById(id);
    if (el) el.style.display = 'none';
  }
  function showAlert(id, msgId, message){
    const el = document.getElementById(id);
    const msg = document.getElementById(msgId);
    if (!el) return;
    if (msg && message) msg.textContent = message;
    el.style.display = 'flex';
  }

  /* ============ OTP inputs ============ */
  function bindOTP(container, onComplete){
    const inputs = Array.from(container.querySelectorAll('input'));
    inputs.forEach((inp, i) => {
      inp.addEventListener('input', () => {
        const v = inp.value.replace(/\D/g, '').slice(0, 1);
        inp.value = v;
        if (v) inp.classList.add('filled');
        else inp.classList.remove('filled');
        if (v && i < inputs.length - 1) inputs[i + 1].focus();
        checkOTPComplete();
      });
      inp.addEventListener('keydown', (e) => {
        if (e.key === 'Backspace' && !inp.value && i > 0) {
          inputs[i - 1].focus();
          inputs[i - 1].value = '';
          inputs[i - 1].classList.remove('filled');
          checkOTPComplete();
          e.preventDefault();
        }
        if (e.key === 'ArrowLeft' && i > 0) { inputs[i - 1].focus(); e.preventDefault(); }
        if (e.key === 'ArrowRight' && i < inputs.length - 1) { inputs[i + 1].focus(); e.preventDefault(); }
      });
      inp.addEventListener('paste', (e) => {
        const text = (e.clipboardData || window.clipboardData).getData('text').replace(/\D/g, '').slice(0, 6);
        if (!text) return;
        e.preventDefault();
        for (let k = 0; k < inputs.length; k++){
          inputs[k].value = text[k] || '';
          if (inputs[k].value) inputs[k].classList.add('filled'); else inputs[k].classList.remove('filled');
        }
        const nextEmpty = inputs.findIndex(x => !x.value);
        (nextEmpty === -1 ? inputs[inputs.length - 1] : inputs[nextEmpty]).focus();
        checkOTPComplete();
      });
    });
    function checkOTPComplete(){
      const code = inputs.map(i => i.value).join('');
      const isFull = code.length === 6 && /^\d{6}$/.test(code);
      const kind = container.getAttribute('data-otp');
      const btn = document.getElementById(kind === 'mfa' ? 'mfaSubmit' : 'verifySubmit');
      if (btn) btn.disabled = !isFull;
    }
  }
  function readOTP(container){
    return Array.from(container.querySelectorAll('input')).map(i => i.value).join('');
  }

  /* ============ Password strength ============ */
  function pwStrength(pw){
    if (!pw) return 0;
    let s = 0;
    if (pw.length >= 8) s++;
    if (/[A-Z]/.test(pw) && /[a-z]/.test(pw)) s++;
    if (/[0-9]/.test(pw)) s++;
    if (/[^A-Za-z0-9]/.test(pw) || pw.length >= 14) s++;
    return Math.min(s, 4);
  }
  function updateStrength(){
    const inp = document.getElementById('signupPw');
    if (!inp) return;
    const s = pwStrength(inp.value);
    const wrap = document.getElementById('pwStrength');
    if (!wrap) return;
    wrap.style.display = inp.value ? 'flex' : 'none';
    for (let k = 1; k <= 4; k++){
      const seg = document.getElementById('pws' + k);
      if (!seg) continue;
      seg.className = 'pw-strength-seg' + (k <= s ? ' on-' + s : '');
    }
    const lbl = document.getElementById('pwsLbl');
    if (lbl) lbl.textContent = T('signup.strength.' + s, currentLang());
  }
  function updateConfirmMatch(){
    const pw = document.getElementById('signupPw');
    const pw2 = document.getElementById('signupPw2');
    const mism = document.getElementById('pwMismatch');
    if (!pw || !pw2 || !mism) return;
    const hasMismatch = pw2.value && pw.value && pw2.value !== pw.value;
    mism.style.display = hasMismatch ? 'block' : 'none';
  }

  function currentLang(){ return document.documentElement.getAttribute('data-lang') || DEFAULT_LANG; }

  /* ============ Terminal ============ */
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

  /* ============ Form submit handlers (demo behaviour) ============ */
  const CC_AUTH = {
    submitLogin(e){
      e.preventDefault();
      const form = e.target;
      const email = form.email.value.trim();
      const pw = form.password.value;
      if (!email || !pw) return false;

      // Demo behaviour: 특정 이메일이면 실패, 그 외는 2FA 이동
      if (/^locked@/i.test(email)) {
        showAlert('loginError', 'loginErrorMsg', T('err.account_locked', currentLang()));
        return false;
      }
      if (/^bad@/i.test(email) || /wrong/i.test(pw)) {
        showAlert('loginError', 'loginErrorMsg', T('err.invalid_credentials', currentLang()));
        return false;
      }
      hideAlert('loginError');
      const btn = document.getElementById('loginSubmit');
      btn.innerHTML = `<span class="spinner"></span> <span>${T('login.submitting', currentLang())}</span>`;
      btn.disabled = true;
      setTimeout(() => {
        location.hash = '#/2fa';
        btn.innerHTML = `<span>${T('login.submit', currentLang())}</span>`;
        btn.disabled = false;
      }, 700);
      return false;
    },
    googleLogin(){
      // Real SPA wires this to OAuth; here just navigate
      const btn = document.querySelector('.btn.google');
      if (btn) btn.innerHTML = `<span class="spinner"></span> <span>${T('login.submitting', currentLang())}</span>`;
      setTimeout(() => { location.hash = '#/2fa'; }, 600);
    },
    submitMfa(){
      const code = readOTP(document.getElementById('otpMfa'));
      if (code.length !== 6) return;
      if (code === '000000') {
        showAlert('mfaError', 'mfaErrorMsg', T('err.invalid_code', currentLang()));
        return;
      }
      const btn = document.getElementById('mfaSubmit');
      btn.innerHTML = `<span class="spinner"></span> <span>${T('login.submitting', currentLang())}</span>`;
      btn.disabled = true;
      setTimeout(() => {
        // On real success this would redirect to /trade
        window.location.href = 'https://chartcontrol.onrender.com/#/trade';
      }, 700);
    },
    submitSignup(e){
      e.preventDefault();
      const form = e.target;
      const pw = form.password.value;
      const pw2 = form.password2.value;
      if (pw.length < 8) {
        showAlert('signupError', 'signupErrorMsg', T('signup.err_short', currentLang()));
        return false;
      }
      if (pw !== pw2) {
        showAlert('signupError', 'signupErrorMsg', T('signup.err_mismatch', currentLang()));
        return false;
      }
      hideAlert('signupError');
      const btn = document.getElementById('signupSubmit');
      btn.innerHTML = `<span class="spinner"></span> <span>${T('signup.submitting', currentLang())}</span>`;
      btn.disabled = true;
      setTimeout(() => {
        location.hash = '#/verify-email';
        btn.innerHTML = `<span>${T('signup.submit', currentLang())}</span>`;
        btn.disabled = false;
      }, 700);
      return false;
    },
    submitVerify(){
      const code = readOTP(document.getElementById('otpVerify'));
      if (code.length !== 6) return;
      if (code === '000000') {
        showAlert('verifyError', 'verifyErrorMsg', T('err.invalid_code', currentLang()));
        return;
      }
      const btn = document.getElementById('verifySubmit');
      btn.innerHTML = `<span class="spinner"></span> <span>${T('login.submitting', currentLang())}</span>`;
      btn.disabled = true;
      setTimeout(() => {
        window.location.href = 'https://chartcontrol.onrender.com/#/trade';
      }, 700);
    },
    resendVerify(ev){
      ev && ev.preventDefault();
      hideAlert('verifyError');
      const el = document.getElementById('verifyResent');
      if (el) { el.style.display = 'flex'; setTimeout(() => { el.style.display = 'none'; }, 3200); }
    },
    submitReset(e){
      e.preventDefault();
      const email = e.target.email.value.trim();
      if (!email) return false;
      const btn = document.getElementById('resetSubmit');
      btn.innerHTML = `<span class="spinner"></span> <span>${T('reset.submitting', currentLang())}</span>`;
      btn.disabled = true;
      // Store email for the confirmation screen
      window.__resetEmail = email;
      setTimeout(() => {
        location.hash = '#/reset-sent';
        btn.innerHTML = `<span>${T('reset.submit', currentLang())}</span>`;
        btn.disabled = false;
      }, 700);
      return false;
    }
  };

  /* ============ Init ============ */
  function whenDictReady(cb){
    if (window.CC_AUTH_I18N && window.CC_AUTH_I18N.en) { cb(); return; }
    let tries = 0;
    const id = setInterval(() => {
      tries++;
      if (window.CC_AUTH_I18N && window.CC_AUTH_I18N.en) { clearInterval(id); cb(); }
      else if (tries > 40) { clearInterval(id); cb(); }
    }, 50);
  }

  function init(){
    whenDictReady(() => {
      const lang = detectLang();
      applyLang(lang);
      buildLangMenu(lang);
      showPage(currentRoute());
      onHashChange();
      hookLangMenu();

      // Bind OTPs
      const otpMfa = document.getElementById('otpMfa');
      if (otpMfa) bindOTP(otpMfa);
      const otpVerify = document.getElementById('otpVerify');
      if (otpVerify) bindOTP(otpVerify);

      // Signup dynamic feedback
      const pw = document.getElementById('signupPw');
      if (pw) pw.addEventListener('input', () => { updateStrength(); updateConfirmMatch(); });
      const pw2 = document.getElementById('signupPw2');
      if (pw2) pw2.addEventListener('input', updateConfirmMatch);

      // Ref code from ?ref= or #/signup?ref=CODE
      const refFromUrl = (() => {
        try {
          const s = new URLSearchParams(location.search).get('ref');
          if (s) return s.toUpperCase().replace(/[^A-Z0-9]/g,'');
          const h = location.hash;
          const q = h.indexOf('?');
          if (q !== -1) {
            const p = new URLSearchParams(h.slice(q + 1)).get('ref');
            if (p) return p.toUpperCase().replace(/[^A-Z0-9]/g,'');
          }
        } catch(e){}
        return '';
      })();
      if (refFromUrl) {
        const refField = document.getElementById('refField');
        const refInput = document.getElementById('refInput');
        if (refField && refInput) {
          refField.style.display = 'flex';
          refInput.value = refFromUrl;
          const note = document.getElementById('refNote');
          if (note) {
            note.textContent = T('signup.ref_valid', currentLang(), {pct: 20});
            note.classList.add('ok');
          }
        }
      }

      // Reset-sent screen: populate email
      window.addEventListener('hashchange', () => {
        onHashChange();
        showPage(currentRoute());
      });
    });
    loopTerminal();
  }

  function onHashChange(){
    const route = currentRoute();
    // Update reset-sent body
    if (route === '/reset-sent' && window.__resetEmail) {
      const body = document.getElementById('resetSentBody');
      if (body) body.textContent = T('reset.sent_p', currentLang(), {email: window.__resetEmail});
    }
  }

  function hookLangMenu(){
    const btn = document.getElementById('langBtn');
    const menu = document.getElementById('langMenu');
    if (!btn || !menu) return;
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

  // Expose for inline onclick / onsubmit
  window.CC_AUTH = CC_AUTH;

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
