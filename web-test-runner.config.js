import { playwrightLauncher } from '@web/test-runner-playwright';
import { esbuildPlugin } from '@web/dev-server-esbuild';

export default {
  files: ['test/**/*.test.ts'],
  nodeResolve: true,
  plugins: [
    esbuildPlugin({ 
      ts: true, 
      target: 'auto',
      tsconfig: './tsconfig.json',
      define: {
        'process.env.NODE_ENV': '"production"'
      }
    }),
  ],
  testFramework: {
    config: {
      ui: 'bdd',
      timeout: 10000,
    },
  },
  testsFinishTimeout: 60000,
  browsers: [
    playwrightLauncher({ product: 'chromium' }),
  ],
  coverage: true,
  coverageConfig: {
    include: ['src/**/*.ts'],
    exclude: ['src/**/*.test.ts', 'src/**/*.spec.ts', 'test/**/*'],
  },
};
