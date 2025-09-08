import * as CSS from 'csstype'

export interface IStyles {
	containerStyle?: CSS.Properties
	squareStyle?: CSS.Properties
}

interface Iprops {
	styles?: IStyles
	nbLine?: number
	nbColumn?: number
}

const square = (squareStyleReceived: CSS.Properties, key: number) => {
	const combinedSquareStyle = { ...squareStyle, ...squareStyleReceived }
	return (
		<div
			key={key}
			style={combinedSquareStyle}
		/>
	)
}

const line = (nbColumns: number, squareStyle: CSS.Properties, key: number) => {
	const squares = []
	for (let i = 0; i < nbColumns; i++) {
		squares.push(square(squareStyle, i))
	}
	return (
		<div
			key={key}
			style={lineContainer}
		>
			{squares}
		</div>
	)
}

const lines = (nbLines: number, nbColumns: number, squareStyle: CSS.Properties) => {
	const rows = []
	for (let i = 0; i < nbLines; i++) {
		rows.push(line(nbColumns, squareStyle, i))
	}
	return <div>{rows}</div>
}

const Grid = (props: Iprops) => {
	// Constants for default grid dimensions
	const DEFAULT_NB_LINES = 6
	const DEFAULT_NB_COLUMNS = 4

	const combinedContainerStyle = { ...mainContainer, ...props?.styles?.containerStyle }
	return (
		<div style={combinedContainerStyle}>
			{lines(props?.nbLine ?? DEFAULT_NB_LINES, props?.nbColumn ?? DEFAULT_NB_COLUMNS, props?.styles?.squareStyle ?? {})}
		</div>
	)
}

export default Grid

const center = {
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
}

const mainContainer = {
	...center,
	// backgroundColor: 'green',
}

const lineContainer = {
	...center,
	flexDirection: 'row' as 'row',
}

const squareStyle = {
	height: '10px',
	width: '10px',
	backgroundColor: 'yellow',
	margin: '1rem',
	// opacity: "0.5",
}
