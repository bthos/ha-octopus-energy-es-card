---
description: AI rules derived by SpecStory from the project AI interaction history
globs: *
---

## PROJECT RULES & CODING STANDARDS

## TECH STACK

## WORKFLOW & RELEASE RULES

## DEBUGGING

## PROJECT DOCUMENTATION & CONTEXT SYSTEM

When implementing new cards or features for Home Assistant, follow these steps for Visual Editor integration:

1.  **Reference Implementation:** Check existing custom cards like `ha-price-timeline-card` on GitHub for examples of Visual Editor implementations, particularly how they use `getConfigElement`, `getStubConfig`, `customElements.define`, and card registration.

2.  **Card Picker Registration:** To ensure the card appears correctly in Home Assistant's card picker, register the card using the array format with a metadata object:

    ```typescript
    (window as any).customCards.push({
      type: "custom:your-card-name",
      name: "Your Card Name",
      description: "A description of your card",
      preview: false
    });
    ```

    Also, maintain backward compatibility by keeping the existing object assignment approach:

    ```typescript
    (window as any).customCards['your-card-name'] = YourCardClass;
    ```

3.  **Localization:** Implement a localization system for multi-language support. Use functions like `computeLabel()` and `computeHelper()` to manage translations.

4.  **Form Approach:** Utilize `ha-form` with a schema to define the card's options in the Visual Editor. This provides a structured and maintainable way to configure the card.

5.  **Conditional Fields:** Implement dynamic schemas for the `ha-form` based on the configuration state. Show or hide fields based on other configuration options to simplify the user interface.

6.  **HACS Configuration:** Ensure the `hacs.json` file is correctly configured. The `file` entry should only contain the bundle filename and not the full path. Also, ensure `"content_in_root": true` is set to trigger reload notifications after updates. For example:

    ```json
    {
      "name": "Your Card Name",
      "filename": "octopus-consumption-card.bundle.js",
      "description": "Your card description",
      "render_readme": true,
      "zip_release": true,
      "content_in_root": true,
      "homeassistant": "2021.1.0"
    }
    ```

7. **Card Configuration:** Lovelace cards must have a `setConfig` method to handle configuration from YAML.

8.  **Stylized DevTools Logging:** Implement stylized logs in DevTools using `console.log('%c…', 'CSS')` and `console.group()` for better structure. Follow this pattern:

    ```js
    console.group('%cYOUR_CARD_NAME', 'background:#c00;color:#fff;padding:2px 6px;border-radius:3px');
    console.log('%cVersion: 0.0.1', 'color:#c00;font-weight:bold');
    console.groupEnd();
    ```

    Use `console.groupCollapsed()` for collapsible blocks, `%c` for inline styles, and `console.table()` for data arrays. This is how Home Assistant custom cards typically log during Lovelace loading.

9. **Card Registration:** To ensure the card is correctly registered and found by Home Assistant, the following steps must be followed:

    *   **Remove `@customElement` decorators:** Remove any `@customElement` decorators from the card class to avoid conflicts with manual registration.
    *   **Register the custom element first:** Before any other operations, register the custom element using `customElements.define('your-card-name', YourCardClass)`.
    *   **Make the class available globally:** Ensure the card class is accessible globally for the Home Assistant card picker.
    *   **Initialize `customCards` array:** Check if `window.customCards` is defined. If not, initialize it as an array:

        ```typescript
        if (typeof (window as any).customCards === 'undefined') {
          (window as any).customCards = [];
        }
        ```

    *   **Add card metadata to the card picker:** Add the card metadata to the `customCards` array:

        ```typescript
        (window as any).customCards.push({
          type: 'custom:your-card-name',
          name: 'Your Card Name',
          preview: false,
          description: 'Your card description'
        });
        ```

    *   **Ensure registration with try-catch:** Surround the `customElements.define` call with a `try-catch` block to handle any registration errors:

        ```typescript
        try {
          if (!customElements.get('your-card-name')) {
            customElements.define('your-card-name', YourCardClass);
          }
        } catch (error) {
          console.error('Failed to register your-card-name:', error);
        }
        ```

