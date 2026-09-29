// 포맷 규칙은 @byuckchon-frontend/settings 가 관리합니다.
// 이 모노레포 전용 예외가 필요하면 펼쳐서 덮어쓰세요.
import byuckchon from '@byuckchon-frontend/settings/prettier';

/** @type {import("prettier").Config} */
export default {
  ...byuckchon,
  overrides: [
    {
      files: ['*.json', '*.md', '*.yml', '*.yaml'],
      options: { tabWidth: 2 },
    },
  ],
};
