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

6.  **HACS Configuration:** Ensure the `hacs.json` file is correctly configured. The `file` entry should only contain the bundle filename and not the full path. For example:

    ```json
    {
      "name": "Your Card Name",
      "filename": "octopus-consumption-card.bundle.js",
      "description": "Your card description",
      "render_readme": true,
      "zip_release": true,
      "content_in_root": false,
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