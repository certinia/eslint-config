# @financialforcedev/eslint-config

## 5.0.0

- Updated eslint version to 5.16.0
- Incorporated Prettier for code formatting.
- Replace parserOptions with env so ES6 is enabled automatically but more importantly for new ES6 global variables. see https://eslint.org/docs/user-guide/configuring#specifying-parser-options
- Renamed index.js to base.js
- Deleted .jsbeautifyrc because we are replacing it with prettier.
- Deleted .eslintrc.js
