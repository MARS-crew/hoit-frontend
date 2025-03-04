# HOIT Frontend Monorepo

이 프로젝트는 Turborepo를 사용한 모노레포 구조의 프론트엔드 프로젝트입니다.

## 프로젝트 구조

### Apps

- `profile-web`: 프로필 및 포트폴리오 관리 웹 애플리케이션
- `wbs-web`: WBS 관리 웹
- `matching-api`: 매칭 API

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
# profile-web 실행
pnpm dev
# 또는
pnpm --filter profile-web dev
```

### 빌드

```bash
# 전체 빌드
pnpm build

# profile-web만 빌드
pnpm --filter profile-web build
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
