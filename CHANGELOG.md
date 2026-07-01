# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.6.40] - 2026-07-01

### Fixed
- Card no longer disappears from the Lovelace card picker after a HACS install or update
  ([#card-picker-not-found](https://github.com/bthos/ha-octopus-energy-es-card)).
  Root cause: the registration block used the bare `customElements` identifier, which
  Rollup's IIFE captured against the native registry at eval time. Home Assistant installs
  a polyfill that replaces `window.customElements` after the IIFE executes; the picker's
  `get()` therefore queried a different registry object and always returned `undefined`,
  triggering the 2 s "Custom element not found" timeout. Fix: all `customElements.*` calls
  in both registration blocks now use `window.customElements.*` so every call dereferences
  the currently-installed registry at the moment it runs.
- Removed dead-code bracket-notation property assignment on the `customCards` array that
  had no effect on card registration.

### Upgrade note
After updating to 0.6.40 via HACS, perform a **hard reload** of the browser tab
(Shift-F5 / Ctrl-Shift-R) or clear the browser cache so Home Assistant serves the new
bundle rather than a cached copy.

## [0.6.0] - 2025-01-20

### Changed
- **BREAKING**: Migrated from Canvas-based charts to D3.js SVG-based charts
- Charts now use D3.js for rendering, matching the Octopus Energy España dashboard design
- Improved chart interactivity with hover effects and tooltips
- Better visual styling with rounded top corners on bar charts
- Enhanced tooltip display with Spanish locale formatting

### Added
- D3.js integration for all chart types (bar, line, stacked area)
- Interactive tooltips showing consumption value and date on hover
- Smooth hover transitions for chart elements
- Better accessibility with SVG-based rendering

### Removed
- Canvas-based chart implementation (canvas-chart.ts, bar-chart.ts, line-chart.ts, stacked-area-chart.ts)
- Chart renderer and animator utilities (chart-renderer.ts, chart-animator.ts)

### Technical
- Updated dependencies: Added D3.js v7.8.5 and related modules
- Refactored chart library to use D3.js scales, axes, and transitions
- Improved code organization with separate D3 chart implementations

## [0.5.14] - Previous version

Previous changelog entries...
