import { fixupPluginRules } from '@eslint/compat'
import js from '@eslint/js'
import typescript from '@typescript-eslint/eslint-plugin'
import typescriptParser from '@typescript-eslint/parser'
import importPlugin from 'eslint-plugin-import'
import jsxA11y from 'eslint-plugin-jsx-a11y'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import unusedImports from 'eslint-plugin-unused-imports'

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
	// Base JavaScript configuration
	{
		...js.configs.recommended,
		languageOptions: {
			ecmaVersion: 'latest',
			sourceType: 'module',
			globals: {
				console: 'readonly',
				process: 'readonly',
				Buffer: 'readonly',
				__dirname: 'readonly',
				__filename: 'readonly',
				global: 'readonly',
				window: 'readonly',
				document: 'readonly',
				navigator: 'readonly',
				localStorage: 'readonly',
				sessionStorage: 'readonly',
			},
		},
	},

	// TypeScript configuration
	{
		files: ['**/*.{ts,tsx}'],
		languageOptions: {
			parser: typescriptParser,
			parserOptions: {
				ecmaFeatures: {
					jsx: true,
				},
				project: true,
				tsconfigRootDir: import.meta.dirname,
			},
		},
		plugins: {
			'@typescript-eslint': typescript,
		},
		rules: {
			...typescript.configs.recommended.rules,
			...typescript.configs['recommended-requiring-type-checking'].rules,
			// TypeScript specific rules (medium+ strictness)
			'@typescript-eslint/no-unused-vars': 'error',
			'@typescript-eslint/no-explicit-any': 'warn',
			'@typescript-eslint/explicit-function-return-type': 'off',
			'@typescript-eslint/explicit-module-boundary-types': 'off',
			'@typescript-eslint/no-non-null-assertion': 'warn',
			'@typescript-eslint/prefer-const': 'error',
			'@typescript-eslint/no-var-requires': 'error',
			'@typescript-eslint/no-empty-function': 'warn',
			'@typescript-eslint/no-inferrable-types': 'error',
			'@typescript-eslint/prefer-nullish-coalescing': 'error',
			'@typescript-eslint/prefer-optional-chain': 'error',
			'@typescript-eslint/no-unnecessary-type-assertion': 'error',
			'@typescript-eslint/no-floating-promises': 'error',
			'@typescript-eslint/await-thenable': 'error',
			'@typescript-eslint/no-misused-promises': 'error',
			'@typescript-eslint/require-await': 'error',
			'@typescript-eslint/prefer-readonly': 'warn',
			'@typescript-eslint/no-shadow': 'error',
			'@typescript-eslint/ban-ts-comment': [
				'warn',
				{
					'ts-expect-error': 'allow-with-description',
					'ts-ignore': 'allow-with-description',
					'ts-nocheck': false,
					'ts-check': false,
					minimumDescriptionLength: 10,
				},
			],
		},
	},

	// React configuration
	{
		files: ['**/*.{js,jsx,ts,tsx}'],
		languageOptions: {
			parserOptions: {
				ecmaFeatures: {
					jsx: true,
				},
			},
		},
		plugins: {
			react: fixupPluginRules(react),
			'react-hooks': fixupPluginRules(reactHooks),
		},
		settings: {
			react: {
				version: 'detect',
			},
		},
		rules: {
			...react.configs.recommended.rules,
			...reactHooks.configs.recommended.rules,
			// React specific rules (medium+ strictness)
			'react/react-in-jsx-scope': 'off', // Not needed in React 17+
			'react/prop-types': 'off', // Using TypeScript instead
			'react/display-name': 'warn',
			'react/no-unescaped-entities': 'error',
			'react/jsx-key': 'error',
			'react/jsx-no-duplicate-props': 'error',
			'react/jsx-no-undef': 'error',
			'react/jsx-uses-react': 'off', // Not needed in React 17+
			'react/jsx-uses-vars': 'error',
			'react/no-danger': 'warn',
			'react/no-deprecated': 'error',
			'react/no-direct-mutation-state': 'error',
			'react/no-unused-state': 'error',
			'react/self-closing-comp': 'error',
			'react/jsx-fragments': ['error', 'syntax'],
			'react/jsx-no-useless-fragment': 'error',
			'react/jsx-pascal-case': 'error',
			'react/jsx-boolean-value': ['error', 'never'],
			'react/jsx-curly-brace-presence': ['error', { props: 'never', children: 'never' }],

			// React Hooks rules
			'react-hooks/rules-of-hooks': 'error',
			'react-hooks/exhaustive-deps': 'warn',
		},
	},

	// Import and general rules configuration
	{
		files: ['**/*.{js,jsx,ts,tsx}'],
		plugins: {
			import: fixupPluginRules(importPlugin),
			'unused-imports': unusedImports,
			'jsx-a11y': fixupPluginRules(jsxA11y),
		},
		settings: {
			'import/resolver': {
				typescript: {
					alwaysTryTypes: true,
					project: './tsconfig.json',
				},
			},
		},
		rules: {
			...jsxA11y.configs.recommended.rules,

			// Import/Export rules (medium+ strictness)
			'import/order': [
				'error',
				{
					groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
					'newlines-between': 'always',
					alphabetize: {
						order: 'asc',
						caseInsensitive: true,
					},
				},
			],
			'import/no-duplicates': 'error',
			'import/no-unresolved': 'error',
			'import/no-cycle': 'error',
			'import/no-self-import': 'error',
			'import/no-unused-modules': 'warn',
			'import/first': 'error',
			'import/newline-after-import': 'error',

			// General JavaScript/ES6+ rules (medium+ strictness)
			'no-console': 'warn',
			'no-debugger': 'error',
			'no-alert': 'error',
			'no-var': 'error',
			'prefer-const': 'error',
			'no-unused-vars': 'off', // Using @typescript-eslint/no-unused-vars instead
			'no-undef': 'off', // TypeScript handles this
			'no-duplicate-imports': 'error',
			'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 0 }],
			'no-trailing-spaces': 'error',
			'eol-last': ['error', 'always'],
			'comma-dangle': ['error', 'always-multiline'],
			semi: ['error', 'never'],
			quotes: ['error', 'single', { avoidEscape: true }],
			'object-curly-spacing': ['error', 'always'],
			'array-bracket-spacing': ['error', 'never'],
			'computed-property-spacing': ['error', 'never'],
			'space-in-parens': ['error', 'never'],
			'keyword-spacing': ['error', { before: true, after: true }],
			'space-before-blocks': ['error', 'always'],
			'space-infix-ops': 'error',
			'arrow-spacing': ['error', { before: true, after: true }],
			'prefer-arrow-callback': 'error',
			'arrow-parens': ['error', 'as-needed'],

			// Code quality rules (medium+ strictness)
			complexity: ['warn', 15],
			'max-depth': ['warn', 4],
			'max-lines': ['warn', 500],
			'max-lines-per-function': ['warn', 100],
			'max-params': ['warn', 5],
			'no-magic-numbers': [
				'warn',
				{
					ignore: [-1, 0, 1, 2],
					ignoreArrayIndexes: true,
					ignoreDefaultValues: true,
				},
			],
			'prefer-template': 'error',
			'no-useless-concat': 'error',
			'no-useless-return': 'error',
			'no-else-return': 'error',
			'no-lonely-if': 'error',
			'no-nested-ternary': 'error',
			'no-unneeded-ternary': 'error',

			// Unused imports plugin
			'unused-imports/no-unused-imports': 'error',
			'unused-imports/no-unused-vars': [
				'warn',
				{
					vars: 'all',
					varsIgnorePattern: '^_',
					args: 'after-used',
					argsIgnorePattern: '^_',
				},
			],

			// Accessibility rules (medium strictness)
			'jsx-a11y/alt-text': 'error',
			'jsx-a11y/anchor-has-content': 'error',
			'jsx-a11y/click-events-have-key-events': 'warn',
			'jsx-a11y/no-static-element-interactions': 'warn',
			'jsx-a11y/no-noninteractive-element-interactions': 'warn',
		},
	},

	// Test files configuration
	{
		files: ['**/__tests__/**/*', '**/*.test.*', '**/*.spec.*'],
		languageOptions: {
			globals: {
				jest: 'readonly',
				describe: 'readonly',
				it: 'readonly',
				expect: 'readonly',
				beforeEach: 'readonly',
				afterEach: 'readonly',
				beforeAll: 'readonly',
				afterAll: 'readonly',
			},
		},
		rules: {
			'@typescript-eslint/no-explicit-any': 'off',
			'no-magic-numbers': 'off',
			'max-lines-per-function': 'off',
		},
	},

	// JavaScript files configuration
	{
		files: ['*.js', '*.jsx'],
		rules: {
			'@typescript-eslint/no-var-requires': 'off',
			'@typescript-eslint/explicit-function-return-type': 'off',
		},
	},

	// Ignore patterns
	{
		ignores: [
			'node_modules/',
			'.next/',
			'build/',
			'dist/',
			'coverage/',
			'*.config.js',
			'*.config.ts',
		],
	},
]
