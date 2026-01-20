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

### 📊 Visualization Options
- **Multiple Chart Types**: Line chart, bar chart, and **stacked area chart** for period distribution
- **D3.js Powered**: Built with D3.js for smooth, interactive SVG-based charts matching Octopus Energy España dashboard
- **Stacked Area Chart**: Visualize P1/P2/P3 consumption distribution over time with color-coded layers
- **Moving Average**: Display trend lines with configurable moving average (2-30 days)
- **Interactive Tooltips**: Hover over data points to see detailed consumption and date information
- **Period Navigation**: Navigate between day/week/month periods with Previous/Next buttons

### 💰 Tariff Analysis
- **Tariff Comparison**: Compare multiple tariffs side-by-side with detailed cost breakdown
- **Period Breakdown**: Visual breakdown of consumption by P1/P2/P3 periods for each tariff
- **Cost per kWh**: Shows actual cost per kWh for each tariff period (Peak/Flat/Valley)
- **Cost Analysis**: Detailed breakdown including energy, power, management fees, and taxes
- **Best Tariff Highlighting**: Automatically highlights the most economical tariff
- **Savings Calculation**: Shows potential savings when switching to the best tariff

### 📈 Advanced Analytics
- **Consumption Summary**: At-a-glance view of period distribution with percentages
- **Period Distribution**: See how your consumption splits across Peak (P1), Flat (P2), and Valley (P3) hours
- **Cost Optimization Insights**: Identify which periods consume the most and cost the most

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
2. The resource URL is correct: `/hacsfiles/ha-octopus-energy-es-card/octopus-consumption-card.bundle.js` (for HACS) or `/local/community/ha-octopus-energy-es-card/octopus-consumption-card.bundle.js` (for manual installation)
3. The resource type is set to **JavaScript Module**
4. Home Assistant has been restarted after installation
5. Clear your browser cache or use incognito mode to ensure the latest version is loaded
6. Check the browser console (F12) for any JavaScript errors when loading the resource
7. Verify the file exists and is accessible at the specified path

### 📁 Manual Installation

