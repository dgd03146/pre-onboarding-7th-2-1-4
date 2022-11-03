## 원티드 2-1주차 과제

### 목표

- B2C 차량대여 서비스

### 배포링크

[링크](https://pre-onboarding-7th-2-1-4.web.app/)

### 구현 사항

- [x] 차량 리스트
- [x] 차량이 없을 때 처리
- [x] 차량 불러오는 중 처리
- [x] 차량 상세
- [ ] SEO

### 디렉토리 구조

```tsx
📦src
┣ 📂components
┃ ┣ 📂cars
┃ ┣ 📂notFound
┣ 📂layouts
┃ ┣ 📂button
┃ ┣ 📂divider
┃ ┣ 📂header
┃ ┣ 📂layout
┃ ┣ 📂loading
┣ 📂lib
┃ ┣ 📂api
┃ ┣ 📂constants
┃ ┣ 📂hooks
┃ ┣ 📂interfaces
┃ ┣ 📂querys
┃ ┃ ┣ 📂hooks
┃ ┃ ┣ 📂keys
┃ ┣ 📂recoil
┃ ┃ ┣ 📂keys
┃ ┣ 📂seo
┃ ┣ 📂styles
┣ 📂pages
┃ ┣ 📂cars
┣ 📂routes
```

### husky script

- ### pre-commit
  commit 전에 prettier 적용
- ### pre-push
  git push전에 eslint 검사

## prettier 설정

```json
// .prettierrc
{
  "trailingComma": "none",
  "tabWidth": 2,
  "semi": true,
  "singleQuote": false,
  "arrowParens": "always",
  "printWidth": 80
}
```

### eslint 설정

```json
// .eslintrc.json
{
  "env": {
    "browser": true,
    "es2021": true,
    "node": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended"
  ],
  "overrides": [],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaVersion": "latest",
    "sourceType": "module"
  },
  "plugins": ["react", "@typescript-eslint"],
  "rules": {
    "no-var": "error",
    "no-multiple-empty-lines": "error",
    "no-console": ["error", { "allow": ["warn", "error", "info"] }],
    "eqeqeq": "error",
    "dot-notation": "warn",
    "no-unused-vars": "error",
    "quotes": ["error", "double"]
  }
}
```

### 절대경로 설정

### tsconfig.json

```json
"baseUrl": ".",
"paths": {
    "@/*": ["src/*"]
}
```

### config-overrides.js

```js
/* eslint-disable @typescript-eslint/no-var-requires */
const { addWebpackAlias, override } = require("customize-cra");
const path = require("path");

module.exports = override(
  addWebpackAlias({
    "@": path.resolve(__dirname, "src")
  })
);
```
