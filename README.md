# eslint-config

## Introduction

This is my [ESLint](https://eslint.org/) configuration.
It contains all of our lintint rules, and helps us keep our codebases aligned
and in-sync with the highest standards.

### Install the package

```shell
npm i @egor.xyz/eslint-config
```

## Usage

### Option 1

Add to `package.json` in the root of your project:

```package
{
...
"eslintConfig": {
  "extends": [
    "react-app",
    "react-app/jest",
    "@egor.xyz"
  ]
},
...
}
```

### Option 2

Add `.eslintrc.js` to the root of your project:

```javascript
module.exports = {
  extends: '@egor.xyz'
};
```
