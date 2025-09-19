Red Envelope Wallet – Product Requirements (v1.0)
Project name: Red Envelope (React wallet)
Inspiration/UI parity: Slush Wallet (match IA & flows; styling updated per brand)
Primary goals:
Create a React wallet named Red Envelope, modeled closely after Slush Wallet UX.


Visually express seller reward % via a customizable big red background that shifts from pink → red → purple as the reward increases (3%–100%).


Support AQY (Sui fork) as the primary chain; support USDC and GC (L2 on Sui) tokens.


Support DEX swaps: AQY ↔ USDC and AQY ↔ GC.


Integrate with F2C eCommerce Smart Contracts (as described by GlobalBusinessChain) for buyer–seller QR workflows and reward schemes.


Deep-link to the AQY explorer (under development).



1. Scope
1.1 In scope
React single-page wallet app (desktop & mobile web responsive).


Wallet core: key generation/import, balances, send/receive.


Token support: AQY (native), USDC, GC (fungible tokens on Sui/AQY).


DEX: on-chain swap flows for AQY↔USDC and AQY↔GC.


F2C contract integration:


oSeller generates QR with scheme & reward %.


oBuyer scans and submits payload to contract.


oSeller can change reward % and choose scheme.


Theming: Large background color mapped to reward %, user can override base color palette.


Explorer deep-link: transactions/addresses open in AQY explorer.


1.2 Out of scope (v1)
Custodial key storage.


Hardware wallet pairing.


Cross-chain bridges.


NFT features.



2. Personas & Roles
Buyer: Scans seller QR, reviews terms (reward %, scheme), confirms payment; receives reward in AQY/GC per scheme.


Seller: Displays QR code tied to their wallet & reward scheme; can adjust reward % and scheme.


Admin/Ops (later): Configures default token lists, explorer URL, DEX router addresses.



3. User Journeys
3.1 Seller setup & QR display
1.Seller creates/imports wallet.


2.Chooses Reward Scheme (see §7) and sets reward %.


3.App displays a QR code containing payload (seller address, scheme id, reward %, expiry, signature).


4.Background color animates to reflect reward %.


Acceptance: QR renders within 200 ms after changes; color updates instantly; payload signed.
3.2 Buyer scan & pay
1.Buyer opens wallet → Scan.


2.Camera reads seller QR → parses payload; verifies signature and expiry.


3.Shows summary: seller name/address, reward %, scheme details, total cost, est. rewards.


4.Buyer confirms → app builds and submits F2C payment txn.


5.On success, shows explorer link and reward breakdown.


Acceptance: Scan to summary < 1.0 s on modern phones; invalid/expired QR shows clear error.
3.3 Swap (DEX)
1.User selects From token (AQY/USDC/GC) and To token.


2.Gets quote (slippage configurable).


3.Confirms swap → app signs and submits.


Acceptance: Quote < 1 s; route/price impact visible; tx digest shown with explorer link.

4. Information Architecture & Screens
1.Home / Portfolio


oBalances (AQY, USDC, GC), fiat estimates.


oRecent activity; tap to view on explorer.


2.Send / Receive


oAddress, amount, gas estimation; QR receive.


3.Swap (DEX)


oToken selector, slippage, min received, price impact.


4.Scan (Buyer)


oCamera view, history of scanned sellers.


5.QR (Seller)


oReward % slider (3–100), scheme selector.


oLive QR preview; copy/share.


6.Settings


oTheme overrides; base hue and gradient strength.


oNetwork: devnet/testnet/mainnet; RPC endpoints.


oSecurity: reveal/backup seed, password lock, auto-lock timer.



5. Functional Requirements (FR)
FR-1 Wallet Core
Generate ED25519 keypair; show 12/24-word mnemonic backup.


Import from mnemonic/secret key.


Display balances for AQY, USDC, GC; token list is configurable (symbol, decimals, logo, contract address/Type).


Send flow with memo (optional), gas fee estimate, max button.


AC: Transactions sign & broadcast successfully; errors surfaced with reason.


FR-2 Theming & Reward-Driven Background
A full-bleed background area reflects reward %.


Default mapping: 3% → pink, ~50% → red, 100% → purple.


Seller can override base palette (see §9.2 env keys).


AC: Background updates on slider drag; color is deterministic for a given %.


FR-3 DEX (Swaps)
Quote, approve (if required), swap, and status.


Slippage control (0.1–5%); deadline; price impact badge.


Supported pairs: AQY↔USDC, AQY↔GC; extensible to more pairs.


AC: For a fixed quote input, min-received reflects slippage; re-quote on market move.


