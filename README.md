## 실행 방법
$ npm install   
$ npm start

## 데모 영상
[GoogleDrive](https://drive.google.com/file/d/1PWewrhCCmxQc7v1WNnNmCcd3FqaSq6DB/view?usp=sharing)

## 기능 구현
* /signup 경로 : 회원가입 기능 (회원가입 api 연동 실패)
* /signin 경로 : 로그인 기능 
* 회원가입 혹은 로그인 시 이메일과 비밀번호 유효성 검사   
** 이메일 조건: @ 포함
** 비밀번호 조건: 8자 이상
** 유효성 검사 통과 못할 시, 버튼 비활성화(disabled)
* 회원가입 성공시, 로그인 페이지 이동
* 로그인 성공시
** /todo 경로로 이동
** 로그인 토큰 localStorage에 저장
** 로그인 토큰이 있는 상태로 회원가입/로그인 페이지 접근시, /todo 경로로 리다이렉트
* todo 페이지 기능
** todo checkbox를 통한 할 일 완료 여부
** todo 수정 클릭시
*** input 창에서 todo 수정 가능
*** 제출, 취소 버튼
** todo 삭제 클릭시 : todo 삭제
