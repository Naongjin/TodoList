# 📝 Todo List 서비스

> 프론트엔드 단기심화 과정 지원자 과제 - Next.js 기반 할 일 관리 웹 서비스

---

## 🚀 프로젝트 개요
사용자가 일상 속 할 일을 등록, 수정, 완료, 삭제하며 효율적으로 관리할 수 있도록 제작된 **Todo List 서비스**입니다. 
Next.js와 TypeScript를 활용하여 컴포넌트 재사용성을 높이고, 반응형 웹 디자인을 적용하여 모바일, 태블릿, 데스크탑 환경 모두에서 최적화된 사용자 경험을 제공합니다.

- **디자인 시안**: [Figma 시안 링크](https://www.figma.com/design/zcM3VfCNbtiqt5aLhlv4sV/[KDT-단기심화]-지원자-과제)
- **API 문서**: [Swagger 문서](https://assignment-todolist-api.vercel.app/docs/)
- **배포 링크**: [Vercel 배포 링크](https://todo-list-naongjin.vercel.app/)

---

## 🛠️ 기술 스택
- **Framework**: Next.js (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Deployment**: Vercel

---

## ✨ 주요 기능 및 구현 사항

### 1. 공통 및 레이아웃
- **컬러 시스템**: 디자인 시안에 맞춘 컬러 팔레트 및 전역 스타일(`globals.css`) 적용
- **공용 컴포넌트**: `Btn`, `CheckList`, `Search`, `Logo` 등 재사용 가능한 UI 컴포넌트 분리 설계
- **반응형 웹 디자인**: 모바일, 태블릿, 데스크탑 레이아웃 대응 (`Tailwind CSS` 미디어 쿼리 활용)

### 2. 할 일 목록 페이지 (`/`)
- **목록 조회**: 서버 API와 연동하여 진행 중인 할 일과 완료된 할 일을 분리하여 렌더링
- **할 일 추가**: 상단 검색창에 텍스트 입력 후 엔터 또는 추가하기 버튼을 통해 새로운 할 일 생성 (미입력 시 예외 처리)
- **할 일 완료 토글**: 체크박스 클릭 시 서버 상태(isCompleted)를 즉시 반전시켜 진행 중 $\leftrightarrow$ 완료 상태 변경
- **Empty View**: 할 일이 없을 경우 시안에 맞는 일러스트와 안내 문구 노출
- **로고 네비게이션**: 상단 로고 클릭 시 홈(`('/')`)으로 새로고침 이동

### 3. 할 일 상세 페이지 (`/items/{itemId}`)
- **할 일 수정**: 
  - 할 일 이름(Title) 및 메모(Memo) 실시간 수정 가능 (스크롤바 커스텀 적용)
  - 진행/완료 상태 토글 및 이미지(최대 1개, 5MB 이하, 영문 파일명 조건) 첨부 기능 구현
  - 수정 사항이 발생했을 때만 '수정완료' 버튼 활성화 (`Active` 상태)
- **할 일 삭제**: 삭제하기 버튼 클릭 시 아이템 삭제 후 목록 페이지로 자동 이동

---

## 📂 폴더 구조
```text
src/
 ┣ app/
 ┃ ┣ items/[itemId]/page.tsx  # 할 일 상세 페이지
 ┃ ┣ globals.css              # 전역 스타일 및 컬러 시스템
 ┃ ┣ layout.tsx               # 루트 레이아웃 (반응형 GNB 포함)
 ┃ ┣ page.tsx                 # 할 일 목록 페이지 (메인)
 ┃ ┗ assets/                  # 이미지, 로고 에셋 정리 폴더
 ┣ components/
 ┃ ┣ buttons/                 # 버튼 공용 컴포넌트
 ┃ ┣ check-list/              # 체크리스트 컴포넌트
 ┃ ┣ gnb/                     # 네비게이션바 컴포넌트
 ┃ ┣ logo/                    # 로고 컴포넌트 (홈화면 이동 관리)
 ┃ ┗ search/                  # 검색/입력 컴포넌트
 ┣ types/
 ┃ ┗ todo.ts                  # API 인터페이스 타입 정의
 ┗ utils/
   ┗ api.ts                   # API 연동 함수 (getItems, createItem, updateItem 등)
```
---

## ⚙️ 실행 방법 (Getting Started)

1. **레포지토리 클론 및 이동**
   ```bash
   git clone [레포지토리 URL]
   cd [프로젝트 폴더명]
   패키지 설치
   ```
2. **패키지 설치**
  ```bash
  npm install
  ```
3. **환경 변수 설정 (.env.local)**
  프로젝트 루트에 .env.local 파일을 생성하고 아래 내용을 입력하세요.
  ```코드스니펫
  NEXT_PUBLIC_API_BASE_URL=[https://assignment-todolist-api.vercel.app](https://assignment-todolist-api.vercel.app)
  NEXT_PUBLIC_TENANT_ID=naongjin  # 또는 본인의 식별자
  ```
4. **개발 서버 실행**
  ```bash
  npm run dev
  ```
