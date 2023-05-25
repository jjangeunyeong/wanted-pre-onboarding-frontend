# Todo App

> **원티드 프리온보딩 프론트엔드 인턴십 선발 과제 Todo**

## ⚙️ 실행 방법

$ npm install  
$ npm start

## 데모 영상

[]()

## 🔗 [배포 링크]()

## 목차

- [Todo App](#todo-app)
  - [⚙️ 실행 방법](#️-실행-방법)
  - [🔗 배포 링크](#-배포-링크)
  - [목차](#목차)
  - [🔗 사전 선발 과제](#-사전-선발-과제)
  - [✏️ 서비스 구성](#️-서비스-구성)
    - [1️⃣ 커밋 컨벤션](#1️⃣-커밋-컨벤션)
    - [2️⃣ 타입스크립트 컨벤션](#2️⃣-타입스크립트-컨벤션)
    - [3️⃣ 폴더 구조](#3️⃣-폴더-구조)
  - [🛠️ 기술 스택](#️-기술-스택)
  - [📖 서비스 소개](#-서비스-소개)
    - [1️⃣ 기능 구현](#1️⃣-기능-구현)
    - [2️⃣ 페이지별 화면](#2️⃣-페이지별-화면)
  - [👑 Best Practice](#-best-practice)
    - [📌 Todo 컴포넌트 Best Practice 선정](#-todo-컴포넌트-best-practice-선정)
    - [📌 api 콜 로직을 커스텀 훅으로 관리하기 vs. api 콜 함수들을 따로 관리하기](#-api-콜-로직을-커스텀-훅으로-관리하기-vs-api-콜-함수들을-따로-관리하기)
    - [📌 트러블 슈팅](#-트러블-슈팅)

## ✏️ 서비스 구성

### 1️⃣ 커밋 컨벤션

```
- Update : 새로운 기능 추가
- Fix : 버그 수정
- Env : 개발 환경 관련 설정
- Style : 코드 스타일 수정 (세미 콜론, 인덴트 등의 스타일적인 부분만)
- Refactor : 코드 개선 (더 효율적인 코드로 변경 등)
- Design : CSS 등 디자인 추가/수정iE
- Comment : 주석 추가/수정
- Docs : 내부 문서 추가/수정
- Test : 테스트 추가/수정
- Chore : 빌드 관련 코드 수정, 패키지 매니저 관련 수정
- Rename : 파일 및 폴더명 수정
- Remove : 파일 삭제
```

### 2️⃣ 타입스크립트 컨벤션

### 3️⃣ 폴더 구조

```
📦 src
├── 📂 assets
├── 📂 components
│ ├── 📂 AddTodo
│ ├── 📂 LoginForm
│ ├── 📂 route
│ ├── 📂 shared
│ ├── 📂 TodoItem
├── 📂 hooks
├── 📂 pages
│ ├── 📂 Home
│ ├── 📄 Login
│ ├── 📄 NotFound
│ ├── 📄 Register
│ └── 📄 Todo
├── 📄 App
├── 📄 index
├── 📄 Router
└── 📂 styles
```

## 🛠️ 기술 스택

![react](https://user-images.githubusercontent.com/123078739/234895132-18ab503a-fcc7-486d-b89a-cb0cc1f7796b.svg)
![typescript](https://user-images.githubusercontent.com/123078739/234895162-42f905c6-765d-44d2-bcb1-b011286ef6b2.svg)  
![Axios](https://img.shields.io/badge/axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white)
![styledcomponents](https://user-images.githubusercontent.com/123078739/234895185-7fd6c334-faca-4520-8551-2f20b32f085e.svg)
![eslint](https://user-images.githubusercontent.com/123078739/234895191-c1198a7b-9e2e-499a-8e61-c3b87bf8e2c2.svg)
![prettier](https://img.shields.io/badge/prettier-F7B93E?style=for-the-badge&logo=prettier&logoColor=black)

## 📖 서비스 소개

### 1️⃣ 기능 구현

- /signup 경로 : 회원가입 기능 (회원가입 api 연동 실패)
- /signin 경로 : 로그인 기능
- 회원가입 혹은 로그인 시 이메일과 비밀번호 유효성 검사
  - 이메일 조건: @ 포함
  - 비밀번호 조건: 8자 이상
  - 유효성 검사 통과 못할 시, 버튼 비활성화(disabled)
- 회원가입 성공시, 로그인 페이지 이동
- 로그인 성공시
  - /todo 경로로 이동
  - 로그인 토큰 localStorage에 저장
  - 로그인 토큰이 있는 상태로 회원가입 or 로그인 페이지 접근시, /todo 경로로 리다이렉트
- /todo 페이지 기능
  - todo checkbox를 통한 할 일 완료 여부
  - 수정 버튼 클릭시
    - input 창에서 할일 수정 가능
    - 제출, 취소 버튼
  - 삭제 버튼 클릭시 : todo 삭제

### 2️⃣ 페이지별 화면

|                                                                                                                  |                                                                                                                     |
| ---------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
|<img width="1280" alt="image" src="https://github.com/jjangeunyeong/wanted-pre-onboarding-frontend/assets/123078739/db9f176a-7a2b-4443-b850-82c0ead3678d">|<img width="1280" alt="image" src="https://github.com/jjangeunyeong/wanted-pre-onboarding-frontend/assets/123078739/0c533abc-41ee-4c81-90ac-a69170288b06">|
| 메인 페이지                                                                                                      | 회원가입 페이지                                                                                                     |
|<img width="1280" alt="image" src="https://github.com/jjangeunyeong/wanted-pre-onboarding-frontend/assets/123078739/ff79eaef-f73b-4698-99ca-c874d892a9d9">|<img width="1268" alt="image" src="https://github.com/jjangeunyeong/wanted-pre-onboarding-frontend/assets/123078739/aaa0853e-c738-446c-9b71-a5c799d78783">|
| 로그인 페이지                                                                                                    | Todo 페이지                                                                                                         |

### 📌 트러블 슈팅
