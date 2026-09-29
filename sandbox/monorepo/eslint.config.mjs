// 루트 레벨 ESLint config.
// 각 앱/패키지는 자체 eslint.config.mjs 를 가진다. 루트는 스크립트/설정 파일만 훑는다.
import { baseConfig } from '@monorepo/config-eslint/base';

export default [
  ...baseConfig,
  {
    ignores: [
      'apps/**',
      'packages/**',
      '**/node_modules/**',
      '**/dist/**',
      '**/build/**',
      '**/.turbo/**',
      '**/.next/**',
    ],
  },
];
