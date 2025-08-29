const removeImports = require('next-remove-imports')()
const withBundleAnalyzer = require('@next/bundle-analyzer')({
	enabled: process.env.ANALYZE === 'true',
})

module.exports = withBundleAnalyzer(removeImports({
	distDir: 'build',
	typescript: {
		// Temporarily ignore build errors during transition
		ignoreBuildErrors: true,
	},
	experimental: {
		// Disable SWC lockfile patching to prevent pnpm conflicts
		forceSwcTransforms: false,
	},
	compiler: {
		// Enable styled-components with SSR support (replaces .babelrc)
		styledComponents: {
			ssr: true,
		},
	},
	images: {
		// Configure image qualities for Next.js 15+
		qualities: [40, 70, 75, 80, 85, 90, 95]
	},
	i18n: {
		locales: ['en-US', 'fr', 'debug'],
		defaultLocale: 'fr',
	},
	pageExtensions: ['tsx', 'ts', 'jsx', 'js'],
	webpack: (config) => {
		// Exclude test files from build
		config.module.rules.push({
			test: /\.(test|spec)\.(js|jsx|ts|tsx)$/,
			loader: 'ignore-loader'
		})
		return config
	},
}))
