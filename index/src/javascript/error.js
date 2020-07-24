/*
 * Copyright (c) 2020, FinancialForce.com, inc
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

const simpleErrors = [
	'block-scoped-var',
	'camelcase',
	'consistent-return',
	'dot-notation',
	'new-cap',
	'no-alert',
	'no-caller',
	'no-catch-shadow',
	'no-cond-assign',
	'no-console',
	'no-constant-condition',
	'no-debugger',
	'no-delete-var',
	'no-dupe-args',
	'no-dupe-keys',
	'no-duplicate-case',
	'no-else-return',
	'no-empty',
	'no-eval',
	'no-ex-assign',
	'no-extra-boolean-cast',
	'no-extra-label',
	'no-fallthrough',
	'no-func-assign',
	'no-global-assign',
	'no-implied-eval',
	'no-inner-declarations',
	'no-invalid-regexp',
	'no-irregular-whitespace',
	'no-label-var',
	'no-lone-blocks',
	'no-loop-func',
	'no-multi-str',
	'no-new-func',
	'no-obj-calls',
	'no-redeclare',
	'no-regex-spaces',
	'no-return-assign',
	'no-self-assign',
	'no-self-compare',
	'no-sequences',
	'no-shadow-restricted-names',
	'no-sparse-arrays',
	'no-undef',
	'no-undef-init',
	'no-unexpected-multiline',
	'no-unreachable',
	'no-unsafe-finally',
	'no-unsafe-negation',
	'no-unused-expressions',
	'no-unused-labels',
	'no-use-before-define',
	'no-useless-constructor',
	'no-useless-return',
	'one-var',
	'prefer-arrow-callback',
	'prefer-const',
	'radix',
	'strict',
	'use-isnan',
	'valid-typeof',
	'vars-on-top'
].reduce((result, value) => {
	result[value] = 'error';
	return result;
}, {});

module.exports = {
	...simpleErrors,
	complexity: [
		'error',
		{
			max: 20
		}
	],
	'consistent-this': ['error', 'me'],
	curly: ['error', 'all'],
	eqeqeq: ['error', 'smart'],
	'func-style': [
		'error',
		'declaration',
		{
			allowArrowFunctions: true
		}
	],
	'max-depth': [
		'error',
		{
			max: 4
		}
	],
	'max-lines': [
		'error',
		{
			max: 1000,
			skipBlankLines: true,
			skipComments: true
		}
	],
	'max-nested-callbacks': [
		'error',
		{
			max: 10
		}
	],
	'max-params': [
		'error',
		{
			max: 5
		}
	],
	'max-statements': [
		'error',
		{
			max: 30
		}
	],
	'no-labels': [
		'error',
		{
			allowLoop: true,
			allowSwitch: true
		}
	],
	'no-unused-vars': [
		'error',
		{
			args: 'none',
			vars: 'all'
		}
	],
	'valid-jsdoc': [
		'error',
		{
			matchDescription: '.+\\.',
			prefer: {
				arg: 'param',
				argument: 'param',
				['return']: 'returns',
				virtual: 'abstract'
			},
			preferType: {
				array: 'Array',
				Boolean: 'boolean',
				['function']: 'Function',
				Integer: 'integer',
				Number: 'number',
				object: 'Object',
				String: 'string'
			},
			requireParamDescription: true,
			requireParamType: true,
			requireReturn: true,
			requireReturnDescription: true,
			requireReturnType: true
		}
	]
};
