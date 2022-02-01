const withPlugins = require("next-compose-plugins");
const withImages = require("next-images");
const withSass = require("@zeit/next-sass");
const webpack = require("webpack");
const path = require("path");
const removeImports = require('next-remove-imports')();
const withTM = require('next-transpile-modules')(['react-markdown', '@uiw/react-markdown-preview']); // pass the modules you would like to see transpiled

module.exports = withTM(removeImports({
	distDir: 'build',
	i18n: {
		locales: ['en-US', 'fr', 'debug'],
		defaultLocale: 'fr',
	},
}));