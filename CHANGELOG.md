# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

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
