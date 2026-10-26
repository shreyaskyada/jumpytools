import { HashAlgorithm, HashEncoding, HashOptions, HashResults } from './types';

// Helper: Convert string to UTF-8 bytes
export function stringToUtf8Bytes(str: string): Uint8Array {
  const g = typeof globalThis !== 'undefined' ? (globalThis as unknown as { TextEncoder?: new () => { encode: (s: string) => Uint8Array } }) : undefined;
  if (g && typeof g.TextEncoder === 'function') {
    return new g.TextEncoder().encode(str);
  }
  const bytes: number[] = [];
  for (let i = 0; i < str.length; i++) {
    const charCode = str.charCodeAt(i);
    if (charCode < 0x80) {
      bytes.push(charCode);
    } else if (charCode < 0x800) {
      bytes.push(0xc0 | (charCode >> 6), 0x80 | (charCode & 0x3f));
    } else if (charCode < 0xd800 || charCode >= 0xe000) {
      bytes.push(0xe0 | (charCode >> 12), 0x80 | ((charCode >> 6) & 0x3f), 0x80 | (charCode & 0x3f));
    } else {
      i++;
      const nextCharCode = str.charCodeAt(i);
      const codePoint = 0x10000 + (((charCode & 0x3ff) << 10) | (nextCharCode & 0x3ff));
      bytes.push(
        0xf0 | (codePoint >> 18),
        0x80 | ((codePoint >> 12) & 0x3f),
        0x80 | ((codePoint >> 6) & 0x3f),
        0x80 | (codePoint & 0x3f)
      );
    }
  }
  return new Uint8Array(bytes);
}

// Format Uint8Array to Hex string
export function bytesToHex(bytes: Uint8Array, uppercase = false): string {
  let hex = '';
  for (let i = 0; i < bytes.length; i++) {
    const b = bytes[i] ?? 0;
    hex += b.toString(16).padStart(2, '0');
  }
  return uppercase ? hex.toUpperCase() : hex.toLowerCase();
}

// Format Uint8Array to Base64 string
export function bytesToBase64(bytes: Uint8Array): string {
  const g = typeof globalThis !== 'undefined' ? (globalThis as unknown as { btoa?: (s: string) => string; Buffer?: { from: (b: Uint8Array) => { toString: (enc: string) => string } } }) : undefined;
  if (g && typeof g.btoa === 'function') {
    let binary = '';
    const len = bytes.byteLength;
    for (let i = 0; i < len; i++) {
      binary += String.fromCharCode(bytes[i] ?? 0);
    }
    return g.btoa(binary);
  }
  if (g && typeof g.Buffer !== 'undefined') {
    return g.Buffer.from(bytes).toString('base64');
  }
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
  let result = '';
  let i = 0;
  while (i < bytes.length) {
    const b1 = bytes[i++] ?? 0;
    const hasB2 = i < bytes.length;
    const b2 = hasB2 ? (bytes[i++] ?? 0) : 0;
    const hasB3 = i < bytes.length;
    const b3 = hasB3 ? (bytes[i++] ?? 0) : 0;

    const enc1 = b1 >> 2;
    const enc2 = ((b1 & 3) << 4) | (hasB2 ? b2 >> 4 : 0);
    const enc3 = hasB2 ? ((b2 & 15) << 2) | (hasB3 ? b3 >> 6 : 0) : 64;
    const enc4 = hasB3 ? b3 & 63 : 64;

    result +=
      (chars[enc1] ?? '') +
      (chars[enc2] ?? '') +
      (enc3 === 64 ? '=' : (chars[enc3] ?? '')) +
      (enc4 === 64 ? '=' : (chars[enc4] ?? ''));
  }
  return result;
}

// Format raw bytes according to options
export function formatDigest(bytes: Uint8Array, options: Pick<HashOptions, 'uppercase' | 'encoding'>): string {
  if (options.encoding === 'base64') {
    return bytesToBase64(bytes);
  }
  return bytesToHex(bytes, options.uppercase);
}

