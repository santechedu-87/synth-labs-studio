# Synth Labs Digital Agency — Product Requirements Document

**Last updated:** 2026-08-25  
**Status:** Initial production-ready frontend complete

## Original Problem Statement

Build a production-ready, 100% original, fully responsive web application for **Synth Labs Digital Agency**, an AI Prompt Engineering, SEO Micro-Tools Studio, and Digital Agency. The app must be a single self-contained React default export using Tailwind CSS and Lucide icons, with no central glowing orb hero patterns, no deceptive statistics, no external API keys, and fully client-side tools and forms.

The required product includes:
- A glassmorphic desktop/mobile header, full-screen mobile drawer, and fixed mobile bottom navigation.
- An original bento hero with a live terminal preview and clear tool, app, and agency CTAs.
- Four honest capability metrics.
- Four functional browser tools: prompt engineering, SEO/SERP preview, viral hooks, and keyword density/readability.
- A SynthBudget closed-beta showcase and signup/info modal.
- Four digital agency service cards and project inquiry flow.
- A browser-stored support center with generated support ticket IDs.
- Header, in-article, and sidebar AdSense placement containers.
- Footer and Privacy Policy, Terms of Service, About Us, and Support/Contact popups.

**User decision:** Form submissions use both local browser storage and an optional prefilled email draft to `support@synthlabs.com`.

## User Personas

1. **Creator / marketer** — Needs fast prompt, headline, metadata, and content analysis utilities without setup.
2. **Small business owner** — Wants practical SEO, AdSense readiness, or a custom digital product.
3. **Potential SynthBudget tester** — Wants current beta status and a simple way to request access.
4. **Support visitor** — Needs a transparent support flow and a reference ID without creating an account.

## Architecture Decisions

- **Frontend:** React 19 single-page application in `frontend/src/App.jsx`.
- **Styling:** Tailwind foundation plus purpose-built responsive CSS in `frontend/src/App.css`.
- **Icons:** Lucide React.
- **State:** React hooks; no global state library required.
- **Processing:** Prompt generation, SERP rendering, hook generation, readability scoring, and keyword frequency run entirely in the browser.
- **Persistence:** Support, beta, and agency submissions are stored in `localStorage` by category.
- **Communication:** After local save, users can launch a prefilled `mailto:` draft; nothing is silently transmitted.
- **Integrations:** No external API, authentication, payment, analytics, or database dependency.
- **Accessibility/testing:** Semantic controls, keyboard focus states, reduced-motion support, responsive breakpoints, and unique `data-testid` attributes across critical elements.

## Core Requirements (Static)

- Original responsive visual system from 320px mobile through wide desktop.
- Light and dark themes persisted in browser storage.
- Desktop navigation, mobile drawer, and fixed mobile bottom navigation.
- Fully functional client-side micro-tools with copy support and graceful clipboard fallback.
- Honest product facts only; no fabricated customer, revenue, or growth metrics.
- Clearly labeled AdSense-ready placeholder regions.
- Legal and support content available without leaving the application.
- No external API keys and no server dependency for core product usage.

## Implemented

### 2026-08-25 — Initial Product Release
- Built the complete responsive Synth Labs agency interface with glassmorphic navigation, asymmetric hero, animated terminal preview, dark/light themes, and mobile bottom navigation.
- Implemented Prompt Engineer Pro with role, goal, tone, format, live structured output, and resilient copy behavior.
- Implemented desktop/mobile SERP preview with title and description limits, URL preview, and truncation guidance.
- Implemented five-channel hook generation with topic-driven outputs and individual copy controls.
- Implemented word/character counts, reading time, Flesch-style readability scoring, and keyword frequency/density analysis.
- Added SynthBudget product preview, honest closed-beta status, locally stored access requests, and email draft option.
- Added agency service inquiry flows, local reference IDs, optional email drafts, and four detailed service offerings.
- Added support ticket creation with `#SL-####` references, four categories, local persistence, and email draft handoff.
- Added Privacy Policy, Terms of Service, About Us, Support/Contact, footer content, and three required AdSense placement containers.
- Verified production build, responsive desktop/mobile behavior, form flows, clipboard-denied fallback, and deterministic navigation.

## Prioritized Backlog

### P0 — Required Before Release
- None. Core scope is complete and critical regression checks pass.

### P1 — Recommended Next
- Add export/download controls for generated prompts, hooks, and readability reports.
- Add a local history workspace so users can revisit recent tool outputs.
- Add optional support-ticket export as a plain-text receipt.

### P2 — Future Enhancements
- Add installable PWA support for offline access to the four tools.
- Add shareable URL state for SEO previews without transmitting private text.
- Add more client-side content templates and readability language modes.
- Add a public SynthBudget release-notes section when closed testing advances.

## Next Tasks

1. Review wording, service positioning, and legal content with the business owner.
2. Replace AdSense placeholders with approved ad unit code when an account is ready.
3. Add downloadable tool reports and local history as the next product iteration.
