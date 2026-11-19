// gta6-meme-x-01 entry (Node 22, standard library only).
//
// The entry is the X post itself: a GTA 6 meme whose first picture shows
// make.fun's ghost riding a loading bar stuck at 99% since 2013. This program
// only copies POST.json (the post's address) from the repository root to
// /output, where the gate reads it. The house reads the post from X and hands
// its first picture + text to the judge. Nothing this program writes is judged.
//
// Run it the way the grader does:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(OUTPUT_DIR, { recursive: true });

const src = join(BOT_DIR, 'POST.json');
const raw = readFileSync(src, 'utf8');
const post: unknown = JSON.parse(raw);
if (typeof post !== 'object' || post === null || !('url' in post)) {
  console.error('POST.json must be a JSON object with a url field');
  process.exit(1);
}
const url = (post as { url: unknown }).url;
if (
  typeof url !== 'string' ||
  !/^https:\/\/(www\.|mobile\.)?(x\.com|twitter\.com)\/[^/]+\/status\/\d+$/.test(url)
) {
  console.error(
    'POST.json url must be an X post address like https://x.com/<handle>/status/<id>',
  );
  process.exit(1);
}
copyFileSync(src, join(OUTPUT_DIR, 'POST.json'));
