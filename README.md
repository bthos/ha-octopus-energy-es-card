# 📊 Octopus Energy España Consumption Card

[![HACS Validation](https://img.shields.io/github/actions/workflow/status/bthos/ha-octopus-energy-es-card/validate.yml?branch=main&label=HACS&logo=github)](https://github.com/bthos/ha-octopus-energy-es-card/actions/workflows/validate.yml)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![Home Assistant](https://img.shields.io/badge/home%20assistant-2023.1%2B-blue.svg)](https://www.home-assistant.io/)

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

The card will be automatically registered as a Lovelace resource.

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

### Basic Configuration

```yaml
type: custom:octopus-consumption-card
entity: sensor.octopus_energy_es_daily_consumption
title: "Explora tu consumo"
```

### Full Configuration Example

```yaml
type: custom:octopus-consumption-card
entity: sensor.octopus_energy_es_daily_consumption
title: "Explora tu consumo"
show_comparison: true
default_period: "week"  # "day", "week", "month"
chart_type: "line"  # "line", "bar"
show_tariff_comparison: true
tariff_entry_ids:
  - "entry_id_1"
  - "entry_id_2"
show_cost_on_chart: true
selected_tariff_for_cost: "entry_id_1"
show_navigation: true
```

### Card Options

| Option | Type | Required | Default | Description |
|--------|------|----------|---------|-------------|
| `entity` | string | ✅ Yes | - | Consumption sensor entity ID from Octopus Energy España integration (e.g., `sensor.octopus_energy_es_daily_consumption`) |
| `title` | string | ❌ No | `"Consumption"` | Card title displayed at the top of the card |
| `show_comparison` | boolean | ❌ No | `true` | Show period comparison section with summary statistics |
| `default_period` | string | ❌ No | `"week"` | Default period to display: `"day"`, `"week"`, or `"month"` |
| `chart_type` | string | ❌ No | `"line"` | Chart visualization type: `"line"` for line chart or `"bar"` for bar chart |
| `show_tariff_comparison` | boolean | ❌ No | `false` | Enable tariff comparison section showing costs for multiple tariffs |
| `tariff_entry_ids` | array | ❌ No | `[]` | List of tariff entry IDs to compare (required if `show_tariff_comparison` is `true`) |
| `show_cost_on_chart` | boolean | ❌ No | `false` | Display cost information on the consumption chart using a secondary axis |
| `selected_tariff_for_cost` | string | ❌ No | - | Tariff entry ID to use for cost display (required if `show_cost_on_chart` is `true`) |
| `show_navigation` | boolean | ❌ No | `true` | Show Previous/Next navigation buttons to move between periods |

#### Configuration Notes

- **Entity ID**: Must be a valid consumption sensor from the Octopus Energy España integration. The card automatically extracts the `entry_id` from the entity ID or entity attributes.
- **Tariff Entry IDs**: These are the integration entry IDs configured in Home Assistant. You can find them in the integration settings or entity attributes.
- **Period Selection**: The card supports three period types:
  - `"day"`: Shows hourly consumption data for a single day
  - `"week"`: Shows hourly consumption data for a week (7 days)
  - `"month"`: Shows daily consumption data for a month
- **Error Handling**: The card displays user-friendly error messages if:
  - The entity is not found
  - The entry_id cannot be extracted
  - Service calls fail
  - Data is unavailable

## 📊 Usage Examples

### Simple Consumption Graph

```yaml
type: custom:octopus-consumption-card
entity: sensor.octopus_energy_es_daily_consumption
title: "My Consumption"
default_period: "day"
```

### Tariff Comparison

```yaml
type: custom:octopus-consumption-card
entity: sensor.octopus_energy_es_daily_consumption
title: "Compare Tariffs"
show_tariff_comparison: true
tariff_entry_ids:
  - "flexi_entry_id"
  - "relax_entry_id"
  - "solar_entry_id"
default_period: "month"
```

### Cost Visualization

```yaml
type: custom:octopus-consumption-card
entity: sensor.octopus_energy_es_daily_consumption
title: "Consumption & Cost"
show_cost_on_chart: true
selected_tariff_for_cost: "flexi_entry_id"
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

- **Entity Not Found**: If the specified entity doesn't exist, the card will show: `"Entity <entity_id> not found"`
- **Entry ID Extraction Failed**: If the card cannot extract the entry_id from the entity, it will show: `"Could not extract entry_id from entity <entity_id>. Please check entity ID format."`
- **Service Call Failures**: If the Octopus Energy España integration services fail, the card will display the error message returned by the service
- **Missing Data**: If consumption data is unavailable, the card will show an appropriate error message
- **Network Errors**: API failures are caught and displayed to the user

All errors are logged to the browser console for debugging purposes.

### Card Not Appearing

- Verify the card resource is registered in Lovelace Resources
- Check that the file exists: `/hacsfiles/octopus_energy_es/octopus-consumption-card.bundle.js`
- Restart Home Assistant after installation
- Check browser console for JavaScript errors

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

This project includes unit tests using [@web/test-runner](https://modern-web.dev/docs/test-runner/overview/) and [@open-wc/testing](https://open-wc.org/docs/testing/testing-package/).

### Running Tests

```bash
# Install dependencies (if not already installed)
npm install

# Run tests once
npm test

# Run tests in watch mode (for development)
npm run test:watch

# Run tests with coverage report
npm run test:coverage
```

### Test Structure

- `test/octopus-consumption-card.test.ts` - Component tests
- `test/types.test.ts` - Type definition tests
- `test/test-helpers.ts` - Test utilities and mocks

See [test/README.md](test/README.md) for more details.

## 📄 License

This project is licensed under the **MIT License**.