FR-4 F2C Contract Integration
Buyer: Scan QR → verify signature/expiry → build payment txn → submit.


Seller: Generate QR with (address, scheme id, reward %, metadata, expiry, signature).


AC: Payload signature verification prevents tampering; contract call parameters match payload; reward distribution receipts visible.


FR-5 Explorer Deep Links
For address, tx digest, and object ids.


AC: Links open in new tab to configured AQY Explorer base URL.


FR-6 Security
Encrypt wallet at rest (WebCrypto + password-derived key, PBKDF2/Argon2 if available).


Auto-lock after inactivity; biometric prompt on supported devices.


Never leak seed/mnemonic to logs/telemetry.


FR-7 Accessibility & i18n
WCAG 2.1 AA: focus rings, color contrast, keyboard nav.


Localization-ready strings; default EN.



6. QR Payload Specification
Purpose: Immutable seller intent for F2C checkout. Buyer verifies before paying.
Canonical JSON payload (unsigned):
{
  "v": 1,
  "chainId": "aqy-devnet",
  "seller": "0xS E L L E R ...",
  "schemeId": "SCHEME_SIMPLE_PERCENT",
  "rewardPct": 12.5,
  "metadata": {
    "sellerName": "Alice’s Tea",
    "note": "Table 4"
  },
  "expiresAt": 1735689600000,
  "nonce": "b82c6f81-8f4f-4a2e-9a50-1d0b9c2fbe61"
}

Signed envelope:
{
  "payload": { /* canonical JSON above with stable key order */ },
  "sig": "base64(ed25519_signature)",
  "pubKey": "base64(ed25519_pub)"
}

Validation rules:
rewardPct ∈ [3, 100]; decimals allowed; round to 2 dp for display.


expiresAt must be ≥ now + 60s and ≤ now + 30d (configurable).


chainId must match current network; otherwise prompt to switch.


Signature verified against seller.


Security note: Sign using Sui/AQY intent message domain ("personal message" equivalent) to avoid tx-replay cross-domain.

7. Reward Schemes (UI + Contract integration)
Supported in UI; exact contract methods provided by F2C contracts.
1.Simple Buyer % – buyer receives a % back in AQY/GC.


2.Buyer + Others – buyer plus arbitrary wallets & % set by seller.


3.Buyer + Predefined List – buyer + a predefined wallet set (lookup by buyer ID in local DB or on-chain table).


Seller UI requirements:
Scheme selector (radio/tabs).


For Scheme 2: dynamic rows (address + %); total must sum to allowed cap.


For Scheme 3: buyer ID input; fetch & preview distribution table.


AC: Form validation prevents totals > 100% (or per contract cap); save drafts locally.


Conversion rule: Stablecoins are exchanged to AQY before rewarding (per business rules). UI must show:
Stable → AQY conversion estimate.


Total stable sent to fixed reward wallet (configurable).


Remainder to seller wallet.



8. DEX Integration Contract Interface (abstract)
Wallet should integrate via an adapter so different DEXs can be swapped later.
interface DexAdapter {
  getQuote(params: { inToken: Token; outToken: Token; amountIn: string; slippageBps: number }): Promise<Quote>
  swap(quote: Quote, opts?: { deadlineSec?: number }): Promise<TxDigest>
  approveIfNeeded(token: Token, amount: string): Promise<void>
}


Tokens: { symbol, type, decimals, logo, isNative } (configurable).


Slippage: default 0.5% (50 bps), min 10 bps, max 500 bps.


GC is treated as fungible token on AQY; type string supplied in config.



9. Configuration
9.1 Environment
VITE_NETWORK: devnet | testnet | mainnet (default devnet).


VITE_RPC_URL: custom RPC endpoint.


VITE_EXPLORER_BASE: e.g., https://explorer.aqy.dev/.


VITE_TOKENLIST_URL: optional remote token list.


9.2 Theme
VITE_BASE_HUE_DEG: default 350 (red family).


VITE_GRADIENT_STRENGTH: 0–1, controls saturation/contrast.


VITE_BG_OVERRIDE_CSS: optional CSS gradient string.



10. Reward % → Color Mapping
Goal: Smooth gradient 3%→100% mapped pink→red→purple.
Stops (hex):
3% → #ffc0cb (pink)


50% → #ff0000 (red)


100% → #8000ff (purple)


