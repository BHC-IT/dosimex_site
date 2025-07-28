import { describe, it, expect } from 'vitest'
import { parseStringLink, isLink, handleLink } from '../parseStringLink'

describe('parseStringLink', () => {
	it('should parse a simple string without links', () => {
		const input = 'This is a simple text without links'
		const result = parseStringLink(input)
		expect(result).toEqual(['This is a simple text without links'])
	})

	it('should parse a string with a single link', () => {
		const input = 'Check out [Google](https://www.google.com) for search'
		const result = parseStringLink(input)
		expect(result).toEqual(['Check out ', '[Google](https://www.google.com)', ' for search'])
	})

	it('should parse a string with multiple links', () => {
		const input =
			'Visit [Google](https://www.google.com) and [GitHub](https://github.com) for more info'
		const result = parseStringLink(input)
		expect(result).toEqual([
			'Visit ',
			'[Google](https://www.google.com)',
			' and ',
			'[GitHub](https://github.com)',
			' for more info',
		])
	})

	it('should handle complex markdown string from comment', () => {
		const input =
			'this is kind of a test to check if links (Markdown)[Markdown doc](https://www.google.com) are correctly parsed. arr[0] should be a normal test'
		const result = parseStringLink(input)
		expect(result.length).toBeGreaterThan(0)
		expect(result).toContain('[Markdown doc](https://www.google.com)')
	})

	it('should handle empty string', () => {
		const result = parseStringLink('')
		expect(result).toEqual([])
	})
})

describe('isLink', () => {
	it('should identify valid markdown links', () => {
		expect(isLink('[Google](https://www.google.com)')).toBe(true)
		expect(isLink('[Test Link](https://example.com)')).toBe(true)
	})

	it('should reject invalid link formats', () => {
		expect(isLink('Google(https://www.google.com)')).toBe(false)
		expect(isLink('[Google]https://www.google.com)')).toBe(false)
		expect(isLink('[Google](https://www.google.com')).toBe(false)
		expect(isLink('Google](https://www.google.com)')).toBe(false)
		expect(isLink('plain text')).toBe(false)
	})

	it('should handle empty string', () => {
		expect(isLink('')).toBe(false)
	})
})

describe('handleLink', () => {
	it('should extract text and link from valid markdown link', () => {
		const input = '[Google](https://www.google.com)'
		const [text, link] = handleLink(input)
		expect(text).toBe('Google')
		expect(link).toBe('https://www.google.com')
	})

	it('should handle complex link text', () => {
		const input = '[Visit our GitHub repository](https://github.com/example/repo)'
		const [text, link] = handleLink(input)
		expect(text).toBe('Visit our GitHub repository')
		expect(link).toBe('https://github.com/example/repo')
	})

	it('should handle links with special characters', () => {
		const input = '[Test & Examples](https://example.com/test?param=value&other=123)'
		const [text, link] = handleLink(input)
		expect(text).toBe('Test & Examples')
		expect(link).toBe('https://example.com/test?param=value&other=123')
	})
})
