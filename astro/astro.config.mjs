import { defineConfig } from 'astro/config'
import react from '@astrojs/react'
import sitemap from '@astrojs/sitemap'
import tailwindcss from '@tailwindcss/vite'
import vercel from '@astrojs/vercel'

export default defineConfig({
	output: 'server',
	site: 'https://dosimex.fr',
	integrations: [react(), sitemap()],
	vite: {
		plugins: [tailwindcss()],
	},
	i18n: {
		defaultLocale: 'fr',
		locales: ['fr', 'en'],
		routing: {
			prefixDefaultLocale: false,
		},
	},
	adapter: vercel(),
})
