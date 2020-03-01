/**
 * Copyright (c) 2017-2020, FinancialForce.com, inc
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without modification,
 *   are permitted provided that the following conditions are met:
 *
 * - Redistributions of source code must retain the above copyright notice,
 *      this list of conditions and the following disclaimer.
 * - Redistributions in binary form must reproduce the above copyright notice,
 *      this list of conditions and the following disclaimer in the documentation
 *      and/or other materials provided with the distribution.
 * - Neither the name of the FinancialForce.com, inc nor the names of its contributors
 *      may be used to endorse or promote products derived from this software without
 *      specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
 *  ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
 *  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL
 *  THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS
 *  OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY
 *  OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
 *  ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 **/

module.exports = {
	['extends']: 'eslint:recommended',
	env: {
		node: true,
		es6: true,
		browser: false
	},
	parserOptions: {
		ecmaVersion: '2018',
		sourceType: 'module'
	},
	plugins: ['prettier'],
	root: true,
	rules: {
		// Require that all functions are run in strict mode
		strict: 'error',

		// *****************************************
		// ***** Possible Errors *******************
		// *****************************************

		'array-bracket-spacing': ['error', 'never'],

		'object-curly-spacing': ['error', 'always'],

		'arrow-parens': ['error', 'always'],

		// Disallow assignment in conditional expressions
		'no-cond-assign': 'warn',

		// Disallow use of 'console'
		'no-console': 'warn',

		// Disallow use of constant expressions in conditions
		'no-constant-condition': 'warn',

		// Disallow the 'debugger' statement
		'no-debugger': 'error',

		// Disallow duplicate arguments in function definitions
		'no-dupe-args': 'error',

		// Disallow duplicate keys when creating object literals
		'no-dupe-keys': 'error',

		// Disallow a duplicate case label in switch statements
		'no-duplicate-case': 'error',

		// No empty blocks
		'no-empty': 'warn',

		// Disallow reassigning exceptions in catch clauses
		'no-ex-assign': 'error',

		// Disallow double-negation boolean casts in a boolean context
		'no-extra-boolean-cast': 'warn',

		// Disallow Extra Parens
		//
		// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence
		'no-extra-parens': 'off',

		// Disallow Extra Semicolons
		'no-extra-semi': 'warn',

		// Disallow Function Assignment
		'no-func-assign': 'warn',

		// Disallow function or variable declarations in nested blocks
		'no-inner-declarations': 'error',

		// Disallow invalid regular expression strings in RegExp constructors
		'no-invalid-regexp': 'warn',

		// Disallow irregular whitespace outside of strings and comments
		'no-irregular-whitespace': 'error',

		// Disallow Global Object Function Calls
		'no-obj-calls': 'error',

		// Disallow multiple spaces in regular expression literals
		'no-regex-spaces': 'warn',

		// Disallow sparse arrays
		'no-sparse-arrays': 'error',

		// Disallow confusing multiline expressions
		'no-unexpected-multiline': 'error',

		// Disallow unreachable statements after a return, throw, continue, or break statement
		'no-unreachable': 'error',

		// Disallow control flow statements in finally blocks
		'no-unsafe-finally': 'warn',

		// Disallow negating the left operand of relational operators
		'no-unsafe-negation': 'warn',

		// Require isNaN(), disallow comparisons with the value NaN
		'use-isnan': 'error',

		// Ensure that the results of typeof are compared against a valid string
		'valid-typeof': 'error',

		// *****************************************
		// ***** Best Practices ********************
		// *****************************************

		// Enforce the use of variables within the scope they are defined
		'block-scoped-var': 'warn',

		// Enforce a maximum cyclomatic complexity allowed in a program
		//
		// https://ariya.io/2012/12/complexity-analysis-of-javascript-code
		complexity: [
			'warn',
			{
				max: 20
			}
		],

		// Require return statements to either always or never specify values
		'consistent-return': 'warn',

		// Specify curly brace conventions for all control statements
		curly: ['error', 'all'],

		// Require 'default' cases in 'switch' statements
		'default-case': 'off',

		// Enforce consistent newlines before and after dots
		'dot-location': 'off',

		// Encourages use of dot notation whenever possible
		'dot-notation': 'warn',

		// Require the use of === and !==
		eqeqeq: ['error', 'smart'],

		// Require 'for-in' loops to include an 'if' statement
		//
		// for (key in foo) {
		//     if ({}.hasOwnProperty.call(foo, key)) {
		//         doSomething(key);
		//     }
		// }
		'guard-for-in': 'off',

		// Disallow use of 'alert'
		'no-alert': 'error',

		// Disallow use of arguments.caller or arguments.callee
		'no-caller': 'warn',

		// Disallow 'else' blocks after 'return' statements in 'if' statements
		'no-else-return': 'off',

		// Disallow empty functions
		'no-empty-function': 'off',

		// Disallow null comparisons
		//
		// if (foo == null) {
		//     ...
		// }
		'no-eq-null': 'off',

		// Disallow eval()
		'no-eval': 'error',

		// Disallow unnecessary labels
		'no-extra-label': 'warn',

		// Disallow fallthrough of 'case' statements
		'no-fallthrough': 'warn',

		// Disallow reassignments of or read-only global variables
		'no-global-assign': 'error',

		// Disallow the use of eval()-like methods
		'no-implied-eval': 'warn',

		// Disallow use of labels for anything other then loops and switches
		'no-labels': [
			'error',
			{
				allowLoop: true,
				allowSwitch: true
			}
		],

		// Disallow unnecessary nested blocks
		'no-lone-blocks': 'warn',

		// Disallow function declarations and expressions inside loop statements
		'no-loop-func': 'warn',

		// Disallow magic numbers
		'no-magic-numbers': 'off',

		// Disallow multiple spaces
		'no-multi-spaces': 'warn',

		// Disallow use of multiline strings
		'no-multi-str': 'warn',

		// Disallow use of new operator for Function object
		'no-new-func': 'error',

		// Disallow declaring the same variable more then once
		'no-redeclare': 'error',

		// Disallow use of assignment in return statement
		'no-return-assign': 'warn',

		// Self assignments have no effect, so probably those are an error due to incomplete refactoring
		'no-self-assign': 'warn',

		// Disallow comparisons where both sides are exactly the same
		'no-self-compare': 'warn',

		// Disallow use of comma operator
		'no-sequences': 'warn',

		// Disallow usage of expressions in statement position
		'no-unused-expressions': 'error',

		// Disallow Unused Labels
		'no-unused-labels': 'error',

		// Disallow redundant 'return' statements
		'no-useless-return': 'warn',

		// Require use of the second argument for parseInt()
		radix: 'error',

		// Requires to declare all vars on top of their containing scope
		'vars-on-top': 'error',

		// Require immediate function invocation to be wrapped in parentheses
		'wrap-iife': 'error',

		// Require or disallow Yoda conditions
		yoda: 'off',

		// *****************************************
		// ***** Variables *************************
		// *****************************************

		// Disallow the catch clause parameter name being the same as a variable in the outer scope
		'no-catch-shadow': 'warn',

		// Disallow deletion of variables
		'no-delete-var': 'error',

		// Disallow labels that share a name with a variable
		'no-label-var': 'error',

		// Disallow shadowing of names such as 'arguments'
		'no-shadow-restricted-names': 'error',

		// Disallow declaration of variables already declared in the outer scope
		'no-shadow': 'off',

		// Disallow initializing variables to 'undefined'
		'no-undef-init': 'warn',

		// Disallow undeclared variables
		'no-undef': 'error',

		// Disallow unused variables
		'no-unused-vars': [
			'error',
			{
				vars: 'all',
				args: 'none'
			}
		],

		// Disallow use of variables before they are defined
		'no-use-before-define': 'error',

		// *****************************************
		// ***** Stylistic Issues ******************
		// *****************************************

		// Enforce brace style:
		//
		// if (something) {
		//     ...
		// } else {
		//     ...
		// }
		'brace-style': ['warn', '1tbs'],

		// Enforce all variables being camel case
		camelcase: 'error',

		// Disallow dangling commas
		'comma-dangle': ['error', 'never'],

		// Enforce spacing before and after comma
		'comma-spacing': [
			'warn',
			{
				before: false,
				after: true
			}
		],

		// Enforce one true comma style
		'comma-style': ['error', 'last'],

		// Enforces consistent naming when capturing the current execution context
		'consistent-this': ['warn', 'me'],

		// Require file to end with single newline
		'eol-last': 'warn',

		// Require or disallow spacing between function identifiers and their invocations
		'func-call-spacing': ['warn', 'never'],

		// Enforce the consistent use of either function declarations or expressions
		'func-style': ['warn', 'declaration', { allowArrowFunctions: true }],

		// Enforce consistent indentation
		indent: [
			'warn',
			'tab',
			{
				SwitchCase: 1
			}
		],

		// Enforces spacing between keys and values in object literal properties
		'key-spacing': [
			'warn',
			{
				beforeColon: false,
				afterColon: true
			}
		],

		// Enforce consistent spacing before and after keywords
		'keyword-spacing': [
			'warn',
			{
				before: true,
				after: true
			}
		],

		// Enforce a maximum depth that blocks can be nested
		'max-depth': [
			'warn',
			{
				max: 4
			}
		],

		// Enforce a maximum file length
		'max-lines': [
			'warn',
			{
				max: 1000,
				skipBlankLines: true,
				skipComments: true
			}
		],

		// Enforce a maximum depth that callbacks can be nested
		// Increased from 3 to 10 as each of the describe/it counts as a callback
		'max-nested-callbacks': [
			'warn',
			{
				max: 10
			}
		],

		// Enforce a maximum number of parameters in function definitions
		'max-params': [
			'warn',
			{
				max: 5
			}
		],

		// Enforce a maximum number of statements allowed in function blocks
		'max-statements': [
			'warn',
			{
				max: 30
			}
		],

		// Require a capital letter for constructors
		'new-cap': 'error',

		// Require parens for Constructors
		'new-parens': 'error',

		// Disallow mixed spaces and tabs for indentation
		'no-mixed-spaces-and-tabs': 'warn',

		// Disallow multiple empty lines
		'no-multiple-empty-lines': [
			'warn',
			{
				max: 1,
				maxBOF: 0,
				maxEOF: 1
			}
		],

		// Disallow trailing whitespace at the end of lines
		'no-trailing-spaces': 'warn',

		// Disallow dangling underscores in identifiers
		'no-underscore-dangle': 'off',

		// Disallow whitespace before properties
		'no-whitespace-before-property': 'warn',

		// There can only be one var statement inside a function
		'one-var': 'error',

		// Only keys which are not valid object literal keys may be quoted.
		'quote-props': ['error', 'as-needed'],

		// Use Single quotes
		quotes: ['error', 'single', 'avoid-escape'],

		// Disallow space before semicolon, enforce spacing after semicolon
		'semi-spacing': 'warn',

		// Enforce semicolons
		semi: ['error', 'always'],

		'space-before-blocks': [
			'warn',
			{
				functions: 'always',
				keywords: 'always',
				classes: 'always'
			}
		],

		// Require a space after function names
		'space-before-function-paren': [
			'warn',
			{
				anonymous: 'always',
				named: 'ignore'
			}
		],

		// Require spacing around infix operators
		'space-infix-ops': [
			'warn',
			{
				int32Hint: true
			}
		],

		// Require or disallow spaces before/after unary operators
		'space-unary-ops': [
			'warn',
			{
				words: true,
				nonwords: false
			}
		],

		// *****************************************
		// *****  ES6 Features *********************
		// *****************************************

		// disallow unnecessary constructors
		'no-useless-constructor': 'warn',

		// require arrow functions as callbacks
		'prefer-arrow-callback': 'warn',

		// require const declarations for variables that are never reassigned after declared
		'prefer-const': 'warn',

		// *****************************************
		// ***** JS Doc style **********************
		// *****************************************

		// ideally we would require jsdoc for exported functions only, however eslint does not allow this
		// turn it off
		'require-jsdoc': 'off',

		// enforce valid and consistent JSDoc comments
		'valid-jsdoc': [
			'error',
			{
				// enforces consistent documentation tags specified by an object whose properties mean instead of key use value
				prefer: {
					arg: 'param',
					argument: 'param',
					['return']: 'returns',
					virtual: 'abstract'
				},

				// enforces consistent type strings specified by an object whose properties mean instead of key use value
				preferType: {
					array: 'Array',
					Boolean: 'boolean',
					Integer: 'integer',
					Number: 'number',
					['function']: 'Function',
					object: 'Object',
					String: 'string'
				},

				// requires a return tag if and only if the function or method has a return statement (this option value does apply to constructors)
				requireReturn: false,

				// disallow missing type in return tags
				requireReturnType: true,

				// specifies (as a string) a regular expression to match the description in each JSDoc comment (for example, '.+' requires a description; this option does not apply to descriptions in parameter or return tags)
				matchDescription: '.+\\.',

				requireParamType: true,

				// disallow missing description in parameter tags
				requireParamDescription: true,

				// disallow missing description in return tags
				requireReturnDescription: true
			}
		],

		// *****************************************
		// ************ Prettier *******************
		// *****************************************
		'prettier/prettier': [
			'error',
			{
				arrowParens: 'always',
				printWidth: 100,
				semi: true,
				singleQuote: true,
				tabWidth: 4,
				useTabs: true
			}
		]
	},
	overrides: [
		{
			files: ['*.spec.js'],
			env: {
				mocha: true
			},
			rules: {
				// Allow usage of expressions in statement position
				'no-unused-expressions': 'off',

				'max-statements': [
					'warn',
					{
						max: 50
					}
				],

				// Turn off jsdoc rules
				'require-jsdoc': 'off',
				'valid-jsdoc': 'off'
			}
		},
		{
			files: ['**/*.ts'],
			parser: '@typescript-eslint/parser',
			parserOptions: {
				project: 'tsconfig.json'
			},
			plugins: ['@typescript-eslint'],
			rules: {
				'@typescript-eslint/adjacent-overload-signatures': 'error',
				'@typescript-eslint/array-type': 'error',
				'@typescript-eslint/await-thenable': 'error',
				'@typescript-eslint/ban-ts-ignore': 'error',
				'@typescript-eslint/ban-types': 'error',
				'@typescript-eslint/camelcase': 'error',
				'@typescript-eslint/class-name-casing': 'error',
				'@typescript-eslint/consistent-type-assertions': 'error',
				'@typescript-eslint/explicit-function-return-type': 'off',
				'@typescript-eslint/indent': 'off',
				'@typescript-eslint/interface-name-prefix': 'off',
				'@typescript-eslint/member-delimiter-style': 'error',
				'@typescript-eslint/no-array-constructor': 'error',
				'@typescript-eslint/no-dupe-class-members': 'error',
				'@typescript-eslint/no-empty-function': 'error',
				'@typescript-eslint/no-empty-interface': 'error',
				'@typescript-eslint/no-explicit-any': 'error',
				'@typescript-eslint/no-for-in-array': 'error',
				'@typescript-eslint/no-inferrable-types': 'error',
				'@typescript-eslint/no-misused-new': 'error',
				'@typescript-eslint/no-misused-promises': 'error',
				'@typescript-eslint/no-namespace': 'off',
				'@typescript-eslint/no-non-null-assertion': 'warn',
				'@typescript-eslint/no-parameter-properties': 'off',
				'@typescript-eslint/no-this-alias': 'error',
				'@typescript-eslint/no-unnecessary-type-assertion': 'error',
				'@typescript-eslint/no-unused-vars': 'error',
				'@typescript-eslint/no-use-before-define': 'error',
				'@typescript-eslint/no-var-requires': 'error',
				'@typescript-eslint/prefer-for-of': 'error',
				'@typescript-eslint/prefer-function-type': 'error',
				'@typescript-eslint/prefer-includes': 'error',
				'@typescript-eslint/prefer-namespace-keyword': 'error',
				'@typescript-eslint/prefer-regexp-exec': 'error',
				'@typescript-eslint/prefer-string-starts-ends-with': 'error',
				'@typescript-eslint/quotes': ['off'],
				'@typescript-eslint/require-await': 'error',
				'@typescript-eslint/triple-slash-reference': 'error',
				'@typescript-eslint/type-annotation-spacing': 'error',
				'@typescript-eslint/unbound-method': 'error',
				'@typescript-eslint/unified-signatures': 'error',
				camelcase: 'off',
				'no-array-constructor': 'off',
				'no-dupe-class-members': 'off',
				'no-empty-function': 'off',
				'no-unused-vars': 'off',
				'no-use-before-define': 'off',
				'no-var': 'error',
				'one-var': ['error', 'never'],
				'prefer-const': 'error',
				'prefer-rest-params': 'error',
				'prefer-spread': 'error',
				'require-await': 'off',
				'valid-jsdoc': [
					'error',
					{
						requireParamType: false,
						requireReturnType: false
					}
				]
			}
		},
		{
			files: ['**/*.test.ts'],
			env: {
				jest: true
			},
			rules: {
				'@typescript-eslint/no-empty-function': 'off',
				'@typescript-eslint/no-non-null-assertion': 'off',
				'@typescript-eslint/no-var-requires': 'off',
				'@typescript-eslint/unbound-method': 'off',
				'max-classes-per-file': 'off',
				'no-unused-expressions': 'off',
				'max-lines': 'off',
				'max-statements': [
					'warn',
					{
						max: 50
					}
				]
			}
		}
	]
};
