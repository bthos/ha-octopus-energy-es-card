/**
 * Octopus Energy España brand palette — single source of truth for brand colors.
 *
 * These values are consumed in two runtimes:
 *  - CSS:  `src/styles.ts` interpolates them into `--oe-*` custom properties on
 *          `:host`, so every brand-colored rule reads `var(--oe-*)` (and a HA
 *          theme can override them to re-skin the card).
 *  - D3/JS: the chart color config in `src/octopus-consumption-card.ts` and the
 *          gradient stops / hover fallbacks in `src/charts/*` read them directly.
 *
 * The values below are the card's existing colors, kept identical so the refactor
 * that introduced this module changes no pixels. They *approximate* the official
 * Octopus Energy España identity:
 *   Core Purple #261842 · Electric Pink #FF71CF · Legacy Purple #8457E8
 * Aligning these to the exact brand hex is a deliberate design change — see
 * `.tlk/features/2026-06-30-adapt-octopus-energy-design/adaptation.md` (open
 * question 2) before doing so.
 */
export const OCTOPUS_BRAND = {
  /** Default bar/series fill — purple/violet. */
  purple: "#8B5CF6",
  /** Hover + value-highlight accent — bright pink. */
  pink: "#ff69b4",
  /** Bar gradient, top stop — bright pink. */
  gradientTop: "#F050F8",
  /** Bar gradient, bottom stop — light pink. */
  gradientBottom: "#FA98FF",
  /** Tooltip background — deep purple (≈ Octopus core purple #261842). */
  tooltipBg: "rgba(40, 26, 61, 0.95)",
  /** Chart text font stack. */
  fontFamily: "Roboto, sans-serif",
} as const;
