# Manual Testing Checklist

This document provides a checklist for manually testing the Octopus Energy España Consumption Card before releasing a new version.

## Pre-Release Testing Checklist

### ✅ Build & Installation

- [ ] `npm run build` completes without errors
- [ ] `npm run type-check` passes (no TypeScript errors)
- [ ] Bundle file (`octopus-consumption-card.bundle.js`) is generated
- [ ] Bundle size is reasonable (< 500KB)
- [ ] Card can be installed via HACS
- [ ] Card appears in Lovelace card picker

### ✅ Basic Functionality

- [ ] Card renders without errors in Lovelace dashboard
- [ ] Card displays title correctly
- [ ] Card shows loading state while fetching data
- [ ] Card displays consumption data when available
- [ ] Card shows error message when data is unavailable
- [ ] Error message includes retry button
- [ ] Retry button works correctly

### ✅ Configuration

- [ ] Visual editor opens when clicking "Configure" on card
- [ ] `source_entry_id` selector shows available Octopus Energy integrations
- [ ] Selecting `source_entry_id` updates card configuration
- [ ] `tariff_entry_ids` selector allows multiple selections
- [ ] All configuration options are saved correctly
- [ ] YAML configuration works (if editing manually)

### ✅ Period Navigation

- [ ] Day/Week/Month period selector works
- [ ] Default period is respected
- [ ] Previous/Next navigation buttons work
- [ ] Navigation updates data correctly
- [ ] Period can be changed via buttons

### ✅ Tariff Comparison

- [ ] Tariff comparison section appears when enabled
- [ ] Multiple tariffs are displayed correctly
- [ ] Best tariff is highlighted
- [ ] Cost breakdown shows correctly (energy, power, fees, taxes)
- [ ] Period breakdown (P1/P2/P3) displays correctly
- [ ] Savings information is shown when available
- [ ] Comparison errors are handled gracefully (doesn't break card)

### ✅ Data Loading

- [ ] Consumption data loads correctly
- [ ] Data updates when period changes
- [ ] Service calls complete within reasonable time (< 10 seconds)
- [ ] Timeout errors are handled gracefully
- [ ] Empty data states are handled correctly

### ✅ Visual Editor

- [ ] All form fields are visible and functional
- [ ] Labels and helper text are displayed correctly
- [ ] Conditional fields appear/disappear correctly
- [ ] Form validation works (required fields)
- [ ] Changes are saved when clicking "Save"
- [ ] Editor works in both English and Spanish

### ✅ Error Handling

- [ ] Missing `source_entry_id` shows helpful error
- [ ] Invalid configuration shows error message
- [ ] Service unavailable shows error with retry
- [ ] Network errors are caught and displayed
- [ ] Error messages are user-friendly and actionable

### ✅ Browser Compatibility

- [ ] Card works in Chrome/Edge (latest)
- [ ] Card works in Firefox (latest)
- [ ] Card works in Safari (latest, if available)
- [ ] Card works on mobile browsers
- [ ] No console errors in browser DevTools

### ✅ Performance

- [ ] Card loads quickly (< 2 seconds initial render)
- [ ] Data updates don't cause UI freezing
- [ ] Navigation is responsive
- [ ] No memory leaks (check with DevTools)

## Testing Scenarios

### Scenario 1: New Card Setup
1. Add new card to dashboard
2. Configure `source_entry_id` via visual editor
3. Verify card displays data correctly

### Scenario 2: Tariff Comparison
1. Enable tariff comparison
2. Select multiple tariffs
3. Verify comparison section displays correctly
4. Check that best tariff is highlighted

### Scenario 3: Period Navigation
1. Set default period to "day"
2. Navigate to previous/next periods
3. Verify data updates correctly
4. Change period via buttons
5. Verify chart/data updates

### Scenario 4: Error Recovery
1. Temporarily break integration service
2. Verify error message appears
3. Fix service
4. Click retry button
5. Verify data loads correctly

### Scenario 5: Configuration Migration
1. Test with old `entity`-based config (if applicable)
2. Verify migration warning appears
3. Update to new `source_entry_id` format
4. Verify card works correctly

## Quick Smoke Test (Before Each Commit)

- [ ] `npm run build` succeeds
- [ ] `npm run type-check` passes
- [ ] Card renders in Home Assistant
- [ ] No console errors

## Notes

- Always test in a real Home Assistant environment
- Use actual Octopus Energy España integration for realistic testing
- Test with different data scenarios (empty, partial, full data)
- Verify translations work in different languages (en, es, be)
