import { render, screen } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'

import Button, { styles } from '../Button'

// Radium has been removed from the Button component

describe('Button Component', () => {
	it('should render with correct text and route', () => {
		render(
			<Button
				name='Test Button'
				route='test-route'
			/>,
		)

		const button = screen.getByRole('button', { name: 'Test Button' })
		expect(button).toBeInTheDocument()
		expect(button).toHaveTextContent('Test Button')
	})

	it('should render basic button structure', () => {
		render(
			<Button
				name='Basic Button'
				route='test'
			/>,
		)

		const button = screen.getByRole('button')
		expect(button).toBeInTheDocument()
		expect(button).toHaveTextContent('Basic Button')
	})

	it('should be rendered inside an anchor tag', () => {
		const { container } = render(
			<Button
				name='Link Button'
				route='about'
			/>,
		)

		const anchor = container.querySelector('a')
		expect(anchor).toBeInTheDocument()
		expect(anchor).toHaveAttribute('href', '/about')
	})

	it('should handle empty route', () => {
		const { container } = render(
			<Button
				name='Empty Route'
				route=''
			/>,
		)

		const anchor = container.querySelector('a')
		expect(anchor).toHaveAttribute('href', '/')
	})

	it('should have accessible button text', () => {
		render(
			<Button
				name='Accessible Button'
				route='test'
			/>,
		)

		expect(screen.getByText('Accessible Button')).toBeInTheDocument()
	})
})

describe('Button styles', () => {
	it('should have correct default style structure', () => {
		expect(styles.base).toEqual({
			padding: '8px 25px',
			backgroundColor: 'var(--main)',
			borderRadius: '50px',
			color: 'white',
			cursor: 'pointer',
			textTransform: 'uppercase',
			transition: 'all 0.3s ease 0s',
			border: 'none',
		})
	})

	it('should have hover styles defined', () => {
		expect(styles.hover).toBeDefined()
		expect(styles.hover.transform).toBe('translateY(-4px)')
		expect(styles.hover.boxShadow).toBe('0px 5px 5px rgba(0, 0, 0, 0.1)')
	})
})
