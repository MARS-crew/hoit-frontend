# HOIT Frontend Monorepo

이 프로젝트는 Turborepo를 사용한 모노레포 구조의 프론트엔드 프로젝트입니다.

## 프로젝트 구조

```
hoit-frontend/
├── apps/
│   ├── portfolio-web/       # 프로필 포트폴리오
│   └── wbs-web/            # WBS
├── packages/               # 공통 패키지들
│   └── common/            # 공통 컴포넌트와 유틸리티
└── package.json           # 루트 package.json
```

## 애플리케이션 폴더 구조

### Portfolio Web

```
apps/portfolio-web/
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
│   └── index.css    # 글로벌 스타일
├── .env             # 환경 변수
├── index.html       # HTML 템플릿
├── package.json     # 프로젝트 의존성
├── tsconfig.json    # TypeScript 설정
└── vite.config.ts   # Vite 설정
```

### WBS Web

```
apps/wbs-web/
├── public/           # 정적 파일
├── src/
│   ├── components/  # 재사용 가능한 컴포넌트
│   │   ├── common/  # 공통 컴포넌트
│   │   └── layout/  # 레이아웃 컴포넌트
│   ├── hooks/       # 커스텀 훅
│   ├── pages/       # 페이지 컴포넌트
│   ├── routes/      # 라우트 설정
│   ├── services/    # API 서비스
│   ├── store/       # 상태 관리
│   ├── types/       # 타입 정의
│   ├── utils/       # 유틸리티 함수
│   ├── App.tsx      # 앱 진입점
│   ├── main.tsx     # 메인 렌더링
│   └── index.css    # 글로벌 스타일
├── .env             # 환경 변수
├── index.html       # HTML 템플릿
├── package.json     # 프로젝트 의존성
├── tsconfig.json    # TypeScript 설정
└── vite.config.ts   # Vite 설정
```

## 기술 스택

- **프레임워크**: React 18
- **상태 관리**: Recoil
- **데이터 페칭**: React Query
- **라우팅**: React Router
- **스타일링**: Tailwind CSS
- **패키지 관리**: pnpm
- **빌드 도구**: Vite

## 시작하기

### 필수 요구사항

- Node.js 18 이상
- pnpm 8 이상

### 설치

```bash
# 의존성 설치
pnpm install

# Vite 설치
pnpm add -D vite @vitejs/plugin-react
```

### 개발 서버 실행

```bash
# 포트폴리오 실행
cd apps/portfolio-web
pnpm dev

# WBS 실행
cd apps/wbs-web
pnpm dev
```

## 애플리케이션 설명

### Portfolio Web

프로필/포트폴리오 입력, 프로젝트 입력 후 상호 간의 관람이 가능한 웹 어플리케이션


### WBS Web

wbs 템플릿 제작 및 관리 웹 서비스