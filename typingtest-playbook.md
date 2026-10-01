# TYPINGTEST.COM — COPY PLAYBOOK

Researched live Sept 30, 2026. Every fact cited to the page where it was observed.
The site reportedly sold for $2,525,000 with about 3M monthly visitors.

## (a) SITE ANATOMY — every page and feature

URL patterns (site runs on Apache/Ubuntu; footer: "© 2026 Typing Test LLC - part of Sporcle"):

1. **Homepage** `/` — "Free Typing Test - Check Your WPM | TypingTest.com". H1 "Test Your Typing Speed in 60 Seconds". Core element: "CUSTOMIZE YOUR TEST" form (GET to `/test.php`): duration picker (30 Seconds / 1 / 2 / 3 / 5 / 10 Minutes), text picker (Easy, Medium, Hard, Benchmark (2 min), Certificate, Tricky Spelling, Blind Typing, Story Typing..., Themed..., Professional..., Custom...), with sub-pickers: Themed (Pop Culture, Sport, Nature, Technology, Traveling, Mixed), Story (Aesop's fables, Rules of Baseball, Space cowboys, Tigers in the Wild, The Wonderful Wizard of Oz, Zebra - Africa's striped horse, The Enchanted Typewriter), Professional (Legal, Medical, Business, Coding). "Standard Timed Typing Tests" quick-start cards. FAQ block (8 questions) with FAQPage JSON-LD schema. Cross-promo tiles ("Take The Next Step", "What's New!") linking to trainer, Sporcle games, custom tests, free account.
2. **Timed test pages** `/test/thirty-second-typing-test`, `/test/one-minute-typing-test`, `/test/two-minute-typing-test`, `/test/three-minute-typing-test`, `/test/five-minute-typing-test`, `/test/ten-minute-typing-test` — each titled "{N} (Second/Minute) Typing Test - Check Your WPM | TypingTest.com". Interactive widget: countdown timer (e.g., 1:00), MODE tabs (Normal/Pro/Phone), scrolling passage with current-word highlight, per-line typed rows, live score strip. Results submit to `/result.php`.
3. **Practice** `/practice.php` ("Typing Practice") — untimed free practice text + standard timed test cards.
4. **Benchmark** `/benchmark.php` ("Benchmark Your Typing Speed") — standardized 2-minute test comparing you to all-takers averages (observed: 34 WPM, 94% accuracy, 3 typos, 30 WPM net).
5. **Certify** `/certificate.php` ("Typing Certification") — 5-minute certification test, printable "Typing Skills Certificate". Page states: 5-stroke standard word counting, results "calculated based on international industrial standards".
6. **Typing Trainer** `/trainer/` ("Typing Trainer Online - 100% Free Online Typing Web Tutor!") — Touch Typing (14 lessons, e.g. "Lesson 1 Introduction and Initial Test, 7 activities, 19 minutes"), Speed Building (7), Number Row (2), Symbols (4), 10-key Number Pad (3). Lessons load via `applet.php?course_url=course_descriptions/<file>.xml&lesson_id=...` — i.e., lesson content is defined in XML files rendered by an app. SEO content sections: Step-by-Step Approach, On-Screen Keyboard, Motoric Warm-up, Word and Text Drills, Smart Review, Skills Test.
7. **Tricky Keys** `/analyze.php` ("Practice Typing Your Tricky Keys") — 3-minute analysis ("START ANALYSIS"), per-key accuracy + press-count grid, "Show all 15", "Clear data" (browser-stored).
8. **Bigram Blitz** `/bigram-blitz/` ("Bigram Blitz - A Shortcut to Faster Typing") — 25 bigram cells (TH, HE, IN, RE, ER, AN, OU, ON, IS, TO, OR, HA, AT, NG, ED, VE, EN, ES, ST, AR, HI, IT, TE, AS, LL); four practice modes: Analyze, Accuracy, Tempo, Generalize (each with START).
9. **Custom tests** `/custom-tests.php` ("Custom Typing Tests | TypingTest.com") — community-created tests with search, sort (Most Played/Newest), char counts, play counts (observed: "The quick brown fox..." 282,994 plays; Taylor Swift "Red" lyrics 64,237 plays), created dates (March 2026 — brand-new feature), Play/Open/Share/Report-as-offensive. `/custom-tests.php?mine=1` = your own tests (requires account).
10. **Blog** `/blog.php` ("TypingTest.com Features and Updates") — 12 posts, paginated ("Next ⇢"). Categories: FEATURES, ANNOUNCEMENTS, MOBILE, EMPLOYMENT TYPING TEST, INTERVIEW TYPING TEST, PRE EMPLOYMENT SCREENING, AI. Notable posts: "Typing Test Assessment - Assessing Typing Skills Online", "Typing Test for Job Interview", "The Role of Employment Typing Tests in Recruitment" (all Dec 15 2023), mobile typing feature (Nov 2023), dark mode (2021), certificates (2021).
11. **About** `/about.php` ("About") — "one of the oldest and most trusted online typing test platforms", "over 150 million tests completed", part of Sporcle family.
12. **Feedback** `/feedback.php` ("Feedback") — simple contact form (Email Address, Subject, Message, Submit Feedback).
13. **Account** `/account.php` ("Account") — Log In / Sign Up / Reset Password tabs, email+password, "Remember me (60 days)".
14. **Terms & Privacy** `/privacy.php`; **Math Test** is external: `https://www.sporcle.com/math-test/`.
15. **Games** — all external on Sporcle: `sporcle.com/games/subcategory/typing/alltime`, Typing Challenge, Type 1-100, Typing Speed Challenge.
16. **Sitemap** `/sitemap.xml` (public) — 14 URLs: homepage, 6 test pages, practice.php, benchmark.php, blog.php, trainer/, bigram-blitz/, privacy.php, certificate.php. Notably EXCLUDED: analyze.php, custom-tests.php, about.php, feedback.php, account.php. **Robots.txt** allows indexing, references sitemap, and disallows AI-training bots (GPTBot, ClaudeBot, CCBot, Bytespider, Amazonbot, Applebot-Extended, Diffbot, FacebookBot, Meta-ExternalAgent, etc.).