// ==========================================
// 1. MD5 Algorithm (RFC 1321)
// ==========================================
export function md5Bytes(data: Uint8Array): Uint8Array {
  function safeAdd(x: number, y: number): number {
    const lsw = (x & 0xffff) + (y & 0xffff);
    const msw = (x >> 16) + (y >> 16) + (lsw >> 16);
    return (msw << 16) | (lsw & 0xffff);
  }

  function bitRotateLeft(num: number, cnt: number): number {
    return (num << cnt) | (num >>> (32 - cnt));
  }

  function md5cmn(q: number, a: number, b: number, x: number, s: number, t: number): number {
    return safeAdd(bitRotateLeft(safeAdd(safeAdd(a, q), safeAdd(x, t)), s), b);
  }
  function md5ff(a: number, b: number, c: number, d: number, x: number, s: number, t: number): number {
    return md5cmn((b & c) | (~b & d), a, b, x, s, t);
  }
  function md5gg(a: number, b: number, c: number, d: number, x: number, s: number, t: number): number {
    return md5cmn((b & d) | (c & ~d), a, b, x, s, t);
  }
  function md5hh(a: number, b: number, c: number, d: number, x: number, s: number, t: number): number {
    return md5cmn(b ^ c ^ d, a, b, x, s, t);
  }
  function md5ii(a: number, b: number, c: number, d: number, x: number, s: number, t: number): number {
    return md5cmn(c ^ (b | ~d), a, b, x, s, t);
  }

  const n = data.length;
  const wordCount = ((n + 8) >> 6) + 1;
  const words = new Int32Array(wordCount * 16);
  for (let i = 0; i < n; i++) {
    const byteVal = data[i] ?? 0;
    const wordIdx = i >> 2;
    words[wordIdx] = (words[wordIdx] ?? 0) | (byteVal << ((i % 4) * 8));
  }
  const finalIdx = n >> 2;
  words[finalIdx] = (words[finalIdx] ?? 0) | (0x80 << ((n % 4) * 8));
  words[words.length - 2] = (n * 8) & 0xffffffff;
  words[words.length - 1] = Math.floor((n * 8) / 0x100000000);

  let a = 1732584193;
  let b = -271733879;
  let c = -1732584194;
  let d = 271733878;

  for (let i = 0; i < words.length; i += 16) {
    const olda = a;
    const oldb = b;
    const oldc = c;
    const oldd = d;

    const w0 = words[i + 0] ?? 0;
    const w1 = words[i + 1] ?? 0;
    const w2 = words[i + 2] ?? 0;
    const w3 = words[i + 3] ?? 0;
    const w4 = words[i + 4] ?? 0;
    const w5 = words[i + 5] ?? 0;
    const w6 = words[i + 6] ?? 0;
    const w7 = words[i + 7] ?? 0;
    const w8 = words[i + 8] ?? 0;
    const w9 = words[i + 9] ?? 0;
    const w10 = words[i + 10] ?? 0;
    const w11 = words[i + 11] ?? 0;
    const w12 = words[i + 12] ?? 0;
    const w13 = words[i + 13] ?? 0;
    const w14 = words[i + 14] ?? 0;
    const w15 = words[i + 15] ?? 0;

    a = md5ff(a, b, c, d, w0, 7, -680876936);
    d = md5ff(d, a, b, c, w1, 12, -389564586);
    c = md5ff(c, d, a, b, w2, 17, 606105819);
    b = md5ff(b, c, d, a, w3, 22, -1044525330);
    a = md5ff(a, b, c, d, w4, 7, -176418897);
    d = md5ff(d, a, b, c, w5, 12, 1200080426);
    c = md5ff(c, d, a, b, w6, 17, -1473231341);
    b = md5ff(b, c, d, a, w7, 22, -45705983);
    a = md5ff(a, b, c, d, w8, 7, 1770035416);
    d = md5ff(d, a, b, c, w9, 12, -1958414417);
    c = md5ff(c, d, a, b, w10, 17, -42063);
    b = md5ff(b, c, d, a, w11, 22, -1990404162);
    a = md5ff(a, b, c, d, w12, 7, 1804603682);
    d = md5ff(d, a, b, c, w13, 12, -40341101);
    c = md5ff(c, d, a, b, w14, 17, -1502002290);
    b = md5ff(b, c, d, a, w15, 22, 1236535329);

    a = md5gg(a, b, c, d, w1, 5, -165796510);
    d = md5gg(d, a, b, c, w6, 9, -1069501632);
    c = md5gg(c, d, a, b, w11, 14, 643717713);
    b = md5gg(b, c, d, a, w0, 20, -373897302);
    a = md5gg(a, b, c, d, w5, 5, -701558691);
    d = md5gg(d, a, b, c, w10, 9, 38016083);
    c = md5gg(c, d, a, b, w15, 14, -660478335);
    b = md5gg(b, c, d, a, w4, 20, -405537848);
    a = md5gg(a, b, c, d, w9, 5, 568446438);
    d = md5gg(d, a, b, c, w14, 9, -1019803690);
    c = md5gg(c, d, a, b, w3, 14, -187363961);
    b = md5gg(b, c, d, a, w8, 20, 1163531501);
    a = md5gg(a, b, c, d, w13, 5, -1444681467);
    d = md5gg(d, a, b, c, w2, 9, -51403784);
    c = md5gg(c, d, a, b, w7, 14, 1735328473);
    b = md5gg(b, c, d, a, w12, 20, -1926607734);

    a = md5hh(a, b, c, d, w5, 4, -378558);
    d = md5hh(d, a, b, c, w8, 11, -2022574463);
    c = md5hh(c, d, a, b, w11, 16, 1839030562);
    b = md5hh(b, c, d, a, w14, 23, -35309556);
    a = md5hh(a, b, c, d, w1, 4, -1530992060);
    d = md5hh(d, a, b, c, w4, 11, 1272893353);
    c = md5hh(c, d, a, b, w7, 16, -155497632);
    b = md5hh(b, c, d, a, w10, 23, -1094730640);
    a = md5hh(a, b, c, d, w13, 4, 681279174);
    d = md5hh(d, a, b, c, w0, 11, -358537222);
    c = md5hh(c, d, a, b, w3, 16, -722521979);
    b = md5hh(b, c, d, a, w6, 23, 76029189);
    a = md5hh(a, b, c, d, w9, 4, -640364487);
    d = md5hh(d, a, b, c, w12, 11, -421815835);
    c = md5hh(c, d, a, b, w15, 16, 530742520);
    b = md5hh(b, c, d, a, w2, 23, -995338651);

    a = md5ii(a, b, c, d, w0, 6, -198630844);
    d = md5ii(d, a, b, c, w7, 10, 1126891415);
    c = md5ii(c, d, a, b, w14, 15, -1416354905);
    b = md5ii(b, c, d, a, w5, 21, -57434055);
    a = md5ii(a, b, c, d, w12, 6, 1700485571);
    d = md5ii(d, a, b, c, w3, 10, -1894986606);
    c = md5ii(c, d, a, b, w10, 15, -1051523);
    b = md5ii(b, c, d, a, w1, 21, -2054922799);
    a = md5ii(a, b, c, d, w8, 6, 1873313359);
    d = md5ii(d, a, b, c, w15, 10, -30611744);
    c = md5ii(c, d, a, b, w6, 15, -1560198380);
    b = md5ii(b, c, d, a, w13, 21, 1309151649);
    a = md5ii(a, b, c, d, w4, 6, -145523070);
    d = md5ii(d, a, b, c, w11, 10, -1120210379);
    c = md5ii(c, d, a, b, w2, 15, 718787259);
    b = md5ii(b, c, d, a, w9, 21, -343485551);

    a = safeAdd(a, olda);
    b = safeAdd(b, oldb);
    c = safeAdd(c, oldc);
    d = safeAdd(d, oldd);
  }

  const result = new Uint8Array(16);
  const outWords = [a, b, c, d];
  for (let i = 0; i < 16; i++) {
    const wordVal = outWords[i >> 2] ?? 0;
    result[i] = (wordVal >> ((i % 4) * 8)) & 0xff;
  }
  return result;
}

