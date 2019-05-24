# Eslint config.

FinancialForce ESLint configuration.

## Installation

```
$ npm install @financialforcedev/eslint-config  --save-dev
```

## Usage
To add the config to ```package.json```:

```
	{
		"eslintConfig": {
			"extends": "eslint-config"
		}
	}
```
To add the config to ```.eslintrc```:

```
	{
		"extends": "eslint-config"
	}
```
or add the config to ```.eslintrc.js```:
```
	'use strict';

	module.exports = {
		'extends': '@financialforcedev'
	};
```