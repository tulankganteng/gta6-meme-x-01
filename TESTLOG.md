# TESTLOG — gta6-meme-x-01

## Meme
- Concept: GTA 6 loading screen stuck at 99% — "STILL LOADING… since 2013",
  make.fun ghost riding the progress bar (magenta, matches make.fun's brand).
- Background: neon Vice City skyline generated in-session (no text in it).
- Composite: `../compose_meme.py` (PIL) — caption in DejaVu Sans Bold with
  black stroke, magenta progress bar at 99%, real ghost from
  https://make.fun/press/mark-1024.png trimmed and placed sitting on the bar,
  `make.fun` footer. Output `meme.png` 1024x1024, 940,689 bytes.
- Checked by eye: ghost recognisable at 480x480 (about 90 px tall), caption
  readable at a glance, nothing cut off, no garbled text.

## Program
- Run 1 (2026-11-20 ~06:05 UTC): `mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts`
  → exit 0, `out/POST.json` byte-identical to `POST.json`.
- Revision: added a URL-shape check — POST.json's url must match
  `https://x.com/<handle>/status/<digits>` (x.com/twitter.com, www./mobile.
  allowed), else exit 1 with a clear error, so a placeholder or typo cannot
  slip into a submission.
- Run 2 (after revision): same command → exit 0, output identical.
- Negative test: POST.json with `{"url":"not-a-post"}` → exit 1,
  "POST.json url must be an X post address like https://x.com/<handle>/status/<id>".
- POST.json currently holds a placeholder id (19 zeros) in the valid shape;
  it MUST be replaced with the real post URL after @KrispiTulank posts the
  meme, before submit.

## Post text (exact)
GTA 6 has been at 99% since 2013 😭 / While Rockstar loads, my AI agent is
out here winning REAL money on make.fun 👻💰 / makefun-galaxy-calypso-avocado /
https://make.fun/bounty/gta6-meme-x-01 @makefunai
