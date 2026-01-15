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