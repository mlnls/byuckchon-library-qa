# 작업 규칙

이 프로젝트에서 코드를 작성할 때 지켜야 할 것들입니다.

## 1. 사내 패키지를 먼저 쓴다

직접 구현하기 전에 아래 패키지에 이미 있는지 **반드시 먼저 확인하세요.**
같은 기능을 새로 만들면 유지보수 비용이 프로젝트 수만큼 늘어납니다.

| 패키지 | 무엇이 있나 |
| --- | --- |
| `@byuckchon-frontend/hooks` | useDebounce, useThrottle, useTimer, useInfiniteScroll, useIntersectionObserver, useDetectClose, useAutoFocus, useFileUpload, usePagination, usePullToRefresh, useScrollTop, useCheckList, useMonthCalendar, useVisibilityEvent, usePasswordVisibility, useImpressionRef, useInstallPWA, useScrollToSelectedItem |
| `@byuckchon-frontend/utils` | 포맷(formatData), 검증(validate), 에러 처리(handleError), 쿼리 파라미터(filterParams), userAgent, sanitizeHtml, dateUtils, editorUtils |
| `@byuckchon-frontend/core` | Overlay, ErrorBoundary, SanitizeHtmlRender |
| `@byuckchon-frontend/basic-ui` | ⚠️ **먼저 쓰지 않는다** — 아래 설명 참고 |
| `@byuckchon-frontend/settings` | ESLint / Prettier / tsconfig 프리셋, 모션 토큰, 디자인 토큰 변환 |

**작업 순서**

1. 위 표에서 찾아본다
2. 애매하면 실제 export 를 확인한다 — 위 목록은 스냅샷이라 최신이 아닐 수 있다
   ```bash
   cat node_modules/@byuckchon-frontend/hooks/dist/index.d.ts
   ```
3. 없으면 그때 직접 구현한다

없는 걸 억지로 끼워 맞추지는 마세요. 쓰임이 다르면 직접 만드는 게 맞습니다.

### basic-ui 는 예외입니다

`@byuckchon-frontend/basic-ui` 는 **사용자가 명시적으로 요청했을 때만** 씁니다.
프로젝트마다 디자인이 달라서 기본 UI 컴포넌트를 그대로 쓰면 오히려 덜어내는 작업이 늘어납니다.

UI 컴포넌트는 이 프로젝트의 디자인에 맞춰 직접 만드세요.
(Accordion, Input, Modal, Table 등이 필요하면 basic-ui 에 있으니 참고만 하세요)

### 모션은 settings 의 클래스를 씁니다

전환 효과가 필요하면 `duration-200` 같은 Tailwind 기본 클래스를 직접 쓰지 말고,
`@byuckchon-frontend/settings` 의 모션 유틸리티를 쓰세요. 팀 전체가 같은 속도·곡선을 공유합니다.

| 상황 | 클래스 |
| --- | --- |
| hover 확대 / 클릭 눌림 | `motion-hover-scale` `motion-press` |
| 펼침·접힘 / 화살표 회전 | `motion-collapse` `motion-rotate` |
| 팝업·드롭다운 진입 | `motion-scale-in` |
| 배경 딤 | `motion-backdrop` |
| 바텀시트 / 드로어 | `motion-sheet` `motion-slide-x-left` `motion-slide-x-right` |
| 토스트 / 툴팁 | `motion-toast` `motion-tooltip` |
| 토글 / 체크 / 라벨 | `motion-toggle-knob` `motion-check-pop` `motion-label-float` |
| 탭 인디케이터 | `motion-tab-indicator` |

`data-open` 이 필요한 클래스가 있습니다. 열림 상태를 `data-open={isOpen}` 으로 내려주세요.

```tsx
<div data-open={isOpen} className="motion-collapse"><div>{content}</div></div>
```

### 클래스 병합은 cn 을 씁니다

`src/lib/utils/cn.ts` 의 `cn` 을 쓰세요. `twMerge` 를 직접 쓰면
타이포그래피 유틸(`text-body-sm-regular`)이 글자 색으로 분류되어 조용히 사라집니다.

## 2. 설정 파일은 직접 고치지 않는다

`eslint.config.js`, `prettier.config.js`, `tsconfig.*.json`, `token.config.js` 는
`@byuckchon-frontend/settings` 를 참조만 합니다. 규칙 본체는 node_modules 안에 있습니다.

예외가 필요하면 **덮어쓰지 말고 뒤에 이어붙이세요.**

```js
// eslint.config.js — 배열 뒤쪽이 이깁니다
import byuckchon from '@byuckchon-frontend/settings/eslint/react';

export default [
  ...byuckchon,
  { rules: { '@typescript-eslint/no-explicit-any': 'warn' } },
];
```

`.vscode/settings.json`, `.nvmrc` 같은 파일은 `npx byuckchon-settings-sync` 로 갱신합니다.

## 3. 커밋 메시지

```
<type>: <요약>
```

`feat` `fix` `refactor` `perf` `style` `docs` `test` `chore`

**리뷰어가 확인해야 할 것은 커밋 본문에 남깁니다.** PR 본문의 "리뷰 포인트"로 자동 수집됩니다.

```
feat: 주문 목록 API 연동

NOTE: 응답 스키마가 미확정이라 types/order.ts 에 any 가 남아 있습니다
TODO: 에러 처리 미구현 — 백엔드 에러 코드 확정 후 작업 예정
```

확신이 없거나, 임시로 둔 코드가 있거나, 리뷰어의 판단이 필요하면 **반드시 남기세요.**
말없이 넘어가면 리뷰에서 놓칩니다.

## 4. 브랜치 이름

```
<type>/<작업 요약>/<작업자>
feature/update-mypage-style/hyuk
```

PR 제목은 첫 토막이 대괄호로 자동으로 붙습니다. → `[feature] 마이페이지 디자인 적용`

## 5. 폴더 구조

```
src/app        App Router         src/components 컴포넌트
src/lib        공용 로직·유틸      src/hooks      커스텀 훅
src/providers  Provider           src/constant   상수
src/assets     이미지·아이콘
```

경로 별칭은 `@/` 를 씁니다. (`@/lib/utils/cn`)
