import { describe, it, expect } from 'vitest'

describe('Testing Setup', () => {
	it('should run a basic test', () => {
		expect(1 + 1).toBe(2)
	})

	it('should handle string operations', () => {
		const str = 'Hello World'
		expect(str.toLowerCase()).toBe('hello world')
		expect(str.split(' ')).toEqual(['Hello', 'World'])
	})

	it('should handle arrays', () => {
		const arr = [1, 2, 3]
		expect(arr.length).toBe(3)
		expect(arr.includes(2)).toBe(true)
		expect([...arr, 4]).toEqual([1, 2, 3, 4])
	})

	it('should handle objects', () => {
		const obj = { name: 'Test', value: 42 }
		expect(obj.name).toBe('Test')
		expect(Object.keys(obj)).toEqual(['name', 'value'])
	})
})