1. Download `octopus-consumption-card.bundle.js` from the [latest release](https://github.com/bthos/ha-octopus-energy-es-card/releases)
2. Copy to your `www/community/ha-octopus-energy-es-card/` directory:

   ```bash
   mkdir -p www/community/ha-octopus-energy-es-card
   cp octopus-consumption-card.bundle.js www/community/ha-octopus-energy-es-card/
   ```

3. Register the resource:
   - Go to **Settings → Dashboards → Resources**
   - Click **Add Resource**
   - Enter: `/local/community/ha-octopus-energy-es-card/octopus-consumption-card.bundle.js`
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

### Full Configuration Example (Consumption View)

```yaml
type: custom:octopus-consumption-card
source_entry_id: "1a2b3c4d-5e6f-7g8h-9i0j-k1l2m3n4o5p6"
view: "consumption"  # "consumption", "heat-calendar", "week-analysis", "tariff-comparison"
title: "Explora tu consumo"
default_period: "week"  # "day", "week", "month"
chart_type: "stacked-area"  # "line", "bar", "stacked-area"
show_cost_on_chart: true
selected_tariff_for_cost: "6p5o4n3m-2l1k-0j9i-8h7g-6f5e4d3c2b1a"
show_navigation: true
show_period_distribution: true
show_moving_average: true
moving_average_days: 7
consumption_sensor: "sensor.octopus_energy_es_daily_consumption"  # Optional override
```

### Card Options

| Option | Type | Required | Default | Description |
|--------|------|----------|---------|-------------|
| `source_entry_id` | string | ✅ Yes | - | Octopus Energy España integration config entry ID (UUID) for the primary tariff. Select from Visual Editor using the config entry picker. |
| `view` | string | ❌ No | `"consumption"` | View to display: `"consumption"` for time-series charts, `"heat-calendar"` for heatmap calendar, `"week-analysis"` for week comparison, `"tariff-comparison"` for tariff comparison |
| `title` | string | ❌ No | `"Consumption"` | Card title displayed at the top of the card |
| `default_period` | string | ❌ No | `"week"` | Default period to display: `"day"`, `"week"`, or `"month"` (only for consumption view) |
| `chart_type` | string | ❌ No | `"line"` | Chart visualization type: `"line"` for line chart, `"bar"` for bar chart, or `"stacked-area"` for period distribution (only for consumption view) |
| `tariff_entry_ids` | array | ❌ No | `[]` | List of additional tariff config entry IDs (UUIDs) to compare against the primary tariff (required for tariff-comparison view) |
| `show_cost_on_chart` | boolean | ❌ No | `false` | Display cost information on the consumption chart using a secondary axis |
| `selected_tariff_for_cost` | string | ❌ No | - | Tariff config entry ID to use for cost display (required if `show_cost_on_chart` is `true`) |
| `show_navigation` | boolean | ❌ No | `true` | Show Previous/Next navigation buttons to move between periods |
| `show_period_distribution` | boolean | ❌ No | `false` | Show P1/P2/P3 consumption breakdown on chart (works with stacked-area chart type) |
| `show_moving_average` | boolean | ❌ No | `false` | Display trend line with moving average calculation |
| `moving_average_days` | number | ❌ No | `7` | Number of days for moving average calculation (2-30) |
| `consumption_sensor` | string | ❌ No | - | Optional: Manually specify a consumption sensor entity ID to override integration's automatic data fetching |

#### Configuration Notes

- **Config Entry ID (source_entry_id)**: This is the UUID of your Octopus Energy España integration instance in Home Assistant. Use the Visual Editor's config entry picker to select it easily, or find it in **Settings → Devices & Services → Octopus Energy España → ⚙️ (three dots) → Download Diagnostics** (look for `entry_id` in the JSON).
- **Tariff Entry IDs**: These are additional integration config entry IDs for tariff comparison. Each represents a different Octopus Energy tariff configured in Home Assistant. Use the Visual Editor's multi-select config entry picker to choose them.
- **Consumption Sensor Override**: By default, the card fetches consumption data directly from the integration using the `octopus_energy_es.fetch_consumption` service. Use `consumption_sensor` only if you need to override this behavior with a custom sensor.
- **View Selection**: The card supports four views:
  - `"consumption"`: Time-series charts with consumption data (default)
  - `"heat-calendar"`: Heatmap calendar visualization
  - `"week-analysis"`: Week-over-week comparison
  - `"tariff-comparison"`: Compare multiple tariffs side-by-side
- **Period Selection** (for consumption view): The card supports three period types:
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
view: "consumption"
title: "My Consumption"
default_period: "day"
```

### Stacked Area Chart (Period Distribution)

Visualize how your consumption is distributed across P1 (Peak), P2 (Flat), and P3 (Valley) periods:

```yaml
type: custom:octopus-consumption-card
source_entry_id: "1a2b3c4d-5e6f-7g8h-9i0j-k1l2m3n4o5p6"
view: "consumption"
title: "Consumption by Period"
chart_type: "stacked-area"
default_period: "week"
show_period_distribution: true
```

This chart helps you understand:
- Which periods consume the most energy
- Opportunities to shift consumption to cheaper periods (P3 Valley)
- Daily patterns of consumption across different tariff periods

### Consumption with Moving Average

Track trends over time with a moving average line:

```yaml
type: custom:octopus-consumption-card
source_entry_id: "1a2b3c4d-5e6f-7g8h-9i0j-k1l2m3n4o5p6"
view: "consumption"
title: "Consumption Trends"
show_moving_average: true
moving_average_days: 7
default_period: "month"
```

Perfect for:
- Identifying consumption trends
- Spotting seasonal variations
- Monitoring energy-saving efforts

### Tariff Comparison View

```yaml
type: custom:octopus-consumption-card
source_entry_id: "1a2b3c4d-5e6f-7g8h-9i0j-k1l2m3n4o5p6"  # Your primary tariff (e.g., Flexi)
view: "tariff-comparison"
title: "Compare Tariffs"
tariff_entry_ids:
  - "6p5o4n3m-2l1k-0j9i-8h7g-6f5e4d3c2b1a"  # Comparison tariff (e.g., Relax)
  - "a1b2c3d4-e5f6-g7h8-i9j0-k1l2m3n4o5p6"  # Another tariff (e.g., Solar)
show_tariff_chart: true
```

Shows:
- Cost per kWh for each period (P1/P2/P3)
- Total cost breakdown by tariff
- Consumption distribution summary
- Potential savings with best tariff

### Cost Visualization (Consumption View)

```yaml
type: custom:octopus-consumption-card
source_entry_id: "1a2b3c4d-5e6f-7g8h-9i0j-k1l2m3n4o5p6"
view: "consumption"
title: "Consumption & Cost"
show_cost_on_chart: true
selected_tariff_for_cost: "1a2b3c4d-5e6f-7g8h-9i0j-k1l2m3n4o5p6"
show_moving_average: true
moving_average_days: 7
default_period: "week"
```

### Complete Analysis Dashboard (Consumption View)

Combine all features for comprehensive insights:

```yaml
type: custom:octopus-consumption-card
source_entry_id: "1a2b3c4d-5e6f-7g8h-9i0j-k1l2m3n4o5p6"
view: "consumption"
title: "Energy Analysis"
chart_type: "stacked-area"
show_period_distribution: true
show_moving_average: true
moving_average_days: 7
default_period: "month"
```

### Heat Calendar View

Visualize consumption patterns as a heatmap calendar:

```yaml
type: custom:octopus-consumption-card
source_entry_id: "1a2b3c4d-5e6f-7g8h-9i0j-k1l2m3n4o5p6"
view: "heat-calendar"
title: "Consumption Heatmap"
heat_calendar_period: "month"  # "month" or "year"
show_navigation: true
```

### Week Analysis View

Compare consumption across multiple weeks:

```yaml
type: custom:octopus-consumption-card
source_entry_id: "1a2b3c4d-5e6f-7g8h-9i0j-k1l2m3n4o5p6"
view: "week-analysis"
title: "Week Comparison"
show_week_comparison: true
week_comparison_count: 4
show_navigation: true
```

## 📖 Understanding Your Energy Data

### Spanish Tariff Periods Explained

In Spain, electricity tariffs are typically divided into three periods (P1/P2/P3) with different pricing:

- **P1 (Peak / Punta)** 🔴: Highest cost per kWh
  - Weekdays: 10:00-14:00 and 18:00-22:00
  - Most expensive - minimize usage during these hours

- **P2 (Flat / Llano)** 🟠: Medium cost per kWh
  - Weekdays: 08:00-10:00, 14:00-18:00, and 22:00-00:00
  - Saturdays: 08:00-14:00 and 18:00-22:00
  - Moderate pricing

- **P3 (Valley / Valle)** 🟢: Lowest cost per kWh
  - Weekdays: 00:00-08:00
  - Saturdays: 00:00-08:00, 14:00-18:00, and 22:00-00:00
  - Sundays and holidays: All day
  - Most economical - shift consumption here when possible

### Reading the Stacked Area Chart

The stacked area chart shows how your consumption is distributed across these three periods:

- **Green (P3)**: Your valley consumption - the cheapest hours
- **Orange (P2)**: Your flat consumption - moderate pricing
- **Red (P1)**: Your peak consumption - the most expensive

**Optimization Tip**: If you see a lot of red (P1), consider:
- Running dishwashers/washing machines during P3 (overnight or weekends)
- Charging electric vehicles during P3 hours
- Using timers for water heaters to heat during P3

### Understanding Cost per kWh

In the tariff comparison section, you'll see "€X.XXX/kWh" for each period:

- This shows the actual average cost you're paying per unit of energy
- Compare these across tariffs to understand which offers better rates for your usage pattern
- If you consume mostly during P3 but have high P3 costs, consider switching tariffs

### Moving Average Trends

The moving average line helps identify patterns:

- **Downward trend**: Your consumption is decreasing (good!)
- **Upward trend**: Your consumption is increasing (investigate why)
- **Flat trend**: Consistent consumption
- **Spikes**: Look for unusual days - what caused the spike?

### Example Scenario

Let's say your comparison shows:
- P1 (Peak): 136.6 kWh (32.6%) at €0.454/kWh = €61.97
- P2 (Flat): 193.8 kWh (46.3%) at €0.240/kWh = €46.51
- P3 (Valley): 108.4 kWh (25.9%) at €0.200/kWh = €21.68

**Analysis**: Despite P1 being only 32.6% of consumption, it costs almost as much as the other two periods combined! 

**Action**: Try shifting 50 kWh from P1 to P3:
- New P1: 86.6 kWh at €0.454/kWh = €39.32 (save €22.65)
- New P3: 158.4 kWh at €0.200/kWh = €31.68 (extra €10)
- **Net savings**: €12.65 per period!

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
   - Ensure the resource is listed with URL: `/hacsfiles/ha-octopus-energy-es-card/octopus-consumption-card.bundle.js` (HACS) or `/local/community/ha-octopus-energy-es-card/octopus-consumption-card.bundle.js` (manual)
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
   - For HACS: Check `config/www/community/ha-octopus-energy-es-card/octopus-consumption-card.bundle.js`
   - For manual: Check `config/www/community/ha-octopus-energy-es-card/octopus-consumption-card.bundle.js`

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

- Ensure `view: "tariff-comparison"` is set
- Ensure `tariff_entry_ids` contains valid entry IDs
- Verify that the integration services are available (`octopus_energy_es.compare_tariffs`)
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
