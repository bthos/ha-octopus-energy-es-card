import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import terser from '@rollup/plugin-terser';
import { readFileSync } from 'fs';

// Read version from package.json to inject into code
const packageJson = JSON.parse(readFileSync('./package.json', 'utf8'));
const VERSION = packageJson.version;

export default {
  input: 'dist/octopus-consumption-card.js',
  output: {
    file: 'www/community/ha-octopus-energy-es-card/octopus-consumption-card.bundle.js',
    format: 'iife',
    name: 'OctopusConsumptionCard',
    sourcemap: false,  // Disable source maps for production builds
    // Export functions for Home Assistant
    globals: {
      'getCardElement': 'getCardElement',
      'getCardConfigElement': 'getCardConfigElement',
      'getStubConfig': 'getStubConfig'
    }
  },
  plugins: [
    resolve({
      browser: true,
      preferBuiltins: false,
      // Do NOT include 'development' export condition to ensure production build
      // Omitting exportConditions defaults to production build
      exportConditions: [],
      // D3.js uses ES modules, so we need to resolve them properly
      dedupe: ['d3', 'd3-scale', 'd3-axis', 'd3-shape', 'd3-selection', 'd3-transition', 'd3-time', 'd3-time-format']
    }),
    commonjs({
      // D3.js modules are ES modules, but some might need commonjs conversion
      include: ['node_modules/**'],
      exclude: ['node_modules/d3*/**']
    }),
    // Replace version placeholder with actual version from package.json
    {
      name: 'replace-version',
      transform(code, id) {
        if (id.includes('octopus-consumption-card.js')) {
          // Replace version constant with actual version from package.json
          return code.replace(
            /const VERSION = ['"][^'"]+['"];?/g,
            `const VERSION = '${VERSION}';`
          );
        }
        return null;
      }
    },
    terser({
      compress: {
        drop_console: false
      }
    })
  ]
};
