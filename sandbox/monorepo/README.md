# monorepo

pnpm + Turborepo 기반 프론트엔드 모노레포. (byuckchon-frontend-cli 로 생성)

## 구조

```
apps/           # 배포 대상 (React / Next 앱)
  web/
packages/       # 내부 공유 패키지 (@monorepo/*)
  config-eslint/
  config-typescript/
```

## 시작하기

```bash
pnpm install            # 전체 의존성 설치
pnpm dev                # 모든 앱 dev (turbo)
pnpm web             # web 앱만 실행
```

## 앱 추가

새 React/Next 앱을 이 모노레포에 추가하려면 루트에서:

```bash
bc add
```

## 스크립트

| 명령 | 설명 |
|------|------|
| `pnpm dev` | 전체 앱 개발 서버 (turbo) |
| `pnpm build` | 전체 빌드 |
| `pnpm lint` | 전체 lint |
| `pnpm typecheck` | 전체 타입체크 |
| `pnpm format` | Prettier 포맷 |
