import * as CSS from 'csstype';

interface IStyles {
	containerStyle ?: CSS.Properties,
	squareStyle ?: CSS.Properties,
}

interface Iprops {
	styles ?: IStyles,
	nbLine ?: number,
	nbColumn ?: number,
}

const square = (squareStyleReceived : CSS.Properties, key : number) => <div key={key} style={{...squareStyle, ...squareStyleReceived}}></div>

const line = (nbColumns : number, squareStyle : CSS.Properties, key : number) => {
	let squares = [];
	for (var i = 0; i < nbColumns; i++) {
		squares.push(square(squareStyle, i));
	}
	return (<div key={key} style={lineContainer}>{squares}</div>)
}

const lines = (nbLines : number, nbColumns : number, squareStyle : CSS.Properties) => {
	let rows = [];
	for (var i = 0; i < nbLines; i++) {
		rows.push(line(nbColumns, squareStyle, i));
	}
	return (<div>{rows}</div>)
}

const Grid = (props : Iprops) =>
	<div style={{...mainContainer, ...props?.styles?.containerStyle}}>
		{lines(props?.nbLine ? props.nbLine : 6, props?.nbColumn ? props.nbColumn : 4, props?.styles?.squareStyle ? props.styles.squareStyle : {})}
	</div>

export default Grid;

const center = {
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
}

const mainContainer = {
	...center,
	// backgroundColor: 'green',
}

const lineContainer = {
	...center,
	flexDirection: "row" as "row",
}

const squareStyle = {
	height: "10px",
	width: "10px",
	backgroundColor: "yellow",
	margin: "1rem",
	// opacity: "0.5",
}