Algorithm (HSL pseudo):
function rewardToColor(pct: number) {
  const clamped = Math.min(100, Math.max(3, pct))
  if (clamped <= 50) {
    // pink (350°, 100%, 90%) → red (0°, 100%, 50%)
    const t = (clamped - 3) / (50 - 3)
    const hue = 350 + (0 - 350) * t // wrap via 360-aware math in code
    const sat = 100
    const light = 90 + (50 - 90) * t
    return `hsl(${hue}, ${sat}%, ${light}%)`
  } else {
    // red (0°, 100%, 50%) → purple (~265°, 100%, 50%)
    const t = (clamped - 50) / (100 - 50)
    const hue = 0 + 265 * t
    return `hsl(${hue}, 100%, 50%)`
  }
}

AC: For the same rewardPct, color is consistent across app; contrast meets WCAG with overlay text.

11. Error States
QR invalid: signature failed → show “QR not issued by seller wallet” with retry.


Expired: show expiry and ask seller for fresh QR.


Network mismatch: offer to switch network.


Insufficient balance / allowance: actionable CTA.



12. Telemetry & Privacy (optin)
Anonymous events: screen views, swaps initiated/completed, scan success/failure.


No wallet addresses or mnemonics unless explicitly allowed for support mode.



13. Testing & QA
Unit tests: QR encode/decode, signature verify, color mapping, slippage math.


E2E:


oSeller set 12% → QR shown → Buyer scans → Tx succeeds; explorer link opens.


oSwap AQY→USDC with 0.5% slippage; min-received honored.


oScheme 2 with multiple recipients totaling ≤ 100%.


Performance: initial load < 2s on mid-tier mobile; scan parse < 1s.



14. Deliverables & Milestones
M1 (MVP):
Wallet core; balances; send/receive.


Seller QR & Buyer scan (Scheme 1).


Background gradient mapping.


Explorer deep-link.


M2:
DEX swaps AQY↔USDC, AQY↔GC.


Scheme 2 & 3 UIs; validation; integration hooks.


M3:
Theming overrides; tokenlist mgmt; i18n; accessibility polish.



15. Open Questions
Final F2C contract interfaces (method names/params, reward wallet address).


GC token metadata (type, decimals) on AQY networks.


Exact explorer URL patterns.


Signature domain string for QR payload (agree with contract/security team).



16. Appendix – Example UI Copy
Scan error: “This code has expired. Ask the seller to refresh their QR.”


Confirm payment: “You’ll pay 25 USDC. You’ll receive ~2.5 AQY in rewards.”


Swap warning: “High price impact (>2%). Consider reducing amount.”

Here’s a clear 6-milestone roadmap for the Red Envelope Wallet developer, aligned with the requirements you outlined:

Milestone 1 – Wallet Core & Foundations
Scaffold React project named Red Envelope (modeled after Slush Wallet).


Implement wallet key generation/import/export with mnemonic backup.


Show balances for AQY, USDC, GC.


Basic send/receive flows with QR code support.


Integrate theme system with big red background (default red).



Milestone 2 – Seller QR & Buyer Scan (F2C Contract v1)
Implement seller UI: reward % slider (3%–100%) and scheme selector.


Dynamically change background color pink→red→purple based on reward %.


Generate signed QR payload containing seller info, scheme, reward %.


Implement buyer scan flow: parse/verify QR, show summary, submit mock txn to contract endpoint.



Milestone 3 – DEX Integration
Add swap module: AQY ↔ USDC, AQY ↔ GC.


Integrate with chosen DEX adapter (quote, slippage, approve, swap).

Display min-received, price impact, and transaction status.


Hook swaps to explorer link for verification.



Milestone 4 – F2C Contract Full Integration
Connect buyer scan/pay flow to live F2C eCommerce Smart Contracts.


Ensure correct handling of schemes:


1.Simple buyer %


2.Buyer + others (seller-defined addresses)


3.Buyer + predefined list (lookup DB or contract table)


Validate reward % totals, signature, and expiry.



Milestone 5 – AQY Explorer & Extended Features
Add deep linking to the AQY Explorer for transactions, addresses, and objects.


Implement seller settings for scheme persistence and draft saving.


Provide configurable tokenlist + RPC endpoints in settings.


Add gradient theme overrides and custom palettes.



Milestone 6 – QA, Security & Launch Readiness
Encrypt wallet storage with WebCrypto (password lock, auto-lock timer).


Ensure accessibility (WCAG 2.1 AA) and i18n readiness.


Run unit tests (QR encode/decode, signature, color mapping).


Run end-to-end tests (full buyer→seller flows and DEX swaps).


Optimize load time (<2s) and mobile responsiveness.


Package for first release (MVP → M2 → final M3 delivery).