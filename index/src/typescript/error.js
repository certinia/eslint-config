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
	'@typescript-eslint/adjacent-overload-signatures',
	'@typescript-eslint/array-type',
	'@typescript-eslint/await-thenable',
	'@typescript-eslint/ban-ts-ignore',
	'@typescript-eslint/ban-types',
	'@typescript-eslint/camelcase',
	'@typescript-eslint/class-name-casing',
	'@typescript-eslint/consistent-type-assertions',
	'@typescript-eslint/member-delimiter-style',
	'@typescript-eslint/no-array-constructor',
	'@typescript-eslint/no-dupe-class-members',
	'@typescript-eslint/no-empty-function',
	'@typescript-eslint/no-empty-interface',
	'@typescript-eslint/no-explicit-any',
	'@typescript-eslint/no-for-in-array',
	'@typescript-eslint/no-inferrable-types',
	'@typescript-eslint/no-misused-new',
	'@typescript-eslint/no-misused-promises',
	'@typescript-eslint/no-this-alias',
	'@typescript-eslint/no-unnecessary-type-assertion',
	'@typescript-eslint/no-non-null-assertion',
	'@typescript-eslint/no-unused-vars',
	'@typescript-eslint/no-use-before-define',
	'@typescript-eslint/no-var-requires',
	'@typescript-eslint/prefer-for-of',
	'@typescript-eslint/prefer-function-type',
	'@typescript-eslint/prefer-includes',
	'@typescript-eslint/prefer-namespace-keyword',
	'@typescript-eslint/prefer-regexp-exec',
	'@typescript-eslint/prefer-string-starts-ends-with',
	'@typescript-eslint/require-await',
	'@typescript-eslint/triple-slash-reference',
	'@typescript-eslint/type-annotation-spacing',
	'@typescript-eslint/unbound-method',
	'@typescript-eslint/unified-signatures',
	'no-var',
	'prefer-const',
	'prefer-rest-params',
	'prefer-spread'
].reduce((result, value) => {
	result[value] = 'error';
	return result;
}, {});

module.exports = {
	...simpleErrors,
	'one-var': ['error', 'never'],
	'valid-jsdoc': [
		'error',
		{
			requireParamType: false,
			requireReturnType: false
		}
	]
};
