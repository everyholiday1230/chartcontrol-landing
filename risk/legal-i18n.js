/* ChartControl Legal — 12-language i18n dictionary
 * ------------------------------------------------------------
 * Scope: /business /terms /privacy /risk /refund
 * Exposed as window.CC_LEGAL_I18N
 * English is master. Korean is fully translated. Other 10 languages translate
 * navigation + section headers + summary boxes; body text falls back to English.
 * (Legal text is intentionally not machine-translated for the long tail —
 * a lawyer-reviewed EN + KO is what ships, everything else shows structure
 * so a visitor knows the topic and can read the EN body underneath.)
 */
(function(){
  const D = {
    en: {
      _name:"English", _dir:"ltr",
      // Global stripe / brand
      "stripe.a":"AI CHART INTELLIGENCE",
      "stripe.b":"Legal & policies · Effective 2026-09-23 · v1.0",
      "stripe.c":"Live on KuCoin · Bitget & Bybit coming soon",
      "brand.ver":"Legal · v1.0",
      "nav.back_home":"Back to product",

      // Left sidebar navigation
      "sidenav.title":"Policies",
      "sidenav.business":"Business Information",
      "sidenav.terms":"Terms of Service",
      "sidenav.privacy":"Privacy Policy",
      "sidenav.risk":"Risk Disclosure",
      "sidenav.refund":"Refund Policy",
      "sidenav.effective":"Effective 2026-09-23 · v1.0",
      "sidenav.contact_h":"Questions about these policies?",
      "sidenav.contact_email":"nuhye1031@gmail.com",
      "sidenav.contact_tg":"Telegram @Chartcontrolai",

      // Top-of-page meta line (shared)
      "meta.effective":"Effective from",
      "meta.version":"Version",
      "meta.updated":"Last updated",

      /* =========== BUSINESS INFORMATION =========== */
      "biz.h":"Business information",
      "biz.sub":"Who runs ChartControl and how to reach us.",
      "biz.tldr_t":"Short version",
      "biz.tldr_b":"<b>ChartControl AI</b> is an AI chart-analysis product operated as a global SaaS service. We are a software company — not an exchange, broker, custodian or investment adviser. We do not hold your funds, and every order runs on your own exchange account.",

      "biz.s1_h":"01 · The company",
      "biz.s1_b":"<b>ChartControl AI</b> is a software product built by a small team of engineers focused on AI tooling for chart-based decision making. The product is delivered as a global software-as-a-service. This page is the source of truth for our identity and product changes; contact us at the addresses below for anything else.",

      "biz.s2_h":"02 · What we do",
      "biz.s2_b":"We build an AI-native trading terminal. Our product reads charts, marks levels on screen with the rule and timestamp that produced them, and streams reasoning in plain language. The user retains sole authority over every order. We never trade on behalf of a user, never hold customer funds, and never request withdrawal permission on any exchange account.",

      "biz.s3_h":"03 · What we do not do",
      "biz.s3_l1":"We are not a cryptocurrency exchange or a broker.",
      "biz.s3_l2":"We do not custody, hold, transfer or manage user funds.",
      "biz.s3_l3":"We are not a licensed investment adviser and do not provide personalised investment advice.",
      "biz.s3_l4":"We do not guarantee returns, win rates, or the accuracy of any AI-generated analysis.",
      "biz.s3_l5":"We do not offer, solicit, or facilitate the purchase of securities.",

      "biz.s4_h":"04 · Contact",
      "biz.s4_desk":"Product & partnership",
      "biz.s4_desk_v":"nuhye1031@gmail.com",
      "biz.s4_tg":"Telegram (fastest)",
      "biz.s4_tg_v":"@Chartcontrolai",
      "biz.s4_hours":"Business hours",
      "biz.s4_hours_v":"Async, worldwide · we reply within one business day",

      "biz.s5_h":"05 · Product & service surfaces",
      "biz.s5_web":"Product web app",
      "biz.s5_web_v":"chartcontrol.onrender.com",
      "biz.s5_landing":"Marketing site",
      "biz.s5_landing_v":"chartcontrol.onrender.com (landing)",
      "biz.s5_partners":"Partner programme",
      "biz.s5_partners_v":"chartcontrol.onrender.com/partners",

      "biz.s6_h":"06 · Governing framework",
      "biz.s6_b":"These policies are written to global SaaS standards. They are not drafted against any single national regulatory regime; where a local law provides you with additional non-waivable rights as a consumer, those rights apply on top of what is stated here. Nothing in these documents is intended to limit rights that cannot be limited by contract in your jurisdiction.",

      /* =========== TERMS OF SERVICE =========== */
      "terms.h":"Terms of Service",
      "terms.sub":"The agreement between you and ChartControl when you use the product.",
      "terms.tldr_t":"Short version",
      "terms.tldr_b":"You may use ChartControl AI to analyse charts and prepare orders. You keep full control of every order and every exchange account. ChartControl does not hold funds, does not trade for you, and does not guarantee outcomes. If our AI is wrong, you are still responsible for the trades you approved.",

      "terms.s1_h":"01 · Acceptance",
      "terms.s1_b":"By creating a ChartControl account, connecting an exchange API key, or otherwise using the service, you agree to these Terms and to the Privacy Policy and Risk Disclosure incorporated by reference. If you do not agree, do not use the service.",

      "terms.s2_h":"02 · What the service is",
      "terms.s2_b":"ChartControl AI is a software product for chart-based decision making. It streams AI-generated analysis, marks price levels on charts, offers indicator libraries and lets a user author custom signal rules. Any order the user chooses to place is transmitted to that user's own exchange account after their explicit approval. We are not a broker, exchange, custodian or investment adviser.",

      "terms.s3_h":"03 · Your account",
      "terms.s3_l1":"You must be legally allowed to trade the assets you connect and at least the age of majority in your jurisdiction.",
      "terms.s3_l2":"You are responsible for keeping your account credentials, API keys and 2FA device secure.",
      "terms.s3_l3":"You must not share your account, resell access, or use the service on behalf of a third party without a separate written agreement.",
      "terms.s3_l4":"We may suspend or terminate accounts that violate these Terms, that show signs of automated abuse, or that create material risk to other users or the platform.",

      "terms.s4_h":"04 · How the AI works — and what it isn't",
      "terms.s4_b":"The AI analyses charts and produces drafts, readings, and signals. Every marker carries the rule name and the timestamp of the condition that produced it — it is a <b>detection of a past condition, not a prediction of future price</b>. Signals include supporting and contradicting evidence and stated assumptions. AI output is a tool for your decision; it is not investment advice, and it is not guaranteed to be accurate, complete, or profitable. See the Risk Disclosure.",

      "terms.s5_h":"05 · No-custody & non-execution",
      "terms.s5_b":"We do not hold, custody, transfer or manage any user funds. Your API key permissions are limited to read + trade — we never request withdrawal. Every order requires your explicit approval; nothing is auto-executed by us. You bear sole responsibility for orders you approve and for the outcome of those orders.",

      "terms.s6_h":"06 · Fees, plans and points",
      "terms.s6_l1":"We offer a Free tier that stays free (currently ~1,000 points/month, subject to change).",
      "terms.s6_l2":"Paid plans (Basic, Pro, Premium, Elite) grant more points on a monthly cycle. One AI analysis consumes approximately 300 points on average.",
      "terms.s6_l3":"We do not charge platform trading fees. Exchange fees still apply and are set by the exchange, not by us.",
      "terms.s6_l4":"Prices and point allocations may change with reasonable notice; the version in force at the start of your billing period applies for that period.",

      "terms.s7_h":"07 · Acceptable use",
      "terms.s7_l1":"No reverse engineering, scraping the AI output at scale, or using the service to train a competing model.",
      "terms.s7_l2":"No automated abuse, credential stuffing, or attempts to circumvent rate limits or safety controls.",
      "terms.s7_l3":"No market manipulation, wash trading, or activity that violates the terms of your connected exchange.",
      "terms.s7_l4":"No use of the service to defraud, harass, or misrepresent ChartControl to third parties.",

      "terms.s8_h":"08 · Intellectual property",
      "terms.s8_b":"The ChartControl product, models, prompts, brand and code are our property or that of our licensors. You keep ownership of the custom indicators and signal rules you write. By using shared or published rule packs, you grant other users a non-exclusive licence to view them inside the product; commercial redistribution of rule packs outside the product requires our written consent.",

      "terms.s9_h":"09 · Warranties and liability",
      "terms.s9_b":"The service is provided \"as is.\" To the maximum extent permitted by applicable law, we disclaim implied warranties of merchantability, fitness for a particular purpose, and non-infringement. Our aggregate liability for any claim arising out of the service is limited to the amount you paid to ChartControl in the twelve months preceding the event that gave rise to the claim. We are not liable for indirect, incidental, special or consequential damages, including lost profits, lost data or trading losses.",

      "terms.s10_h":"10 · Changes to these Terms",
      "terms.s10_b":"We may update these Terms as the product evolves. Material changes are announced in-product and by email at least 14 days before they take effect. Continued use after the effective date constitutes acceptance of the updated Terms.",

      "terms.s11_h":"11 · Contact",
      "terms.s11_b":"Questions about these Terms: reach us at nuhye1031@gmail.com or on Telegram @Chartcontrolai.",

      /* =========== PRIVACY POLICY =========== */
      "privacy.h":"Privacy Policy",
      "privacy.sub":"What we collect, why we collect it, and what we do not do with it.",
      "privacy.tldr_t":"Short version",
      "privacy.tldr_b":"We collect the minimum data needed to run the account: your email, the API-key permissions you grant (read + trade only), the chart context you feed the AI, and the payment metadata your provider sends us. We do not sell your data. We do not train third-party models on your account state or positions. You can export or delete your data at any time.",

      "privacy.s1_h":"01 · What we collect",
      "privacy.s1_a_h":"Account data",
      "privacy.s1_a_b":"Email, hashed password, optional 2FA secret, country selection, language preference, marketing opt-in state.",
      "privacy.s1_b_h":"Exchange connection data",
      "privacy.s1_b_b":"The API key you provide (encrypted at rest) and the permissions attached to it — read + trade only. We never request withdrawal permission and refuse to store a key that carries one without explicit warning.",
      "privacy.s1_c_h":"Product usage",
      "privacy.s1_c_b":"Which symbols you view, which indicators you enable, which signal rules you author, and points consumed per session. Used to run the product, price the plan, and improve reliability.",
      "privacy.s1_d_h":"AI context (fenced, untrusted)",
      "privacy.s1_d_b":"Chart context and prompts you send the AI are passed to the model with strict fencing that treats them as untrusted data. We do not send your positions, balances or private trading history to the model unless you explicitly ask a question that requires them.",
      "privacy.s1_e_h":"Payment metadata",
      "privacy.s1_e_b":"When you subscribe, our payment provider returns non-card metadata (transaction id, plan, country, tax status). We do not receive or store your card number.",
      "privacy.s1_f_h":"Technical logs",
      "privacy.s1_f_b":"IP-adjacent metadata (region, ASN), device type, and error/audit traces used to keep the service secure and to answer support questions. Retained for a bounded period and then rotated out.",

      "privacy.s2_h":"02 · What we do not do",
      "privacy.s2_l1":"We do not sell personal data to third parties.",
      "privacy.s2_l2":"We do not train third-party models on your account state, positions or private prompts.",
      "privacy.s2_l3":"We do not read your emails, phone contacts or unrelated files.",
      "privacy.s2_l4":"We do not share partner-attribution data outside what a partner already sees in their own dashboard.",

      "privacy.s3_h":"03 · Legal basis and purpose",
      "privacy.s3_b":"We process data to run the account you asked for (contract), to keep the product and platform secure (legitimate interests), to comply with tax and payment obligations (legal obligation), and — only if you opt in — to send occasional product updates (consent, which you can withdraw anytime).",

      "privacy.s4_h":"04 · Sub-processors and where data goes",
      "privacy.s4_b":"We rely on a small set of infrastructure providers: model hosting for the AI, cloud hosting for the app, an email delivery service for transactional mail, and an identity/2FA provider. All are bound by data-processing agreements and each is enumerated on our security page. We do not transfer your data to advertising or analytics vendors of the mass-market kind.",

      "privacy.s5_h":"05 · Retention",
      "privacy.s5_b":"Account records are kept while your account is active and for a limited period after closure to complete accounting, refunds and audit. Technical logs are rotated on a shorter schedule. On account deletion we remove personal identifiers and keep only what a bookkeeping standard or the law requires us to keep.",

      "privacy.s6_h":"06 · Your rights",
      "privacy.s6_l1":"Access and export a copy of your data.",
      "privacy.s6_l2":"Correct data that is wrong.",
      "privacy.s6_l3":"Delete your account and personal identifiers.",
      "privacy.s6_l4":"Withdraw marketing consent at any time from account settings.",
      "privacy.s6_l5":"Ask a human what happens if an automated decision affected you.",
      "privacy.s6_note":"Requests: send us email to nuhye1031@gmail.com. We verify identity and respond within 30 days.",

      "privacy.s7_h":"07 · Security",
      "privacy.s7_b":"Passwords are hashed. API keys are encrypted at rest and only decrypted in-memory to place orders you approved. Access to production systems is limited to named engineers with 2FA. See the Security page for the current controls list.",

      "privacy.s8_h":"08 · Changes to this policy",
      "privacy.s8_b":"Material changes are announced in-product and by email at least 14 days before they take effect. The effective date at the top of this page is the version currently in force.",

      "privacy.s9_h":"09 · Contact",
      "privacy.s9_b":"Privacy questions: nuhye1031@gmail.com. We treat privacy requests with the same seriousness as security incidents.",

      /* =========== RISK DISCLOSURE =========== */
      "risk.h":"Risk Disclosure",
      "risk.sub":"What can go wrong. Read this before you place a single order.",
      "risk.tldr_t":"Short version",
      "risk.tldr_b":"Trading is risky. AI analysis is not a prediction. Past performance does not repeat. You can lose all of your invested capital and, on leveraged products, more than you deposited. ChartControl AI helps you decide; the decision — and the loss — is yours.",

      "risk.s1_h":"01 · Trading risk",
      "risk.s1_b":"Cryptocurrency and derivatives markets are highly volatile. Prices can move sharply against your position in minutes. On leveraged products (perpetuals, futures, margin) you can lose more than the amount you deposited. Only trade with money you can afford to lose entirely.",

      "risk.s2_h":"02 · The AI is analysis, not prediction",
      "risk.s2_b":"The AI reads charts and marks conditions the moment they occur — for example, a momentum shift, an indicator crossover, or a level break. Every marker names the rule that fired it and the timestamp of the candle. That is a <b>detection of a past state</b>. It is not a forecast of the next tick. The AI can be wrong. Prices can and do move against detections that looked strong.",

      "risk.s3_h":"03 · No guarantees, no win rate",
      "risk.s3_b":"We do not publish or promise a win rate. We do not guarantee that any signal will be profitable. Historical patterns often stop working. If anyone — including a partner or promoter — tells you ChartControl guarantees returns, that statement is not from us and is not correct.",

      "risk.s4_h":"04 · AI limitations",
      "risk.s4_l1":"Model output depends on the market data delivered at that moment. When data is stale, delayed or inconsistent, the model may still produce a plausible-looking answer. We add checks (stale-data rejection, timestamp on every marker), but no check catches everything.",
      "risk.s4_l2":"The AI can miss context outside the chart — news, on-chain events, exchange halts, macro conditions. Do not treat a chart read as a full market view.",
      "risk.s4_l3":"Custom rules you author are as good as their logic. A rule that fires on noise will fire more often, not more usefully.",
      "risk.s4_l4":"Beginner and Pro explanation modes present the same underlying analysis at different depths. Neither mode makes the analysis more or less correct.",

      "risk.s5_h":"05 · Exchange and infrastructure risk",
      "risk.s5_b":"Your account, funds and orders live on the exchange, not on us. Exchange outages, delisting, geographic blocks, wallet freezes and other operational events affect your trades directly. In addition, internet connectivity, browser issues, or ChartControl outages can prevent an order from being drafted or an approval from reaching the exchange. Do not run a strategy that relies on ChartControl being reachable at every second.",

      "risk.s6_h":"06 · Regulatory & geographic risk",
      "risk.s6_b":"Cryptocurrency and derivatives regulation varies by country and changes. You are responsible for confirming that the trading you intend to do is legal where you live and permitted by your chosen exchange. Some products (e.g. futures on certain assets) are not available in every region. We do not provide legal advice on your local rules.",

      "risk.s7_h":"07 · Cybersecurity risk",
      "risk.s7_b":"Phishing, credential stuffing, SIM-swap attacks and malware targeting traders are common. Use a hardware or authenticator-app 2FA, treat any \"support agent\" who DMs you first as suspicious, and never share your API key or recovery codes with anyone — including anyone claiming to be us.",

      "risk.s8_h":"08 · What we ask from you",
      "risk.s8_l1":"Only trade money you can afford to lose entirely.",
      "risk.s8_l2":"Approve each order deliberately — the draft is a proposal, not a decision.",
      "risk.s8_l3":"Set your own risk limits and stops. Do not rely on any single indicator or signal.",
      "risk.s8_l4":"Verify API-key permissions in your exchange settings on day one and periodically thereafter.",

      "risk.s9_h":"09 · Nothing here is advice",
      "risk.s9_b":"This document is a summary of common risks. It is not exhaustive, and it is not personalised advice. If you need personalised guidance on whether to trade, consult a qualified adviser licensed in your jurisdiction.",

      /* =========== REFUND POLICY =========== */
      "refund.h":"Refund Policy",
      "refund.sub":"When we refund, how fast, and what stays yours.",
      "refund.tldr_t":"Short version",
      "refund.tldr_b":"<b>14-day cooling-off</b> on your first paid month, for any reason, refunded pro-rata for unused points. <b>Free tier stays free</b>, forever. <b>Wrong charges we caused</b> get fixed in full, no question. Points are not withdrawable to cash.",

      "refund.s1_h":"01 · Free tier",
      "refund.s1_b":"The Free tier does not require payment and is not part of this policy. You can use it indefinitely; there is nothing to refund because there is nothing to charge.",

      "refund.s2_h":"02 · 14-day cooling-off (first paid subscription)",
      "refund.s2_b":"When you upgrade to a paid tier (Basic, Pro, Premium, Elite) for the first time, you have 14 days from the charge to request a refund. The refund is calculated as:",
      "refund.s2_formula":"Refund = Amount paid × (points remaining ÷ points granted this cycle)",
      "refund.s2_b2":"So if you paid for a plan that included 30,000 points and used 3,000 (10%) before requesting a refund on day 10, we refund 90% of the amount paid. If you used 0 points, we refund 100%. If you used all points, there is nothing to refund even inside the 14-day window.",

      "refund.s3_h":"03 · Ongoing subscriptions (after month one)",
      "refund.s3_b":"From month two onward we do not automatically pro-rate refunds — the monthly cycle is the unit of billing. You can cancel at any time from account settings; cancellation stops the next charge, and your current cycle continues to end with any remaining points usable through the last day.",

      "refund.s4_h":"04 · Wrong charges we caused",
      "refund.s4_l1":"Duplicate charge: refunded in full, always.",
      "refund.s4_l2":"Charge after cancellation: refunded in full and the account is credited.",
      "refund.s4_l3":"Charge on a plan you did not authorise: refunded in full and the account is investigated.",
      "refund.s4_l4":"Loss of service (extended outage on our side): pro-rata credit on your next cycle.",

      "refund.s5_h":"05 · Points are not cash",
      "refund.s5_b":"Points fund AI analyses inside the product. They are not withdrawable, not transferable between accounts, and have no cash value outside a refund calculation. Any promotional or welcome points expire per the terms of the promotion.",

      "refund.s6_h":"06 · How to request a refund",
      "refund.s6_l1":"Send an email to nuhye1031@gmail.com from the address on the account, with the subject <b>Refund request</b> and the reason in one line.",
      "refund.s6_l2":"We verify identity and process eligible refunds within 5 business days.",
      "refund.s6_l3":"Refunds return to the original payment method. Cross-border card refunds can take 5–10 additional days depending on your bank.",

      "refund.s7_h":"07 · What is not refundable",
      "refund.s7_l1":"Points already used to run AI analyses (they are the product, not a deposit).",
      "refund.s7_l2":"Custom-rule save fees that already produced a saved rule you can keep.",
      "refund.s7_l3":"Any exchange fees paid to your exchange — those come from your exchange balance and are not paid to us. Contact your exchange for their fee refund policy.",

      "refund.s8_h":"08 · Chargebacks",
      "refund.s8_b":"If you have a concern, contact us first — most issues are resolved within one business day. Filing a chargeback without contacting us may temporarily suspend the account while the dispute is under review. We do not add penalty fees on top of a chargeback.",

      "refund.s9_h":"09 · Changes to this policy",
      "refund.s9_b":"We may update this policy with reasonable notice. Refund requests are always processed under the policy version that was in force on the day of the charge.",

      // Foot
      "foot.desc":"ChartControl AI is an AI product for chart-based decision making. It is not an exchange, broker, custodian or investment adviser.",
      "foot.copy":"© 2026 ChartControl AI"
    }
  };

  function pack(meta, over){ return Object.assign({}, D.en, meta, over); }

  /* ---------------- 한국어 (완역) ---------------- */
  D.ko = pack({_name:"한국어",_dir:"ltr"}, {
    "stripe.a":"AI 차트 인텔리전스",
    "stripe.b":"법적 고지 및 정책 · 시행일 2026-09-23 · v1.0",
    "stripe.c":"KuCoin 라이브 · Bitget · Bybit 곧 추가",
    "brand.ver":"법적 문서 · v1.0",
    "nav.back_home":"제품으로 돌아가기",
    "sidenav.title":"정책",
    "sidenav.business":"사업 정보",
    "sidenav.terms":"이용약관",
    "sidenav.privacy":"개인정보 처리방침",
    "sidenav.risk":"위험 고지",
    "sidenav.refund":"환불 정책",
    "sidenav.effective":"시행일 2026-09-23 · v1.0",
    "sidenav.contact_h":"정책에 대한 질문이 있으신가요?",
    "sidenav.contact_email":"nuhye1031@gmail.com",
    "sidenav.contact_tg":"텔레그램 @Chartcontrolai",
    "meta.effective":"시행일","meta.version":"버전","meta.updated":"최종 수정일",

    "biz.h":"사업 정보",
    "biz.sub":"ChartControl을 운영하는 주체와 연락 방법.",
    "biz.tldr_t":"요약",
    "biz.tldr_b":"<b>ChartControl AI</b>는 글로벌 SaaS 서비스로 운영되는 AI 차트 분석 제품입니다. 우리는 소프트웨어 회사 — 거래소, 브로커, 수탁기관, 투자 자문업자가 아닙니다. 자금을 보관하지 않으며 모든 주문은 당신 자신의 거래소 계정에서 실행됩니다.",
    "biz.s1_h":"01 · 회사",
    "biz.s1_b":"<b>ChartControl AI</b>는 차트 기반 의사결정을 위한 AI 도구에 집중하는 소규모 엔지니어 팀이 만드는 소프트웨어 제품입니다. 제품은 글로벌 SaaS 형태로 제공됩니다. 이 페이지는 저희의 정체성과 제품 변경사항의 원천 자료이며, 그 외 문의는 아래 주소로 연락 주세요.",
    "biz.s2_h":"02 · 우리가 하는 일",
    "biz.s2_b":"AI 네이티브 트레이딩 터미널을 만듭니다. 제품은 차트를 읽고, 규칙 이름과 트리거 타임스탬프가 붙은 레벨을 화면에 표시하며, 근거를 평범한 언어로 스트리밍합니다. 모든 주문의 최종 권한은 사용자에게 있습니다. 사용자를 대신해 거래하지 않고, 고객 자금을 보관하지 않으며, 어떤 거래소 계정에서도 출금 권한을 요청하지 않습니다.",
    "biz.s3_h":"03 · 우리가 하지 않는 일",
    "biz.s3_l1":"우리는 암호화폐 거래소나 브로커가 아닙니다.",
    "biz.s3_l2":"사용자 자금을 수탁·보관·이체·운용하지 않습니다.",
    "biz.s3_l3":"우리는 인가받은 투자 자문업자가 아니며 개인 맞춤형 투자 조언을 제공하지 않습니다.",
    "biz.s3_l4":"수익, 승률, AI 생성 분석의 정확성을 보장하지 않습니다.",
    "biz.s3_l5":"증권의 매수·매도를 제안·권유·중개하지 않습니다.",
    "biz.s4_h":"04 · 연락",
    "biz.s4_desk":"제품 및 파트너십","biz.s4_desk_v":"nuhye1031@gmail.com",
    "biz.s4_tg":"텔레그램 (가장 빠름)","biz.s4_tg_v":"@Chartcontrolai",
    "biz.s4_hours":"업무 시간","biz.s4_hours_v":"비동기, 전 세계 · 영업일 1일 이내 회신",
    "biz.s5_h":"05 · 제품 및 서비스 접점",
    "biz.s5_web":"제품 웹 앱","biz.s5_web_v":"chartcontrol.onrender.com",
    "biz.s5_landing":"마케팅 사이트","biz.s5_landing_v":"chartcontrol.onrender.com (랜딩)",
    "biz.s5_partners":"파트너 프로그램","biz.s5_partners_v":"chartcontrol.onrender.com/partners",
    "biz.s6_h":"06 · 준거 기준",
    "biz.s6_b":"이 정책들은 글로벌 SaaS 표준에 따라 작성되었습니다. 특정 국가의 규제 체계에 맞춰 작성된 것이 아니며, 현지 법이 소비자로서 포기할 수 없는 추가 권리를 부여하는 경우 그 권리는 여기 명시된 것에 더해 적용됩니다. 이 문서의 어떤 내용도 관할 지역에서 계약으로 제한할 수 없는 권리를 제한하려는 의도가 아닙니다.",

    "terms.h":"이용약관",
    "terms.sub":"제품을 사용할 때 당신과 ChartControl 사이의 계약.",
    "terms.tldr_t":"요약",
    "terms.tldr_b":"ChartControl AI를 이용해 차트를 분석하고 주문을 준비할 수 있습니다. 모든 주문과 모든 거래소 계정의 완전한 통제권은 당신에게 있습니다. ChartControl은 자금을 보관하지 않고, 대신 거래하지 않으며, 결과를 보장하지 않습니다. AI가 틀렸다면 승인한 거래에 대한 책임은 여전히 당신에게 있습니다.",
    "terms.s1_h":"01 · 동의",
    "terms.s1_b":"ChartControl 계정을 생성하거나, 거래소 API 키를 연결하거나, 그 외의 방식으로 서비스를 이용함으로써 당신은 이 약관 및 참조로 편입된 개인정보 처리방침과 위험 고지에 동의합니다. 동의하지 않는다면 서비스를 이용하지 마세요.",
    "terms.s2_h":"02 · 서비스가 무엇인가",
    "terms.s2_b":"ChartControl AI는 차트 기반 의사결정을 위한 소프트웨어 제품입니다. AI 생성 분석을 스트리밍하고, 차트 위에 가격 레벨을 표시하며, 인디케이터 라이브러리와 사용자 정의 시그널 규칙 작성을 제공합니다. 사용자가 실행하기로 선택한 모든 주문은 사용자의 명시적 승인 후 사용자 자신의 거래소 계정으로 전송됩니다. 우리는 브로커, 거래소, 수탁기관, 투자 자문업자가 아닙니다.",
    "terms.s3_h":"03 · 당신의 계정",
    "terms.s3_l1":"연결하는 자산의 거래가 법적으로 허용되어야 하며, 관할 지역의 성년 연령 이상이어야 합니다.",
    "terms.s3_l2":"계정 자격증명, API 키, 2FA 기기를 안전하게 유지할 책임이 있습니다.",
    "terms.s3_l3":"별도의 서면 계약 없이 계정을 공유하거나, 접근권을 재판매하거나, 제3자를 대신해 서비스를 이용해서는 안 됩니다.",
    "terms.s3_l4":"약관 위반, 자동화 남용 징후, 다른 사용자나 플랫폼에 실질적 위험을 초래하는 계정은 정지 또는 해지될 수 있습니다.",
    "terms.s4_h":"04 · AI 작동 방식 — 그리고 아닌 것",
    "terms.s4_b":"AI는 차트를 분석하고 드래프트, 리딩, 시그널을 생성합니다. 모든 마커에는 트리거된 규칙 이름과 조건이 발생한 캔들의 타임스탬프가 붙습니다 — 이는 <b>과거 조건의 감지이지 미래 가격의 예측이 아닙니다</b>. 시그널에는 지지 근거와 반대 근거, 명시된 가정이 포함됩니다. AI 출력은 당신의 의사결정을 위한 도구입니다. 투자 조언이 아니며, 정확성·완전성·수익성이 보장되지 않습니다. 위험 고지를 참조하세요.",
    "terms.s5_h":"05 · 비수탁 및 비실행",
    "terms.s5_b":"우리는 어떤 사용자 자금도 수탁·보관·이체·운용하지 않습니다. API 키 권한은 읽기 + 거래로 제한되며 출금은 절대 요청하지 않습니다. 모든 주문은 명시적 승인이 필요합니다. 우리가 자동 실행하는 것은 없습니다. 당신이 승인한 주문과 그 결과에 대한 단독 책임은 당신에게 있습니다.",
    "terms.s6_h":"06 · 요금, 플랜, 포인트",
    "terms.s6_l1":"영구 무료 Free 티어를 제공합니다 (현재 월 약 1,000 포인트, 변경 가능).",
    "terms.s6_l2":"유료 플랜(Basic, Pro, Premium, Elite)은 월 사이클로 더 많은 포인트를 부여합니다. AI 분석 1회는 평균 약 300 포인트를 소모합니다.",
    "terms.s6_l3":"플랫폼 거래 수수료는 부과하지 않습니다. 거래소 수수료는 여전히 적용되며 거래소가 설정하고 우리가 아닌 거래소에 지급됩니다.",
    "terms.s6_l4":"가격 및 포인트 할당은 합리적 예고를 거쳐 변경될 수 있습니다. 결제 기간 시작 시점의 버전이 해당 기간에 적용됩니다.",
    "terms.s7_h":"07 · 허용되는 사용",
    "terms.s7_l1":"리버스 엔지니어링, AI 출력의 대량 스크레이핑, 경쟁 모델 학습을 위한 서비스 이용 금지.",
    "terms.s7_l2":"자동화 남용, 크리덴셜 스터핑, 속도 제한 또는 안전 통제 우회 시도 금지.",
    "terms.s7_l3":"시장 조작, 워시 트레이딩, 연결된 거래소 약관에 위배되는 활동 금지.",
    "terms.s7_l4":"사기, 괴롭힘, ChartControl을 제3자에게 허위 표시하는 목적의 서비스 이용 금지.",
    "terms.s8_h":"08 · 지식재산권",
    "terms.s8_b":"ChartControl 제품, 모델, 프롬프트, 브랜드, 코드는 우리 또는 우리 라이선서의 자산입니다. 당신이 작성한 커스텀 인디케이터와 시그널 규칙의 소유권은 당신이 유지합니다. 공유되거나 게시된 규칙 팩을 사용함으로써 다른 사용자에게 제품 내에서 보기 위한 비독점 라이선스를 부여합니다. 규칙 팩의 제품 외 상업적 재배포는 당사의 서면 동의가 필요합니다.",
    "terms.s9_h":"09 · 보증과 책임",
    "terms.s9_b":"서비스는 \"있는 그대로\" 제공됩니다. 관련 법이 허용하는 최대 범위에서 우리는 상품성, 특정 목적 적합성, 비침해에 대한 묵시적 보증을 배제합니다. 서비스로부터 발생하는 청구에 대한 우리의 총 책임은 청구 원인이 된 사건 발생 직전 12개월 동안 당신이 ChartControl에 지급한 금액으로 제한됩니다. 우리는 간접적, 부수적, 특별한, 결과적 손해 — 일실 이익, 데이터 손실, 거래 손실 포함 — 에 대해 책임지지 않습니다.",
    "terms.s10_h":"10 · 약관 변경",
    "terms.s10_b":"제품이 발전함에 따라 이 약관을 업데이트할 수 있습니다. 중대한 변경은 시행일 최소 14일 전에 제품 내 및 이메일로 공지됩니다. 시행일 이후 계속 사용하는 것은 업데이트된 약관에 대한 동의를 구성합니다.",
    "terms.s11_h":"11 · 연락",
    "terms.s11_b":"이 약관에 대한 질문은 nuhye1031@gmail.com 또는 텔레그램 @Chartcontrolai로 연락 주세요.",

    "privacy.h":"개인정보 처리방침",
    "privacy.sub":"우리가 수집하는 것, 수집하는 이유, 그리고 하지 않는 것.",
    "privacy.tldr_t":"요약",
    "privacy.tldr_b":"계정 운영에 필요한 최소한의 데이터만 수집합니다. 이메일, 부여한 API 키 권한(읽기 + 거래만), AI에 전달한 차트 컨텍스트, 결제 제공자로부터 받은 결제 메타데이터. 우리는 데이터를 판매하지 않습니다. 계정 상태나 포지션으로 제3자 모델을 학습시키지 않습니다. 데이터는 언제든 내보내거나 삭제할 수 있습니다.",
    "privacy.s1_h":"01 · 수집하는 것",
    "privacy.s1_a_h":"계정 데이터",
    "privacy.s1_a_b":"이메일, 해시된 비밀번호, 선택적 2FA 비밀키, 국가 선택, 언어 선호, 마케팅 수신 동의 상태.",
    "privacy.s1_b_h":"거래소 연결 데이터",
    "privacy.s1_b_b":"제공한 API 키(저장 시 암호화)와 그에 붙은 권한 — 읽기 + 거래만. 출금 권한을 요청하지 않으며, 명시적 경고 없이 출금 권한이 있는 키를 저장하지 않습니다.",
    "privacy.s1_c_h":"제품 사용",
    "privacy.s1_c_b":"보는 심볼, 활성화한 인디케이터, 작성한 시그널 규칙, 세션당 소모 포인트. 제품 운영, 플랜 가격 책정, 안정성 개선에 사용합니다.",
    "privacy.s1_d_h":"AI 컨텍스트 (펜스 처리, 신뢰 안 함)",
    "privacy.s1_d_b":"AI에 보내는 차트 컨텍스트와 프롬프트는 신뢰할 수 없는 데이터로 취급하는 엄격한 펜싱과 함께 모델에 전달됩니다. 명시적으로 필요한 질문을 하지 않는 한 포지션, 잔고, 개인 거래 이력을 모델에 보내지 않습니다.",
    "privacy.s1_e_h":"결제 메타데이터",
    "privacy.s1_e_b":"구독 시 결제 제공자가 카드 외 메타데이터(거래 ID, 플랜, 국가, 세금 상태)를 반환합니다. 카드 번호는 수신하거나 저장하지 않습니다.",
    "privacy.s1_f_h":"기술 로그",
    "privacy.s1_f_b":"IP 인접 메타데이터(지역, ASN), 기기 유형, 서비스 보안 유지 및 지원 응답에 사용되는 오류/감사 추적. 제한된 기간 보관 후 순환됩니다.",
    "privacy.s2_h":"02 · 하지 않는 것",
    "privacy.s2_l1":"개인 데이터를 제3자에 판매하지 않습니다.",
    "privacy.s2_l2":"계정 상태, 포지션, 비공개 프롬프트로 제3자 모델을 학습시키지 않습니다.",
    "privacy.s2_l3":"이메일, 전화 연락처, 관련 없는 파일을 읽지 않습니다.",
    "privacy.s2_l4":"파트너가 자신의 대시보드에서 이미 보는 것 이상의 파트너 어트리뷰션 데이터를 공유하지 않습니다.",
    "privacy.s3_h":"03 · 법적 근거와 목적",
    "privacy.s3_b":"당신이 요청한 계정 운영(계약), 제품 및 플랫폼 보안 유지(정당한 이익), 세금 및 결제 의무 준수(법적 의무), 그리고 — 옵트인한 경우에만 — 가끔 제품 업데이트 전송(동의, 언제든 철회 가능)을 위해 데이터를 처리합니다.",
    "privacy.s4_h":"04 · 서브프로세서 및 데이터 전송 대상",
    "privacy.s4_b":"소수의 인프라 제공자에 의존합니다. AI를 위한 모델 호스팅, 앱을 위한 클라우드 호스팅, 트랜잭션 메일을 위한 이메일 발송 서비스, 신원/2FA 제공자. 모두 데이터 처리 계약에 구속되며 각각 우리 보안 페이지에 열거되어 있습니다. 대중 시장형 광고나 분석 벤더에는 데이터를 전송하지 않습니다.",
    "privacy.s5_h":"05 · 보관 기간",
    "privacy.s5_b":"계정 기록은 계정이 활성인 동안, 그리고 회계, 환불, 감사 완료를 위해 폐쇄 후 제한된 기간 동안 보관됩니다. 기술 로그는 더 짧은 스케줄로 순환됩니다. 계정 삭제 시 개인 식별자를 제거하고 회계 표준이나 법률이 보관을 요구하는 것만 유지합니다.",
    "privacy.s6_h":"06 · 당신의 권리",
    "privacy.s6_l1":"데이터 사본에 접근하고 내보내기.",
    "privacy.s6_l2":"잘못된 데이터 수정.",
    "privacy.s6_l3":"계정 및 개인 식별자 삭제.",
    "privacy.s6_l4":"계정 설정에서 언제든 마케팅 동의 철회.",
    "privacy.s6_l5":"자동화된 결정이 당신에게 영향을 미친 경우 어떤 일이 있었는지 사람에게 문의.",
    "privacy.s6_note":"요청: nuhye1031@gmail.com로 이메일을 보내주세요. 신원 확인 후 30일 이내에 응답합니다.",
    "privacy.s7_h":"07 · 보안",
    "privacy.s7_b":"비밀번호는 해시됩니다. API 키는 저장 시 암호화되며 승인한 주문을 실행하기 위해서만 메모리에서 복호화됩니다. 프로덕션 시스템 접근은 2FA를 가진 명명된 엔지니어로 제한됩니다. 현재 통제 목록은 보안 페이지를 참조하세요.",
    "privacy.s8_h":"08 · 방침 변경",
    "privacy.s8_b":"중대한 변경은 시행일 최소 14일 전에 제품 내 및 이메일로 공지됩니다. 이 페이지 상단의 시행일은 현재 유효한 버전입니다.",
    "privacy.s9_h":"09 · 연락",
    "privacy.s9_b":"프라이버시 질문: nuhye1031@gmail.com. 프라이버시 요청은 보안 사고와 동일한 진지함으로 처리합니다.",

    "risk.h":"위험 고지",
    "risk.sub":"무엇이 잘못될 수 있는가. 주문 한 건이라도 넣기 전에 읽어주세요.",
    "risk.tldr_t":"요약",
    "risk.tldr_b":"거래는 위험합니다. AI 분석은 예측이 아닙니다. 과거 성과는 반복되지 않습니다. 투자 원금 전부를 잃을 수 있고, 레버리지 상품에서는 예치한 금액 이상을 잃을 수 있습니다. ChartControl AI는 결정을 돕지만, 결정 — 그리고 손실 — 은 당신의 것입니다.",
    "risk.s1_h":"01 · 거래 위험",
    "risk.s1_b":"암호화폐와 파생상품 시장은 매우 변동성이 큽니다. 가격은 몇 분 만에 포지션에 불리하게 급변할 수 있습니다. 레버리지 상품(무기한, 선물, 마진)에서는 예치한 금액보다 더 많이 잃을 수 있습니다. 전액을 잃어도 감당할 수 있는 자금으로만 거래하세요.",
    "risk.s2_h":"02 · AI는 분석이지 예측이 아닙니다",
    "risk.s2_b":"AI는 차트를 읽고 조건이 발생하는 순간 표시합니다 — 예를 들어 모멘텀 전환, 인디케이터 교차, 레벨 돌파. 모든 마커는 트리거된 규칙 이름과 캔들의 타임스탬프를 명명합니다. 그것은 <b>과거 상태의 감지</b>입니다. 다음 틱의 예측이 아닙니다. AI는 틀릴 수 있습니다. 강해 보였던 감지에 반해 가격이 움직일 수 있고 실제로 그렇게 됩니다.",
    "risk.s3_h":"03 · 보장 없음, 승률 없음",
    "risk.s3_b":"우리는 승률을 게시하거나 약속하지 않습니다. 어떤 시그널도 수익성을 보장하지 않습니다. 역사적 패턴은 종종 작동을 멈춥니다. 파트너나 프로모터를 포함한 누군가가 ChartControl이 수익을 보장한다고 말한다면, 그것은 우리에게서 나온 것이 아니고 옳지 않습니다.",
    "risk.s4_h":"04 · AI의 한계",
    "risk.s4_l1":"모델 출력은 그 순간에 전달된 시장 데이터에 의존합니다. 데이터가 오래되거나 지연되거나 불일치할 때, 모델은 여전히 그럴듯해 보이는 답변을 생성할 수 있습니다. 우리는 검사를 추가하지만(stale-data 거부, 모든 마커에 타임스탬프), 어떤 검사도 모든 것을 잡지 못합니다.",
    "risk.s4_l2":"AI는 차트 외부의 컨텍스트를 놓칠 수 있습니다 — 뉴스, 온체인 이벤트, 거래소 정지, 매크로 조건. 차트 리딩을 완전한 시장 관점으로 취급하지 마세요.",
    "risk.s4_l3":"당신이 작성한 커스텀 규칙은 그 로직만큼만 좋습니다. 노이즈에 반응하는 규칙은 더 자주 트리거되지만 더 유용하지는 않습니다.",
    "risk.s4_l4":"초보자와 프로 설명 모드는 동일한 기저 분석을 다른 깊이로 제시합니다. 어느 모드도 분석을 더 정확하거나 덜 정확하게 만들지 않습니다.",
    "risk.s5_h":"05 · 거래소 및 인프라 위험",
    "risk.s5_b":"당신의 계정, 자금, 주문은 거래소에 있고, 우리에게 있지 않습니다. 거래소 장애, 상장폐지, 지역 차단, 지갑 동결 및 기타 운영 이벤트는 거래에 직접적으로 영향을 미칩니다. 또한 인터넷 연결, 브라우저 문제, ChartControl 장애로 주문이 드래프트되지 못하거나 승인이 거래소에 도달하지 못할 수 있습니다. ChartControl이 매초 도달 가능하다는 것에 의존하는 전략을 운영하지 마세요.",
    "risk.s6_h":"06 · 규제 및 지역 위험",
    "risk.s6_b":"암호화폐 및 파생상품 규제는 국가별로 다르고 변경됩니다. 당신이 하려는 거래가 거주지에서 합법이고 선택한 거래소에서 허용되는지 확인할 책임은 당신에게 있습니다. 일부 상품(예: 특정 자산의 선물)은 모든 지역에서 이용할 수 없습니다. 우리는 현지 규칙에 대한 법률 조언을 제공하지 않습니다.",
    "risk.s7_h":"07 · 사이버 보안 위험",
    "risk.s7_b":"트레이더를 노리는 피싱, 크리덴셜 스터핑, SIM 스왑 공격, 멀웨어가 흔합니다. 하드웨어 또는 인증 앱 2FA를 사용하고, 먼저 DM을 보내는 \"지원 담당자\"는 의심스럽게 취급하며, API 키나 복구 코드를 누구와도 — 우리라고 주장하는 누구와도 — 공유하지 마세요.",
    "risk.s8_h":"08 · 우리가 당신에게 요청하는 것",
    "risk.s8_l1":"전액을 잃어도 감당할 수 있는 자금으로만 거래하세요.",
    "risk.s8_l2":"각 주문을 신중하게 승인하세요 — 드래프트는 제안이지 결정이 아닙니다.",
    "risk.s8_l3":"자신의 위험 한도와 스탑을 설정하세요. 단일 인디케이터나 시그널에 의존하지 마세요.",
    "risk.s8_l4":"거래소 설정에서 첫날 및 이후 정기적으로 API 키 권한을 확인하세요.",
    "risk.s9_h":"09 · 이 문서는 조언이 아닙니다",
    "risk.s9_b":"이 문서는 일반적인 위험의 요약입니다. 포괄적이지 않으며 개인 맞춤형 조언이 아닙니다. 거래 여부에 대한 개인 맞춤형 가이드가 필요하다면 관할 지역에서 자격을 갖춘 자문가에게 문의하세요.",

    "refund.h":"환불 정책",
    "refund.sub":"언제 환불하는가, 얼마나 빠른가, 무엇이 당신 것으로 남는가.",
    "refund.tldr_t":"요약",
    "refund.tldr_b":"<b>14일 냉각 기간</b>: 첫 유료 월에 한해, 어떤 이유든, 미사용 포인트에 대해 안분 환불. <b>Free 티어는 영구 무료</b>로 유지. <b>우리가 야기한 잘못된 청구</b>는 이의 없이 전액 정정. 포인트는 현금으로 인출할 수 없습니다.",
    "refund.s1_h":"01 · Free 티어",
    "refund.s1_b":"Free 티어는 결제가 필요하지 않고 이 정책의 대상이 아닙니다. 무기한 사용 가능합니다. 청구가 없으므로 환불할 것도 없습니다.",
    "refund.s2_h":"02 · 14일 냉각 기간 (첫 유료 구독)",
    "refund.s2_b":"유료 티어(Basic, Pro, Premium, Elite)로 처음 업그레이드할 때, 결제일로부터 14일 이내에 환불을 요청할 수 있습니다. 환불액은 다음과 같이 계산됩니다:",
    "refund.s2_formula":"환불액 = 결제 금액 × (남은 포인트 ÷ 이번 사이클 부여 포인트)",
    "refund.s2_b2":"즉, 30,000 포인트를 포함한 플랜에 결제했고 10일 차에 3,000 포인트(10%)를 사용한 후 환불을 요청하면, 결제 금액의 90%를 환불합니다. 0 포인트를 사용했다면 100% 환불. 모든 포인트를 사용했다면 14일 창 내에서도 환불할 것이 없습니다.",
    "refund.s3_h":"03 · 진행 중인 구독 (2개월차 이후)",
    "refund.s3_b":"2개월차부터는 자동 안분 환불을 하지 않습니다 — 월 사이클이 청구 단위입니다. 계정 설정에서 언제든 취소할 수 있습니다. 취소는 다음 청구를 멈추고, 현재 사이클은 마지막 날까지 남은 포인트를 사용할 수 있는 상태로 종료됩니다.",
    "refund.s4_h":"04 · 우리가 야기한 잘못된 청구",
    "refund.s4_l1":"중복 청구: 항상 전액 환불.",
    "refund.s4_l2":"취소 후 청구: 전액 환불 및 계정 크레딧.",
    "refund.s4_l3":"승인하지 않은 플랜의 청구: 전액 환불 및 계정 조사.",
    "refund.s4_l4":"서비스 손실 (우리 측 장기 장애): 다음 사이클에 안분 크레딧.",
    "refund.s5_h":"05 · 포인트는 현금이 아닙니다",
    "refund.s5_b":"포인트는 제품 내에서 AI 분석에 사용됩니다. 인출할 수 없고, 계정 간 이전할 수 없으며, 환불 계산 외에 현금 가치가 없습니다. 프로모션이나 웰컴 포인트는 프로모션 조건에 따라 만료됩니다.",
    "refund.s6_h":"06 · 환불 요청 방법",
    "refund.s6_l1":"계정의 주소에서 nuhye1031@gmail.com로 이메일을 보내주세요. 제목은 <b>Refund request</b>, 사유는 한 줄로 적어주세요.",
    "refund.s6_l2":"신원 확인 후 5영업일 이내에 자격이 있는 환불을 처리합니다.",
    "refund.s6_l3":"환불은 원래 결제 수단으로 반환됩니다. 국경 간 카드 환불은 은행에 따라 추가로 5–10일 걸릴 수 있습니다.",
    "refund.s7_h":"07 · 환불되지 않는 것",
    "refund.s7_l1":"이미 AI 분석에 사용된 포인트 (예치금이 아닌 제품 자체).",
    "refund.s7_l2":"이미 저장된 규칙을 만든 커스텀 규칙 저장 수수료.",
    "refund.s7_l3":"거래소에 지급한 모든 거래소 수수료 — 이는 당신의 거래소 잔고에서 나가며 우리에게 지급되지 않습니다. 수수료 환불은 거래소에 문의하세요.",
    "refund.s8_h":"08 · 차지백",
    "refund.s8_b":"우려사항이 있다면 먼저 연락 주세요 — 대부분의 문제는 영업일 1일 이내에 해결됩니다. 연락 없이 차지백을 접수하면 분쟁 검토 중 계정이 일시 정지될 수 있습니다. 우리는 차지백에 위약금을 추가하지 않습니다.",
    "refund.s9_h":"09 · 정책 변경",
    "refund.s9_b":"이 정책은 합리적 예고를 거쳐 업데이트될 수 있습니다. 환불 요청은 결제일에 유효했던 정책 버전에 따라 처리됩니다.",

    "foot.desc":"ChartControl AI는 차트 기반 의사결정을 위한 AI 제품입니다. 거래소, 브로커, 수탁기관, 투자 자문업자가 아닙니다.",
    "foot.copy":"© 2026 ChartControl AI"
  });

  /* ---------------- 기타 10개 언어 (헤더/네비/요약만 번역) ---------------- */
  D.ja = pack({_name:"日本語",_dir:"ltr"}, {
    "stripe.b":"法的通知とポリシー · 施行日 2026-09-23 · v1.0","brand.ver":"法的文書 · v1.0",
    "nav.back_home":"プロダクトに戻る","sidenav.title":"ポリシー",
    "sidenav.business":"事業情報","sidenav.terms":"利用規約","sidenav.privacy":"プライバシー","sidenav.risk":"リスク開示","sidenav.refund":"返金ポリシー",
    "sidenav.effective":"施行日 2026-09-23 · v1.0","sidenav.contact_h":"ポリシーに関するご質問は?",
    "biz.h":"事業情報","terms.h":"利用規約","privacy.h":"プライバシー・ポリシー","risk.h":"リスク開示","refund.h":"返金ポリシー"
  });
  D.zh = pack({_name:"中文",_dir:"ltr"}, {
    "stripe.b":"法律与政策 · 生效 2026-09-23 · v1.0","brand.ver":"法律文件 · v1.0",
    "nav.back_home":"返回产品","sidenav.title":"政策",
    "sidenav.business":"公司信息","sidenav.terms":"服务条款","sidenav.privacy":"隐私政策","sidenav.risk":"风险披露","sidenav.refund":"退款政策",
    "sidenav.effective":"生效 2026-09-23 · v1.0","sidenav.contact_h":"关于政策的问题?",
    "biz.h":"公司信息","terms.h":"服务条款","privacy.h":"隐私政策","risk.h":"风险披露","refund.h":"退款政策"
  });
  D.tr = pack({_name:"Türkçe",_dir:"ltr"}, {
    "stripe.b":"Yasal ve politikalar · Yürürlük 2026-09-23 · v1.0","brand.ver":"Yasal · v1.0",
    "nav.back_home":"Ürüne dön","sidenav.title":"Politikalar",
    "sidenav.business":"Şirket bilgileri","sidenav.terms":"Kullanım Şartları","sidenav.privacy":"Gizlilik Politikası","sidenav.risk":"Risk Açıklaması","sidenav.refund":"İade Politikası",
    "sidenav.effective":"Yürürlük 2026-09-23 · v1.0","sidenav.contact_h":"Politikalar hakkında sorunuz mu var?",
    "biz.h":"Şirket bilgileri","terms.h":"Kullanım Şartları","privacy.h":"Gizlilik Politikası","risk.h":"Risk Açıklaması","refund.h":"İade Politikası"
  });
  D.vi = pack({_name:"Tiếng Việt",_dir:"ltr"}, {
    "stripe.b":"Pháp lý và chính sách · Hiệu lực 2026-09-23 · v1.0","brand.ver":"Pháp lý · v1.0",
    "nav.back_home":"Quay lại sản phẩm","sidenav.title":"Chính sách",
    "sidenav.business":"Thông tin công ty","sidenav.terms":"Điều khoản dịch vụ","sidenav.privacy":"Chính sách bảo mật","sidenav.risk":"Công bố rủi ro","sidenav.refund":"Chính sách hoàn tiền",
    "sidenav.effective":"Hiệu lực 2026-09-23 · v1.0","sidenav.contact_h":"Có câu hỏi về chính sách?",
    "biz.h":"Thông tin công ty","terms.h":"Điều khoản dịch vụ","privacy.h":"Chính sách bảo mật","risk.h":"Công bố rủi ro","refund.h":"Chính sách hoàn tiền"
  });
  D.es = pack({_name:"Español",_dir:"ltr"}, {
    "stripe.b":"Legal y políticas · Vigente 2026-09-23 · v1.0","brand.ver":"Legal · v1.0",
    "nav.back_home":"Volver al producto","sidenav.title":"Políticas",
    "sidenav.business":"Información de la empresa","sidenav.terms":"Términos del servicio","sidenav.privacy":"Política de privacidad","sidenav.risk":"Divulgación de riesgos","sidenav.refund":"Política de reembolso",
    "sidenav.effective":"Vigente 2026-09-23 · v1.0","sidenav.contact_h":"¿Preguntas sobre las políticas?",
    "biz.h":"Información de la empresa","terms.h":"Términos del servicio","privacy.h":"Política de privacidad","risk.h":"Divulgación de riesgos","refund.h":"Política de reembolso"
  });
  D.pt = pack({_name:"Português",_dir:"ltr"}, {
    "stripe.b":"Legal e políticas · Vigência 2026-09-23 · v1.0","brand.ver":"Legal · v1.0",
    "nav.back_home":"Voltar ao produto","sidenav.title":"Políticas",
    "sidenav.business":"Informação da empresa","sidenav.terms":"Termos de serviço","sidenav.privacy":"Política de privacidade","sidenav.risk":"Divulgação de risco","sidenav.refund":"Política de reembolso",
    "sidenav.effective":"Vigência 2026-09-23 · v1.0","sidenav.contact_h":"Perguntas sobre as políticas?",
    "biz.h":"Informação da empresa","terms.h":"Termos de serviço","privacy.h":"Política de privacidade","risk.h":"Divulgação de risco","refund.h":"Política de reembolso"
  });
  D.ru = pack({_name:"Русский",_dir:"ltr"}, {
    "stripe.b":"Юридическое и политики · Действует с 2026-09-23 · v1.0","brand.ver":"Юридическое · v1.0",
    "nav.back_home":"Назад к продукту","sidenav.title":"Политики",
    "sidenav.business":"Информация о компании","sidenav.terms":"Условия обслуживания","sidenav.privacy":"Политика конфиденциальности","sidenav.risk":"Раскрытие рисков","sidenav.refund":"Политика возврата",
    "sidenav.effective":"Действует с 2026-09-23 · v1.0","sidenav.contact_h":"Вопросы по политикам?",
    "biz.h":"Информация о компании","terms.h":"Условия обслуживания","privacy.h":"Политика конфиденциальности","risk.h":"Раскрытие рисков","refund.h":"Политика возврата"
  });
  D.de = pack({_name:"Deutsch",_dir:"ltr"}, {
    "stripe.b":"Rechtliches & Richtlinien · Gültig ab 2026-09-23 · v1.0","brand.ver":"Rechtliches · v1.0",
    "nav.back_home":"Zurück zum Produkt","sidenav.title":"Richtlinien",
    "sidenav.business":"Unternehmensinformationen","sidenav.terms":"Nutzungsbedingungen","sidenav.privacy":"Datenschutzrichtlinie","sidenav.risk":"Risikohinweis","sidenav.refund":"Rückerstattungsrichtlinie",
    "sidenav.effective":"Gültig ab 2026-09-23 · v1.0","sidenav.contact_h":"Fragen zu den Richtlinien?",
    "biz.h":"Unternehmensinformationen","terms.h":"Nutzungsbedingungen","privacy.h":"Datenschutzrichtlinie","risk.h":"Risikohinweis","refund.h":"Rückerstattungsrichtlinie"
  });
  D.fr = pack({_name:"Français",_dir:"ltr"}, {
    "stripe.b":"Mentions légales et politiques · En vigueur 2026-09-23 · v1.0","brand.ver":"Légal · v1.0",
    "nav.back_home":"Retour au produit","sidenav.title":"Politiques",
    "sidenav.business":"Informations sur l'entreprise","sidenav.terms":"Conditions de service","sidenav.privacy":"Politique de confidentialité","sidenav.risk":"Divulgation des risques","sidenav.refund":"Politique de remboursement",
    "sidenav.effective":"En vigueur 2026-09-23 · v1.0","sidenav.contact_h":"Questions sur les politiques ?",
    "biz.h":"Informations sur l'entreprise","terms.h":"Conditions de service","privacy.h":"Politique de confidentialité","risk.h":"Divulgation des risques","refund.h":"Politique de remboursement"
  });
  D.ar = pack({_name:"العربية",_dir:"rtl"}, {
    "stripe.b":"القانوني والسياسات · نافذ 2026-09-23 · v1.0","brand.ver":"قانوني · v1.0",
    "nav.back_home":"العودة إلى المنتج","sidenav.title":"السياسات",
    "sidenav.business":"معلومات الشركة","sidenav.terms":"شروط الخدمة","sidenav.privacy":"سياسة الخصوصية","sidenav.risk":"إفصاح المخاطر","sidenav.refund":"سياسة الاسترداد",
    "sidenav.effective":"نافذ 2026-09-23 · v1.0","sidenav.contact_h":"أسئلة حول السياسات؟",
    "biz.h":"معلومات الشركة","terms.h":"شروط الخدمة","privacy.h":"سياسة الخصوصية","risk.h":"إفصاح المخاطر","refund.h":"سياسة الاسترداد"
  });

  window.CC_LEGAL_I18N = D;
})();