// ==========================================
// 2. SHA-1 Algorithm (RFC 3174)
// ==========================================
export function sha1Bytes(data: Uint8Array): Uint8Array {
  const n = data.length;
  const wordCount = ((n + 8) >> 6) + 1;
  const words = new Int32Array(wordCount * 16);
  for (let i = 0; i < n; i++) {
    const byteVal = data[i] ?? 0;
    const wordIdx = i >> 2;
    words[wordIdx] = (words[wordIdx] ?? 0) | (byteVal << (24 - (i % 4) * 8));
  }
  const finalIdx = n >> 2;
  words[finalIdx] = (words[finalIdx] ?? 0) | (0x80 << (24 - (n % 4) * 8));
  words[words.length - 1] = n * 8;

  const w = new Int32Array(80);
  let h0 = 0x67452301;
  let h1 = 0xefcdab89;
  let h2 = 0x98badcfe;
  let h3 = 0x10325476;
  let h4 = 0xc3d2e1f0;

  for (let i = 0; i < words.length; i += 16) {
    for (let t = 0; t < 16; t++) {
      w[t] = words[i + t] ?? 0;
    }
    for (let t = 16; t < 80; t++) {
      const wt3 = w[t - 3] ?? 0;
      const wt8 = w[t - 8] ?? 0;
      const wt14 = w[t - 14] ?? 0;
      const wt16 = w[t - 16] ?? 0;
      const num = wt3 ^ wt8 ^ wt14 ^ wt16;
      w[t] = (num << 1) | (num >>> 31);
    }

    let a = h0;
    let b = h1;
    let c = h2;
    let d = h3;
    let e = h4;

    for (let t = 0; t < 80; t++) {
      let f = 0;
      let k = 0;
      if (t < 20) {
        f = (b & c) | (~b & d);
        k = 0x5a827999;
      } else if (t < 40) {
        f = b ^ c ^ d;
        k = 0x6ed9eba1;
      } else if (t < 60) {
        f = (b & c) | (b & d) | (c & d);
        k = 0x8f1bbcdc;
      } else {
        f = b ^ c ^ d;
        k = 0xca62c1d6;
      }
      const wt = w[t] ?? 0;
      const temp = (((a << 5) | (a >>> 27)) + f + e + k + wt) | 0;
      e = d;
      d = c;
      c = (b << 30) | (b >>> 2);
      b = a;
      a = temp;
    }

    h0 = (h0 + a) | 0;
    h1 = (h1 + b) | 0;
    h2 = (h2 + c) | 0;
    h3 = (h3 + d) | 0;
    h4 = (h4 + e) | 0;
  }

  const result = new Uint8Array(20);
  const outWords = [h0, h1, h2, h3, h4];
  for (let i = 0; i < 20; i++) {
    const wordVal = outWords[i >> 2] ?? 0;
    result[i] = (wordVal >>> (24 - (i % 4) * 8)) & 0xff;
  }
  return result;
}

