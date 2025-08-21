/// <reference types="vitest" />
import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
	plugins: [react()],
	test: {
		globals: true,
		environment: 'jsdom',
		setupFiles: ['./src/test/setup.ts'],
		include: ['src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
		exclude: [
			'**/node_modules/**',
			'**/build/**',
			'**/.direnv/**',
			'**/coverage/**'
		],
		coverage: {
			provider: 'v8',
			exclude: [
				'build/**',
				'node_modules/**',
				'coverage/**',
				'**/*.d.ts',
				'**/*.config.*',
				'**/test/**',
				'**/__tests__/**',
			],
		},
	},
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src'),
		},
	},
})
