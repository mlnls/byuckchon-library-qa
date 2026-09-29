/**
 * 디자이너가 넘긴 src/tokens.json 을 src/tokens.css 로 변환하는 설정.
 *
 *   npm run tokens:build
 *
 * 변환 규칙(color / typography / motion)은 @byuckchon-frontend/settings 가
 * 관리한다. 규칙이 바뀌면 settings 버전만 올리면 되고 이 파일은 그대로 둔다.
 * 프로젝트별 예외가 필요하면 defineTokenConfig({ ... }) 에 인자를 넘긴다.
 */
import { defineTokenConfig } from "@byuckchon-frontend/settings/tokens";

export default defineTokenConfig();