// ==========================================
// 3. SHA-256 / SHA-224 (FIPS 180-4)
// ==========================================
const K256: readonly number[] = [
  0x428a2f98, 0x71374491, 0xb5c0fbcf, 0xe9b5dba5, 0x3956c25b, 0x59f111f1, 0x923f82a4, 0xab1c5ed5,
  0xd807aa98, 0x12835b01, 0x243185be, 0x550c7dc3, 0x72be5d74, 0x80deb1fe, 0x9bdc06a7, 0xc19bf174,
  0xe49b69c1, 0xefbe4786, 0x0fc19dc6, 0x240ca1cc, 0x2de92c6f, 0x4a7484aa, 0x5cb0a9dc, 0x76f988da,
  0x983e5152, 0xa831c66d, 0xb00327c8, 0xbf597fc7, 0xc6e00bf3, 0xd5a79147, 0x06ca6351, 0x14292967,
  0x27b70a85, 0x2e1b2138, 0x4d2c6dfc, 0x53380d13, 0x650a7354, 0x766a0abb, 0x81c2c92e, 0x92722c85,
  0xa2bfe8a1, 0xa81a664b, 0xc24b8b70, 0xc76c51a3, 0xd192e819, 0xd6990624, 0xf40e3585, 0x106aa070,
  0x19a4c116, 0x1e376c08, 0x2748774c, 0x34b0bcb5, 0x391c0cb3, 0x4ed8aa4a, 0x5b9cca4f, 0x682e6ff3,
  0x748f82ee, 0x78a5636f, 0x84c87814, 0x8cc70208, 0x90befffa, 0xa4506ceb, 0xbef9a3f7, 0xc67178f2,
];

