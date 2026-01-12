# 📊 Octopus Energy España Consumption Card

[![HACS Validation](https://img.shields.io/github/actions/workflow/status/bthos/ha-octopus-energy-es-card/validate.yml?branch=main&label=HACS&logo=github)](https://github.com/bthos/ha-octopus-energy-es-card/actions/workflows/validate.yml)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![Home Assistant](https://img.shields.io/badge/home%20assistant-2023.1%2B-blue.svg)](https://www.home-assistant.io/)

A Lovelace card for Home Assistant that displays consumption graphs and tariff comparisons for the Octopus Energy España integration. Visualize your energy consumption data with interactive charts, compare different tariffs, and analyze costs with detailed breakdowns.

## 📸 Preview

![Octopus Energy España Consumption Card](https://raw.githubusercontent.com/bthos/ha-octopus-energy-es-card/main/.github/images/card-preview.svg)

## 💝 Support the Developer

**Love this card?** Help support its development by joining Octopus Energy España!

When you sign up using the button below, **you'll receive 50€ credit** on your second electricity bill, and **the card developer will also receive 50€** - a win-win that helps keep this project maintained and improved! 🎉

**[Join Octopus Energy España - Get 50€](https://octopusenergy.es/afiliados/bthos)**

✨ **100% renewable energy** • 📊 **Transparent pricing** • ⭐ **4.8/5 customer rating** • 🔓 **No permanence**

_La energía de la buena se comparte_ - Your support helps make this card better for everyone! 🌟

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

- **Octopus Energy España Integration** must be installed and configured
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
| `entity` | string | ✅ Yes | - | Consumption sensor entity ID |
| `title` | string | ❌ No | "Consumption" | Card title |
| `show_comparison` | boolean | ❌ No | `true` | Show period comparison section |
| `default_period` | string | ❌ No | `"week"` | Default period: `"day"`, `"week"`, or `"month"` |
| `chart_type` | string | ❌ No | `"line"` | Chart type: `"line"` or `"bar"` |
| `show_tariff_comparison` | boolean | ❌ No | `false` | Show tariff comparison section |
| `tariff_entry_ids` | array | ❌ No | `[]` | List of tariff entry IDs to compare |
| `show_cost_on_chart` | boolean | ❌ No | `false` | Show cost on consumption chart (secondary axis) |
| `selected_tariff_for_cost` | string | ❌ No | - | Tariff entry ID to use for cost display |
| `show_navigation` | boolean | ❌ No | `true` | Show period navigation controls |

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

The card uses Home Assistant services to fetch data:

1. **Consumption Data**: Calls `octopus_energy_es.fetch_consumption` service
2. **Tariff Comparison**: Calls `octopus_energy_es.compare_tariffs` service
3. **Data Visualization**: Renders charts and tables using LitElement

## 🐛 Troubleshooting

### Card Not Appearing

- Verify the card resource is registered in Lovelace Resources
- Check that the file exists: `/hacsfiles/octopus_energy_es/octopus-consumption-card.bundle.js`
- Restart Home Assistant after installation

### No Data Displayed

- Ensure the integration is configured and sensors are available
- Check that the `entity` option points to a valid consumption sensor
- Verify the integration is working (check sensor states)

### Tariff Comparison Not Working

- Ensure `tariff_entry_ids` contains valid entry IDs
- Verify that the integration services are available
- Check Home Assistant logs for service call errors

## 📚 Related Components

- **[Octopus Energy España Integration](https://github.com/bthos/ha-octopus-energy-es)**: Backend integration providing sensors and services
- **[Price Timeline Card](https://github.com/flixlix/pricetimeline-card)**: Compatible price visualization card

## 💬 Support

For issues, feature requests, or questions:

- 📝 Open an issue on [GitHub](https://github.com/bthos/ha-octopus-energy-es-card/issues)
- 🔍 Check existing issues for similar problems

## 📄 License

This project is licensed under the **MIT License**.
