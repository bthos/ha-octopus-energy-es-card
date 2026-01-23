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
    "editor.view_consumption": "Consumption",
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
    "editor.moving_average_days_label": "Moving Average Period",
    "editor.moving_average_days_helper": "Number of periods for moving average calculation. Hours for day view, days for week/month views (default: 7)",
    
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
    "editor.cost_moving_average_days_label": "Cost Moving Average Period",
    "editor.cost_moving_average_days_helper": "Number of periods for cost moving average. Hours for day view, days for week/month views (default: 30)",
    
    // Tariff Chart Options
    "editor.show_tariff_chart_label": "Show Tariff Chart",
    "editor.show_tariff_chart_helper": "Display visual chart in tariff comparison section",
    
    // Chart Accessibility
    "chart.accessibility.title": "Energy consumption chart for selected period",
    "chart.accessibility.title_with_data": "Energy consumption chart. {period}. Total: {total} kWh",
    "chart.print.header": "Energy Consumption Chart",
    
    // Card UI Text
    "card.loading": "Loading consumption data...",
    "card.error.configuration_required": "Configuration Required",
    "card.error.unable_to_load": "Unable to Load Data",
    "card.error.config_help": "Click the ⋮ menu in the top-right corner of this card and select Edit to configure it.",
    "card.button.retry": "Retry",
    "card.button.previous": "← Previous",
    "card.button.next": "Next →",
    "card.title.electricity": "Electricity",
    "card.heat_calendar.unavailable": "Heat Calendar Unavailable",
    "card.heat_calendar.unavailable_details": "Heat calendar view requires consumption data. Please ensure data is available for the selected period.",
    "card.heat_calendar.intensity_info": "Intensity levels are calculated based on consumption percentiles: Low (bottom 33%), Medium (middle 33%), High (top 33%)",
    "card.heat_calendar.intensity_label": "Intensity Levels",
    "card.heat_calendar.intensity_low_tooltip": "Low intensity: Bottom 33% of consumption values",
    "card.heat_calendar.intensity_medium_tooltip": "Medium intensity: Middle 33% of consumption values",
    "card.heat_calendar.intensity_high_tooltip": "High intensity: Top 33% of consumption values",
    "card.week_comparison.no_data": "No week comparison data available",
    "card.week_comparison.incomplete": "Incomplete",
    "card.week_comparison.days_available": "Days Available",
    "card.week_comparison.days": "days",
    "card.week_comparison.forecast": "Forecast",
    "card.week_comparison.consumption": "Consumption",
    "card.week_comparison.cost": "Cost",
    "card.week_comparison.forecast_comparison_tooltip": "Comparison based on forecast values",
    "card.tariff_comparison.loading": "Loading tariff comparison...",
    "card.tariff_comparison.info": "Comparison based on last 365 days of consumption data",
    "card.no_data": "No consumption data available",
    "card.stacked_area.unavailable": "Stacked Area Chart Unavailable",
    "card.stacked_area.unavailable_details": "Stacked area chart requires period breakdown data (P1/P2/P3). This data may not be available for the selected tariff or period.",
    
    // Month names (short)
    "card.month.jan": "Jan",
    "card.month.feb": "Feb",
    "card.month.mar": "Mar",
    "card.month.apr": "Apr",
    "card.month.may": "May",
    "card.month.jun": "Jun",
    "card.month.jul": "Jul",
    "card.month.aug": "Aug",
    "card.month.sep": "Sep",
    "card.month.oct": "Oct",
    "card.month.nov": "Nov",
    "card.month.dec": "Dec",
    
    // Month names (long)
    "card.month.long.jan": "January",
    "card.month.long.feb": "February",
    "card.month.long.mar": "March",
    "card.month.long.apr": "April",
    "card.month.long.may": "May",
    "card.month.long.jun": "June",
    "card.month.long.jul": "July",
    "card.month.long.aug": "August",
    "card.month.long.sep": "September",
    "card.month.long.oct": "October",
    "card.month.long.nov": "November",
    "card.month.long.dec": "December",
    
    // Date formatting
    "card.date.of": "of",
    
    // Day names (short)
    "card.day.mon": "Mon",
    "card.day.tue": "Tue",
    "card.day.wed": "Wed",
    "card.day.thu": "Thu",
    "card.day.fri": "Fri",
    "card.day.sat": "Sat",
    "card.day.sun": "Sun",
    
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
    "editor.moving_average_days_label": "Período de Media Móvil",
    "editor.moving_average_days_helper": "Número de períodos para el cálculo de la media móvil. Horas para vista diaria, días para vistas semanales/mensuales (predeterminado: 7)",
    
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
    "editor.cost_moving_average_days_label": "Período de Media Móvil de Costes",
    "editor.cost_moving_average_days_helper": "Número de períodos para la media móvil de costes. Horas para vista diaria, días para vistas semanales/mensuales (predeterminado: 30)",
    
    // Tariff Chart Options
    "editor.show_tariff_chart_label": "Mostrar Gráfico de Tarifas",
    "editor.show_tariff_chart_helper": "Mostrar gráfico visual en la sección de comparación de tarifas",
    
    // Chart Accessibility
    "chart.accessibility.title": "Gráfico de consumo energético para el período seleccionado",
    "chart.accessibility.title_with_data": "Gráfico de consumo energético. {period}. Total: {total} kWh",
    "chart.print.header": "Gráfico de Consumo Energético",
    
    // Card UI Text
    "card.loading": "Cargando datos de consumo...",
    "card.error.configuration_required": "Configuración Requerida",
    "card.error.unable_to_load": "No se Puede Cargar Datos",
    "card.error.config_help": "Haz clic en el menú ⋮ en la esquina superior derecha de esta tarjeta y selecciona Editar para configurarla.",
    "card.button.retry": "Reintentar",
    "card.button.previous": "← Anterior",
    "card.button.next": "Siguiente →",
    "card.title.electricity": "Electricidad",
    "card.heat_calendar.unavailable": "Calendario de Calor No Disponible",
    "card.heat_calendar.unavailable_details": "La vista del calendario de calor requiere datos de consumo. Por favor, asegúrate de que los datos estén disponibles para el período seleccionado.",
    "card.heat_calendar.intensity_info": "Los niveles de intensidad se calculan según percentiles de consumo: Bajo (33% inferior), Medio (33% medio), Alto (33% superior)",
    "card.heat_calendar.intensity_label": "Niveles de Intensidad",
    "card.heat_calendar.intensity_low_tooltip": "Intensidad baja: 33% inferior de valores de consumo",
    "card.heat_calendar.intensity_medium_tooltip": "Intensidad media: 33% medio de valores de consumo",
    "card.heat_calendar.intensity_high_tooltip": "Intensidad alta: 33% superior de valores de consumo",
    "card.week_comparison.no_data": "No hay datos de comparación semanal disponibles",
    "card.week_comparison.incomplete": "Incompleta",
    "card.week_comparison.days_available": "Días Disponibles",
    "card.week_comparison.days": "días",
    "card.week_comparison.forecast": "Pronóstico",
    "card.week_comparison.consumption": "Consumo",
    "card.week_comparison.cost": "Coste",
    "card.week_comparison.forecast_comparison_tooltip": "Comparación basada en valores pronosticados",
    "card.tariff_comparison.loading": "Cargando comparación de tarifas...",
    "card.tariff_comparison.info": "Comparación basada en los últimos 365 días de datos de consumo",
    "card.no_data": "No hay datos de consumo disponibles",
    "card.stacked_area.unavailable": "Gráfico de Área Apilada No Disponible",
    "card.stacked_area.unavailable_details": "El gráfico de área apilada requiere datos de desglose por períodos (P1/P2/P3). Estos datos pueden no estar disponibles para la tarifa o período seleccionado.",
    
    // Month names (short)
    "card.month.jan": "ene",
    "card.month.feb": "feb",
    "card.month.mar": "mar",
    "card.month.apr": "abr",
    "card.month.may": "may",
    "card.month.jun": "jun",
    "card.month.jul": "jul",
    "card.month.aug": "ago",
    "card.month.sep": "sep",
    "card.month.oct": "oct",
    "card.month.nov": "nov",
    "card.month.dec": "dic",
    
    // Month names (long)
    "card.month.long.jan": "enero",
    "card.month.long.feb": "febrero",
    "card.month.long.mar": "marzo",
    "card.month.long.apr": "abril",
    "card.month.long.may": "mayo",
    "card.month.long.jun": "junio",
    "card.month.long.jul": "julio",
    "card.month.long.aug": "agosto",
    "card.month.long.sep": "septiembre",
    "card.month.long.oct": "octubre",
    "card.month.long.nov": "noviembre",
    "card.month.long.dec": "diciembre",
    
    // Date formatting
    "card.date.of": "de",
    
    // Day names (short)
    "card.day.mon": "Lun",
    "card.day.tue": "Mar",
    "card.day.wed": "Mié",
    "card.day.thu": "Jue",
    "card.day.fri": "Vie",
    "card.day.sat": "Sáb",
    "card.day.sun": "Dom",
    
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
    "editor.moving_average_days_label": "Перыяд рухомага сярэдняга",
    "editor.moving_average_days_helper": "Колькасць перыядаў для разліку рухомага сярэдняга. Гадзіны для дзённага выгляду, дні для тыднёвых/месячных выглядаў (па змаўчанні: 7)",
    
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
    "editor.cost_moving_average_days_label": "Перыяд рухомага сярэдняга кошту",
    "editor.cost_moving_average_days_helper": "Колькасць перыядаў для рухомага сярэдняга кошту. Гадзіны для дзённага выгляду, дні для тыднёвых/месячных выглядаў (па змаўчанні: 30)",
    
    // Tariff Chart Options
    "editor.show_tariff_chart_label": "Паказаць дыяграму тарыфаў",
    "editor.show_tariff_chart_helper": "Адлюстраваць візуальную дыяграму ў раздзеле параўнання тарыфаў",
    
    // Chart Accessibility
    "chart.accessibility.title": "Дыяграма спажывання энергіі для выбранага перыяду",
    "chart.accessibility.title_with_data": "Дыяграма спажывання энергіі. {period}. Усяго: {total} кВт·г",
    "chart.print.header": "Дыяграма Спажывання Энергіі",
    
    // Card UI Text
    "card.loading": "Загрузка даных спажывання...",
    "card.error.configuration_required": "Патрабуецца канфігурацыя",
    "card.error.unable_to_load": "Немагчыма загрузіць даныя",
    "card.error.config_help": "Націсніце меню ⋮ у верхнім правым куце гэтай карткі і выберыце Рэдагаваць для налады.",
    "card.button.retry": "Паспрабаваць зноў",
    "card.button.previous": "← Папярэдні",
    "card.button.next": "Наступны →",
    "card.title.electricity": "Электрычнасць",
    "card.heat_calendar.unavailable": "Каляндар цяпла недаступны",
    "card.heat_calendar.unavailable_details": "Выгляд каляндара цяпла патрабуе даных спажывання. Калі ласка, пераканайцеся, што даныя даступныя для выбранага перыяду.",
    "card.heat_calendar.intensity_info": "Узроўні інтэнсіўнасці вылічваюцца на аснове перцэнтыляў спажывання: Нізкі (ніжнія 33%), Сярэдні (сярэднія 33%), Высокі (верхнія 33%)",
    "card.heat_calendar.intensity_label": "Узроўні інтэнсіўнасці",
    "card.heat_calendar.intensity_low_tooltip": "Нізкая інтэнсіўнасць: ніжнія 33% значэнняў спажывання",
    "card.heat_calendar.intensity_medium_tooltip": "Сярэдняя інтэнсіўнасць: сярэднія 33% значэнняў спажывання",
    "card.heat_calendar.intensity_high_tooltip": "Высокая інтэнсіўнасць: верхнія 33% значэнняў спажывання",
    "card.week_comparison.no_data": "Даных параўнання тыдняў няма",
    "card.week_comparison.incomplete": "Незавершаны",
    "card.week_comparison.days_available": "Дзён даступна",
    "card.week_comparison.days": "дзён",
    "card.week_comparison.forecast": "Прагноз",
    "card.week_comparison.consumption": "Спажыванне",
    "card.week_comparison.cost": "Кошт",
    "card.week_comparison.forecast_comparison_tooltip": "Параўнанне заснавана на прагнозных значэннях",
    "card.tariff_comparison.loading": "Загрузка параўнання тарыфаў...",
    "card.tariff_comparison.info": "Параўнанне заснавана на апошніх 365 днях даных спажывання",
    "card.no_data": "Даных спажывання няма",
    "card.stacked_area.unavailable": "Стопачная дыяграма недаступная",
    "card.stacked_area.unavailable_details": "Стопачная дыяграма патрабуе даных разбіўкі па перыядах (P1/P2/P3). Гэтыя даныя могуць быць недаступныя для выбранага тарыфу або перыяду.",
    
    // Month names (short)
    "card.month.jan": "студз",
    "card.month.feb": "лют",
    "card.month.mar": "сакав",
    "card.month.apr": "крас",
    "card.month.may": "май",
    "card.month.jun": "чэрв",
    "card.month.jul": "ліп",
    "card.month.aug": "жнів",
    "card.month.sep": "вер",
    "card.month.oct": "кастр",
    "card.month.nov": "ліст",
    "card.month.dec": "снеж",
    
    // Month names (long)
    "card.month.long.jan": "студзеня",
    "card.month.long.feb": "лютага",
    "card.month.long.mar": "сакавіка",
    "card.month.long.apr": "красавіка",
    "card.month.long.may": "мая",
    "card.month.long.jun": "чэрвеня",
    "card.month.long.jul": "ліпеня",
    "card.month.long.aug": "жніўня",
    "card.month.long.sep": "верасня",
    "card.month.long.oct": "кастрычніка",
    "card.month.long.nov": "лістапада",
    "card.month.long.dec": "снежня",
    
    // Date formatting
    "card.date.of": "",
    
    // Day names (short)
    "card.day.mon": "Пн",
    "card.day.tue": "Аўт",
    "card.day.wed": "Ср",
    "card.day.thu": "Чцв",
    "card.day.fri": "Пт",
    "card.day.sat": "Сб",
    "card.day.sun": "Нд",
  }
};