function sha2Common(data: Uint8Array, is224 = false): Uint8Array {
  const n = data.length;
  const wordCount = ((n + 8) >> 6) + 1;
  const words = new Int32Array(wordCount * 16);
  for (let i = 0; i < n; i++) {
    const byteVal = data[i] ?? 0;
    const wordIdx = i >> 2;
    words[wordIdx] = (words[wordIdx] ?? 0) | (byteVal << (24 - (i % 4) * 8));
  }
  const finalIdx = n >> 2;
  words[finalIdx] = (words[finalIdx] ?? 0) | (0x80 << (24 - (n % 4) * 8));
  words[words.length - 1] = n * 8;

  let h0 = is224 ? 0xc1059ed8 : 0x6a09e667;
  let h1 = is224 ? 0x367cd507 : 0xbb67ae85;
  let h2 = is224 ? 0x3070dd17 : 0x3c6ef372;
  let h3 = is224 ? 0xf70e5939 : 0xa54ff53a;
  let h4 = is224 ? 0xffc00b31 : 0x510e527f;
  let h5 = is224 ? 0x68581511 : 0x9b05688c;
  let h6 = is224 ? 0x64f98fa7 : 0x1f83d9ab;
  let h7 = is224 ? 0xbefa4fa4 : 0x5be0cd19;

  const w = new Int32Array(64);

  for (let i = 0; i < words.length; i += 16) {
    for (let t = 0; t < 16; t++) {
      w[t] = words[i + t] ?? 0;
    }
    for (let t = 16; t < 64; t++) {
      const wt15 = w[t - 15] ?? 0;
      const wt2 = w[t - 2] ?? 0;
      const wt16 = w[t - 16] ?? 0;
      const wt7 = w[t - 7] ?? 0;

      const s0 =
        ((wt15 >>> 7) | (wt15 << 25)) ^
        ((wt15 >>> 18) | (wt15 << 14)) ^
        (wt15 >>> 3);
      const s1 =
        ((wt2 >>> 17) | (wt2 << 15)) ^
        ((wt2 >>> 19) | (wt2 << 13)) ^
        (wt2 >>> 10);
      w[t] = (wt16 + s0 + wt7 + s1) | 0;
    }

    let a = h0;
    let b = h1;
    let c = h2;
    let d = h3;
    let e = h4;
    let f = h5;
    let g = h6;
    let h = h7;

    for (let t = 0; t < 64; t++) {
      const s1 = ((e >>> 6) | (e << 26)) ^ ((e >>> 11) | (e << 21)) ^ ((e >>> 25) | (e << 7));
      const ch = (e & f) ^ (~e & g);
      const kt = K256[t] ?? 0;
      const wt = w[t] ?? 0;
      const temp1 = (h + s1 + ch + kt + wt) | 0;
      const s0 = ((a >>> 2) | (a << 30)) ^ ((a >>> 13) | (a << 19)) ^ ((a >>> 22) | (a << 10));
      const maj = (a & b) ^ (a & c) ^ (b & c);
      const temp2 = (s0 + maj) | 0;

      h = g;
      g = f;
      f = e;
      e = (d + temp1) | 0;
      d = c;
      c = b;
      b = a;
      a = (temp1 + temp2) | 0;
    }

    h0 = (h0 + a) | 0;
    h1 = (h1 + b) | 0;
    h2 = (h2 + c) | 0;
    h3 = (h3 + d) | 0;
    h4 = (h4 + e) | 0;
    h5 = (h5 + f) | 0;
    h6 = (h6 + g) | 0;
    h7 = (h7 + h) | 0;
  }

  const outWords = is224 ? [h0, h1, h2, h3, h4, h5, h6] : [h0, h1, h2, h3, h4, h5, h6, h7];
  const outBytes = new Uint8Array(is224 ? 28 : 32);
  for (let i = 0; i < outBytes.length; i++) {
    const wordVal = outWords[i >> 2] ?? 0;
    outBytes[i] = (wordVal >>> (24 - (i % 4) * 8)) & 0xff;
  }
  return outBytes;
}

