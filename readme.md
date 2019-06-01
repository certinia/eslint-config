# ESlint config.

FinancialForce ESLint configuration.

## Installation
Clone the repository and run

```
$ npm pack
```

This will create the tarball file financialforcedev-eslint-config-5.0.0.tgz in the root folder. Move the file into the root of the target project
and run

```
$ npm init -y
$ npm install financialforcedev-eslint-config-5.0.0.tgz  eslint-plugin-prettier@latest --save-dev
```

## Usage

add the following config to ```.eslintrc.js```:
```
module.exports = {
	extends: "@financialforcedev/eslint-config/base.js",
	"globals": {},
	"rules": {
// add your own rules for example
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