import { UnitCategory } from './types';

export const UNIT_CATEGORIES: UnitCategory[] = [
  {
    id: 'length',
    name: 'Length',
    icon: 'Ruler',
    baseUnitId: 'm',
    units: [
      { id: 'm', name: 'Meter', symbol: 'm', ratioToBase: 1 },
      { id: 'km', name: 'Kilometer', symbol: 'km', ratioToBase: 1000 },
      { id: 'cm', name: 'Centimeter', symbol: 'cm', ratioToBase: 0.01 },
      { id: 'mm', name: 'Millimeter', symbol: 'mm', ratioToBase: 0.001 },
      { id: 'mi', name: 'Mile', symbol: 'mi', ratioToBase: 1609.344 },
      { id: 'yd', name: 'Yard', symbol: 'yd', ratioToBase: 0.9144 },
      { id: 'ft', name: 'Foot', symbol: 'ft', ratioToBase: 0.3048 },
      { id: 'in', name: 'Inch', symbol: 'in', ratioToBase: 0.0254 },
      { id: 'nmi', name: 'Nautical Mile', symbol: 'nmi', ratioToBase: 1852 },
    ],
  },
  {
    id: 'weight',
    name: 'Weight / Mass',
    icon: 'Scale',
    baseUnitId: 'kg',
    units: [
      { id: 'kg', name: 'Kilogram', symbol: 'kg', ratioToBase: 1 },
      { id: 'g', name: 'Gram', symbol: 'g', ratioToBase: 0.001 },
      { id: 'mg', name: 'Milligram', symbol: 'mg', ratioToBase: 0.000001 },
      { id: 't', name: 'Metric Ton', symbol: 't', ratioToBase: 1000 },
      { id: 'lb', name: 'Pound', symbol: 'lb', ratioToBase: 0.45359237 },
      { id: 'oz', name: 'Ounce', symbol: 'oz', ratioToBase: 0.028349523125 },
      { id: 'st', name: 'Stone', symbol: 'st', ratioToBase: 6.35029318 },
    ],
  },
  {
    id: 'temperature',
    name: 'Temperature',
    icon: 'Thermometer',
    baseUnitId: 'c',
    units: [
      {
        id: 'c',
        name: 'Celsius',
        symbol: '°C',
        toBase: (v: number) => v,
        fromBase: (v: number) => v,
      },
      {
        id: 'f',
        name: 'Fahrenheit',
        symbol: '°F',
        toBase: (v: number) => ((v - 32) * 5) / 9,
        fromBase: (v: number) => (v * 9) / 5 + 32,
      },
      {
        id: 'k',
        name: 'Kelvin',
        symbol: 'K',
        toBase: (v: number) => v - 273.15,
        fromBase: (v: number) => v + 273.15,
      },
    ],
  },
  {
    id: 'volume',
    name: 'Volume',
    icon: 'Beaker',
    baseUnitId: 'l',
    units: [
      { id: 'l', name: 'Liter', symbol: 'L', ratioToBase: 1 },
      { id: 'ml', name: 'Milliliter', symbol: 'mL', ratioToBase: 0.001 },
      { id: 'm3', name: 'Cubic Meter', symbol: 'm³', ratioToBase: 1000 },
      { id: 'gal', name: 'US Gallon', symbol: 'gal', ratioToBase: 3.785411784 },
      { id: 'qt', name: 'US Quart', symbol: 'qt', ratioToBase: 0.946352946 },
      { id: 'pt', name: 'US Pint', symbol: 'pt', ratioToBase: 0.473176473 },
      { id: 'cup', name: 'US Cup', symbol: 'cup', ratioToBase: 0.2365882365 },
      { id: 'floz', name: 'Fluid Ounce', symbol: 'fl oz', ratioToBase: 0.0295735295625 },
      { id: 'tbsp', name: 'Tablespoon', symbol: 'tbsp', ratioToBase: 0.01478676478125 },
      { id: 'tsp', name: 'Teaspoon', symbol: 'tsp', ratioToBase: 0.00492892159375 },
    ],
  },
  {
    id: 'speed',
    name: 'Speed',
    icon: 'Gauge',
    baseUnitId: 'mps',
    units: [
      { id: 'mps', name: 'Meters per second', symbol: 'm/s', ratioToBase: 1 },
      { id: 'kmh', name: 'Kilometers per hour', symbol: 'km/h', ratioToBase: 0.2777777777777778 },
      { id: 'mph', name: 'Miles per hour', symbol: 'mph', ratioToBase: 0.44704 },
      { id: 'knot', name: 'Knot', symbol: 'kn', ratioToBase: 0.5144444444444445 },
      { id: 'fps', name: 'Feet per second', symbol: 'ft/s', ratioToBase: 0.3048 },
    ],
  },
  {
    id: 'area',
    name: 'Area',
    icon: 'Grid',
    baseUnitId: 'sqm',
    units: [
      { id: 'sqm', name: 'Square Meter', symbol: 'm²', ratioToBase: 1 },
      { id: 'sqkm', name: 'Square Kilometer', symbol: 'km²', ratioToBase: 1_000_000 },
      { id: 'sqft', name: 'Square Foot', symbol: 'ft²', ratioToBase: 0.09290304 },
      { id: 'sqyd', name: 'Square Yard', symbol: 'yd²', ratioToBase: 0.83612736 },
      { id: 'sqmi', name: 'Square Mile', symbol: 'mi²', ratioToBase: 2_589_988.110336 },
      { id: 'ac', name: 'Acre', symbol: 'ac', ratioToBase: 4046.8564224 },
      { id: 'ha', name: 'Hectare', symbol: 'ha', ratioToBase: 10_000 },
    ],
  },
  {
    id: 'digital',
    name: 'Digital Storage',
    icon: 'HardDrive',
    baseUnitId: 'byte',
    units: [
      { id: 'bit', name: 'Bit', symbol: 'b', ratioToBase: 0.125 },
      { id: 'byte', name: 'Byte', symbol: 'B', ratioToBase: 1 },
      { id: 'kb', name: 'Kilobyte', symbol: 'KB', ratioToBase: 1000 },
      { id: 'mb', name: 'Megabyte', symbol: 'MB', ratioToBase: 1_000_000 },
      { id: 'gb', name: 'Gigabyte', symbol: 'GB', ratioToBase: 1_000_000_000 },
      { id: 'tb', name: 'Terabyte', symbol: 'TB', ratioToBase: 1_000_000_000_000 },
      { id: 'kib', name: 'Kibibyte', symbol: 'KiB', ratioToBase: 1024 },
      { id: 'mib', name: 'Mebibyte', symbol: 'MiB', ratioToBase: 1_048_576 },
      { id: 'gib', name: 'Gibibyte', symbol: 'GiB', ratioToBase: 1_073_741_824 },
      { id: 'tib', name: 'Tebibyte', symbol: 'TiB', ratioToBase: 1_099_511_627_776 },
    ],
  },
];