export function sha256Bytes(data: Uint8Array): Uint8Array {
  return sha2Common(data, false);
}

export function sha224Bytes(data: Uint8Array): Uint8Array {
  return sha2Common(data, true);
}

// ==========================================
// 4. SHA-512 / SHA-384 (64-bit word operations)
// ==========================================
const K512: readonly bigint[] = [
  0x428a2f98d728ae22n, 0x7137449123ef65cdn, 0xb5c0fbcfec4d3b2fn, 0xe9b5dba58189dbbcn,
  0x3956c25bf348b538n, 0x59f111f1b605d019n, 0x923f82a4af194f9bn, 0xab1c5ed5da6d8118n,
  0xd807aa98a3030242n, 0x12835b0145706fben, 0x243185be4ee4b28cn, 0x550c7dc3d5ffb4e2n,
  0x72be5d74f27b896fn, 0x80deb1fe3b1696b1n, 0x9bdc06a725c71235n, 0xc19bf174cf692694n,
  0xe49b69c19ef14ad2n, 0xefbe4786384f25e3n, 0x0fc19dc68b8cd5b5n, 0x240ca1cc77ac9c65n,
  0x2de92c6f592b0275n, 0x4a7484aa6ea6e483n, 0x5cb0a9dcbd41fbd4n, 0x76f988da831153b5n,
  0x983e5152ee66dfabn, 0xa831c66d2db43210n, 0xb00327c898fb213fn, 0xbf597fc7beef0ee4n,
  0xc6e00bf33da88fc2n, 0xd5a79147930aa725n, 0x06ca6351e003826fn, 0x142929670a0e6e70n,
  0x27b70a8546d22ffcn, 0x2e1b21385c26c926n, 0x4d2c6dfc5ac42aedn, 0x53380d139d95b3dfn,
  0x650a73548baf63den, 0x766a0abb3c77b2a8n, 0x81c2c92e47edaee6n, 0x92722c851482353bn,
  0xa2bfe8a14cf10364n, 0xa81a664bbc423001n, 0xc24b8b70d0f89791n, 0xc76c51a30654be30n,
  0xd192e819d6ef5218n, 0xd69906245565a910n, 0xf40e35855771202an, 0x106aa07032bbd1b8n,
  0x19a4c116b8d2d0c8n, 0x1e376c085141ab53n, 0x2748774cdf8eeb99n, 0x34b0bcb5e19b48a8n,
  0x391c0cb3c5c95a63n, 0x4ed8aa4ae3418acbn, 0x5b9cca4f7763e373n, 0x682e6ff3d6b2b8a3n,
  0x748f82ee5defb2fcn, 0x78a5636f43172f60n, 0x84c87814a1f0ab72n, 0x8cc702081a6439ecn,
  0x90befffa23631e28n, 0xa4506cebde82bde9n, 0xbef9a3f7b2c67915n, 0xc67178f2e372532bn,
  0xca273eceea26619cn, 0xd186b8c721c0c207n, 0xeada7dd6cde0eb1en, 0xf57d4f7fee6ed178n,
  0x06f067aa72176fban, 0x0a637dc5a2c898a6n, 0x113f9804bef90daen, 0x1b710b35131c471bn,
  0x28db77f523047d84n, 0x32caab7b40c72493n, 0x3c9ebe0a15c9bebcn, 0x431d67c49c100d4cn,
  0x4cc5d4becb3e42b6n, 0x597f299cfc657e2an, 0x5fcb6fab3ad6faecn, 0x6c44198c4a475817n,
];

