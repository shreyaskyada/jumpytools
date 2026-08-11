export const TOOL_METADATA = {
  title: 'JWT Token Decoder & Verifier',
  description: 'Decode, inspect, and verify JSON Web Tokens (JWT) & bearer security tokens client-side. Parse headers, payload claims, and verify signatures for HS256, RS256, and ES256.',
  slug: 'jwt-decoder',
  category: 'developer-tools',
  fullWidth: true,
};

export const TOOL_ABOUT = [
  'The JWT Decoder & Signer Verifier is a premium, client-side developer utility built to decode, analyze, and cryptographically verify JSON Web Tokens (JWT). Built to run completely inside your local browser memory space, the tool allows developers to inspect encoded token headers and payload claims, verify signature validity using public keys or shared secrets, and debug authorization flows instantly.',
  'What is a JSON Web Token (JWT)?',
  'Defined by RFC 7519, a JSON Web Token is an open standard that establishes a compact, URL-safe format for securely transmitting structured information between systems as a JSON object. Because this data is digitally signed by the issuer, the recipient can verify the token\'s authenticity and guarantee that the contents have not been tampered with during transit. JWTs are the industry standard for state-less authentication systems, OAuth 2.0 authorization frameworks, and single sign-on (SSO) portals.',
  'Deconstructing the JWT Structure:',
  'A JWT is represented as a single string divided into three distinct segments separated by periods (`.`):',
  '• Header: Specifies the token metadata, including the token type (typically "JWT") and the cryptographic signing algorithm utilized (e.g. HS256, RS256, or ES256).',
  '• Payload: Contains the JSON-based claims. Claims are statements about an entity (such as user permissions, identity parameters, or issuer metadata). Registered claims include standard fields like "iss" (issuer), "sub" (subject), "aud" (audience), and "exp" (expiration time).',
  '• Signature: Computed by taking the base64url-encoded header and payload, combining them with a secret key or private key, and running the specified cryptographic signing algorithm. This verifies that the message has not been altered.',
  'Zero-Server Privacy and Security:',
  'Debugging JWTs often requires pasting actual authorization tokens containing sensitive user emails, roles, and signature secrets. Pasting these payloads into online tools that process data on remote servers risks exposing your system to security breaches or logging databases. Jumpytools decodes and validates all tokens locally using the browser\'s native Web Crypto API. Your keys, tokens, and payload variables are never sent over the network, ensuring 100% security.'
];

export const TOOL_FAQS = [
  {
    question: 'Is my JWT token data safe on this site?',
    answer: 'Yes, absolutely. The decoding, claims parsing, and signature verification are processed 100% locally in your browser using client-side JavaScript. Your token, payload data, and secret keys never leave your machine. Unlike other online JWT tools, Jumpytools has zero server-side processing — your sensitive authorization tokens are never transmitted over the network.',
  },
  {
    question: 'What is a JWT token and how do I decode it?',
    answer: 'A JWT (JSON Web Token) is a compact, URL-safe token format defined by RFC 7519, commonly used for authentication and authorization. It consists of three base64url-encoded parts separated by dots: Header, Payload, and Signature. To decode a JWT, simply paste the encoded token string into the input field above. This tool will automatically parse and display the decoded header (algorithm, token type) and payload (claims like user ID, roles, expiration) in a readable JSON format.',
  },
  {
    question: 'What are the three parts of a JWT?',
    answer: 'A JSON Web Token is composed of three parts separated by dots (.): Header (specifies the algorithm and token type), Payload (contains the claims/data), and Signature (used to verify that the sender is who it says it is and to ensure the message wasn\'t changed along the way).',
  },
  {
    question: 'How do I verify a JWT signature?',
    answer: 'For HMAC algorithms (like HS256), enter the shared secret key in the Signature Verification section. For RSA and ECDSA algorithms (like RS256 or ES256), paste the PEM-formatted public key. The tool uses the browser\'s native Web Crypto API to cryptographically verify whether the signature matches the token header and payload. A green checkmark confirms the signature is valid; a red alert means the token has been tampered with or the wrong key was provided.',
  },
  {
    question: 'Why does the tool show my token is expired?',
    answer: 'A JWT often contains an expiration claim (\'exp\') which is a Unix timestamp. The tool compares this timestamp with your computer\'s current time to determine if the token has expired and displays how much time remains or has elapsed since expiration. Expired tokens are typically rejected by APIs and servers during the authorization process.',
  },
  {
    question: 'What is the difference between HS256, RS256, and ES256?',
    answer: 'HS256 (HMAC-SHA256) is a symmetric algorithm that uses a single shared secret key for both signing and verification. RS256 (RSA-SHA256) is an asymmetric algorithm that uses a private key for signing and a public key for verification. ES256 (ECDSA-P256) is also asymmetric but uses elliptic curve cryptography, offering the same security as RSA but with smaller key sizes and faster performance. RS256 and ES256 are preferred for distributed systems where you want to verify tokens without sharing the signing key.',
  },
  {
    question: 'Can I decode an expired JWT token?',
    answer: 'Yes, you can decode any JWT token regardless of whether it has expired. Expiration only affects whether an API or server will accept the token. The JWT decoder will decode the full header and payload, show all claims, and clearly indicate the token\'s expiration status with a countdown showing how long ago it expired.',
  },
  {
    question: 'How do I decode a bearer token from an API?',
    answer: 'Bearer tokens used in API Authorization headers (formatted as "Authorization: Bearer eyJhbG...") are typically JWT tokens. Simply copy the token string after the word "Bearer " (without the "Bearer " prefix) and paste it into the decoder input. The tool will parse the header, payload claims, and let you verify the signature if you have the corresponding key.',
  },
  {
    question: 'What are JWT claims and what do iss, sub, aud, exp, iat mean?',
    answer: 'JWT claims are key-value pairs stored in the token\'s payload that contain information about the token and the authenticated entity. Standard registered claims include: "iss" (issuer — who created the token), "sub" (subject — who the token represents, usually a user ID), "aud" (audience — the intended recipient), "exp" (expiration time — when the token becomes invalid), "iat" (issued at — when the token was created), "nbf" (not before — earliest time the token is valid), and "jti" (JWT ID — a unique token identifier to prevent replay attacks).',
  },
  {
    question: 'What is the difference between symmetric and asymmetric JWT signing?',
    answer: 'Symmetric signing (like HS256) uses a single shared secret key to both create and verify the signature; both the token issuer and verifier must share this secret. Asymmetric signing (like RS256 or ES256) uses a private key to create the signature and a corresponding public key to verify it. This is more secure because the verifier only needs the public key and cannot generate new tokens.',
  },
  {
    question: 'Is this tool a good alternative to jwt.io?',
    answer: 'Yes, Jumpytools JWT Decoder offers the same core functionality as jwt.io — decoding JWT headers and payloads, verifying signatures for HS256/RS256/ES256, and inspecting token claims. Additionally, it provides a live token expiry countdown, a color-coded token structure viewer, an interactive JSON tree explorer, and a full claims breakdown table with RFC 7519 descriptions. Most importantly, all processing happens 100% client-side in your browser, ensuring maximum privacy.',
  },
  {
    question: 'Why is the "none" algorithm considered dangerous in JWTs?',
    answer: 'The "none" algorithm specifies that the token is unsigned and has no signature segment. In production, accepting "none" algorithm tokens is a severe vulnerability, as attackers can easily modify the payload claims (such as changing their user role to "admin") and bypass authentication checks entirely.',
  },
];

