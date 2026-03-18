import { defineMiddleware } from 'astro:middleware'
import { randomBytes } from 'node:crypto'

export const onRequest = defineMiddleware(async (_context, next) => {
	const response = await next()

	const contentType = response.headers.get('content-type')
	if (!contentType?.includes('text/html')) {
		return response
	}

	const nonce = randomBytes(16).toString('base64')
	let html = await response.text()

	// Inject Trusted Types default policy as first script in <head>
	// Must run before any other script to cover React hydration sinks
	const ttPolicy =
		'<script>if(window.trustedTypes?.createPolicy){trustedTypes.createPolicy("default",{createHTML:s=>s,createScript:s=>s,createScriptURL:s=>s})}</script>'
	html = html.replace('<head>', `<head>${ttPolicy}`)

	// Add nonce to all <script> opening tags
	html = html.replace(/<script(?=[\s>])/g, `<script nonce="${nonce}"`)

	const csp = [
		"default-src 'self'",
		// strict-dynamic: scripts loaded by nonced scripts are trusted
		// unsafe-inline + https: are CSP2/CSP1 fallbacks (ignored by CSP3 browsers)
		`script-src 'nonce-${nonce}' 'strict-dynamic' 'unsafe-inline' https:`,
		"style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
		"font-src 'self' https://fonts.gstatic.com",
		"img-src 'self' data: https:",
		"frame-src https://www.youtube-nocookie.com",
		"connect-src 'self' https://api.emailjs.com",
		"frame-ancestors 'self'",
		'trusted-types default',
		"require-trusted-types-for 'script'",
	].join('; ')

	const headers = new Headers(response.headers)
	headers.set('Content-Security-Policy', csp)

	return new Response(html, {
		status: response.status,
		statusText: response.statusText,
		headers,
	})
})
