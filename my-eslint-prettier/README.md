## ESLint

Rules:

## StyletLint

Rules: https://stylelint.io/user-guide/rules/

StyletLint 不支持 ESLint 那样引入模块的方式来配置，所以即使封装了 StyleLint 的配置成一个单独的库，在项目中使用时，依然需要安装相应的模块包。

```shell
npm i -D stylelint stylelint-config-standard-scss
yarn add -D stylelint stylelint-config-standard-scss
pnpm i -D stylelint stylelint-config-standard-scss
```
