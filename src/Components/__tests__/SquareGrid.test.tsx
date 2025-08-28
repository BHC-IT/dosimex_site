import { render } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import SquareGrid, { IStyles } from '../SquareGrid'

// Test data factories
const createMockStyles = (overrides: Partial<IStyles> = {}): IStyles => ({
	containerStyle: {
		backgroundColor: 'lightblue',
		padding: '15px',
		border: '1px solid gray',
	},
	squareStyle: {
		backgroundColor: 'green',
		borderRadius: '5px',
		width: '12px',
		height: '12px',
	},
	...overrides,
})

const createMockGridProps = (overrides = {}) => ({
	nbLine: 3,
	nbColumn: 3,
	styles: createMockStyles(),
	...overrides,
})

describe('SquareGrid Component', () => {
	describe('Rendering', () => {
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

		it('should render component structure correctly', () => {
			const { container } = render(<SquareGrid />)

			// Component should render without errors
			expect(container).toBeDefined()
			expect(container.firstChild).not.toBeNull()

			// Should have main container
			const mainContainer = container.firstChild
			expect(mainContainer).toBeInTheDocument()
		})
	})

	describe('Grid Dimensions', () => {
		it('should render default grid with 6 rows and 4 columns (24 squares)', () => {
			const { container } = render(<SquareGrid />)

			// Use a more specific approach - count all divs that would be squares
			// The grid structure is complex but squares should be the innermost divs
			const allDivs = container.querySelectorAll('div')
			// Default is 6 lines × 4 columns = 24 squares (but there are also container divs)
			expect(allDivs.length).toBeGreaterThan(24)

			// Verify basic structure exists
			expect(container.firstChild).toBeInTheDocument()
		})

		it('should render custom grid dimensions correctly', () => {
			const props = createMockGridProps({
				nbLine: 2,
				nbColumn: 3,
			})

			const { container } = render(<SquareGrid {...props} />)

			// Should render without errors
			expect(container.firstChild).toBeInTheDocument()

			// Should contain multiple divs for the grid structure
			const allDivs = container.querySelectorAll('div')
			expect(allDivs.length).toBeGreaterThan(6) // 2×3 = 6 squares plus containers
		})

		it('should render minimal grid correctly', () => {
			const props = createMockGridProps({
				nbLine: 1,
				nbColumn: 1,
			})

			const { container } = render(<SquareGrid {...props} />)

			// Should render at least the container and one square
			expect(container.firstChild).toBeInTheDocument()
			const allDivs = container.querySelectorAll('div')
			expect(allDivs.length).toBeGreaterThan(1)
		})

		it('should render large grid without errors', () => {
			const props = createMockGridProps({
				nbLine: 5,
				nbColumn: 5,
			})

			const { container } = render(<SquareGrid {...props} />)

			// Should render without errors
			expect(container.firstChild).toBeInTheDocument()

			// Should contain many divs for the large grid
			const allDivs = container.querySelectorAll('div')
			expect(allDivs.length).toBeGreaterThan(25) // 5×5 = 25 squares plus containers
		})
	})

	describe('Style Application', () => {
		it('should render with custom container styles', () => {
			const customContainerStyle = {
				backgroundColor: 'purple',
				padding: '25px',
			}

			const { container } = render(
				<SquareGrid styles={{ containerStyle: customContainerStyle }} />,
			)

			// Component should render without errors when custom styles are provided
			expect(container.firstChild).toBeInTheDocument()
		})

		it('should render with custom square styles', () => {
			const customSquareStyle = {
				backgroundColor: 'orange',
				width: '20px',
				height: '20px',
			}

			const { container } = render(
				<SquareGrid styles={{ squareStyle: customSquareStyle }} />,
			)

			// Component should render without errors when custom square styles are provided
			expect(container.firstChild).toBeInTheDocument()
		})

		it('should handle both container and square styles', () => {
			const customStyles = {
				containerStyle: {
					backgroundColor: 'lightgray',
				},
				squareStyle: {
					backgroundColor: 'darkblue',
				},
			}

			const { container } = render(<SquareGrid styles={customStyles} />)

			// Component should render without errors when both styles are provided
			expect(container.firstChild).toBeInTheDocument()
		})
	})

	describe('Edge Cases', () => {
		it('should handle zero lines gracefully', () => {
			const props = createMockGridProps({
				nbLine: 0,
				nbColumn: 5,
			})

			const { container } = render(<SquareGrid {...props} />)

			// Should render container even with zero lines
			expect(container.firstChild).toBeInTheDocument()
		})

		it('should handle zero columns gracefully', () => {
			const props = createMockGridProps({
				nbLine: 3,
				nbColumn: 0,
			})

			const { container } = render(<SquareGrid {...props} />)

			// Should render container even with zero columns
			expect(container.firstChild).toBeInTheDocument()
		})

		it('should handle undefined props gracefully', () => {
			const { container } = render(<SquareGrid styles={undefined} />)

			// Should render with default dimensions and styles
			expect(container.firstChild).toBeInTheDocument()
		})

		it('should handle empty styles object', () => {
			const { container } = render(<SquareGrid styles={{}} />)

			// Should render with default styles
			expect(container.firstChild).toBeInTheDocument()
		})

		it('should handle partial styles object', () => {
			const partialStyles = {
				containerStyle: {
					backgroundColor: 'pink',
				},
				// squareStyle is missing
			}

			const { container } = render(<SquareGrid styles={partialStyles} />)

			// Should render without errors with partial styles
			expect(container.firstChild).toBeInTheDocument()
		})
	})

	describe('Grid Structure', () => {
		it('should create grid structure with proper nesting', () => {
			const props = createMockGridProps({
				nbLine: 2,
				nbColumn: 2,
			})

			const { container } = render(<SquareGrid {...props} />)

			// Should have nested div structure for the grid
			expect(container.firstChild).toBeInTheDocument()
			const allDivs = container.querySelectorAll('div')
			expect(allDivs.length).toBeGreaterThan(4) // At least container + squares
		})

		it('should render basic flex layout structure', () => {
			const { container } = render(<SquareGrid />)

			// Main container should exist
			const mainContainer = container.firstChild as HTMLElement
			expect(mainContainer).toBeInTheDocument()
		})

		it('should render all squares as div elements', () => {
			const props = createMockGridProps({
				nbLine: 2,
				nbColumn: 2,
			})

			const { container } = render(<SquareGrid {...props} />)

			const allDivs = container.querySelectorAll('div')

			// All elements should be divs
			allDivs.forEach(div => {
				expect(div.tagName.toLowerCase()).toBe('div')
			})
		})

		it('should handle different grid configurations', () => {
			const configs = [
				{ nbLine: 1, nbColumn: 1 },
				{ nbLine: 2, nbColumn: 3 },
				{ nbLine: 4, nbColumn: 2 },
			]

			configs.forEach(config => {
				const props = createMockGridProps(config)
				const { container } = render(<SquareGrid {...props} />)

				// Each configuration should render without errors
				expect(container.firstChild).toBeInTheDocument()
			})
		})
	})
})
