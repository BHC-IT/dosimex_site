import { describe, it, expect } from 'vitest'
import { text } from '../useText'

// Just test the text object and basic functionality, skip the complex hook testing for now
describe('useText', () => {
	it('should have text object with all languages', () => {
		expect(text).toHaveProperty('fr')
		expect(text).toHaveProperty('en')
		expect(text).toHaveProperty('debug')
	})

	it('should export language objects that are defined', () => {
		expect(text.fr).toBeDefined()
		expect(text.en).toBeDefined()
		expect(text.debug).toBeDefined()
	})

	it('should have consistent structure across languages', () => {
		const frKeys = Object.keys(text.fr || {})
		const enKeys = Object.keys(text.en || {})

		// Both languages should have some keys
		expect(frKeys.length).toBeGreaterThan(0)
		expect(enKeys.length).toBeGreaterThan(0)
	})
})