## (b) TRAFFIC ENGINE — how it gets millions of visits/month

- **Exact-match keyword domain + template SEO.** Every test-duration page gets its own URL and keyword title ("1 Minute Typing Test - Check Your WPM | TypingTest.com", "30 Second Typing Test - Check Your WPM..."). Homepage meta description: "Take a free online typing test to check your WPM, typing speed, and accuracy. Get instant results and practice to improve." Meta keywords: "wpm testing, wpm speed". OG tags: "TypingTest.com - Test Your Typing Speed in 60 seconds" / "Welcome to the #1 Typing Speed Test! Check your true typing speed, accuracy and skill level in just 60 seconds." Canonical self-referencing. Targets: typing test, wpm test, typing speed test, N-minute typing test, 30 second typing test, typing practice, typing lessons, typing certificate, employment typing test, pre employment screening, interview typing test.
- **Featured-snippet engineering.** Homepage FAQ (8 Q&As: "What does WPM mean?", "What is a good WPM score?", etc.) wrapped in FAQPage JSON-LD; trainer page has long-form keyword content; blog posts target HR/recruitment keywords ("employment typing test", "pre employment screening", "interview typing test").
- **Domain age & trust.** About page leans on "oldest and most trusted", "150 million tests completed", Sporcle-family branding — classic aged-domain SEO moat.
- **Dense internal linking.** Global nav (Tests/Lessons/Games/Practice/Benchmark/Certify), footer links, cross-promo tiles on every page ("Take The Next Step", "What's New!"), test-duration quick cards on homepage/practice/benchmark/certificate.
- **Retention mechanics:** free account (typing history across devices, goal tracking, badges), practice streaks (observed `/api/streak/` returning streak_count, rendered as a day-streak flame), benchmark score comparison, printable certificates, lesson progression (14+ lessons), tricky-key/bigram analytics, Sporcle typing games, and brand-new UGC loop: custom tests users create, publish, share, and replay (one listing already at 282,994 plays).
- **Sporcle cross-traffic.** Games and Math Test live on Sporcle, feeding the sister property.