10. **HACS Reload Notifications:** To trigger reload notifications after updates, ensure `"content_in_root": true` is set in `hacs.json`. The `filename` entry should only contain the bundle filename and not the full path.

11. **Refactor Card to Use Integration Services**: Follow this plan to refactor the Octopus Energy España consumption card to work with services instead of trying to extract entry_id from entity names:

    *   **Update configuration model** in `types.ts` - Replace `entity` field with `source_entry_id` (primary tariff) and enhance `tariff_entry_ids` structure. Add `consumption_sensor` as optional field. Keep backward compatibility with deprecated `entity` field.
    *   **Modify data loading logic** in `undefined` - Remove entity_id parsing code in `_loadData()`. Use `source_entry_id` directly for service calls to `octopus_energy_es.fetch_consumption` and `octopus_energy_es.compare_tariffs`. Add error handling for service failures.
    *   **Update editor selectors** in `undefined` - Replace manual text input for tariff_entry_ids with `config_entry` selector (integration: "octopus_energy_es"). Add `config_entry` selector for source_entry_id. Update schema builder to use new selectors.
    *   **Add migration logic** in `undefined` - Detect old configs with `entity` field. Attempt to extract entry_id from entity unique_id or show migration warning. Auto-populate `source_entry_id` if only one integration instance exists.
    *   **Update localization** in `localization.ts` - Add translations for new fields: source_entry_id (Primary Tariff/Tarifa Principal/Асноўны тарыф), select_tariff (Select Tariff/Seleccionar Tarifa/Выбраць тарыф), migration_warning.

12. **Chart Enhancements Based on Octopus Energy Implementation:** To improve the chart's appearance and user experience, consider the following enhancements, based on the analysis of Octopus Energy's consumption charts:

    *   **Enhance animation timing and effects** in `d3-bar-chart.ts` - increase default duration from 800ms to 2000ms, add staggered bar animations with per-element delay, and implement fade-in/out transitions for tooltips.
    *   **Add gradient bar fills** in `d3-bar-chart.ts` and `styles.ts` - create gradient definitions in SVG defs, support linear gradients from primary to lighter shade mimicking Octopus's pink gradient, make gradients configurable via theme.
    *   **Implement table view toggle** in `octopus-consumption-card.ts` and `types.ts` - add view toggle button between graph/table modes, create data table renderer showing consumption values with dates, support sorting and CSV export functionality.
    *   **Add accessibility improvements** across `d3-chart.ts`, `d3-bar-chart.ts`, `d3-line-chart.ts` - add ARIA labels for chart elements (`role="img"`, `aria-label`), provide keyboard navigation for interactive elements, add focus indicators and screen reader descriptions.
    *   **Enhance mobile touch support** in `d3-chart.ts` - implement touch event handlers for swipe navigation, add `touch-action: pan-y` to prevent default zoom, optimize tooltip positioning for mobile viewports.
    *   **Corner Radius Consistency:** Determine whether to use a fixed 8px corner radius for bars, matching Octopus Energy's style, or maintain the current responsive behavior using `min(barWidth * 0.15, 4)`.
    *   **Print Optimization:** Implement `@media print` styles for better printed charts, including hiding interactive elements and expanding to full page width.
    *   **Export Format Preferences:** Determine the preferred export formats (CSV only, or also JSON/PNG image export) and whether the export should include the chart image or just the raw data.

