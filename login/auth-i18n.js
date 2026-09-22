/* ChartControl Auth — 12-language i18n dictionary
 * ------------------------------------------------------------
 * Scope: /login (+ 2FA) · /signup · /verify-email · /password-reset
 * Exposed as window.CC_AUTH_I18N
 * English is the master; other languages override translated keys, fallback to English.
 */
(function(){
  const D = {
    en: {
      _name:"English", _dir:"ltr",
      // Global
      "stripe.a":"AI CHART INTELLIGENCE",
      "stripe.b":"Simulation stripe · No real funds move without your approval",
      "stripe.c":"Live on KuCoin · Bitget & Bybit coming soon",
      "brand.ver":"Terminal v1.0",
      // Foot / legal
      "foot.terms":"Terms","foot.privacy":"Privacy","foot.security":"Security","foot.help":"Help",
      "foot.copy":"© 2026 ChartControl AI",
      // Hero (shared across all auth pages)
      "hero.eyebrow":"AI-NATIVE TERMINAL",
      "hero.title":"Ask the chart.\nThe AI marks it on screen.",
      "hero.body":"Your API key is read + trade only — never withdrawal. Every order is a draft you approve on your own exchange account. The AI proposes, you decide.",
      "term.q":"Is BTC breaking out here — where do I get stopped?",
      "hero.f1_h":"Ask in plain language","hero.f1_b":"Streamed reads with rule name + timestamp on every marker",
      "hero.f2_h":"24-column workspace","hero.f2_b":"Drag, dock, resize every widget of your cockpit",
      "hero.f3_h":"Safety by design","hero.f3_b":"Approve ≠ Submit · multi-stage risk check on every order",
      "hero.f4_h":"Your keys, your account","hero.f4_b":"Non-custodial · we never hold funds, never request withdrawal",
      "hero.stat_pairs":"USDT perpetual pairs",
      "hero.stat_exch":"Exchanges wired",
      "hero.stat_custody":"Customer funds held",
      "hero.stat_withdraw":"Withdrawal permissions",
      // Nav / language / actions
      "nav.back_home":"Back to site",
      "nav.language":"Language",

      /* ============ LOGIN ============ */
      "login.title":"Welcome back.",
      "login.subtitle":"Sign in to open your terminal.",
      "login.fld_email":"Email",
      "login.fld_email_ph":"you@domain.com",
      "login.fld_password":"Password",
      "login.fld_password_ph":"••••••••",
      "login.remember":"Keep me signed in on this device",
      "login.forgot":"Forgot password?",
      "login.submit":"Sign in",
      "login.submitting":"Signing in…",
      "login.divider":"OR CONTINUE WITH",
      "login.google":"Continue with Google",
      "login.no_account":"New here?",
      "login.signup_link":"Create an account",
      "login.demo_hint":"Free tier gives you AI reads without a card.",
      // Errors
      "err.invalid_credentials":"Email or password doesn't match. Try again, or reset your password.",
      "err.account_locked":"Too many attempts. Your account is temporarily locked — reset your password to unlock.",
      "err.too_many_attempts":"Too many attempts. Please wait a minute and try again.",
      "err.invalid_code":"That code isn't right. Check your authenticator app and try again.",
      "err.expired_link":"This link has expired. Request a new one below.",
      "err.email_taken":"That email is already registered. Sign in, or reset the password.",
      "err.generic":"Something went wrong. Try again in a moment.",

      /* ============ 2FA ============ */
      "mfa.title":"Two-factor code",
      "mfa.subtitle":"Enter the 6-digit code from your authenticator app.",
      "mfa.hint_pre":"Open ",
      "mfa.hint_em":"Google Authenticator, Authy or 1Password",
      "mfa.hint_post":" and copy the current code for ChartControl.",
      "mfa.submit":"Verify",
      "mfa.lost":"Lost your device?",
      "mfa.recover":"Use a recovery code",
      "mfa.back":"Back to sign in",

      /* ============ SIGNUP ============ */
      "signup.title":"Start free.",
      "signup.subtitle":"Free points on signup — no card, no deposit.",
      "signup.step_account":"Account",
      "signup.step_verify":"Verify",
      "signup.step_ready":"Ready",
      "signup.fld_email":"Email",
      "signup.fld_password":"Password (min 10 chars)",
      "signup.fld_password_ph":"At least 10 characters",
      "signup.fld_confirm":"Confirm password",
      "signup.fld_confirm_ph":"Type your password again",
      "signup.fld_country":"Country / region",
      "signup.fld_ref":"Invite code (optional)",
      "signup.fld_ref_ph":"e.g. CHART-KURI",
      "signup.ref_valid":"Valid invite — you'll be attributed at {pct}%.",
      "signup.ref_bad":"Code not recognised — check with your inviter.",
      "signup.strength.0":"","signup.strength.1":"Weak",
      "signup.strength.2":"Fair","signup.strength.3":"Good","signup.strength.4":"Strong",
      "signup.err_short":"Password needs to be at least 8 characters.",
      "signup.err_mismatch":"Passwords don't match yet.",
      "signup.agree_pre":"I agree to the ",
      "signup.agree_terms":"Terms of Service",
      "signup.agree_sep":" and ",
      "signup.agree_privacy":"Privacy Policy",
      "signup.agree_post":".",
      "signup.marketing":"Send me occasional product updates (you can unsubscribe anytime).",
      "signup.submit":"Create account",
      "signup.submitting":"Creating your account…",
      "signup.have_account":"Already have an account?",
      "signup.login_link":"Sign in",
      "signup.legal_missing":"Heads-up: the {what} pages aren't published yet. Your acknowledgement will be attached to the versions when we publish.",

      // Country options
      "country.KR":"🇰🇷  Korea","country.US":"🇺🇸  United States","country.JP":"🇯🇵  Japan",
      "country.CN":"🇨🇳  China","country.TW":"🇹🇼  Taiwan","country.SG":"🇸🇬  Singapore",
      "country.HK":"🇭🇰  Hong Kong","country.GB":"🇬🇧  United Kingdom","country.DE":"🇩🇪  Germany",
      "country.TR":"🇹🇷  Türkiye","country.VN":"🇻🇳  Vietnam","country.ES":"🇪🇸  Spain",
      "country.PT":"🇵🇹  Portugal","country.BR":"🇧🇷  Brazil","country.RU":"🇷🇺  Russia",
      "country.FR":"🇫🇷  France","country.SA":"🇸🇦  Saudi Arabia","country.AE":"🇦🇪  UAE",
      "country.OTHER":"Other",

      /* ============ EMAIL VERIFY ============ */
      "verify.title":"Check your email.",
      "verify.subtitle":"We sent a 6-digit code to your inbox. It expires in 10 minutes.",
      "verify.hint_pre":"Sent to ",
      "verify.hint_em":"your email",
      "verify.hint_post":". Check the spam folder if it isn't there in a minute.",
      "verify.check_spam":"If it doesn't arrive, check spam.",
      "verify.submit":"Verify email",
      "verify.resend_q":"Didn't receive it?",
      "verify.resend":"Send another code",
      "verify.resent":"Sent — check your inbox again.",

      /* ============ PASSWORD RESET ============ */
      "reset.title":"Reset your password.",
      "reset.subtitle":"We'll email you a link to set a new one.",
      "reset.fld_email":"Email on your account",
      "reset.submit":"Send reset link",
      "reset.submitting":"Sending…",
      "reset.back_login":"Back to sign in",
      "reset.sent_h":"Check your email.",
      "reset.sent_p":"If an account exists for {email}, we sent a reset link. It expires in 30 minutes.",
      "reset.sent_note":"Not seeing it? Check spam or wait a moment — mail can take up to 3 minutes.",
      "reset.done":"Back to sign in"
    }
  };

  function pack(meta, over){ return Object.assign({}, D.en, meta, over); }

  /* ---------------- 한국어 ---------------- */
  D.ko = pack({_name:"한국어",_dir:"ltr"}, {
    "stripe.a":"AI 차트 인텔리전스",
    "stripe.b":"시뮬레이션 배너 · 승인 없이는 실제 자금이 움직이지 않습니다",
    "stripe.c":"KuCoin 라이브 · Bitget · Bybit 곧 추가",
    "brand.ver":"터미널 v1.0",
    "foot.terms":"약관","foot.privacy":"개인정보","foot.security":"보안","foot.help":"도움말",
    "foot.copy":"© 2026 ChartControl AI",
    "hero.eyebrow":"AI 네이티브 터미널",
    "hero.title":"차트에 물어보세요.\nAI가 화면에 표시합니다.",
    "hero.body":"API 키는 읽기와 거래 권한만 요청합니다 — 출금은 절대 아닙니다. 모든 주문은 당신 거래소 계정에서 승인하는 초안입니다. AI는 제안하고, 당신이 결정합니다.",
    "term.q":"BTC 지금 돌파 맞아요? 손절은 어디에 걸어야 해요?",
    "hero.f1_h":"평범한 언어로 질문","hero.f1_b":"모든 마커에 규칙 이름 + 타임스탬프가 붙는 스트리밍 리딩",
    "hero.f2_h":"24컬럼 워크스페이스","hero.f2_b":"당신 콕핏의 모든 위젯을 드래그, 도킹, 리사이즈",
    "hero.f3_h":"태생부터 안전","hero.f3_b":"승인 ≠ 제출 · 모든 주문에 다단계 리스크 체크",
    "hero.f4_h":"당신의 키, 당신의 계정","hero.f4_b":"비수탁 · 자금 보관 없음, 출금 권한 요청 없음",
    "hero.stat_pairs":"USDT 무기한 페어",
    "hero.stat_exch":"연결된 거래소",
    "hero.stat_custody":"보관 중인 고객 자금",
    "hero.stat_withdraw":"출금 권한",
    "nav.back_home":"사이트로 돌아가기","nav.language":"언어",

    "login.title":"다시 오셨네요.",
    "login.subtitle":"로그인해서 터미널을 여세요.",
    "login.fld_email":"이메일",
    "login.fld_email_ph":"you@domain.com",
    "login.fld_password":"비밀번호","login.fld_password_ph":"••••••••",
    "login.remember":"이 기기에서 로그인 상태 유지",
    "login.forgot":"비밀번호를 잊으셨나요?",
    "login.submit":"로그인","login.submitting":"로그인 중…",
    "login.divider":"또는 다음으로 계속",
    "login.google":"Google로 계속",
    "login.no_account":"처음 오셨나요?","login.signup_link":"계정 만들기",
    "login.demo_hint":"무료 티어는 카드 없이 AI 리딩을 제공합니다.",
    "err.invalid_credentials":"이메일 또는 비밀번호가 일치하지 않습니다. 다시 시도하거나 비밀번호를 재설정하세요.",
    "err.account_locked":"시도가 너무 많습니다. 계정이 일시 잠금되었습니다 — 비밀번호를 재설정하면 잠금이 풀립니다.",
    "err.too_many_attempts":"시도가 너무 많습니다. 잠시 후 다시 시도해주세요.",
    "err.invalid_code":"코드가 맞지 않습니다. 인증 앱을 확인하고 다시 시도하세요.",
    "err.expired_link":"이 링크는 만료되었습니다. 아래에서 새 링크를 요청하세요.",
    "err.email_taken":"이미 등록된 이메일입니다. 로그인하거나 비밀번호를 재설정하세요.",
    "err.generic":"문제가 발생했습니다. 잠시 후 다시 시도해주세요.",

    "mfa.title":"이중 인증 코드",
    "mfa.subtitle":"인증 앱의 6자리 코드를 입력하세요.",
    "mfa.hint_pre":"","mfa.hint_em":"Google Authenticator, Authy, 1Password","mfa.hint_post":" 에서 ChartControl의 현재 코드를 복사해주세요.",
    "mfa.submit":"확인","mfa.lost":"기기를 잃어버리셨나요?",
    "mfa.recover":"복구 코드 사용","mfa.back":"로그인으로 돌아가기",

    "signup.title":"무료로 시작하세요.",
    "signup.subtitle":"가입 시 무료 포인트 — 카드도, 입금도 없습니다.",
    "signup.step_account":"계정","signup.step_verify":"인증","signup.step_ready":"준비 완료",
    "signup.fld_email":"이메일",
    "signup.fld_password":"비밀번호 (최소 10자)","signup.fld_password_ph":"10자 이상",
    "signup.fld_confirm":"비밀번호 확인","signup.fld_confirm_ph":"비밀번호를 다시 입력하세요",
    "signup.fld_country":"국가 / 지역",
    "signup.fld_ref":"초대 코드 (선택)","signup.fld_ref_ph":"예: CHART-KURI",
    "signup.ref_valid":"유효한 초대 — {pct}%로 귀속됩니다.",
    "signup.ref_bad":"코드를 확인할 수 없습니다 — 초대자에게 문의하세요.",
    "signup.strength.0":"","signup.strength.1":"약함","signup.strength.2":"보통","signup.strength.3":"양호","signup.strength.4":"강력",
    "signup.err_short":"비밀번호는 최소 8자여야 합니다.",
    "signup.err_mismatch":"비밀번호가 일치하지 않습니다.",
    "signup.agree_pre":"","signup.agree_terms":"이용약관","signup.agree_sep":" 및 ","signup.agree_privacy":"개인정보 처리방침","signup.agree_post":"에 동의합니다.",
    "signup.marketing":"제품 소식을 가끔 받겠습니다 (언제든 구독 해지 가능).",
    "signup.submit":"계정 만들기","signup.submitting":"계정 생성 중…",
    "signup.have_account":"이미 계정이 있으신가요?","signup.login_link":"로그인",
    "signup.legal_missing":"안내: {what} 페이지가 아직 게시되지 않았습니다. 게시 시 그 버전에 동의가 첨부됩니다.",
    "country.KR":"🇰🇷  대한민국","country.US":"🇺🇸  미국","country.JP":"🇯🇵  일본",
    "country.CN":"🇨🇳  중국","country.TW":"🇹🇼  대만","country.SG":"🇸🇬  싱가포르",
    "country.HK":"🇭🇰  홍콩","country.GB":"🇬🇧  영국","country.DE":"🇩🇪  독일",
    "country.TR":"🇹🇷  튀르키예","country.VN":"🇻🇳  베트남","country.ES":"🇪🇸  스페인",
    "country.PT":"🇵🇹  포르투갈","country.BR":"🇧🇷  브라질","country.RU":"🇷🇺  러시아",
    "country.FR":"🇫🇷  프랑스","country.SA":"🇸🇦  사우디아라비아","country.AE":"🇦🇪  UAE",
    "country.OTHER":"기타",

    "verify.title":"이메일을 확인해주세요.",
    "verify.subtitle":"받은편지함으로 6자리 코드를 보냈습니다. 10분 후 만료됩니다.",
    "verify.hint_pre":"","verify.hint_em":"당신의 이메일","verify.hint_post":"로 발송되었습니다. 1분 내에 도착하지 않으면 스팸함을 확인하세요.",
    "verify.check_spam":"도착하지 않으면 스팸함을 확인하세요.",
    "verify.submit":"이메일 인증","verify.resend_q":"받지 못하셨나요?",
    "verify.resend":"다른 코드 보내기","verify.resent":"전송됨 — 받은편지함을 다시 확인해주세요.",

    "reset.title":"비밀번호 재설정",
    "reset.subtitle":"새 비밀번호를 설정할 링크를 이메일로 보내드립니다.",
    "reset.fld_email":"계정 이메일",
    "reset.submit":"재설정 링크 보내기","reset.submitting":"전송 중…",
    "reset.back_login":"로그인으로 돌아가기",
    "reset.sent_h":"이메일을 확인해주세요.",
    "reset.sent_p":"{email} 계정이 존재한다면 재설정 링크를 보냈습니다. 30분 후 만료됩니다.",
    "reset.sent_note":"보이지 않으신가요? 스팸함을 확인하거나 잠시 기다려주세요 — 메일이 최대 3분 걸릴 수 있습니다.",
    "reset.done":"로그인으로 돌아가기"
  });

  /* ---------------- 日本語 (요약 완역) ---------------- */
  D.ja = pack({_name:"日本語",_dir:"ltr"}, {
    "stripe.a":"AI チャート・インテリジェンス",
    "stripe.b":"シミュレーションバナー · あなたの承認なしに実際の資金は動きません",
    "stripe.c":"KuCoin 稼働中 · Bitget · Bybit 追加予定",
    "hero.eyebrow":"AI ネイティブターミナル",
    "hero.title":"チャートに聞いてください。\nAI が画面に表示します。",
    "hero.body":"API キーは読み取りと取引権限のみを要求します — 出金は絶対にありません。すべての注文はあなたの取引所口座で承認するドラフトです。AI は提案し、あなたが決定します。",
    "term.q":"BTC はここでブレイクアウトしているの? 損切りはどこ?",
    "hero.stat_pairs":"USDT 無期限ペア","hero.stat_exch":"接続取引所","hero.stat_custody":"保管中の顧客資金","hero.stat_withdraw":"出金権限",
    "login.title":"おかえりなさい。","login.subtitle":"ログインしてターミナルを開きましょう。",
    "login.fld_email":"メール","login.fld_password":"パスワード","login.remember":"このデバイスでログイン状態を保持",
    "login.forgot":"パスワードをお忘れですか?","login.submit":"ログイン","login.submitting":"ログイン中…",
    "login.divider":"または以下で続行","login.google":"Google で続行",
    "login.no_account":"初めてですか?","login.signup_link":"アカウントを作成",
    "signup.title":"無料で始めましょう。","signup.subtitle":"登録時に無料ポイント — カード不要、入金不要。",
    "signup.submit":"アカウント作成","signup.have_account":"すでにアカウントをお持ちですか?","signup.login_link":"ログイン",
    "mfa.title":"二段階認証コード","mfa.subtitle":"認証アプリの 6 桁コードを入力してください。","mfa.submit":"確認",
    "verify.title":"メールを確認してください。","verify.subtitle":"受信箱に 6 桁のコードを送信しました。10 分で有効期限が切れます。","verify.submit":"メール認証",
    "reset.title":"パスワードのリセット","reset.subtitle":"新しいパスワードを設定するリンクをメールでお送りします。","reset.submit":"リセットリンクを送信"
  });

  /* ---------------- 中文 简体 ---------------- */
  D.zh = pack({_name:"中文",_dir:"ltr"}, {
    "stripe.a":"AI 图表智能",
    "stripe.b":"仿真横幅 · 未经你的授权,任何真实资金都不会移动",
    "stripe.c":"KuCoin 已上线 · Bitget · Bybit 即将加入",
    "hero.eyebrow":"AI 原生终端",
    "hero.title":"问图表。\nAI 会画在屏幕上。",
    "hero.body":"API 密钥只请求读取和交易权限 — 从不请求提现。每一笔订单都是你在自己的交易所账户上批准的草稿。AI 提议,你决定。",
    "term.q":"BTC 现在是不是在突破? 止损放哪儿?",
    "hero.stat_pairs":"USDT 永续合约","hero.stat_exch":"已接入交易所","hero.stat_custody":"保管的客户资金","hero.stat_withdraw":"提现权限",
    "login.title":"欢迎回来。","login.subtitle":"登录以打开你的终端。",
    "login.fld_email":"邮箱","login.fld_password":"密码","login.remember":"在此设备保持登录",
    "login.forgot":"忘记密码?","login.submit":"登录","login.submitting":"登录中…",
    "login.divider":"或使用以下方式继续","login.google":"用 Google 继续",
    "login.no_account":"新用户?","login.signup_link":"创建账户",
    "signup.title":"免费开始。","signup.subtitle":"注册即赠免费积分 — 无需信用卡,无需入金。",
    "signup.submit":"创建账户","signup.have_account":"已有账户?","signup.login_link":"登录",
    "mfa.title":"两步验证码","mfa.subtitle":"输入验证器应用的 6 位数字代码。","mfa.submit":"验证",
    "verify.title":"请查收邮件。","verify.subtitle":"我们向你的收件箱发送了一个 6 位数字代码。10 分钟内有效。","verify.submit":"验证邮箱",
    "reset.title":"重置密码","reset.subtitle":"我们会给你发送重置链接。","reset.submit":"发送重置链接"
  });

  /* ---------------- 나머지 9개 언어 (핵심 키만 번역, 나머지는 영어 폴백) ---------------- */
  D.tr = pack({_name:"Türkçe",_dir:"ltr"}, {
    "stripe.a":"AI GRAFİK ZEKÂSI","stripe.b":"Simülasyon banner · Onayın olmadan gerçek fonlar hareket etmez","stripe.c":"KuCoin'de canlı · Bitget · Bybit yakında",
    "hero.eyebrow":"AI NATIVE TERMİNAL","hero.title":"Grafiğe sor.\nAI ekrana çizer.",
    "hero.body":"API anahtarın yalnızca okuma + trade izinleri talep eder — asla çekim değil. Her emir kendi borsa hesabında onayladığın bir taslaktır. AI önerir, sen karar verirsin.",
    "term.q":"BTC burada kırılıyor mu? Nerede durdurulurum?",
    "login.title":"Tekrar hoş geldin.","login.subtitle":"Terminalini açmak için giriş yap.","login.submit":"Giriş yap","login.submitting":"Giriş yapılıyor…",
    "login.fld_email":"E-posta","login.fld_password":"Parola","login.remember":"Bu cihazda oturumu açık tut","login.forgot":"Parolanı mı unuttun?","login.divider":"VEYA DEVAM ET","login.google":"Google ile devam et","login.no_account":"Yeni misin?","login.signup_link":"Hesap oluştur",
    "signup.title":"Ücretsiz başla.","signup.subtitle":"Kayıtta ücretsiz puan — kart yok, para yatırma yok.","signup.submit":"Hesap oluştur","signup.have_account":"Zaten hesabın var mı?","signup.login_link":"Giriş yap",
    "mfa.title":"İki faktörlü kod","mfa.subtitle":"Kimlik doğrulama uygulamasındaki 6 haneli kodu gir.","mfa.submit":"Doğrula",
    "verify.title":"E-postanı kontrol et.","verify.subtitle":"Gelen kutuna 6 haneli bir kod gönderdik. 10 dakika içinde sona erer.","verify.submit":"E-postayı doğrula",
    "reset.title":"Parolanı sıfırla","reset.subtitle":"Yenisini belirlemen için sana e-posta ile bağlantı göndereceğiz.","reset.submit":"Sıfırlama bağlantısı gönder"
  });

  D.vi = pack({_name:"Tiếng Việt",_dir:"ltr"}, {
    "stripe.a":"TRÍ TUỆ BIỂU ĐỒ AI","stripe.b":"Băng-rôn mô phỏng · Không có tiền thật di chuyển nếu bạn chưa duyệt","stripe.c":"Đang chạy trên KuCoin · Bitget · Bybit sắp có",
    "hero.eyebrow":"THIẾT BỊ ĐẦU CUỐI AI-NATIVE","hero.title":"Hỏi biểu đồ.\nAI vẽ lên màn hình.",
    "hero.body":"API key chỉ yêu cầu quyền đọc + giao dịch — không bao giờ yêu cầu rút tiền. Mọi lệnh đều là bản nháp bạn duyệt trên tài khoản sàn của mình. AI đề xuất, bạn quyết định.",
    "term.q":"BTC đang breakout ở đây phải không — dừng lỗ đặt ở đâu?",
    "login.title":"Chào mừng trở lại.","login.subtitle":"Đăng nhập để mở terminal của bạn.","login.submit":"Đăng nhập","login.submitting":"Đang đăng nhập…",
    "login.fld_email":"Email","login.fld_password":"Mật khẩu","login.remember":"Giữ đăng nhập trên thiết bị này","login.forgot":"Quên mật khẩu?","login.divider":"HOẶC TIẾP TỤC VỚI","login.google":"Tiếp tục với Google","login.no_account":"Người mới?","login.signup_link":"Tạo tài khoản",
    "signup.title":"Bắt đầu miễn phí.","signup.subtitle":"Điểm miễn phí khi đăng ký — không thẻ, không nạp tiền.","signup.submit":"Tạo tài khoản","signup.have_account":"Đã có tài khoản?","signup.login_link":"Đăng nhập",
    "mfa.title":"Mã hai yếu tố","mfa.subtitle":"Nhập mã 6 chữ số từ ứng dụng xác thực.","mfa.submit":"Xác minh",
    "verify.title":"Kiểm tra email.","verify.subtitle":"Chúng tôi đã gửi mã 6 chữ số đến hộp thư. Hết hạn sau 10 phút.","verify.submit":"Xác minh email",
    "reset.title":"Đặt lại mật khẩu","reset.subtitle":"Chúng tôi sẽ gửi email cho bạn liên kết để đặt lại.","reset.submit":"Gửi liên kết đặt lại"
  });

  D.es = pack({_name:"Español",_dir:"ltr"}, {
    "stripe.a":"INTELIGENCIA DE GRÁFICOS CON IA","stripe.b":"Banner de simulación · Sin tu aprobación, no se mueve dinero real","stripe.c":"En vivo en KuCoin · Bitget · Bybit próximamente",
    "hero.eyebrow":"TERMINAL NATIVO DE IA","hero.title":"Pregunta al gráfico.\nLa IA lo marca en pantalla.",
    "hero.body":"Tu clave API solo pide permisos de lectura y trading — nunca de retiro. Cada orden es un borrador que apruebas en tu propia cuenta de exchange. La IA propone, tú decides.",
    "term.q":"¿Está BTC rompiendo aquí — dónde me sacan?",
    "login.title":"Bienvenido de nuevo.","login.subtitle":"Inicia sesión para abrir tu terminal.","login.submit":"Iniciar sesión","login.submitting":"Iniciando…",
    "login.fld_email":"Email","login.fld_password":"Contraseña","login.remember":"Mantener sesión en este dispositivo","login.forgot":"¿Olvidaste tu contraseña?","login.divider":"O CONTINUAR CON","login.google":"Continuar con Google","login.no_account":"¿Nuevo aquí?","login.signup_link":"Crear cuenta",
    "signup.title":"Empieza gratis.","signup.subtitle":"Puntos gratis al registrarte — sin tarjeta, sin depósito.","signup.submit":"Crear cuenta","signup.have_account":"¿Ya tienes cuenta?","signup.login_link":"Iniciar sesión",
    "mfa.title":"Código de dos factores","mfa.subtitle":"Ingresa el código de 6 dígitos de tu app de autenticación.","mfa.submit":"Verificar",
    "verify.title":"Revisa tu email.","verify.subtitle":"Enviamos un código de 6 dígitos a tu bandeja. Expira en 10 minutos.","verify.submit":"Verificar email",
    "reset.title":"Restablecer contraseña","reset.subtitle":"Te enviaremos un enlace para establecer una nueva.","reset.submit":"Enviar enlace"
  });

  D.pt = pack({_name:"Português",_dir:"ltr"}, {
    "stripe.a":"INTELIGÊNCIA DE GRÁFICOS COM IA","stripe.b":"Banner de simulação · Sem sua aprovação, nenhum fundo real se move","stripe.c":"Ao vivo na KuCoin · Bitget · Bybit em breve",
    "hero.eyebrow":"TERMINAL NATIVO DE IA","hero.title":"Pergunte ao gráfico.\nA IA marca na tela.",
    "hero.body":"Sua chave API só pede leitura + trading — nunca retirada. Cada ordem é um rascunho que você aprova na sua conta da exchange. A IA propõe, você decide.",
    "term.q":"BTC está rompendo aqui — onde eu sou stopado?",
    "login.title":"Bem-vindo de volta.","login.subtitle":"Entre para abrir seu terminal.","login.submit":"Entrar","login.submitting":"Entrando…",
    "login.fld_email":"Email","login.fld_password":"Senha","login.remember":"Manter sessão neste dispositivo","login.forgot":"Esqueceu a senha?","login.divider":"OU CONTINUE COM","login.google":"Continuar com Google","login.no_account":"Novo por aqui?","login.signup_link":"Criar conta",
    "signup.title":"Comece grátis.","signup.subtitle":"Pontos grátis no cadastro — sem cartão, sem depósito.","signup.submit":"Criar conta","signup.have_account":"Já tem conta?","signup.login_link":"Entrar",
    "mfa.title":"Código de dois fatores","mfa.subtitle":"Digite o código de 6 dígitos do seu app autenticador.","mfa.submit":"Verificar",
    "verify.title":"Verifique seu email.","verify.subtitle":"Enviamos um código de 6 dígitos para sua caixa. Expira em 10 minutos.","verify.submit":"Verificar email",
    "reset.title":"Redefinir senha","reset.subtitle":"Enviaremos um link por email para definir uma nova.","reset.submit":"Enviar link"
  });

  D.ru = pack({_name:"Русский",_dir:"ltr"}, {
    "stripe.a":"ИИ-АНАЛИТИКА ГРАФИКОВ","stripe.b":"Симуляционная полоса · Без вашего одобрения реальные средства не двигаются","stripe.c":"Работает на KuCoin · Bitget · Bybit скоро",
    "hero.eyebrow":"ИИ-НАТИВНЫЙ ТЕРМИНАЛ","hero.title":"Спроси график.\nИИ отметит на экране.",
    "hero.body":"Ваш API-ключ запрашивает только чтение и трейдинг — вывод никогда. Каждый ордер — черновик, который вы утверждаете на своём биржевом счёте. ИИ предлагает, вы решаете.",
    "term.q":"BTC пробивает — где меня выбьет?",
    "login.title":"С возвращением.","login.subtitle":"Войдите, чтобы открыть терминал.","login.submit":"Войти","login.submitting":"Вход…",
    "login.fld_email":"Email","login.fld_password":"Пароль","login.remember":"Оставаться в системе на этом устройстве","login.forgot":"Забыли пароль?","login.divider":"ИЛИ ПРОДОЛЖИТЬ С","login.google":"Продолжить с Google","login.no_account":"Впервые здесь?","login.signup_link":"Создать аккаунт",
    "signup.title":"Начните бесплатно.","signup.subtitle":"Бесплатные очки при регистрации — без карты, без депозита.","signup.submit":"Создать аккаунт","signup.have_account":"Уже есть аккаунт?","signup.login_link":"Войти",
    "mfa.title":"Двухфакторный код","mfa.subtitle":"Введите 6-значный код из приложения-аутентификатора.","mfa.submit":"Проверить",
    "verify.title":"Проверьте почту.","verify.subtitle":"Мы отправили 6-значный код на ваш ящик. Действует 10 минут.","verify.submit":"Подтвердить почту",
    "reset.title":"Сброс пароля","reset.subtitle":"Мы отправим вам ссылку для установки нового пароля.","reset.submit":"Отправить ссылку"
  });

  D.de = pack({_name:"Deutsch",_dir:"ltr"}, {
    "stripe.a":"KI-CHART-INTELLIGENZ","stripe.b":"Simulations-Banner · Ohne deine Freigabe bewegt sich kein echtes Geld","stripe.c":"Live auf KuCoin · Bitget · Bybit folgen bald",
    "hero.eyebrow":"KI-NATIVES TERMINAL","hero.title":"Frag den Chart.\nDie KI markiert auf dem Bildschirm.",
    "hero.body":"Dein API-Schlüssel fordert nur Lese- und Trading-Rechte — nie Auszahlung. Jede Order ist ein Entwurf, den du auf deinem eigenen Börsenkonto freigibst. Die KI schlägt vor, du entscheidest.",
    "term.q":"Bricht BTC hier aus — wo werde ich gestoppt?",
    "login.title":"Willkommen zurück.","login.subtitle":"Melde dich an, um dein Terminal zu öffnen.","login.submit":"Anmelden","login.submitting":"Anmelden…",
    "login.fld_email":"E-Mail","login.fld_password":"Passwort","login.remember":"Auf diesem Gerät angemeldet bleiben","login.forgot":"Passwort vergessen?","login.divider":"ODER WEITER MIT","login.google":"Mit Google fortfahren","login.no_account":"Neu hier?","login.signup_link":"Konto erstellen",
    "signup.title":"Kostenlos starten.","signup.subtitle":"Kostenlose Punkte bei Anmeldung — keine Karte, keine Einzahlung.","signup.submit":"Konto erstellen","signup.have_account":"Bereits ein Konto?","signup.login_link":"Anmelden",
    "mfa.title":"Zwei-Faktor-Code","mfa.subtitle":"Gib den 6-stelligen Code aus deiner Authenticator-App ein.","mfa.submit":"Verifizieren",
    "verify.title":"E-Mail prüfen.","verify.subtitle":"Wir haben einen 6-stelligen Code in dein Postfach gesendet. Läuft in 10 Minuten ab.","verify.submit":"E-Mail verifizieren",
    "reset.title":"Passwort zurücksetzen","reset.subtitle":"Wir senden dir einen Link zum Festlegen eines neuen Passworts.","reset.submit":"Reset-Link senden"
  });

  D.fr = pack({_name:"Français",_dir:"ltr"}, {
    "stripe.a":"INTELLIGENCE DE GRAPHIQUES PAR IA","stripe.b":"Bandeau de simulation · Sans votre approbation, aucun fonds réel ne bouge","stripe.c":"En direct sur KuCoin · Bitget · Bybit bientôt",
    "hero.eyebrow":"TERMINAL NATIF IA","hero.title":"Demandez au graphique.\nL'IA le marque à l'écran.",
    "hero.body":"Votre clé API ne demande que la lecture et le trading — jamais le retrait. Chaque ordre est un brouillon que vous approuvez sur votre propre compte de bourse. L'IA propose, vous décidez.",
    "term.q":"BTC casse ici — où me fais-je stopper ?",
    "login.title":"Bon retour.","login.subtitle":"Connectez-vous pour ouvrir votre terminal.","login.submit":"Se connecter","login.submitting":"Connexion…",
    "login.fld_email":"E-mail","login.fld_password":"Mot de passe","login.remember":"Rester connecté sur cet appareil","login.forgot":"Mot de passe oublié ?","login.divider":"OU CONTINUER AVEC","login.google":"Continuer avec Google","login.no_account":"Nouveau ici ?","login.signup_link":"Créer un compte",
    "signup.title":"Commencez gratuitement.","signup.subtitle":"Points gratuits à l'inscription — sans carte, sans dépôt.","signup.submit":"Créer un compte","signup.have_account":"Déjà un compte ?","signup.login_link":"Se connecter",
    "mfa.title":"Code à deux facteurs","mfa.subtitle":"Entrez le code à 6 chiffres de votre app d'authentification.","mfa.submit":"Vérifier",
    "verify.title":"Vérifiez votre e-mail.","verify.subtitle":"Nous avons envoyé un code à 6 chiffres dans votre boîte. Expire dans 10 minutes.","verify.submit":"Vérifier l'e-mail",
    "reset.title":"Réinitialiser le mot de passe","reset.subtitle":"Nous vous enverrons un lien pour en définir un nouveau.","reset.submit":"Envoyer le lien"
  });

  D.ar = pack({_name:"العربية",_dir:"rtl"}, {
    "stripe.a":"ذكاء الرسوم البيانية بالذكاء الاصطناعي","stripe.b":"شريط المحاكاة · بدون موافقتك، لا تتحرك أموال حقيقية","stripe.c":"يعمل على KuCoin · Bitget · Bybit قريبًا",
    "hero.eyebrow":"محطة أصلية للذكاء الاصطناعي","hero.title":"اسأل الرسم البياني.\nيرسم الذكاء الاصطناعي على الشاشة.",
    "hero.body":"مفتاح API الخاص بك يطلب فقط صلاحيات القراءة والتداول — لا يطلب السحب أبدًا. كل أمر هو مسودة توافق عليها على حسابك الخاص في البورصة. الذكاء الاصطناعي يقترح، وأنت تقرر.",
    "term.q":"هل BTC يخترق هنا — أين يتم إيقافي؟",
    "login.title":"مرحبًا مجددًا.","login.subtitle":"سجل الدخول لفتح محطتك.","login.submit":"تسجيل الدخول","login.submitting":"جارٍ تسجيل الدخول…",
    "login.fld_email":"البريد","login.fld_password":"كلمة المرور","login.remember":"إبقائي مسجل الدخول على هذا الجهاز","login.forgot":"نسيت كلمة المرور؟","login.divider":"أو تابع مع","login.google":"تابع مع Google","login.no_account":"جديد هنا؟","login.signup_link":"إنشاء حساب",
    "signup.title":"ابدأ مجانًا.","signup.subtitle":"نقاط مجانية عند التسجيل — بلا بطاقة، بلا إيداع.","signup.submit":"إنشاء حساب","signup.have_account":"لديك حساب بالفعل؟","signup.login_link":"تسجيل الدخول",
    "mfa.title":"رمز التحقق بخطوتين","mfa.subtitle":"أدخل الرمز المكون من 6 أرقام من تطبيق المصادقة.","mfa.submit":"تحقق",
    "verify.title":"تحقق من بريدك.","verify.subtitle":"أرسلنا رمزًا مكونًا من 6 أرقام إلى صندوق الوارد. ينتهي خلال 10 دقائق.","verify.submit":"تحقق من البريد",
    "reset.title":"إعادة تعيين كلمة المرور","reset.subtitle":"سنرسل لك رابطًا لتعيين واحدة جديدة.","reset.submit":"إرسال رابط الإعادة"
  });

  window.CC_AUTH_I18N = D;
})();