/**
 * Get localized string
 * Accepts locale (e.g., 'en-US', 'es-ES', 'be-BY')
 * Extracts language code from locale to find translation
 */
export function localize(key: string, locale: string = "en-US"): string {
  // Extract language code from locale (e.g., 'es-ES' -> 'es', 'en-US' -> 'en')
  const langCode = locale.toLowerCase().split('-')[0];
  
  // Find translation by language code
  let translation = translations[langCode]?.[key];
  
  // Fallback to English
  if (!translation) {
    translation = translations["en"]?.[key];
  }
  
  // Final fallback: return the key without prefix
  if (!translation) {
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
  locale: string = "en-US"
): string {
  let translation = localize(key, locale);
  
  // Replace variables in format {varName}
  Object.entries(vars).forEach(([varName, value]) => {
    translation = translation.replace(new RegExp(`\\{${varName}\\}`, 'g'), value);
  });
  
  return translation;
}

/**
 * Compute label for ha-form schema
 * Accepts locale (e.g., 'en-US', 'es-ES', 'be-BY')
 */
export function computeLabel(schema: any, locale: string = "en-US"): string {
  return localize(`editor.${schema.name}_label`, locale);
}

/**
 * Compute helper text for ha-form schema
 * Accepts locale (e.g., 'en-US', 'es-ES', 'be-BY')
 */
export function computeHelper(schema: any, locale: string = "en-US"): string {
  return localize(`editor.${schema.name}_helper`, locale);
}