13. **D3.js Chart Enhancements (Based on Octopus Energy Analysis):** The goal is to match the polished chart experience of Octopus Energy while retaining our D3.js implementation. Victory.js requires React runtime and doesn't work in Web Component Shadow DOM, so we extract valuable vanilla JS/CSS patterns they use.

    *   **Accessibility Attributes:** Add comprehensive accessibility attributes in `d3-chart.ts` including `role="img"`, `aria-label`, `aria-labelledby` to the SVG root. Append a `<title>` element with a dynamic description. Make the chart keyboard-focusable with `tabindex="0"` and add `aria-live="polite"` region for data updates.
    *   **Responsive Container Pattern:** Implement a three-level wrapper in `octopus-consumption-card.ts` and `styles.ts` (outer 300px height, middle 100% relative, inner touch-optimized). Add a window resize listener with debounce. Maintain aspect ratio using CSS and match Octopus's exact `touch-action: auto` setup.
    *   **Touch Interaction Support:** Enhance touch interaction support in `styles.ts` and `d3-chart.ts` by adding `touch-action: pan-y pinch-zoom`, implement `-webkit-tap-highlight-color: transparent`, add `user-select: none` to prevent text selection, increase mobile tap targets to a minimum of 44x44px, and add touch event handlers for swipe navigation.
    *   **Animation Timings:** Match Octopus animation timings in `chart-utils.ts` and `d3-bar-chart.ts` by changing the default duration from 800ms to 2000ms, implement staggered bar animations with `delay = index * 50ms`, add fade transitions for tooltips (150ms), and use Victory's easing equivalent in D3 (`d3.easeExpOut`).
    *   **SVG Pattern Definitions:** Extract SVG pattern definitions for visual variety in `d3-bar-chart.ts`. Create SVG `<defs>` with linear gradients matching Octopus pink gradient (`#F050F8` → `#FA98FF`). Add pattern support for standing charges differentiation and make gradients configurable via `ChartColors` interface.

14. **Further Chart Considerations:**
    *   **Bundle Size Monitoring:** Our current approach is 68KB gzipped (vs Octopus's 800KB). Should we add bundle size CI checks to prevent bloat?
    *   **Keyboard Navigation Scope:** Should we support arrow keys to navigate between bars/data points, or just tab-focus for screen readers?
    *   **Window Resize Debounce Timing:** Octopus likely uses 150-300ms debounce for resize events. What threshold works best for Home Assistant dashboards?

15. **D3 Chart Implementation Closer to Octopus Energy Sample:**

    *   **Match exact animation timings** in `d3-bar-chart.ts` and `d3-line-chart.ts` - change default duration from 800ms to 2000ms (line 179), update bar stagger from proportional to fixed 50ms delay (line 182), reduce tooltip fade from 200ms to 150ms (line 169), keep `d3.easeExpOut` easing.
    *   **Fix bar corner radius to 8px** in `d3-bar-chart.ts` - replace responsive calculation `Math.min(currentBarWidth * 0.15, 4)` with fixed `8` on line 139 to match Octopus's consistent corner styling.
    *   **Add comprehensive accessibility attributes** in `d3-chart.ts` - add `role="img"`, `aria-labelledby`, and `<title>` element to SVG (lines 33-42), generate unique chart ID for ARIA linkage, set dynamic title text describing chart purpose, add `pointer-events: all` to SVG style.
    *   **Implement Victory-style touch optimization** in `styles.ts` and `d3-chart.ts` - add CSS for `touch-action: auto`, `-webkit-tap-highlight-color: transparent`, `user-select: none`, implement touch event handlers for swipe navigation in new `_addTouchSupport()` method with 50px threshold for horizontal swipes.
    *   **Add optional pink gradient fills** in `d3-bar-chart.ts` - create SVG `<defs>` with linear gradient `#F050F8` → `#FA98FF`, make gradient configurable via theme, apply `url(#octopus-pink-gradient)` to bar fills while maintaining CSS variable fallback.

16. **Further Considerations (Corner radius, resize debounce, gradient defaults):**
    *   **Corner radius: Fixed 8px vs responsive?** Octopus uses fixed 8px always. Our responsive `min(barWidth * 0.15, 4)` adapts to data density. Which provides better UX for varied datasets?
    *   **Window resize debounce timing?** Should implement 150-300ms debounce for resize events. What threshold prevents jank while feeling responsive?
    *   **Gradient as default or opt-in?** Pink gradient is Octopus branding. Should we make it the default, theme-dependent, or user-configurable via card config?