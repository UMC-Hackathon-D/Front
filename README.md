# 🛥️ 낭만 보트 - Front

## ⭐️ 기술 스택

### ✅ Framework

-   **React** + **Typescript**

    -   페이지 이동이 많지 않고 Single Page 내부에서의 동작들이 많아 React로 선정하였고 , compile 과정에서 error check가 가능한 TS를 이용해 DX , UX를 증진시키기 위해 사용하였습니다.

### ✅ Data Fetching

-   **axios** + **tanstack/react-query**

    -   자동으로 데이터를 JSON으로 Parsing 해주고 브라우저 호환성을 위해 axios를 사용하고 , server data와 client data 상호 간의 최신 상태를 간편하게 유지하기 위해 tanstack query를 사용하였습니다.

---

### ✅ CSS

-   **styled-components**

    -   팀원들이 짧은 시간 동안 tailwind를 학습하기엔 무리가 있다고 판단하여 익숙한 styled-component를 이용하였습니다.

-   **styled-reset**

    -   기존 html 세팅 초기화를 위해 사용하였습니다.

### ✅ validate

-   **react-hook-form** 및 **zod**

    -   서비스 내부에 validation을 검증해야 하는 과정이 많기에 useRef를 이용해 rendering 발생 횟수를 줄이는 react-hook-form 및 재사용 가능한 schema를 작성할 수 있는 zod를 사용하였습니다.

## ⭐️ 브랜치(Branch) 컨벤션

1. **main** : 최종 배포를 위한 branch. Pull Request를 이용해 develope branch를 최종 merge
2. **develop** : 배포하기 전 개발 중일 때 각자의 브랜치에서 merge하는 브랜치
3. **feat / #이슈 번호 / 기능명** : feature 브랜치. 새로운 기능 개발. 개발이 완료되면 develop 브랜치로 병합
4. **fix / #이슈 번호 / 기능명** : fix 브랜치. 생성 후 버그가 생겼을 때 수정하는 브랜치

-   **git-flow 방식**  
     \* 내가 만들고가 하는 기능이나 문제들을 먼저 issue로 올리고 올린 이슈 넘버를 활용해서 feature/#1-signup 이런식으로 새로운 브런치를 만들어서 기능을 구현하거나 리펙토링 한 다음에 이 브런치 들을 develop 브랜치에 merge 하는 구조

-   **브랜치 생성**

❗❗항상 develop에 체크아웃해서 만들것❗❗  
( develop 브랜치에서 새로운 브랜치를 만들어야 가장 최신 상태를 유지하는 하위 브랜치가 생성된다. )

      $ git branch feat/#이슈번호/기능명

-   **브랜치 체크아웃 ( 만든 브랜치로 이동 )**

        $ git checkout feat/#이슈번호/기능명

---

## ⭐️ 코딩(Coding) 컨벤션

### 네이밍 컨벤션

-   **변수 / 함수 / 메서드** : Camel Case(카멜 케이스)
-   **컴포넌트** : Pascal Case(파스칼 케이스)

### 들여쓰기 컨벤션

-   **들여쓰기** : Tab

### 주석 컨벤션

-   **한 줄 주석** : //
-   **여러 줄 주석** : /\*\*/

---

## ⭐️ 이슈(Issue) 컨벤션

### 제목 :

**[Feat] 이슈 제목**

-   **기능 추가 시** : **[feat]** 로그인 기능 추가
-   **오류/ 버그 발생 시** : **[fix]** 로그인 오류 수정
-   **리팩토링 시** : **[refactor]** 로그인 페이지 리팩토링

### 내용

-   **feat** 일때:
    -   **작업한 내용** : 작업한 기능 작성 ( 예시 : 로그인 )
-   **fix** 일때:
    -   **발생한 오류** :
    -   **발생한 원인** :
    -   **해결 방안** :
    -   **결과** :
-   **refactor** 일때:
    -   **내용** : 리팩토링이 필요한 부분 입력
    -   **리팩토링 이유** : 과거 와 현재를 비교해서 작성해주기
    -   **리팩토링 결과** : 변경한 내용 입력

## ⭐️ PR(Pull Request) 컨벤션

### PR 제목

[Feat/#이슈 번호] " pr message "
(예시 : [Feat/#1] "로그인 기능 추가")

### 📌 관련 이슈번호

(Closes 키워드가 있어야 PR이 머지되었을 때 이슈가 자동으로 닫힌다)

-   Closes #이슈 번호

### 📌 PR 유형

어떤 변경 사항이 있나요?

-   [ ] 새 기능 추가
-   [ ] 버그 수정
-   [ ] CSS 등 사용자 UI 디자인 변경
-   [ ] 리팩토링

### 📌 PR 요약

해당 PR을 간단하게 요약해 주세요

### 📌 작업 세부 내용

1.
2.
3.

### 📸 스크린샷 (선택)

### 🔗 참고 자료

​

---

## 커밋(Commit) 컨벤션

      [Feat]: 커밋 메시지 타입
      (git commit -m “[Feat/#이슈 번호]: "commit messages”")


      (예시: git commit -m "feat:"회원 가입 기능 구현"" )

-   **커밋 메시지 타입 종류**

1. **init** : 프로젝트 초기 생성 및 설정
2. **feat** : 새로운 기능 추가, 기존의 기능을 요구 사항에 맞추어 수정
3. **fix** : 기능에 대한 버그 수정
4. **build** : 빌드 관련 수정
5. **chore** : 패키지 매니저 수정, 그 외 기타 수정 ex) .gitignore
6. **docs** : 문서(주석) 수정
7. **style** : 코드 스타일, 포맷팅에 대한 수정
8. **refactor** : 기능의 변화가 아닌 코드 리팩터링 ex) 변수 이름 변경

## ⭐️ 폴더(Folder) 컨벤션

### FSD (Feature-Sliced Design)

기존 컴포넌트 기반 폴더 구조는 가독성이 떨어지기에 , FE app을 **기능 단위**로 나누어 구조화하는 설계 패턴인 **FSD**를 채택하였습니다.

### 폴더별 목적 및 기능

-   `app`: 앱의 초기화 및 전역 설정.
-   `entities`: 핵심 도메인 데이터 및 상태.
-   `features`: 특정 기능 구현(비즈니스 로직 포함).
-   `shared`: 공통 유틸리티, 스타일, 라이브러리.
-   `pages`: 특정 화면을 나타내는 단위(여러 features를 조합).
-   `widgets` : 독립적으로 사용할 수 있는 컴포넌트

이 중 , **해당 서비스에는 비즈니스적 가치를 가지는 기능 단위 (like ,review , product rating 등)이 포함되지 않고 , 특정 도메인 데이터의 상태를 관리할 필요가 없다고 판단**하여 entities 및 features 폴더 구조는 사용하지 않기로 결정했습니다.

## ⭐️ 화면 분석

https://www.figma.com/design/uk9cNi1saPpTxzehCxKY2g/Untitled?node-id=0-1&p=f&t=Gvoy5LOXBLsceFNZ-0

## ⭐️ 파트 분배
<img width="707" alt="스크린샷 2024-12-17 오후 4 49 20" src="https://github.com/user-attachments/assets/6656ef08-cb28-4c2d-8ff6-b032b5abb3e9" />
