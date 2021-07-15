import * as CSS from 'csstype';
import SquareGrid from '../Components/SquareGrid'
import Btn from '../Components/Button'
import Image from 'next/image'
import { useText } from '../Hooks/useText';

const Header = ({text} : {text : any}) =>
	<div style={headerStyles.container}>
		<div style={headerStyles.textContainer}>
			<h1 style={headerStyles.title}>{text.header.title}</h1>
			<p style={headerStyles.text}>{text.header.p}</p>
		</div>
		<div style={headerStyles.imgContainer}>
			<Image src="/Images/formation.png" width={732*0.9} height={503*0.9} />
		</div>
		<SquareGrid nbLine={6} nbColumn={4} styles={headerStyles.squareGridStyles}/>
	</div>

const Separator = ({right} : {right ?: boolean}) =>	<div style={separatorStyles.container(right)}><div style={separatorStyles.line}/></div>

const Exemples = ({text} : {text : any}) =>
	<div style={exemplesStyles.container}>
		<h1 style={exemplesStyles.title}>{text.section1.title}</h1>
		<div style={exemplesStyles.listContainer}>
			<div style={exemplesStyles.columnListContainer}>
				<p>{text.section1.li1}</p>
				<p>{text.section1.li2}</p>
				<p>{text.section1.li3}</p>
				<p>{text.section1.li4}</p>
				<p>{text.section1.li5}</p>
				<p>{text.section1.li6}</p>
				<p>{text.section1.li7}</p>
			</div>
			<div style={exemplesStyles.columnListContainer}>
				<p>{text.section1.li8}</p>
				<p>{text.section1.li9}</p>
				<p>{text.section1.li10}</p>
				<p>{text.section1.li11}</p>
				<p>{text.section1.li12}</p>
				<p>{text.section1.li13}</p>
				<p>{text.section1.li14}</p>
			</div>
		</div>
	</div>

const Partnership = ({text} : {text : any}) =>
	<div style={partnershipStyles.container}>
		<h1 style={partnershipStyles.title}>{text.section2.title}</h1>
		<p style={partnershipStyles.text}>{text.section2.li1}</p>
		<p style={partnershipStyles.text}>{text.section2.li2}</p>
		<p style={partnershipStyles.text}>{text.section2.li3}</p>
		<p style={partnershipStyles.text}>{text.section2.li4}</p>
		<div style={{margin: "5vh auto 0 10%"}}><div style={partnershipStyles.btn}>{text.section2.button}</div></div>
	</div>

const Questions = ({text} : {text : any}) =>
	<div style={questionsStyles.container}>
		<h1 style={questionsStyles.title}>{text.questions.title}</h1>
		<p style={questionsStyles.text}>{text.questions.p}</p>
		<Btn name={text.questions.button} route={""}/>
	</div>

const Training = () => {
	const text = useText('Training');
	return (
		<>
			<Header text={text}/>
			<Separator right={false}/>
			<Exemples text={text}/>
			<Separator right={true}/>
			<Partnership text={text}/>
			<Questions text={text}/>
		</>
	);
}

export default Training;

const center = {
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
}

const headerStyles = {
	container: {
		...center,
		position: "relative",
		height: "65vh",
		width: "100%",
		overflow: "hidden",
	},
	textContainer: {
		...center,
		justifyContent: "flex-start",
		flexDirection: "column",
		height: "65%",
		width: "40%",
		marginRight: "5rem",
		// backgroundColor: "red",
	},
	imgContainer: {
		...center,
		height: "65%",
		width: "35%",
		backgroundColor: "transparent",
		zIndex: "1",
	},
	title: {
		fontSize: "9vh",
		alignSelf: "flex-start",
		margin: "auto 0 0 0",
	},
	text: {
		margin: "0 0 auto 0",
		fontSize: "2vh",
	},
	squareGridStyles: {
		containerStyle: {
			position: "absolute",
			right: "-1%",
			top: "0",
			zIndex: "0",
		},
		squareStyle: {
			minHeight: "3vh",
			minWidth: "3vh",
			margin: "1.5rem 2.5rem",
			backgroundColor: "var(--flashTrans)",
		},
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
	line: {
		backgroundColor: "var(--flashTrans)",
		minHeight: "1vh",
		minWidth: "25%",
	},
}

const exemplesStyles = {
	container: {
		display: "flex",
		justifyContent: "center",
		flexDirection: "column",
		height: "65vh",
		width: "100%",
		// backgroundColor: "red",
	},
	title: {
		lineHeight: "normal",
		fontSize: "6vh",
		margin: "0 10%",
	},
	listContainer: {
		display: "flex",
		justifyContent: "space-between",
		margin: "0 10%",
		flexDirection: "row",
	},
	columnListContainer: {
		width: "48%",
		// backgroundColor: "yellow",
	}
}

const partnershipStyles = {
	container: {
		display: "flex",
		justifyContent: "center",
		flexDirection: "column",
		height: "65vh",
		width: "100%",
		backgroundColor: "var(--grey-bg)",
		marginTop: "10vh",
	},
	title: {
		fontSize: "6vh",
		margin: "0 10% 5vh 10%",
		lineHeight: "normal",
	},
	text: {
		margin: "0 10%",
	},
	btn: {
		padding: "8px 25px",
		backgroundColor: "transparent",
		borderRadius: "50px",
		border: "1px solid var(--main)",
		color: "var(--main)",
		textTransform: "uppercase",
		transition: "all 0.3s ease 0s",
		':hover': {
			color: "white",
			transform: "translateY(-4px)",
			boxShadow: "0px 5px 5px rgba(0, 0, 0, 0.1)",
		}
	}
}

const questionsStyles = {
	container: {
		...center,
		flexDirection: "column",
		height: "55vh",
		width: "100%",
	},
	title: {
		fontSize: "6vh",
		marginBottom: "0.5rem",
	},
	text: {
		marginBottom: "5vh",
	},
}