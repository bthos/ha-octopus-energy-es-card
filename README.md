# 📊 Octopus Energy España Consumption Card

[![HACS Validation](https://img.shields.io/github/actions/workflow/status/bthos/ha-octopus-energy-es-card/validate.yml?branch=main&label=HACS&logo=github)](https://github.com/bthos/ha-octopus-energy-es-card/actions/workflows/validate.yml)
[![Tests](https://img.shields.io/github/actions/workflow/status/bthos/ha-octopus-energy-es-card/test.yml?branch=main&label=Tests&logo=github)](https://github.com/bthos/ha-octopus-energy-es-card/actions/workflows/test.yml)

A Lovelace card for Home Assistant that displays consumption graphs and tariff comparisons for the [Octopus Energy España integration](https://github.com/bthos/ha-octopus-energy-es). Visualize your energy consumption data with interactive charts, compare different tariffs, and analyze costs with detailed breakdowns.

## 📸 Preview

![Octopus Energy España Consumption Card](https://raw.githubusercontent.com/bthos/ha-octopus-energy-es-card/main/.github/images/card-preview.svg)

## 💝 Support the Developer

**Love this integration?** Help support its development by joining Octopus Energy España!

When you sign up using the button below, **you'll receive 50€ credit** on your second electricity bill, and **the integration developer will also receive 50€** - a win-win that helps keep this project maintained and improved! 🎉

<div align="center">

[![Join Octopus Energy España - Get 50€](https://img.shields.io/badge/Join%20Octopus%20Energy-Get%2050€%20Credit-FF6B35?style=for-the-badge&logo=octopusdeploy&logoColor=white)](https://share.octopusenergy.es/graceful-banana-618)

</div>

✨ **100% renewable energy** • 📊 **Transparent pricing** • ⭐ **4.8/5 customer rating** • 🔓 **No permanence**

*La energía de la buena se comparte* - Your support helps make this integration better for everyone! 🌟

<div align="center">

[![Open your Home Assistant instance and open a repository inside the Home Assistant Community Store.](https://my.home-assistant.io/badges/hacs_repository.svg)](https://my.home-assistant.io/redirect/hacs_repository/?owner=bthos&repository=ha-octopus-energy-es-card&category=plugin)

</div>

## ✨ Features

- **Consumption Visualization**: Display consumption data for day/week/month periods
- **Period Navigation**: Navigate between periods with Previous/Next buttons
- **Tariff Comparison**: Compare multiple tariffs side-by-side with cost breakdown
- **Period Breakdown**: Visual breakdown of consumption by P1/P2/P3 periods for each tariff
- **Cost Analysis**: Detailed cost breakdown including energy, power, management fees, and taxes
- **Best Tariff Highlighting**: Automatically highlights the most economical tariff
- **Savings Calculation**: Shows potential savings when switching to the best tariff

## 📦 Installation

### Prerequisites

- **[Octopus Energy España Integration](https://github.com/bthos/ha-octopus-energy-es)** must be installed and configured
- At least one consumption sensor must be available (`sensor.octopus_energy_es_daily_consumption`)

### 🎯 HACS (Recommended)

1. Open **HACS** in Home Assistant
2. Go to **Frontend** (or **Plugins**)
3. Click the **three dots menu → Custom repositories**
4. Add this repository URL: `https://github.com/bthos/ha-octopus-energy-es-card`
5. Set category to **Plugin**
6. Search for **"Octopus Energy España Consumption Card"** and install
7. **Restart Home Assistant**

The card will be automatically registered as a Lovelace resource and will appear in the card picker with a visual editor.

**Visual Editor:** The card includes a built-in visual editor that appears when adding or editing the card through the UI. No YAML knowledge required!

**Note:** If the card doesn't appear in the card picker, make sure:
1. The resource is added in **Settings → Dashboards → Resources**
2. The resource URL is correct: `/hacsfiles/octopus_energy_es_card/octopus-consumption-card.bundle.js` (for HACS) or `/local/community/octopus_energy_es/octopus-consumption-card.bundle.js` (for manual installation)
3. The resource type is set to **JavaScript Module**
4. Home Assistant has been restarted after installation
5. Clear your browser cache or use incognito mode to ensure the latest version is loaded
6. Check the browser console (F12) for any JavaScript errors when loading the resource
7. Verify the file exists and is accessible at the specified path

### 📁 Manual Installation

1. Download `octopus-consumption-card.bundle.js` from the [latest release](https://github.com/bthos/ha-octopus-energy-es-card/releases)
2. Copy to your `www/community/octopus_energy_es/` directory:

   ```bash
   mkdir -p www/community/octopus_energy_es
   cp octopus-consumption-card.bundle.js www/community/octopus_energy_es/
   ```

3. Register the resource:
   - Go to **Settings → Dashboards → Resources**
   - Click **Add Resource**
   - Enter: `/local/community/octopus_energy_es/octopus-consumption-card.bundle.js`
   - Type: **JavaScript Module**
   - Click **Create**
4. **Restart Home Assistant**

## 🎨 Card Configuration

The card can be configured in two ways:

### Visual Editor (Recommended)

When adding the card through the Home Assistant UI, a visual editor is automatically available. The editor provides:

- **Entity Picker**: Select the consumption sensor from a filtered list
- **Form Fields**: Configure all options through user-friendly controls
- **Real-time Validation**: Immediate feedback on configuration errors
- **Conditional Fields**: Advanced options appear when relevant features are enabled

To use the visual editor:
1. Go to your dashboard in edit mode
2. Click "Add Card"
3. Search for "Octopus Energy España Consumption Card"
4. Configure the card using the visual editor

### YAML Configuration

You can also configure the card directly using YAML:

#### Basic Configuration

```yaml
type: custom:octopus-consumption-card
source_entry_id: "1a2b3c4d-5e6f-7g8h-9i0j-k1l2m3n4o5p6"
title: "Explora tu consumo"
```

### Full Configuration Example

```yaml
type: custom:octopus-consumption-card
source_entry_id: "1a2b3c4d-5e6f-7g8h-9i0j-k1l2m3n4o5p6"
title: "Explora tu consumo"
show_comparison: true
default_period: "week"  # "day", "week", "month"
chart_type: "line"  # "line", "bar"
show_tariff_comparison: true
tariff_entry_ids:
  - "6p5o4n3m-2l1k-0j9i-8h7g-6f5e4d3c2b1a"
  - "a1b2c3d4-e5f6-g7h8-i9j0-k1l2m3n4o5p6"
show_cost_on_chart: true
selected_tariff_for_cost: "6p5o4n3m-2l1k-0j9i-8h7g-6f5e4d3c2b1a"
show_navigation: true
consumption_sensor: "sensor.octopus_energy_es_daily_consumption"  # Optional override
```

### Card Options

| Option | Type | Required | Default | Description |
|--------|------|----------|---------|-------------|
| `source_entry_id` | string | ✅ Yes | - | Octopus Energy España integration config entry ID (UUID) for the primary tariff. Select from Visual Editor using the config entry picker. |
| `title` | string | ❌ No | `"Consumption"` | Card title displayed at the top of the card |
| `show_comparison` | boolean | ❌ No | `true` | Show period comparison section with summary statistics |
| `default_period` | string | ❌ No | `"week"` | Default period to display: `"day"`, `"week"`, or `"month"` |
| `chart_type` | string | ❌ No | `"line"` | Chart visualization type: `"line"` for line chart or `"bar"` for bar chart |
| `show_tariff_comparison` | boolean | ❌ No | `false` | Enable tariff comparison section showing costs for multiple tariffs |
| `tariff_entry_ids` | array | ❌ No | `[]` | List of additional tariff config entry IDs (UUIDs) to compare against the primary tariff (required if `show_tariff_comparison` is `true`) |
| `show_cost_on_chart` | boolean | ❌ No | `false` | Display cost information on the consumption chart using a secondary axis |
| `selected_tariff_for_cost` | string | ❌ No | - | Tariff config entry ID to use for cost display (required if `show_cost_on_chart` is `true`) |
| `show_navigation` | boolean | ❌ No | `true` | Show Previous/Next navigation buttons to move between periods |
| `consumption_sensor` | string | ❌ No | - | Optional: Manually specify a consumption sensor entity ID to override integration's automatic data fetching |

#### Configuration Notes

- **Config Entry ID (source_entry_id)**: This is the UUID of your Octopus Energy España integration instance in Home Assistant. Use the Visual Editor's config entry picker to select it easily, or find it in **Settings → Devices & Services → Octopus Energy España → ⚙️ (three dots) → Download Diagnostics** (look for `entry_id` in the JSON).
- **Tariff Entry IDs**: These are additional integration config entry IDs for tariff comparison. Each represents a different Octopus Energy tariff configured in Home Assistant. Use the Visual Editor's multi-select config entry picker to choose them.
- **Consumption Sensor Override**: By default, the card fetches consumption data directly from the integration using the `octopus_energy_es.fetch_consumption` service. Use `consumption_sensor` only if you need to override this behavior with a custom sensor.
- **Period Selection**: The card supports three period types:
  - `"day"`: Shows hourly consumption data for a single day
  - `"week"`: Shows hourly consumption data for a week (7 days)
  - `"month"`: Shows daily consumption data for a month
- **Visual Editor Features**:
  - Config entry picker for selecting integration instances
  - Multi-select for tariff comparison
  - Conditional display of tariff comparison options
  - Easy management of tariff entry IDs list
  - Intuitive switches and dropdowns for all options
- **Service-Based Architecture**: The card uses integration services (`octopus_energy_es.fetch_consumption`, `octopus_energy_es.compare_tariffs`) instead of parsing entity IDs, providing more reliable data access.
- **Error Handling**: The card displays user-friendly error messages if:
  - The config entry is not found
  - Service calls fail
  - Data is unavailable
  - Invalid configuration is provided

## 📊 Usage Examples

### Simple Consumption Graph

```yaml
type: custom:octopus-consumption-card
source_entry_id: "1a2b3c4d-5e6f-7g8h-9i0j-k1l2m3n4o5p6"
title: "My Consumption"
default_period: "day"
```

### Tariff Comparison

```yaml
type: custom:octopus-consumption-card
source_entry_id: "1a2b3c4d-5e6f-7g8h-9i0j-k1l2m3n4o5p6"  # Your primary tariff (e.g., Flexi)
title: "Compare Tariffs"
show_tariff_comparison: true
tariff_entry_ids:
  - "6p5o4n3m-2l1k-0j9i-8h7g-6f5e4d3c2b1a"  # Comparison tariff (e.g., Relax)
  - "a1b2c3d4-e5f6-g7h8-i9j0-k1l2m3n4o5p6"  # Another tariff (e.g., Solar)
default_period: "month"
```

### Cost Visualization

```yaml
type: custom:octopus-consumption-card
source_entry_id: "1a2b3c4d-5e6f-7g8h-9i0j-k1l2m3n4o5p6"
title: "Consumption & Cost"
show_cost_on_chart: true
selected_tariff_for_cost: "1a2b3c4d-5e6f-7g8h-9i0j-k1l2m3n4o5p6"
default_period: "week"
```

## 🔄 How It Works

The card uses Home Assistant services from the [Octopus Energy España Integration](https://github.com/bthos/ha-octopus-energy-es) to fetch data:

1. **Consumption Data**: Calls `octopus_energy_es.fetch_consumption` service
2. **Tariff Comparison**: Calls `octopus_energy_es.compare_tariffs` service
3. **Data Visualization**: Renders charts and tables using LitElement

## 🐛 Troubleshooting

### Error Handling

The card includes comprehensive error handling and will display user-friendly error messages in the following scenarios:

- **Config Entry Not Found**: If the specified config entry doesn't exist, the card will show: `"Config entry <entry_id> not found"`
- **Missing Config Entry ID**: If `source_entry_id` is not provided, the card will show: `"source_entry_id is required"`
- **Service Call Failures**: If the Octopus Energy España integration services fail, the card will display the error message returned by the service
- **Missing Data**: If consumption data is unavailable, the card will show an appropriate error message
- **Network Errors**: API failures are caught and displayed to the user

All errors are logged to the browser console for debugging purposes.

### Card Not Appearing in Card Picker

If the card doesn't appear when clicking "Add Card":

1. **Verify Resource Registration**:
   - Go to **Settings → Dashboards → Resources**
   - Ensure the resource is listed with URL: `/hacsfiles/octopus_energy_es_card/octopus-consumption-card.bundle.js` (HACS) or `/local/community/octopus_energy_es/octopus-consumption-card.bundle.js` (manual)
   - Resource type must be **JavaScript Module**

2. **Check Browser Console**:
   - Open browser DevTools (F12)
   - Go to Console tab
   - Look for errors when loading the resource
   - Common errors:
     - `Failed to load resource` - file path is incorrect
     - `Custom element not found` - element not registered
     - `SyntaxError` - bundle file is corrupted

3. **Clear Browser Cache**:
   - Hard refresh: `Ctrl+Shift+R` (Windows/Linux) or `Cmd+Shift+R` (Mac)
   - Or use incognito/private mode

4. **Verify File Access**:
   - Check that the bundle file exists at the specified path
   - For HACS: Check `config/www/community/octopus_energy_es_card/octopus-consumption-card.bundle.js`
   - For manual: Check `config/www/community/octopus_energy_es/octopus-consumption-card.bundle.js`

5. **Restart Home Assistant**:
   - After adding/updating the resource, restart Home Assistant completely
   - Not just reload the dashboard

6. **Check Card Type**:
   - When adding manually via YAML, use: `type: custom:octopus-consumption-card`
   - The card should appear in the card picker automatically if resource is registered correctly

### No Data Displayed

- Ensure the [Octopus Energy España Integration](https://github.com/bthos/ha-octopus-energy-es) is configured and sensors are available
- Check that the `entity` option points to a valid consumption sensor
- Verify the integration is working (check sensor states)
- Check the card's error message for specific issues
- Review Home Assistant logs for integration errors

### Tariff Comparison Not Working

- Ensure `tariff_entry_ids` contains valid entry IDs
- Verify that the integration services are available (`octopus_energy_es.compare_tariffs`)
- Check that `show_tariff_comparison` is set to `true`
- Ensure at least one tariff entry ID is provided
- Check Home Assistant logs for service call errors
- Note: Tariff comparison failures are logged as warnings but don't prevent the card from displaying consumption data

## 📚 Related Components

- **[Octopus Energy España Integration](https://github.com/bthos/ha-octopus-energy-es)**: Backend integration providing sensors and services
- **[Price Timeline Card](https://github.com/flixlix/pricetimeline-card)**: Compatible price visualization card

## 💬 Support

For issues, feature requests, or questions:

- 📝 Open an issue on [GitHub](https://github.com/bthos/ha-octopus-energy-es-card/issues)
- 🔍 Check existing issues for similar problems

## 🧪 Testing

This project uses TypeScript for type safety and manual testing in Home Assistant for validation.

### Type Checking

```bash
# Check TypeScript types without building
npm run type-check
```

### Build Verification

```bash
# Build the project (includes type checking)
npm run build
```

### Manual Testing

Before releasing, please follow the [Manual Testing Checklist](MANUAL_TESTING.md) to ensure all functionality works correctly in a real Home Assistant environment.

**Why Manual Testing?**
- Home Assistant cards are best tested in their actual runtime environment
- TypeScript provides compile-time type safety
- Real-world scenarios are more valuable than unit test mocks
- Faster development cycle without test infrastructure overhead

## 📄 License

This project is licensed under the **MIT License**.
