export type HashAlgorithm = 'md5' | 'sha1' | 'sha224' | 'sha256' | 'sha384' | 'sha512';

export type HashEncoding = 'hex' | 'base64';

export interface HashAlgorithmInfo {
  id: HashAlgorithm;
  name: string;
  bits: number;
  status: 'secure' | 'legacy' | 'broken';
  statusLabel: string;
  description: string;
}

export interface HashOptions {
  uppercase: boolean;
  encoding: HashEncoding;
  hmacKey?: string;
}

export type HashResults = Record<HashAlgorithm, string>;

export interface HashGeneratorState {
  input: string;
  options: HashOptions;
  results: HashResults;
  isProcessing: boolean;
}
