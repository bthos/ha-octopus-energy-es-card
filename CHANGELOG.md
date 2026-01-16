# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.5.0] - 2026-01-16

### Added
- **Heat calendar year view**: Display consumption data for an entire year (365 days) in a calendar grid format
  - Full year visualization with ISO week numbering
  - Year navigation controls (Previous Year / Next Year buttons)
  - Year summary statistics (total consumption, average daily consumption, total cost)
  - Month separators/labels for better orientation in year view
  - Optimized rendering for large datasets (52-53 weeks)
  - Scrollable container for year view with responsive design

### Changed
- Enhanced heat calendar to support both month and year periods
- Improved date range handling for year view data fetching (automatic full year or partial year for current year)
- Updated navigation labels to reflect year navigation when in year view mode
- Improved data filtering and intensity threshold calculation for year view

## [0.4.35] - 2026-01-12

### Added
- Initial release of Octopus Energy España Consumption Card
- Consumption visualization for day/week/month periods
- Period navigation with Previous/Next buttons
- Tariff comparison with cost breakdown
- Period breakdown (P1/P2/P3) visualization
- Cost analysis with detailed breakdown
- Best tariff highlighting
- Savings calculation
- Support for multiple tariff entry IDs
- Chart type selection (line/bar)
- Configuration options for customization

### Changed
- Improved error handling and user feedback
- Enhanced documentation and examples

### Fixed
- Fixed chart rendering issues
- Improved data loading reliability

---

## [Unreleased]

### Planned
- Enhanced error messages
- Additional customization options
- Performance optimizations
- Accessibility improvements

[0.4.35]: https://github.com/bthos/ha-octopus-energy-es-card/releases/tag/v0.4.35