## (c) MONEY ENGINE — exactly how traffic becomes ad revenue

**Model: 100% programmatic display advertising. No premium tier, no affiliate links, no courses-for-sale observed anywhere.** The ad stack is heavy and professional:

- **Ad management: MediaTradrcraft** — `01.cdn.mediatradecraft.com/typingtest/main/main.js?template=home` (per-page ad templates), ad units `/23318705080/typingtest/*` via Google Ad Manager (`securepubads.g.doubleclick.net`).
- **Header-bidding partners:** Amazon Publisher Services (`c.amazon-adsystem.com`), Rubicon (`micro.rubiconproject.com`), Criteo (`static.criteo.net`), Casale Media, Index Exchange (`indexww.com`), Google AdSense (`pagead2.googlesyndication.com`).
- **Formats observed:** 970x250 top leaderboard; 300x250 boxes (left rail, right rail x2, in-content); 970x250 bottom leaderboard; sticky/docked bottom leaderboard; native display units with social-style Like/Share/Comment chrome (AdChoices-labeled); Teads in-feed native; outstream/VPAID video player with "Keep Watching" (sticky, closable); Bounce Exchange exit-intent overlay.
- **Placements per page:** homepage ~8 units; test pages 5 (left rail, right rail, in-content, bottom leaderboard, docked video); practice/benchmark/certificate 4-5; trainer 5; bigram-blitz/tricky-keys 5. **Zero ads on:** about, blog, feedback, account, sitemap/robots.
- **Consent:** Sourcepoint CMP (`cdn.privacy-mgmt.com`, accountId 1247) — GDPR/CCPA-ready, which is required to monetize EU traffic.
- **Audience notes:** IXL (education) ads served on the homepage — school/student audience.

## (d) BUILD LIST — clone feature by feature, ranked by importance

1. **Timed typing test widget (the core).** Timer countdown, per-character diffing with live highlighting, WPM/accuracy/net-speed/typo calc (5 chars = 1 word). SIMPLE — one competent dev can build it in days; it's plain client-side JS.
2. **Results page** with score summary, retry, share. SIMPLE.
3. **Test-text library** (easy/medium/hard + themed/professional/stories). SIMPLE technically; content licensing is the real work.
4. **Ad stack: GAM + header bidding (Prebid) + CMP.** MEDIUM. This is the entire business model — getting approved for premium demand is the hard part, not the code.
5. **SEO page-template system**: unique title/meta/H1 per duration page, FAQ + JSON-LD, sitemap.xml, keyword blog. SIMPLE, high ROI.
6. **Account system**: email/password, history across devices, goals, badges, streak API. MEDIUM (auth + DB + APIs).
7. **Practice / Benchmark (compare vs averages) / printable Certificate.** EASY-MEDIUM; benchmark just needs aggregate stats storage.
8. **Typing Trainer lessons (XML-defined course content).** MEDIUM-HARD: the player is simple, but authoring 30+ structured lessons with drills, warm-ups, skill tests is heavy content work.
9. **Tricky Keys (per-key analytics in browser storage).** SIMPLE.
10. **Bigram Blitz (bigram drill modes).** EASY-MEDIUM.
11. **Custom tests + community (UGC, search/sort, play counts, share, report).** MEDIUM; moderation is the operational cost — their listings already show copyright-risk content (song lyrics), so expect DMCA exposure.
12. **Blog/CMS.** SIMPLE.
13. **Certificate anti-cheat.** HARD — and note: they didn't solve it either; certificates are self-reported. Don't overspend here.
14. **Mobile typing support + dark mode + responsive nav.** MEDIUM; table stakes.

**Trust & scale signals observed:** 150M+ tests completed (about.php); part of Sporcle; education/school audience (IXL ads); blog content for employment screening (HR angle); **English-only** — no language switcher found; mobile handled via responsive layout (hamburger menu, mobile start-test link) plus a dedicated mobile typing feature (blog, Nov 2023). No testimonials section observed.
