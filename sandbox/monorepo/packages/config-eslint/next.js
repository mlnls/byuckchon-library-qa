// 규칙 본체는 @byuckchon-frontend/settings 가 관리합니다.
// 이 모노레포에만 해당하는 예외는 아래 배열에 이어붙이세요.
import byuckchon from '@byuckchon-frontend/settings/eslint/next';

/** @type {import("eslint").Linter.Config[]} */
export const nextConfig = [...byuckchon];

export default nextConfig;