const MASK64 = 0xffffffffffffffffn;

function rotr64(x: bigint, n: bigint): bigint {
  return ((x >> n) | (x << (64n - n))) & MASK64;
}

function sha512Common(data: Uint8Array, is384 = false): Uint8Array {
  const n = data.length;
  const padLen = n % 128 < 112 ? 112 - (n % 128) : 240 - (n % 128);
  const totalLen = n + padLen + 16;
  const padded = new Uint8Array(totalLen);
  padded.set(data);
  padded[n] = 0x80;

  const bitLen = BigInt(n) * 8n;
  for (let i = 0; i < 8; i++) {
    padded[totalLen - 1 - i] = Number((bitLen >> BigInt(i * 8)) & 0xffn);
  }

  let h0 = is384 ? 0xcbbb9d5dc1059ed8n : 0x6a09e667f3bcc908n;
  let h1 = is384 ? 0x629a292a367cd507n : 0xbb67ae8584caa73bn;
  let h2 = is384 ? 0x9159015a3070dd17n : 0x3c6ef372fe94f82bn;
  let h3 = is384 ? 0x152fecd8f70e5939n : 0xa54ff53a5f1d36f1n;
  let h4 = is384 ? 0x67332667ffc00b31n : 0x510e527fade682d1n;
  let h5 = is384 ? 0x8eb44a8768581511n : 0x9b05688c2b3e6c1fn;
  let h6 = is384 ? 0xdb0c2e0d64f98fa7n : 0x1f83d9abfb41bd6bn;
  let h7 = is384 ? 0x47b5481dbefa4fa4n : 0x5be0cd19137e2179n;

  const w = new BigUint64Array(80);

  for (let i = 0; i < totalLen; i += 128) {
    for (let t = 0; t < 16; t++) {
      const offset = i + t * 8;
      let val = 0n;
      for (let b = 0; b < 8; b++) {
        const byteVal = padded[offset + b] ?? 0;
        val = (val << 8n) | BigInt(byteVal);
      }
      w[t] = val;
    }

    for (let t = 16; t < 80; t++) {
      const wt15 = w[t - 15] ?? 0n;
      const wt2 = w[t - 2] ?? 0n;
      const wt16 = w[t - 16] ?? 0n;
      const wt7 = w[t - 7] ?? 0n;

      const s0 = rotr64(wt15, 1n) ^ rotr64(wt15, 8n) ^ (wt15 >> 7n);
      const s1 = rotr64(wt2, 19n) ^ rotr64(wt2, 61n) ^ (wt2 >> 6n);
      w[t] = (wt16 + s0 + wt7 + s1) & MASK64;
    }

    let a = h0;
    let b = h1;
    let c = h2;
    let d = h3;
    let e = h4;
    let f = h5;
    let g = h6;
    let h = h7;

    for (let t = 0; t < 80; t++) {
      const s1 = rotr64(e, 14n) ^ rotr64(e, 18n) ^ rotr64(e, 41n);
      const ch = (e & f) ^ (~e & g);
      const kt = K512[t] ?? 0n;
      const wt = w[t] ?? 0n;
      const temp1 = (h + s1 + ch + kt + wt) & MASK64;
      const s0 = rotr64(a, 28n) ^ rotr64(a, 34n) ^ rotr64(a, 39n);
      const maj = (a & b) ^ (a & c) ^ (b & c);
      const temp2 = (s0 + maj) & MASK64;

      h = g;
      g = f;
      f = e;
      e = (d + temp1) & MASK64;
      d = c;
      c = b;
      b = a;
      a = (temp1 + temp2) & MASK64;
    }

    h0 = (h0 + a) & MASK64;
    h1 = (h1 + b) & MASK64;
    h2 = (h2 + c) & MASK64;
    h3 = (h3 + d) & MASK64;
    h4 = (h4 + e) & MASK64;
    h5 = (h5 + f) & MASK64;
    h6 = (h6 + g) & MASK64;
    h7 = (h7 + h) & MASK64;
  }

  const outWords = is384 ? [h0, h1, h2, h3, h4, h5] : [h0, h1, h2, h3, h4, h5, h6, h7];
  const outBytes = new Uint8Array(is384 ? 48 : 64);
  for (let i = 0; i < outWords.length; i++) {
    const wordVal = outWords[i] ?? 0n;
    for (let b = 0; b < 8; b++) {
      outBytes[i * 8 + b] = Number((wordVal >> BigInt(56 - b * 8)) & 0xffn);
    }
  }
  return outBytes;
}

