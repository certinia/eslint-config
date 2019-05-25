# ESlint config.

FinancialForce ESLint configuration.

## Installation
Clone the repository and run

```
$ npm pack
```

This will create a tarball file in the root folder. Move the file into the root of the target project
and run

```
$ npm install @financialforcedev/eslint-config  --save-dev
```

## Usage

add the config to ```.eslintrc.js```:
```
	module.exports = {
		extends: "@financialforcedev/eslint-config/base.js",
		"rules": {
	// add your own rules example
			"no-var": "error",

	// if you want to override prettier rules add the example below
			"prettier/prettier": [
				"error",
				{
					"semi": false
				}
			]
		}
	}
```