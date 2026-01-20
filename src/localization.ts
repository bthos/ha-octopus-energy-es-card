/**
 * Localization system for Octopus Energy España Consumption Card
 * 
 * Supports multiple languages for the visual editor
 */

export interface Translations {
  [key: string]: string;
}

export const translations: Record<string, Translations> = {
  en: {
    // Basic Settings
    "editor.basic_settings": "Basic Settings",
    "editor.source_entry_id_label": "Primary Tariff",
    "editor.source_entry_id_helper": "Select the Octopus Energy tariff to display consumption data for",
    // Display Options
    "editor.display_options": "Display Options",
    "editor.default_period_label": "Default Period",
    "editor.default_period_helper": "Initial time period to display",
    "editor.chart_type_label": "Chart Type",
    "editor.chart_type_helper": "Type of chart to display",
    "editor.show_navigation_label": "Show Navigation",
    "editor.show_navigation_helper": "Show period navigation buttons",
    
    // Tariff Comparison
    "editor.tariff_comparison": "Tariff Comparison",
    "editor.tariff_entry_ids_label": "Comparison Tariffs",
    "editor.tariff_entry_ids_helper": "Optional: Select additional tariffs to compare costs",
    
    // Cost Display
    "editor.cost_display": "Cost Display",
    "editor.show_cost_on_chart_label": "Show Cost on Chart",
    "editor.show_cost_on_chart_helper": "Display cost information on the chart",
    "editor.selected_tariff_for_cost_label": "Selected Tariff for Cost",
    "editor.selected_tariff_for_cost_helper": "Tariff entry ID to use for cost calculation",
    
    // Sensor Override
    "editor.consumption_sensor_label": "Consumption Sensor Override",
    "editor.consumption_sensor_helper": "Optional: Manually specify a consumption sensor instead of using integration data",
    
    // Migration messages
    "editor.migration_warning": "Configuration migration required. Please edit the card and select your tariff.",
    "editor.select_tariff": "Select a tariff to get started",
    
    // View Selection
    "editor.view_label": "View",
    "editor.view_helper": "Select which view to display",
    "editor.view_consumption": "Consumption Overview",
    "editor.view_heat_calendar": "Heat Calendar",
    "editor.view_week_analysis": "Week Analysis",
    "editor.view_tariff_comparison": "Tariff Comparison",
    
    // Chart Type Options
    "editor.chart_type_line": "Line",
    "editor.chart_type_bar": "Bar",
    "editor.chart_type_stacked_area": "Stacked Area",
    
    // Advanced Visualization Options
    "editor.advanced_visualization": "Advanced Visualization",
    "editor.show_period_distribution_label": "Show Period Distribution",
    "editor.show_period_distribution_helper": "Show P1/P2/P3 consumption breakdown on chart",
    "editor.show_moving_average_label": "Show Moving Average",
    "editor.show_moving_average_helper": "Display trend line with moving average",
    "editor.moving_average_days_label": "Moving Average Days",
    "editor.moving_average_days_helper": "Number of days for moving average calculation (default: 7)",
    
    // Period Options
    "editor.period_day": "Day",
    "editor.period_week": "Week",
    "editor.period_month": "Month",
    
    // Heat Calendar Options
    "editor.heat_calendar_period_label": "Heat Calendar Period",
    "editor.heat_calendar_period_helper": "Time period for heat calendar display",
    "editor.heat_calendar_period_month": "Month",
    "editor.heat_calendar_period_year": "Year",
    
    // Week Comparison Options
    "editor.show_week_comparison_label": "Show Week Comparison",
    "editor.show_week_comparison_helper": "Compare consumption across consecutive weeks",
    "editor.week_comparison_count_label": "Week Comparison Count",
    "editor.week_comparison_count_helper": "Number of weeks to compare (default: 2)",
    
    // Cost Trend Options
    "editor.show_cost_trend_label": "Show Cost Trend",
    "editor.show_cost_trend_helper": "Display cost trend with moving average",
    "editor.cost_moving_average_days_label": "Cost Moving Average Days",
    "editor.cost_moving_average_days_helper": "Number of days for cost moving average (default: 30)",
    
    // Tariff Chart Options
    "editor.show_tariff_chart_label": "Show Tariff Chart",
    "editor.show_tariff_chart_helper": "Display visual chart in tariff comparison section",
    
    // Chart Accessibility
    "chart.accessibility.title": "Energy consumption chart for selected period",
    "chart.accessibility.title_with_data": "Energy consumption chart. {period}. Total: {total} kWh",
    "chart.print.header": "Energy Consumption Chart",
    
  },
  es: {
    // Basic Settings
    "editor.basic_settings": "Configuración Básica",
    "editor.source_entry_id_label": "Tarifa Principal",
    "editor.source_entry_id_helper": "Selecciona la tarifa de Octopus Energy para mostrar datos de consumo",
    
    // Display Options
    "editor.display_options": "Opciones de Visualización",
    "editor.default_period_label": "Período Predeterminado",
    "editor.default_period_helper": "Período de tiempo inicial a mostrar",
    "editor.chart_type_label": "Tipo de Gráfico",
    "editor.chart_type_helper": "Tipo de gráfico a mostrar",
    "editor.show_navigation_label": "Mostrar Navegación",
    "editor.show_navigation_helper": "Mostrar botones de navegación de período",
    
    // Tariff Comparison
    "editor.tariff_comparison": "Comparación de Tarifas",
    "editor.tariff_entry_ids_label": "Tarifas de Comparación",
    "editor.tariff_entry_ids_helper": "Opcional: Selecciona tarifas adicionales para comparar costes",
    
    // Cost Display
    "editor.cost_display": "Visualización de Costes",
    "editor.show_cost_on_chart_label": "Mostrar Coste en Gráfico",
    "editor.show_cost_on_chart_helper": "Mostrar información de costes en el gráfico",
    "editor.selected_tariff_for_cost_label": "Tarifa Seleccionada para Coste",
    "editor.selected_tariff_for_cost_helper": "ID de entrada de tarifa a usar para cálculo de costes",
    
    // Sensor Override
    "editor.consumption_sensor_label": "Sensor de Consumo Manual",
    "editor.consumption_sensor_helper": "Opcional: Especifica manualmente un sensor de consumo en lugar de usar datos de integración",
    
    // Migration messages
    "editor.migration_warning": "Se requiere migración de configuración. Por favor, edita la tarjeta y selecciona tu tarifa.",
    "editor.select_tariff": "Selecciona una tarifa para comenzar",
    
    // View Selection
    "editor.view_label": "Vista",
    "editor.view_helper": "Selecciona qué vista mostrar",
    "editor.view_consumption": "Resumen de Consumo",
    "editor.view_heat_calendar": "Calendario de Calor",
    "editor.view_week_analysis": "Análisis Semanal",
    "editor.view_tariff_comparison": "Comparación de Tarifas",
    
    // Chart Type Options
    "editor.chart_type_line": "Línea",
    "editor.chart_type_bar": "Barras",
    "editor.chart_type_stacked_area": "Área Apilada",
    
    // Advanced Visualization Options
    "editor.advanced_visualization": "Visualización Avanzada",
    "editor.show_period_distribution_label": "Mostrar Distribución por Períodos",
    "editor.show_period_distribution_helper": "Mostrar desglose de consumo P1/P2/P3 en el gráfico",
    "editor.show_moving_average_label": "Mostrar Media Móvil",
    "editor.show_moving_average_helper": "Mostrar línea de tendencia con media móvil",
    "editor.moving_average_days_label": "Días de Media Móvil",
    "editor.moving_average_days_helper": "Número de días para el cálculo de la media móvil (predeterminado: 7)",
    
    // Period Options
    "editor.period_day": "Día",
    "editor.period_week": "Semana",
    "editor.period_month": "Mes",
    
    // Heat Calendar Options
    "editor.heat_calendar_period_label": "Período del Calendario de Calor",
    "editor.heat_calendar_period_helper": "Período de tiempo para el calendario de calor",
    "editor.heat_calendar_period_month": "Mes",
    "editor.heat_calendar_period_year": "Año",
    
    // Week Comparison Options
    "editor.show_week_comparison_label": "Mostrar Comparación Semanal",
    "editor.show_week_comparison_helper": "Comparar consumo entre semanas consecutivas",
    "editor.week_comparison_count_label": "Número de Semanas a Comparar",
    "editor.week_comparison_count_helper": "Número de semanas para comparar (predeterminado: 2)",
    
    // Cost Trend Options
    "editor.show_cost_trend_label": "Mostrar Tendencia de Costes",
    "editor.show_cost_trend_helper": "Mostrar tendencia de costes con media móvil",
    "editor.cost_moving_average_days_label": "Días de Media Móvil de Costes",
    "editor.cost_moving_average_days_helper": "Número de días para la media móvil de costes (predeterminado: 30)",
    
    // Tariff Chart Options
    "editor.show_tariff_chart_label": "Mostrar Gráfico de Tarifas",
    "editor.show_tariff_chart_helper": "Mostrar gráfico visual en la sección de comparación de tarifas",
    
    // Chart Accessibility
    "chart.accessibility.title": "Gráfico de consumo energético para el período seleccionado",
    "chart.accessibility.title_with_data": "Gráfico de consumo energético. {period}. Total: {total} kWh",
    "chart.print.header": "Gráfico de Consumo Energético",
    
  },
  be: {
    // Basic Settings
    "editor.basic_settings": "Асноўныя налады",
    "editor.source_entry_id_label": "Асноўны тарыф",
    "editor.source_entry_id_helper": "Выберыце тарыф Octopus Energy для адлюстравання даных спажывання",
    
    // Display Options
    "editor.display_options": "Параметры адлюстравання",
    "editor.default_period_label": "Перыяд па змаўчанні",
    "editor.default_period_helper": "Пачатковы часовы перыяд для адлюстравання",
    "editor.chart_type_label": "Тып дыяграмы",
    "editor.chart_type_helper": "Тып дыяграмы для адлюстравання",
    "editor.show_navigation_label": "Паказаць навігацыю",
    "editor.show_navigation_helper": "Паказаць кнопкі навігацыі па перыядах",
    
    // Tariff Comparison
    "editor.tariff_comparison": "Параўнанне тарыфаў",
    "editor.tariff_entry_ids_label": "Тарыфы для параўнання",
    "editor.tariff_entry_ids_helper": "Неабавязкова: Выберыце дадатковыя тарыфы для параўнання кошту",
    
    // Cost Display
    "editor.cost_display": "Адлюстраванне кошту",
    "editor.show_cost_on_chart_label": "Паказаць кошт на дыяграме",
    "editor.show_cost_on_chart_helper": "Адлюстраваць інфармацыю аб кошце на дыяграме",
    "editor.selected_tariff_for_cost_label": "Выбраны тарыф для кошту",
    "editor.selected_tariff_for_cost_helper": "ID запісу тарыфу для разліку кошту",
    
    // Sensor Override
    "editor.consumption_sensor_label": "Ручны сенсар спажывання",
    "editor.consumption_sensor_helper": "Неабавязкова: Укажыце сенсар спажывання ўручную замест выкарыстання даных інтэграцыі",
    
    // Migration messages
    "editor.migration_warning": "Патрабуецца міграцыя канфігурацыі. Калі ласка, адрэдагуйце картку і выберыце свой тарыф.",
    "editor.select_tariff": "Выберыце тарыф для пачатку",
    
    // View Selection
    "editor.view_label": "Выгляд",
    "editor.view_helper": "Выберыце, які выгляд адлюстраваць",
    "editor.view_consumption": "Агляд спажывання",
    "editor.view_heat_calendar": "Каляндар цяпла",
    "editor.view_week_analysis": "Тыднёвы аналіз",
    "editor.view_tariff_comparison": "Параўнанне тарыфаў",
    
    // Chart Type Options
    "editor.chart_type_line": "Лінія",
    "editor.chart_type_bar": "Слупкі",
    "editor.chart_type_stacked_area": "Стопачная дыяграма",
    
    // Advanced Visualization Options
    "editor.advanced_visualization": "Пашыраная візуалізацыя",
    "editor.show_period_distribution_label": "Паказаць размеркаванне па перыядах",
    "editor.show_period_distribution_helper": "Паказаць разбіўку спажывання P1/P2/P3 на дыяграме",
    "editor.show_moving_average_label": "Паказаць рухомае сярэдняе",
    "editor.show_moving_average_helper": "Паказаць лінію трэнду з рухомым сярэднім",
    "editor.moving_average_days_label": "Дні рухомага сярэдняга",
    "editor.moving_average_days_helper": "Колькасць дзён для разліку рухомага сярэдняга (па змаўчанні: 7)",
    
    // Period Options
    "editor.period_day": "Дзень",
    "editor.period_week": "Тыдзень",
    "editor.period_month": "Месяц",
    
    // Heat Calendar Options
    "editor.heat_calendar_period_label": "Перыяд каляндара цяпла",
    "editor.heat_calendar_period_helper": "Часавы перыяд для адлюстравання каляндара цяпла",
    "editor.heat_calendar_period_month": "Месяц",
    "editor.heat_calendar_period_year": "Год",
    
    // Week Comparison Options
    "editor.show_week_comparison_label": "Паказаць параўнанне тыдняў",
    "editor.show_week_comparison_helper": "Параўнаць спажыванне паміж паслядоўнымі тыднямі",
    "editor.week_comparison_count_label": "Колькасць тыдняў для параўнання",
    "editor.week_comparison_count_helper": "Колькасць тыдняў для параўнання (па змаўчанні: 2)",
    
    // Cost Trend Options
    "editor.show_cost_trend_label": "Паказаць трэнд кошту",
    "editor.show_cost_trend_helper": "Адлюстраваць трэнд кошту з рухомым сярэднім",
    "editor.cost_moving_average_days_label": "Дні рухомага сярэдняга кошту",
    "editor.cost_moving_average_days_helper": "Колькасць дзён для рухомага сярэдняга кошту (па змаўчанні: 30)",
    
    // Tariff Chart Options
    "editor.show_tariff_chart_label": "Паказаць дыяграму тарыфаў",
    "editor.show_tariff_chart_helper": "Адлюстраваць візуальную дыяграму ў раздзеле параўнання тарыфаў",
    
    // Chart Accessibility
    "chart.accessibility.title": "Дыяграма спажывання энергіі для выбранага перыяду",
    "chart.accessibility.title_with_data": "Дыяграма спажывання энергіі. {period}. Усяго: {total} кВт·г",
    "chart.print.header": "Дыяграма Спажывання Энергіі",
  }
};

/**
 * Get localized string
 */
export function localize(key: string, language: string = "en"): string {
  const lang = language.toLowerCase();
  const translation = translations[lang]?.[key] || translations["en"]?.[key];
  
  if (!translation) {
    // Fallback: return the key without prefix
    return key.replace("editor.", "").replace("chart.", "").replace(/_/g, " ");
  }
  
  return translation;
}

/**
 * Get localized string with variable substitution
 */
export function localizeWithVars(
  key: string, 
  vars: Record<string, string>, 
  language: string = "en"
): string {
  let translation = localize(key, language);
  
  // Replace variables in format {varName}
  Object.entries(vars).forEach(([varName, value]) => {
    translation = translation.replace(new RegExp(`\\{${varName}\\}`, 'g'), value);
  });
  
  return translation;
}

/**
 * Compute label for ha-form schema
 */
export function computeLabel(schema: any, language: string = "en"): string {
  const key = `editor.${schema.name}_label`;
  return localize(key, language);
}

/**
 * Compute helper text for ha-form schema
 */
export function computeHelper(schema: any, language: string = "en"): string {
  const key = `editor.${schema.name}_helper`;
  return localize(key, language);
}