export function sha512Bytes(data: Uint8Array): Uint8Array {
  return sha512Common(data, false);
}

export function sha384Bytes(data: Uint8Array): Uint8Array {
  return sha512Common(data, true);
}

// ==========================================
// Public API Functions
// ==========================================

export function computeHash(
  algorithm: HashAlgorithm,
  input: string,
  options: Pick<HashOptions, 'uppercase' | 'encoding'> = { uppercase: false, encoding: 'hex' }
): string {
  const bytes = stringToUtf8Bytes(input);
  let digestBytes: Uint8Array;

  switch (algorithm) {
    case 'md5':
      digestBytes = md5Bytes(bytes);
      break;
    case 'sha1':
      digestBytes = sha1Bytes(bytes);
      break;
    case 'sha224':
      digestBytes = sha224Bytes(bytes);
      break;
    case 'sha256':
      digestBytes = sha256Bytes(bytes);
      break;
    case 'sha384':
      digestBytes = sha384Bytes(bytes);
      break;
    case 'sha512':
      digestBytes = sha512Bytes(bytes);
      break;
    default:
      throw new Error(`Unsupported hash algorithm: ${algorithm}`);
  }

  return formatDigest(digestBytes, options);
}

export function computeAllHashes(
  input: string,
  options: Pick<HashOptions, 'uppercase' | 'encoding'> = { uppercase: false, encoding: 'hex' }
): HashResults {
  const bytes = stringToUtf8Bytes(input);

  const md5Digest = formatDigest(md5Bytes(bytes), options);
  const sha1Digest = formatDigest(sha1Bytes(bytes), options);
  const sha224Digest = formatDigest(sha224Bytes(bytes), options);
  const sha256Digest = formatDigest(sha256Bytes(bytes), options);
  const sha384Digest = formatDigest(sha384Bytes(bytes), options);
  const sha512Digest = formatDigest(sha512Bytes(bytes), options);

  return {
    md5: md5Digest,
    sha1: sha1Digest,
    sha224: sha224Digest,
    sha256: sha256Digest,
    sha384: sha384Digest,
    sha512: sha512Digest,
  };
}