export const TOOL_METADATA = {
  title: 'Unit Converter',
  description: 'Convert between metric and imperial measurement units for length, weight, temperature, volume, speed, area, and digital storage instantly.',
  slug: 'unit-converter',
  category: 'math-calc',
};

export const TOOL_FAQS = [
  {
    question: 'What is the difference between the Metric and Imperial measurement systems?',
    answer: 'The Metric system (or International System of Units, SI) is a decimal-based system used universally worldwide, utilizing logical powers of 10 (such as meters, kilometers, grams, and liters). The Imperial system (and US Customary units) relies on historical units with varying division ratios, such as 12 inches to a foot, 3 feet to a yard, 16 ounces to a pound, and 5,280 feet to a mile. Our converter connects both systems seamlessly with international standard conversion constants.',
  },
  {
    question: 'How are temperature conversions calculated between Celsius, Fahrenheit, and Kelvin?',
    answer: 'Unlike length or mass which use simple multiplication ratios from zero, temperature scales use different starting reference points and degrees. Celsius defines 0°C as the freezing point of water and 100°C as its boiling point. Fahrenheit sets water freezing at 32°F and boiling at 212°F, requiring the affine formula °F = (°C × 9/5) + 32. Kelvin is the thermodynamic absolute temperature scale where 0 K represents absolute zero (-273.15°C).',
  },
  {
    question: 'What is the difference between decimal (KB, MB, GB) and binary (KiB, MiB, GiB) storage?',
    answer: 'Storage manufacturers and network protocols typically use decimal SI prefixes based on powers of 10 (1 KB = 1,000 Bytes, 1 GB = 1,000,000,000 Bytes). Operating systems (like Windows) and computer memory architectures calculate capacities using binary IEC prefixes based on powers of 2 (1 KiB = 1,024 Bytes, 1 GiB = 1,073,741,824 Bytes). This tool provides precise conversions across both decimal and binary standards.',
  },
  {
    question: 'How does the converter handle decimal precision and floating-point errors?',
    answer: 'Computers traditionally suffer from binary floating-point representation anomalies (such as 0.1 + 0.2 = 0.30000000000000004). Our engine incorporates an intelligent rounding and precision algorithm that eliminates floating-point artifacts while allowing you to customize decimal precision from 0 up to 8 decimal places.',
  },
  {
    question: 'Can I view conversions for all units in a category simultaneously?',
    answer: 'Yes! When you input any quantity, the Jumpytools Unit Converter calculates and renders a comparative multi-unit conversion matrix. This allows you to immediately see your measurement across millimeters, centimeters, meters, kilometers, inches, feet, yards, and miles at a glance without having to re-select dropdown menus individually.',
  },
  {
    question: 'Is this unit converter free and safe to use offline?',
    answer: 'Yes, 100%. All mathematical transformations execute client-side directly within your browser or mobile app. The application requires zero server requests, operates without network latency, and can even function without an internet connection once loaded.',
  },
];

