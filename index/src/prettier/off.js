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

module.exports = [
	'array-bracket-newline',
	'array-bracket-spacing',
	'array-element-newline',
	'arrow-parens',
	'arrow-spacing',
	'block-spacing',
	'brace-style',
	'comma-dangle',
	'comma-spacing',
	'comma-style',
	'computed-property-spacing',
	'dot-location',
	'eol-last',
	'func-call-spacing',
	'function-call-argument-newline',
	'function-paren-newline',
	'generator-star',
	'generator-star-spacing',
	'implicit-arrow-linebreak',
	'indent',
	'jsx-quotes',
	'key-spacing',
	'keyword-spacing',
	'linebreak-style',
	'multiline-ternary',
	'newline-per-chained-call',
	'new-parens',
	'no-arrow-condition',
	'no-comma-dangle',
	'no-extra-parens',
	'no-extra-semi',
	'no-floating-decimal',
	'no-mixed-spaces-and-tabs',
	'no-multi-spaces',
	'no-multiple-empty-lines',
	'no-reserved-keys',
	'no-space-before-semi',
	'no-trailing-spaces',
	'no-whitespace-before-property',
	'no-wrap-func',
	'nonblock-statement-body-position',
	'object-curly-newline',
	'object-curly-spacing',
	'object-property-newline',
	'one-var-declaration-per-line',
	'operator-linebreak',
	'padded-blocks',
	'quote-props',
	'rest-spread-spacing',
	'semi',
	'semi-spacing',
	'semi-style',
	'space-after-function-name',
	'space-after-keywords',
	'space-before-blocks',
	'space-before-function-paren',
	'space-before-function-parentheses',
	'space-before-keywords',
	'space-in-brackets',
	'space-in-parens',
	'space-infix-ops',
	'space-return-throw-case',
	'space-unary-ops',
	'space-unary-word-ops',
	'switch-colon-spacing',
	'template-curly-spacing',
	'template-tag-spacing',
	'unicode-bom',
	'wrap-iife',
	'wrap-regex',
	'yield-star-spacing'
].reduce((result, value) => {
	result[value] = 'off';
	return result;
}, {});
