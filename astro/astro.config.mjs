import { defineConfig } from 'astro/config'
import react from '@astrojs/react'
import sitemap from '@astrojs/sitemap'
import critters from 'astro-critters'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
	site: 'https://dosimex.fr',
	integrations: [react(), sitemap(), critters()],
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
})
