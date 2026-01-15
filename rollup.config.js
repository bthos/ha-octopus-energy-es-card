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
    file: 'www/community/octopus_energy_es/octopus-consumption-card.bundle.js',
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
      exportConditions: []
    }),
    commonjs(),
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
