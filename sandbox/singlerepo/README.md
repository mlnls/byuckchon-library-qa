# singlerepo

## 기술 스택

| 항목 | 내용 |
|------|------|
| Framework | React 18 |
| Language | TypeScript |
| Build Tool | Vite |
| Styling | Tailwind CSS |
| State | Zustand |
| HTTP | Axios |
| Lint | ESLint + Prettier |

## 시작하기

```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm run dev

# 프로덕션 빌드
npm run build

# 코드 포맷팅
npm run format
```

## 프로젝트 구조

```
src/
├── assets/        정적 파일 (이미지, 폰트 등)
├── lib/           유틸리티 함수, 상수
├── store/         Zustand 상태 관리
├── api/           Axios API 호출
├── hooks/         커스텀 훅
├── context/       React Context
├── components/    재사용 가능한 UI 컴포넌트
├── layouts/       레이아웃 컴포넌트
└── pages/         페이지 컴포넌트
```

## 레이어 의존성 규칙

각 레이어는 아래 방향으로만 import 해야 합니다.

```
lib → store → api → hooks → context → components → layouts → pages
```

`assets`는 모든 레이어에서 자유롭게 참조 가능합니다.
