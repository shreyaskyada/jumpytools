# Tools to Add — Jumpytools

## Priority Build List (10 Tools)

---

## Developer Tools (5)

### 1. Hash Generator
- **What it does**: Generate MD5, SHA-1, SHA-256, SHA-512 hashes from any text input
- **Why**: One of the most searched developer tools. Uses built-in Web Crypto API — zero dependencies
- **Complexity**: Low
- **Category**: `security-tools` / `developer-tools`

### 2. Unit Converter
- **What it does**: Convert between units — length, weight, temperature, volume, speed, area
- **Why**: Broadest audience of any tool. Single tool covering dozens of high-traffic searches
- **Complexity**: Low
- **Category**: `math-calc`

### 3. XML & YAML Formatter
- **What it does**: Prettify, minify, and validate XML and YAML files
- **Why**: Near-zero effort — same pattern as existing JSON Formatter. DevOps/backend audience
- **Deps**: `js-yaml` for YAML
- **Complexity**: Low
- **Category**: `developer-tools`

### 4. CSV ↔ JSON Converter
- **What it does**: Bidirectional conversion — CSV to JSON and JSON to CSV
- **Why**: Extremely common developer need. Fits perfectly into existing engine architecture
- **Complexity**: Low
- **Category**: `developer-tools`

### 5. Password Strength Checker
- **What it does**: Analyze password strength with score, crack time estimate, and improvement tips
- **Why**: Natural complement to the existing Password Generator
- **Deps**: `zxcvbn`
- **Complexity**: Low
- **Category**: `security-tools`

---

## Gen Z Tools (5)

### 6. Aesthetic Font Generator
- **What it does**: Convert plain text into Unicode fancy fonts — `𝓵𝓲𝓴𝓮 𝓽𝓱𝓲𝓼`, `ᵗⁱⁿʸ ᵗᵉˣᵗ`, `S̶t̶r̶i̶k̶e̶t̶h̶r̶o̶u̶g̶h̶`, vaporwave, bold, italic
- **Why**: #1 use case is Instagram & TikTok bios. Pure Unicode table mapping — zero deps, instant results
- **Complexity**: Low
- **Category**: `text-content`

### 7. Tier List Maker
- **What it does**: Drag-and-drop tier ranking tool (S / A / B / C / D / F) with custom items — export result as image
- **Why**: One of the most shared formats on the internet. Highly engaging, highly shareable
- **Complexity**: Medium
- **Category**: `fun-games`

### 8. Zodiac Compatibility Checker
- **What it does**: Pick two zodiac signs → get compatibility score + breakdown across love, friendship, and communication
- **Why**: Astrology is huge with Gen Z. Pure logic, no API needed, massive repeat usage
- **Complexity**: Low
- **Category**: `fun-games`

### 9. Red Flag / Green Flag Checker
- **What it does**: Enter a behavior or trait → verdict: 🚩 Red Flag, 💚 Green Flag, or 🟡 Depends — with explanation
- **Why**: Extremely viral TikTok concept. Simple to build, very shareable
- **Complexity**: Low
- **Category**: `fun-games`

### 10. Vibe Color Palette Generator
- **What it does**: Pick a named Gen Z aesthetic (Dark Academia, Y2K, Brat Green, Cottagecore, Aura, Mob Wife, Retro) → get a curated color palette with hex codes and CSS gradient
- **Why**: Extends the existing Color Converter. Gen Z wants their aesthetic in hex codes
- **Complexity**: Low–Medium
- **Category**: `design-color`

---

## Bonus: Full Longlist for Future Sprints

### Developer
| Tool | Category | Complexity |
|---|---|---|
| Regex Tester | developer-tools | Medium |
| Number Base Converter (Binary/Hex/Octal/Decimal) | developer-tools | Low |
| Cron Expression Parser | developer-tools | Medium |
| SQL Formatter / Beautifier | developer-tools | Low |
| HTML Entity Encoder/Decoder | developer-tools | Low |
| HMAC Generator | security-tools | Low |

### Math & Finance
| Tool | Category | Complexity |
|---|---|---|
| Loan / EMI Calculator | math-calc | Low |
| Tip Calculator / Bill Splitter | math-calc | Low |
| Discount Calculator | math-calc | Low |
| GPA / Grade Calculator | math-calc | Low |
| Roman Numeral Converter | math-calc | Low |
| Scientific Calculator | math-calc | Low |

### Image & Design
| Tool | Category | Complexity |
|---|---|---|
| Image Resizer | image-tools | Low |
| Image Cropper | image-tools | Medium |
| Favicon Generator | image-tools | Medium |
| CSS Gradient Generator | design-color | Medium |
| Box Shadow Generator | design-color | Low |
| Color Palette Generator (from seed color) | design-color | Medium |

### Text & Content
| Tool | Category | Complexity |
|---|---|---|
| Slug Generator | text-content | Low |
| Reading Time Estimator | text-content | Low |
| Duplicate Line Remover | text-content | Low |
| Text to Binary / Binary to Text | text-content | Low |

### Gen Z / Social
| Tool | Category | Complexity |
|---|---|---|
| Bio Generator | text-content | Low |
| Tweet / Thread Splitter | utility-tools | Low |
| Discord Text Formatter | utility-tools | Low |
| Aesthetic Symbol Picker | text-content | Low |
| Lyrics Card Maker | fun-games | Medium |
| Manifestation / Affirmation Generator | fun-games | Low |
| Flashcard Generator | utility-tools | Medium |
| Days Until Counter | utility-tools | Low |
| Rizz Line Generator | fun-games | Low |

---

## Architecture Reminder

Every new tool follows the same pattern:

```
packages/engines/<tool-name>/
├── engine.ts      # Pure business logic — no React, no side effects
├── hook.ts        # React hook — state, debounce, memoization
├── types.ts       # TypeScript types
├── constants.ts   # TOOL_METADATA, TOOL_FAQS, TOOL_ABOUT
└── index.ts       # Public exports

apps/web/
├── app/tools/<tool-name>/page.tsx         # Next.js route + SEO metadata
└── modules/tools/<tool-name>/
    ├── <ToolName>Tool.tsx                 # Main component
    └── components/                        # Sub-components

apps/mobile/tools/<tool-name>/
├── screen.tsx                             # React Native screen
└── <ToolName>Tool.tsx                     # Mobile component
```
