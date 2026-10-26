import { HashAlgorithmInfo } from './types';

export const MAX_INPUT_LENGTH = 1_000_000; // 1 MB text limit for immediate in-browser processing

export const HASH_ALGORITHMS: HashAlgorithmInfo[] = [
  {
    id: 'md5',
    name: 'MD5',
    bits: 128,
    status: 'broken',
    statusLabel: 'Legacy / Checksum',
    description: '128-bit hash standard (RFC 1321). Fast checksum verification, vulnerable to collision attacks.',
  },
  {
    id: 'sha1',
    name: 'SHA-1',
    bits: 160,
    status: 'legacy',
    statusLabel: 'Legacy / Deprecated',
    description: '160-bit hash widely used in Git commits and legacy SSL certificates.',
  },
  {
    id: 'sha224',
    name: 'SHA-224',
    bits: 224,
    status: 'secure',
    statusLabel: 'Cryptographically Secure',
    description: 'Truncated 224-bit variant of SHA-256 offering equivalent security for 112-bit symmetric keys.',
  },
  {
    id: 'sha256',
    name: 'SHA-256',
    bits: 256,
    status: 'secure',
    statusLabel: 'Industry Standard',
    description: '256-bit SHA-2 family standard used in Bitcoin, TLS/SSL, digital signatures, and authentication.',
  },
  {
    id: 'sha384',
    name: 'SHA-384',
    bits: 384,
    status: 'secure',
    statusLabel: 'High Security',
    description: 'Truncated version of SHA-512 commonly specified in government and high-compliance PKI systems.',
  },
  {
    id: 'sha512',
    name: 'SHA-512',
    bits: 512,
    status: 'secure',
    statusLabel: 'Maximum Security',
    description: '512-bit digest offering optimum collision resistance and speed on 64-bit processors.',
  },
];

export const TOOL_METADATA = {
  title: 'Hash Generator',
  description: 'Generate MD5, SHA-1, SHA-224, SHA-256, SHA-384, and SHA-512 cryptographic hashes instantly in your browser. 100% client-side privacy.',
  slug: 'hash-generator',
  category: 'security-tools',
};

export const TOOL_FAQS = [
  {
    question: 'What is a cryptographic hash function?',
    answer: 'A cryptographic hash function is a mathematical algorithm that transforms an arbitrary block of data into a fixed-size string of characters (a digest). The process is strictly deterministic: feeding the exact same input into the algorithm will always produce the identical hash digest, while changing even a single punctuation mark completely scrambles the output digest through what is known as the avalanche effect.',
  },
  {
    question: 'Can a hash digest be decrypted or reversed?',
    answer: 'No. Cryptographic hashes are mathematically one-way functions, not encryption algorithms. Encryption is designed to be reversible using a secret key, whereas a hash irreversibly compresses data into a fixed length. While you cannot "decrypt" a hash, short or common passwords can sometimes be cracked through brute force or precomputed rainbow table lookups, which is why salted password hashing algorithms (like Argon2 or bcrypt) are mandated for password storage.',
  },
  {
    question: 'What is the difference between MD5, SHA-1, SHA-256, and SHA-512?',
    answer: 'The primary differences lie in the internal block algorithms, bit lengths, and collision resistance. MD5 produces 128-bit digests and SHA-1 produces 160-bit digests; both are now cryptographically compromised and should only be used for accidental error checking or non-adversarial checksums. SHA-256 and SHA-512 belong to the modern SHA-2 family, providing 256-bit and 512-bit output digests respectively, and remain universally recommended for mission-critical security, digital certificates, and blockchain networks.',
  },
  {
    question: 'What is a hash collision and why does it matter?',
    answer: 'A collision occurs when two distinct, different input messages produce the exact same output hash digest. In theory, because there are infinitely many inputs and a finite number of hash values (pigeonhole principle), collisions must exist. However, a secure algorithm makes finding such collisions computationally infeasible. MD5 and SHA-1 suffered practical collision attacks in academic research, prompting the transition to the SHA-2 and SHA-3 algorithm families.',
  },
  {
    question: 'Are my strings or inputs sent to a remote server?',
    answer: 'Never. The Jumpytools Hash Generator executes 100% locally on your machine using standard Web Crypto and native JavaScript engines. Your passwords, API secrets, personal keys, and database values never leave your device memory and are never transmitted over the internet or logged to any database.',
  },
  {
    question: 'What is the difference between Hex and Base64 output encoding?',
    answer: 'Raw hash digests are binary byte buffers. To represent them as human-readable text, developers encode them using either Hexadecimal (base 16, using characters 0-9 and a-f) or Base64 (base 64, using A-Z, a-z, 0-9, +, and /). Hex encoding represents each byte with 2 characters (making a 256-bit hash 64 characters long), whereas Base64 is more compact, requiring only 44 characters for a 256-bit hash.',
  },
];

export const TOOL_ABOUT = [
  'Cryptographic hash functions form the foundational bedrock of modern internet security, data integrity verification, and digital trust. Whether verifying file downloads against corrupted disk writes, securing software release checksums, generating API request signatures, or indexing cryptographic records in distributed ledgers like Bitcoin, cryptographic digests provide a unique mathematical fingerprint for any piece of digital information.',
  'Understanding Cryptographic Hash Properties and the Avalanche Effect:',
  'A reliable cryptographic hashing algorithm must satisfy three critical mathematical properties: preimage resistance (it is computationally impossible to reconstruct the original input from the output digest), second preimage resistance (given one input, it is computationally impossible to find another input that yields the same digest), and collision resistance (no two distinct inputs can easily produce the same digest). Furthermore, modern hash functions exhibit the "avalanche effect"—modifying a single bit in the source text results in a radically different, unrecognizable digest where roughly 50% of all output bits flip randomly.',
  'Algorithm Guide and Practical Comparison:',
  '• MD5 (Message Digest 5): Developed by Ronald Rivest in 1991, MD5 outputs a 128-bit hash. While historically dominant for file verification and database keys, researchers demonstrated practical collision attacks in the mid-2000s. Today, MD5 is strictly limited to rapid data deduplication and non-security checksums.',
  '• SHA-1 (Secure Hash Algorithm 1): Designed by the United States National Security Agency (NSA) in 1995, SHA-1 outputs a 160-bit hash. After theoretical attacks and Google\'s SHAttered collision demonstration in 2017, all major web browsers and certificate authorities deprecated SHA-1 in favor of the SHA-2 family.',
  '• SHA-256 & SHA-224 (SHA-2 Family): Published by NIST in 2001, SHA-256 uses 32-bit words and 64 mathematical processing rounds to create an unyielding 256-bit digest. It is currently the global gold standard for HTTPS TLS handshakes, Git object integrity, and Bitcoin proof-of-work.',
  '• SHA-512 & SHA-384: Part of the SHA-2 family, SHA-512 operates on native 64-bit word architectures with 80 transformation rounds, generating a 512-bit digest. On modern 64-bit computer processors and ARM mobile chips, SHA-512 frequently executes faster than SHA-256 while providing an even higher theoretical safety margin.',
  'Zero-Server Privacy Guarantee:',
  'When generating hashes for proprietary source code, confidential environment variables, or private API tokens, privacy is non-negotiable. Traditional online hashing websites transmit your text to server backends where inputs can be snooped, logged, or intercepted. The Jumpytools Hash Generator operates with a zero-server architecture. All mathematical hashing routines run entirely in-memory within your local browser or mobile application runtime. Your data never touches a network cable.',
];
