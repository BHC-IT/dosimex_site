const removeImports = require('next-remove-imports')()

module.exports = removeImports({
	distDir: 'build',
	typescript: {
		// Temporarily ignore build errors during transition
		ignoreBuildErrors: true,
	},
	experimental: {
		// Disable SWC lockfile patching to prevent pnpm conflicts
		forceSwcTransforms: false,
	},
	i18n: {
		locales: ['en-US', 'fr', 'debug'],
		defaultLocale: 'fr',
	},
})
