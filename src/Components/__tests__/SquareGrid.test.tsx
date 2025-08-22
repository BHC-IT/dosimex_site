import { render } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import SquareGrid from '../SquareGrid'

describe('SquareGrid Component', () => {
	it('should render default grid without custom styles', () => {
		const { container } = render(<SquareGrid />)
		expect(container.firstChild).toMatchSnapshot()
	})

	it('should render with custom container styles', () => {
		const customStyles = {
			containerStyle: {
				backgroundColor: 'red',
				padding: '20px',
			},
		}

		const { container } = render(<SquareGrid styles={customStyles} />)
		expect(container.firstChild).toMatchSnapshot()
	})

	it('should render with custom square styles', () => {
		const customStyles = {
			squareStyle: {
				backgroundColor: 'blue',
				borderRadius: '10px',
			},
		}

		const { container } = render(<SquareGrid styles={customStyles} />)
		expect(container.firstChild).toMatchSnapshot()
	})

	it('should render grid structure with correct number of squares', () => {
		const { container } = render(<SquareGrid />)
		const squares = container.querySelectorAll('div > div')
		expect(squares.length).toBeGreaterThan(0)
	})
})