export const CLAIM_DESCRIPTIONS: Record<string, string> = {
  alg: 'Algorithm: The cryptographic algorithm used to secure the token (e.g. HS256, RS256).',
  typ: 'Type: The type of the token (typically JWT).',
  kid: 'Key ID: A hint indicating which key was used to secure the JWT.',
  jku: 'JWK Set URL: A URI that refers to a resource for a set of JSON-encoded public keys.',
  jwk: 'JSON Web Key: The public key that corresponds to the key used to sign the token.',
  x5u: 'X.509 URL: A URI pointing to a set of X.509 public certificates.',
  x5c: 'X.509 Certificate Chain: The X.509 public key certificate or certificate chain.',
  x5t: 'X.509 Certificate SHA-1 Thumbprint: SHA-1 thumbprint of the X.509 certificate.',
  crit: 'Critical: An array of header names that the client must recognize and process.',
  iss: 'Issuer: Identifies the principal that issued the JWT.',
  sub: 'Subject: Identifies the principal that is the subject of the JWT (e.g. user ID).',
  aud: 'Audience: Identifies the recipients that the JWT is intended for.',
  exp: 'Expiration Time: The time on or after which the JWT must not be accepted.',
  nbf: 'Not Before: The time before which the JWT must not be accepted.',
  iat: 'Issued At: The time at which the JWT was issued.',
  jti: 'JWT ID: A unique identifier for the token (can prevent replay attacks).',
  name: 'Name: The subject\'s full name.',
  given_name: 'Given Name: The subject\'s first or given name.',
  family_name: 'Family Name: The subject\'s surname or family name.',
  middle_name: 'Middle Name: The subject\'s middle name.',
  nickname: 'Nickname: The casual name for the subject.',
  preferred_username: 'Preferred Username: Shorthand name chosen by the subject.',
  profile: 'Profile: URL of the subject\'s profile page.',
  picture: 'Picture: URL of the subject\'s profile picture.',
  website: 'Website: URL of the subject\'s web page.',
  email: 'Email: The subject\'s email address.',
  email_verified: 'Email Verified: Indicates if the subject\'s email has been verified.',
  gender: 'Gender: The subject\'s gender.',
  birthdate: 'Birthdate: The subject\'s date of birth.',
  zoneinfo: 'Zone Info: The subject\'s time zone.',
  locale: 'Locale: The subject\'s locale (language/country).',
  phone_number: 'Phone Number: The subject\'s phone number.',
  phone_number_verified: 'Phone Number Verified: Indicates if the subject\'s phone number has been verified.',
  address: 'Address: The subject\'s preferred postal address.',
  updated_at: 'Updated At: The time the subject\'s information was last updated.',
  role: 'Role: The user authorization role.',
  roles: 'Roles: List of user authorization roles.',
  admin: 'Admin: Indicates if the user has administrative privileges.',
  scope: 'Scope: List of OAuth scopes granted to the token.',
  scp: 'Scope: Shortened notation for OAuth scopes.',
};