export const TOOL_ABOUT = [
  'Measurement conversions are an essential daily requirement across science, engineering, international commerce, culinary arts, travel, and personal fitness. Navigating between conflicting measurement systems—particularly between the internationally standardized Metric (SI) system and the US Customary / British Imperial systems—often leads to confusion, errors, or costly calculation mistakes. The Jumpytools Unit Converter bridges this gap by providing an instantaneous, mathematically rigorous conversion engine for every primary measurement domain.',
  'Understanding Base Units and the Ratio Transformation Method:',
  'To guarantee mathematical precision and prevent compounding rounding errors, our engine utilizes a normalized "Base-Unit Pivot" architecture. Instead of maintaining hundreds of hardcoded conversion pairs between every single unit combination, each category specifies an internationally certified base standard (e.g., meters for length, kilograms for weight, liters for volume). Any incoming quantity is first transformed into the normalized SI base unit and then projected into the target unit using high-precision rational arithmetic.',
  'Covered Measurement Domains:',
  '• Length & Distance: Effortlessly translate between nanoscale or metric standards (millimeters, centimeters, meters, kilometers) and imperial navigation units (inches, feet, yards, statute miles, and international nautical miles).',
  '• Weight & Mass: Accurately convert between metric grams, kilograms, and tonnes and Anglo-American commercial units including ounces, pounds, and British stones.',
  '• Temperature: Translate temperatures across Celsius (°C), Fahrenheit (°F), and scientific absolute thermodynamic Kelvin (K) using exact fractional formulas.',
  '• Volume & Cooking: Convert liquid and dry volumes between metric liters and milliliters and common American culinary standards like teaspoons, tablespoons, cups, pints, quarts, and gallons.',
  '• Speed & Velocity: Compare travel speeds across kilometers per hour (km/h), miles per hour (mph), meters per second (m/s), feet per second (ft/s), and maritime knots (kn).',
  '• Area & Land: Evaluate spatial measurements from square meters and square feet to expansive agricultural hectares and acres.',
  '• Digital Storage: Seamlessly switch between telecommunications decimal prefixes (KB, MB, GB, TB) and binary computing blocks (KiB, MiB, GiB, TiB).',
  'Zero-Server Privacy Guarantee:',
  'Unlike traditional conversion web tools that submit form payloads to remote servers and reload the page, the Jumpytools Unit Converter executes 100% in-browser using pure TypeScript algorithms. Calculations update dynamically with zero keystroke delay, preserving both your battery life and total data privacy.',
];
