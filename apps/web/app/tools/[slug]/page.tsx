import { redirect, RedirectType } from 'next/navigation';
import { tools } from '@/config/tools';

/**
 * Smart dynamic route handler that matches ANY URL variation to the correct tool.
 *
 * Instead of maintaining hundreds of manual redirects, this uses:
 * 1. Word normalization — "decode" matches "decoder", "verify" matches "verifier"
 * 2. Synonym expansion — "bearer" → "jwt", "guid" → "uuid", "epoch" → "timestamp"
 * 3. Weighted scoring — slug matches > title matches > description matches
 *
 * Examples that auto-resolve:
 *   /tools/jwt-token-decode      → /tools/jwt-decoder
 *   /tools/decode-bearer-token   → /tools/jwt-decoder
 *   /tools/json-prettify         → /tools/json-formatter
 *   /tools/guid-generator        → /tools/uuid-generator
 *   /tools/compress-photo        → /tools/image-compressor
 *   /tools/epoch-converter       → /tools/timestamp-converter
 */

// Normalize verb/noun endings so "decode" matches "decoder", "verify" matches "verifier"
function normalizeWord(word: string): string {
  let w = word.toLowerCase();
  // verify → verifi, beautify → beautifi (so verifi* matches verifier)
  if (w.length > 3 && w.endsWith('y')) {
    w = w.slice(0, -1) + 'i';
  }
  return w;
}

// Two words match if one is a prefix of the other after normalization
// "decode" ↔ "decoder", "format" ↔ "formatter", "verify" ↔ "verifier"
function wordsMatch(a: string, b: string): boolean {
  if (a === b) return true;
  const na = normalizeWord(a);
  const nb = normalizeWord(b);
  if (na === nb) return true;
  const [shorter, longer] = na.length <= nb.length ? [na, nb] : [nb, na];
  return shorter.length >= 3 && longer.startsWith(shorter);
}

// Synonyms: map common alternate terms to words that appear in tool slugs/titles
const SYNONYMS: Record<string, string[]> = {
  // Token/auth terms → jwt
  bearer: ['jwt', 'token'],
  auth: ['jwt', 'token'],
  oauth: ['jwt', 'token'],
  oauth2: ['jwt', 'token'],
  oidc: ['jwt', 'token'],
  authorization: ['jwt', 'token'],

  // Naming alternatives
  guid: ['uuid'],
  uid: ['uuid'],
  epoch: ['timestamp', 'unix'],
  unix: ['timestamp'],
  prettify: ['format'],
  beautify: ['format'],
  minify: ['format'],
  lint: ['format', 'validate'],
  photo: ['image'],
  pic: ['image'],
  picture: ['image'],
  img: ['image'],
  md: ['markdown'],
  lipsum: ['lorem'],
  dummy: ['lorem'],
  placeholder: ['lorem'],
  hex: ['color'],
  rgb: ['color'],
  hsl: ['color'],
  cmyk: ['color'],
  passwd: ['password'],
  passphrase: ['password'],
  b64: ['base64'],
  qrcode: ['qr'],
  compare: ['diff'],
  comparison: ['diff'],
  spin: ['wheel'],
  spinner: ['wheel'],
  rng: ['random', 'number'],
  calc: ['calculator'],
  bmi: ['bmi'],
  tz: ['timezone'],
  ts: ['timestamp'],
  uri: ['url'],
  percent: ['percentage'],
  delusional: ['delulu'],

  // Action alternatives
  create: ['generate'],
  make: ['generate'],
  build: ['generate'],
  produce: ['generate'],
  shrink: ['compress'],
  reduce: ['compress'],
  resize: ['compress'],
  optimize: ['compress'],
  parse: ['decode'],
  read: ['decode'],
  inspect: ['decode'],
  view: ['decode'],
  debug: ['decode'],
  check: ['verify'],
  validate: ['verify'],
  test: ['verify'],
  transform: ['convert'],
  change: ['convert'],
  swap: ['convert'],
  flip: ['reverse'],
  shuffle: ['randomize', 'list'],
  scramble: ['randomize'],
  pick: ['random'],
  choose: ['random'],
  select: ['random'],
};

function splitWords(text: string): string[] {
  return text.toLowerCase().split(/[-_\s]+/).filter((w) => w.length > 0);
}

// Expand input words with synonym lookups
function expandWithSynonyms(words: string[]): string[] {
  const expanded = new Set(words);
  for (const word of words) {
    const syns = SYNONYMS[word];
    if (syns) {
      for (const s of syns) expanded.add(s);
    }
  }
  return Array.from(expanded);
}

interface DynamicToolPageProps {
  params: Promise<{ slug: string }>;
}

export default async function DynamicToolPage({ params }: DynamicToolPageProps) {
  const resolvedParams = await params;
  const rawSlug = resolvedParams.slug || '';
  const cleanSlug = rawSlug.toLowerCase().trim();

  // 1. Direct slug match — fastest path
  const directMatch = tools.find((t) => t.slug.toLowerCase() === cleanSlug);
  if (directMatch) {
    redirect(`/tools/${directMatch.slug}`, RedirectType.replace);
  }

  // 2. Smart word-level scoring
  const inputWords = expandWithSynonyms(splitWords(cleanSlug));

  const scored = tools
    .map((t) => {
      const slugWords = splitWords(t.slug);
      const titleWords = splitWords(t.title);
      const descWords = splitWords(t.description);

      let score = 0;
      let matchedCount = 0;

      for (const inputWord of inputWords) {
        if (inputWord.length < 2) continue;

        let matched = false;

        // Slug word match (strongest signal)
        if (slugWords.some((sw) => wordsMatch(inputWord, sw))) {
          score += 10;
          matched = true;
        }
        // Title word match
        else if (titleWords.some((tw) => wordsMatch(inputWord, tw))) {
          score += 6;
          matched = true;
        }
        // Description word match
        else if (descWords.some((dw) => wordsMatch(inputWord, dw))) {
          score += 2;
          matched = true;
        }

        if (matched) matchedCount++;
      }

      if (matchedCount === 0) return { tool: t, score: 0 };

      // Boost score by coverage — matching more input words is better
      const coverage = matchedCount / inputWords.length;
      score *= 0.5 + coverage * 0.5;

      return { tool: t, score };
    })
    .filter((m) => m.score > 0)
    .sort((a, b) => b.score - a.score);

  if (scored.length > 0 && scored[0] && scored[0].score >= 5) {
    redirect(`/tools/${scored[0].tool.slug}`, RedirectType.replace);
  }

  // 3. Fallback — redirect to homepage with search query
  const searchTerms = cleanSlug.replace(/-/g, ' ');
  redirect(`/?q=${encodeURIComponent(searchTerms)}`, RedirectType.replace);
}
