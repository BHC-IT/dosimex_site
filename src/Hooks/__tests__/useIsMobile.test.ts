import { renderHook, act } from '@testing-library/react'
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'

import { useIsMobile, useMobile } from '../useIsMobile'

// Mock window.innerWidth and navigator.userAgent
const mockWindow = (width: number, userAgent = 'Mozilla/5.0') => {
	Object.defineProperty(window, 'innerWidth', {
		writable: true,
		configurable: true,
		value: width,
	})

	Object.defineProperty(navigator, 'userAgent', {
		writable: true,
		configurable: true,
		value: userAgent,
	})
}

describe('useIsMobile', () => {
	beforeEach(() => {
		vi.useFakeTimers()
	})

	afterEach(() => {
		vi.useRealTimers()
	})

	it('should call the style function with desktop value for wide screens', () => {
		mockWindow(1024) // Desktop width

		const mockStyleFunction = vi.fn((mobile: boolean) => ({
			fontSize: mobile ? '14px' : '16px',
			padding: mobile ? '8px' : '12px',
		}))

		renderHook(() => useIsMobile(mockStyleFunction))
		act(() => {
			vi.advanceTimersByTime(10)
		})

		expect(mockStyleFunction).toHaveBeenCalledWith(false)
	})

	it('should call the style function with mobile value for narrow screens', () => {
		mockWindow(400) // Mobile width

		const mockStyleFunction = vi.fn((mobile: boolean) => ({
			fontSize: mobile ? '14px' : '16px',
			padding: mobile ? '8px' : '12px',
		}))

		renderHook(() => useIsMobile(mockStyleFunction))
		act(() => {
			vi.advanceTimersByTime(10)
		})

		expect(mockStyleFunction).toHaveBeenCalledWith(true)
	})

	it('should handle style function execution', () => {
		mockWindow(1024)

		const mockStyleFunction = vi.fn((mobile: boolean) => ({
			display: mobile ? 'none' : 'block',
		}))

		const { result } = renderHook(() => useIsMobile(mockStyleFunction))

		act(() => {
			vi.advanceTimersByTime(10)
		})

		expect(mockStyleFunction).toHaveBeenCalled()
		expect(typeof result.current === 'object' || result.current === null).toBe(true)
	})
})

describe('useMobile', () => {
	beforeEach(() => {
		vi.useFakeTimers()
	})

	afterEach(() => {
		vi.useRealTimers()
	})

	it('should return false initially and then the correct mobile state for desktop', () => {
		mockWindow(1024) // Desktop width

		const { result } = renderHook(() => useMobile())

		// Initially should be false (default for SSR/initial render)
		expect(result.current).toBe(false)

		// After timeout, should still be false for desktop
		act(() => {
			vi.advanceTimersByTime(10)
		})

		expect(result.current).toBe(false)
	})

	it('should handle mobile device by screen width', () => {
		mockWindow(400) // Mobile width

		const { result } = renderHook(() => useMobile())

		// Initially should be false (default)
		expect(result.current).toBe(false)

		act(() => {
			vi.advanceTimersByTime(10)
		})

		expect(result.current).toBe(true)
	})

	it('should detect mobile device by user agent', () => {
		mockWindow(1024, 'Mozilla/5.0 (iPhone; CPU iPhone OS 14_7_1 like Mac OS X)')

		const { result } = renderHook(() => useMobile())

		// Initially should be false (default)
		expect(result.current).toBe(false)

		act(() => {
			vi.advanceTimersByTime(10)
		})

		expect(result.current).toBe(true)
	})

	it('should respond to window resize (responsive design mode simulation)', () => {
		// Start with desktop width
		mockWindow(1024)

		const { result } = renderHook(() => useMobile())

		act(() => {
			vi.advanceTimersByTime(10)
		})

		expect(result.current).toBe(false)

		// Simulate responsive design mode - resize to mobile width
		act(() => {
			Object.defineProperty(window, 'innerWidth', {
				writable: true,
				configurable: true,
				value: 400, // Mobile width
			})

			// Trigger resize event
			window.dispatchEvent(new Event('resize'))
		})

		expect(result.current).toBe(true)

		// Resize back to desktop
		act(() => {
			Object.defineProperty(window, 'innerWidth', {
				writable: true,
				configurable: true,
				value: 1024, // Desktop width
			})

			// Trigger resize event
			window.dispatchEvent(new Event('resize'))
		})

		expect(result.current).toBe(false)
	})
})
