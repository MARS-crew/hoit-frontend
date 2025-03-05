# HOIT Frontend Monorepo

이 프로젝트는 Turborepo를 사용한 모노레포 구조의 프론트엔드 프로젝트입니다.

## 프로젝트 구조

### Apps

- `profile-web`: 프로필 및 포트폴리오 관리 웹 애플리케이션
- `wbs-web`: WBS 관리 웹
- `matching-api`: 매칭 API

## 디렉토리 구조

```
apps/profile-web/
├── public/           # 정적 파일
├── src/
│   ├── components/  # 재사용 가능한 컴포넌트
│   ├── constants/   # 상수 값 정의
│   ├── hooks/       # 커스텀 훅
│   ├── pages/       # 페이지 컴포넌트
│   ├── routes/      # 라우트 설정
│   ├── services/    # API 서비스
│   ├── states/      # 상태 관리
│   ├── styles/      # 글로벌 스타일
│   ├── theme/       # 테마 설정
│   ├── types/       # 타입 정의
│   ├── utils/       # 유틸리티 함수
│   ├── App.tsx      # 앱 진입점
│   ├── main.tsx     # 메인 렌더링
│   ├── index.css    # 글로벌 스타일
│   └── vite-env.d.ts
├── .env
├── .eslintrc.json
├── .gitignore
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

## 시작하기

### 필수 요구사항

- Node.js 18.0.0 이상
- pnpm 8.0.0 이상

### 설치

```bash
# 의존성 설치
pnpm install
```

### 개발 서버 실행

```bash
# profile-web 디렉토리로 이동
cd apps/profile-web

# 개발 서버 실행
pnpm dev

```bash
# profile-web 실행
pnpm --filter profile-web dev
```

### 빌드

```bash
# profile-web 디렉토리로 이동
cd apps/profile-web

# 빌드
pnpm build
```

### 린트

```bash
# 린트 실행
pnpm lint
```

## 패키지 관리

이 프로젝트는 pnpm 워크스페이스를 사용하여 패키지를 관리합니다. 새로운 의존성을 추가할 때는 다음과 같이 실행하세요:

```bash
# 루트에 의존성 추가
pnpm add -w package-name

# profile-web에 의존성 추가
pnpm --filter profile-web add package-name
```

## 유용한 링크

- [Turborepo 문서](https://turbo.build/repo/docs)
- [pnpm 워크스페이스](https://pnpm.io/workspaces)
