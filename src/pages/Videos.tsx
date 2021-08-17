import * as CSS from 'csstype';
import YouTube from 'react-youtube';
import Btn from '../Components/Button'
import SquareGrid from '../Components/SquareGrid'
import { useText } from '../Hooks/useText';

const opts_yt = {
	height: '195',
	width: '320',
};

const listVideoYt = {
	packOpe: [
		"E5eWKTJaNxQ",
		"wkuVxTBXc8g",
		"ksOJEbihuvA",
		"Ga4roi63sSM",
		"4Cfya_rHa04",
		"7emAJHES-fw",
		"CnqQhyB6cEo",
		"sj-FVjP87jA",
	],
	packPeda: [
		"Ltk5x2dW_VI",
		"vXT2h8GJ8Qk",
		"cBQ5-CiqqT4",
		"pYbgwudKniA",
	],
	packMes: [
		"vSI75UZ_9UQ",
		"aA4QUutuaJc",
		"2Mq-TR8cG-o",
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

const Header = ({text} : {text : any}) =>
	<div style={headerStyle.container}>
		<h2 style={headerStyle.title}>{text.header.title}</h2>
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

const VideosLine = ({color, videoIds, text, label} : {color : string, videoIds : string[], text : any, label : string}) =>
	<div style={videosLineStyle.container}>
		{videoIds.map((id) => {
			return <ItemVideo color={color} label={label} id_yt={id}/>
		})}
	</div>

const Pack = ({title, color, videoIds, text, label, right = false} : {title : string, color ?: string, videoIds : string[], text : any, label : string, right?: boolean}) =>
	<div style={packStyle.container}>
		<div style={{...packStyle.titleContainer, justifyContent: !right ?  'flex-start' : 'flex-end'}}><h3>{text.packTitle}</h3><h3 style={{color: color ? color : "var(--flash)", marginLeft: "1rem"}}>{title}</h3></div>
		{splitArrays(4, videoIds).map((listVidLine) => {
			return <VideosLine color={color ? color : "var(--flash)"} videoIds={listVidLine} text={text} label={label}/>
		})}
	</div>

export default function Videos() {
	const text = useText('Videos');
	return (
		<div style={{display: 'flex', flexDirection: 'column', overflowX: 'hidden'}} >
			<Header text={text}/>
			<Separator color={"var(--main)"}/>
			<Pack title={text.packOpe.name} color={"var(--main)"} videoIds={listVideoYt.packOpe} text={text} label={text.packOpe.label}/>
			<Separator right={true}/>
			<Pack right={true} title={text.packPeda.name} videoIds={listVideoYt.packPeda} text={text} label={text.packPeda.label}/>
			<Separator color={"var(--orange)"}/>
			<Pack title={text.packMes.name} color={"var(--orange)"} videoIds={listVideoYt.packMes} text={text} label={text.packMes.label}/>
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
	} as CSS.Properties,
	title: {
		margin: "20vh 0 0 30vw",
		zIndex: 1,
	} as CSS.Properties,
	text: {
		margin: "0 15% 0 30vw",
		zIndex: 1,
		color:'var(--grey)',
	} as CSS.Properties,
	btn: {
		zIndex: 1,
		margin: "3vh 0 20vh 30vw",
	} as CSS.Properties,
	squareGridStyles: {
		containerStyle: {
			position: "absolute",
			left: "-1%",
			zIndex: 0,
		} as CSS.Properties,
		squareStyle: {
			height: "19px",
			width: "17px",
			margin: "1.5rem 2.5rem",
			backgroundColor: "var(--flashTrans)",
		} as CSS.Properties,
	}
}

const separatorStyles = {
	container: (right ?: boolean) : CSS.Properties => {
		return {
			display: "flex",
			justifyContent: right ? "flex-end" : "flex-start",
			width: "100%",
		}
	},
	line: (color ?: string) : CSS.Properties => {
		return {
			backgroundColor: color ? color : "var(--flash)",
			minHeight: "1vh",
			minWidth: "25%",
		}
	},
}

const packStyle = {
	container: {
		marginTop: "5vh",
		marginBottom: "15vh",
	} as CSS.Properties,
	titleContainer: {
		display: "flex",
		flexDirection: "row",
		marginLeft: "10vw",
		marginRight: "10vw",
		marginBottom: "5vh",
		alignItems:'center',
	} as CSS.Properties,
}

const videosLineStyle = {
	container: {
		...center,
		width: "100%",
		justifyContent:"flex-start",// "space-between",
		// backgroundColor:"yellow",
		margin: "0 0 2% 2%",
	} as CSS.Properties,
	itemContainer: {
		...center,
		alignItems: "flex-start",
		flexDirection: "column",
		width: "23%",
		marginRight: "4vw",
		// backgroundColor:"blue",
	} as CSS.Properties,
	itemLabel: (color : string) : CSS.Properties => {
		return {
			backgroundColor: color,
			borderRadius: "50px",
			padding: "0.5rem 2rem",
			opacity: "0.1",
		}
	}
}