import * as CSS from 'csstype';
import YouTube from 'react-youtube';
import Btn from '../Components/Button'
import SquareGrid from '../Components/SquareGrid'

const text = {
	header: {
		title: "Toutes les vidéos",
		p: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. At purus risus, dictum auctor massa quam scelerisque. Nibh lobortis feugiat orci donec mauris turpis sagittis malesuada nibh.",
		button: "Notre chaîne youtube",
	},
	packTitle: "Vidéos du pack ",
	packOpe: {
		name: "opérationel",
		label: "pack opérationnel",
	},
	packPeda: {
		name: "pédagogique",
		label: "pack pédagogique",
	},
	packMes: {
		name: "mesures",
		label: "pack mesures",
	},
}

const opts_yt = {
	height: '195',
	width: '320',
};

const listVideoYt = {
	packOpe: [
		"2g811Eo7K8U",
		"2g811Eo7K8V",
		"2g811Eo7K8W",
		"2g811Eo7K8X",
		"2g811Eo7K8Y",
		"2g811Eo7K8Z",
		"2g811Eo7K8A",
		"2g811Eo7K8A",
	],
	packPeda: [
		"2g811Eo7K8A",
		"2g811Eo7K8A",
		"2g811Eo7K8A",
		"2g811Eo7K8A",
	],
	packMes: [
		"2g811Eo7K8A",
		"2g811Eo7K8A",
		"2g811Eo7K8A",
		"2g811Eo7K8A",
	],
}

const splitArrays = (nb : number, arr : any[]) => {
	let retour : any[][] = [];
	let tmp : any[] = [];
	arr.map((id) => {
		tmp.push(id);
		if (tmp.length === 4) {
			retour.push(tmp);
			tmp = [];
		}
	});
	if (tmp.length !== 0)
		retour.push(tmp);
	return retour;
}

const Header = () =>
	<div style={headerStyle.container}>
		<h1 style={headerStyle.title}>{text.header.title}</h1>
		<p style={headerStyle.text}>{text.header.p}</p>
		<div style={headerStyle.btn}><Btn name={text.header.button} route={""}/></div>
		<SquareGrid nbLine={6} nbColumn={6} styles={headerStyle.squareGridStyles}/>
	</div>

const Separator = ({right, color} : {right ?: boolean, color ?: string}) =>	<div style={separatorStyles.container(right)}><div style={separatorStyles.line(color)}/></div>

const LabelVideo = ({color, label} : {color : string, label : string}) =>
	<div style={{...center, ...{position: "relative", marginBottom: "1rem"}}}>
		<div style={videosLineStyle.itemLabel(color)}>
			<p style={{margin: "0"}}>{label}</p>
		</div>
		<p style={{position: "absolute", color: color}}>{label}</p>
	</div>

const ItemVideo = ({color, label, id_yt} : {color : string, label : string, id_yt : string}) =>
	<div style={videosLineStyle.itemContainer}>
		<LabelVideo color={color} label={label}/>
		<YouTube videoId={id_yt} opts={opts_yt}/>
	</div>

const VideosLine = ({color, videoIds} : {color : string, videoIds : string[]}) =>
	<div style={videosLineStyle.container}>
		{console.log("TEST :", videoIds)}
		{videoIds.map((id) => {
			return <ItemVideo color={color} label={"TEST"} id_yt={id}/>
		})}
	</div>

const Pack = ({title, color, videoIds} : {title : string, color ?: string, videoIds : string[]}) =>
	<div style={packStyle.container}>
		<div style={packStyle.titleContainer}><h1>{text.packTitle}</h1><h1 style={{color: color ? color : "yellow", marginLeft: "1rem"}}>{title}</h1></div>
		{splitArrays(4, videoIds).map((listVidLine) => {
			return <VideosLine color={color ? color : "yellow"} videoIds={listVidLine}/>
		})}
	</div>

export default function Videos() {
	return (
		<div>
			<Header/>
			<Separator color={"red"}/>
			<Pack title={text.packOpe.name} color={"red"} videoIds={listVideoYt.packOpe}/>
			<Separator right={true}/>
			<Pack title={text.packPeda.name} videoIds={listVideoYt.packPeda}/>
			<Separator color={"orange"}/>
			<Pack title={text.packMes.name} color={"orange"} videoIds={listVideoYt.packMes}/>
		</div>
	)
}

const center = {
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
}

const headerStyle = {
	container: {
		...center,
		alignItems: "flex-start",
		position: "relative",
		// backgroundColor: "blue",
		width: "100%",
		flexDirection: "column",
	},
	title: {
		fontSize: "9vh",
		margin: "20vh 0 0 20%",
		zIndex: "1",
	},
	text: {
		margin: "0 15% 0 20%",
		zIndex: "1",
	},
	btn: {
		zIndex: "1",
		margin: "3vh 0 20vh 20%",
	},
	squareGridStyles: {
		containerStyle: {
			position: "absolute",
			left: "-1%",
			zIndex: "0",
		},
		squareStyle: {
			minHeight: "3vh",
			minWidth: "3vh",
			margin: "1.5rem 2rem",
			backgroundColor: "yellow",
		},
	},
}

const separatorStyles = {
	container: (right ?: boolean) : CSS.Properties => {
		return {
			display: "flex",
			justifyContent: right ? "flex-end" : "flex-start",
			width: "100%",
		}
	},
	line: (color ?: string) => {
		return {
			backgroundColor: color ? color : "yellow",
			minHeight: "1vh",
			minWidth: "25%",
		}
	},
}

const packStyle = {
	container: {
		margin: "10vh 0",
	},
	titleContainer: {
		display: "flex",
		flexDirection: "row",
		marginLeft: "10vw",
	},
}

const videosLineStyle = {
	container: {
		...center,
		width: "80%",
		justifyContent:"flex-start",// "space-between",
		// backgroundColor:"yellow",
		margin: "0 0 2% 10%",
	},
	itemContainer: {
		...center,
		alignItems: "flex-start",
		flexDirection: "column",
		width: "23%",
		marginRight: "2%",
		// backgroundColor:"blue",
	},
	itemLabel: (color : string) => {
		return {
			backgroundColor: color,
			borderRadius: "50px",
			padding: "0.5rem 2rem",
			opacity: "0.1",
		}
	}
}