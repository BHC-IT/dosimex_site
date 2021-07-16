import * as CSS from 'csstype';
import SquareGrid from '../Components/SquareGrid'
import Btn from '../Components/Button'
import Image from 'next/image'
import { useText } from '../Hooks/useText';

const Header = ({text} : {text : any}) =>
	<div style={headerStyles.container}>
		<div style={headerStyles.textContainer}>
			<h2 style={headerStyles.title}>{text.header.title}</h2>
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
		<h3 style={exemplesStyles.title}>{text.section1.title}</h3>
		<div style={exemplesStyles.listContainer}>
			<div style={exemplesStyles.columnListContainer}>
				<p>{text.section1.li[0]}</p>
				<p>{text.section1.li[1]}</p>
				<p>{text.section1.li[2]}</p>
				<p>{text.section1.li[3]}</p>
				<p>{text.section1.li[4]}</p>
				<p>{text.section1.li[5]}</p>
				<p>{text.section1.li[6]}</p>
			</div>
			<div style={exemplesStyles.columnListContainer}>
				<p>{text.section1.li[7]}</p>
				<p>{text.section1.li[8]}</p>
				<p>{text.section1.li[9]}</p>
				<p>{text.section1.li[10]}</p>
				<p>{text.section1.li[11]}</p>
				<p>{text.section1.li[12]}</p>
				<p>{text.section1.li[13]}</p>
			</div>
		</div>
	</div>

const Partnership = ({text} : {text : any}) =>
	<div style={partnershipStyles.container}>
		<h3 style={partnershipStyles.title}>{text.section2.title}</h3>
		<p style={partnershipStyles.text}>{text.section2.li[0]}</p>
		<p style={partnershipStyles.text}>{text.section2.li[1]}</p>
		<p style={partnershipStyles.text}>{text.section2.li[2]}</p>
		<p style={partnershipStyles.text}>{text.section2.li[3]}</p>
		<div style={{margin: "5vh auto 0 10%"}}><div style={partnershipStyles.btn}>{text.section2.button}</div></div>
	</div>

const Questions = ({text} : {text : any}) =>
	<div style={questionsStyles.container}>
		<h3 style={questionsStyles.title}>{text.questions.title}</h3>
		<p style={questionsStyles.text} >{text.questions.p}</p>
		<Btn name={text.questions.button} route="Contact"/>
	</div>

const Training = () => {
	const text = useText('Training');
	return (
		<div style={{display: 'flex', flexDirection: 'column', overflowX: 'hidden'}} >
			<Header text={text}/>
			<Separator right={false}/>
			<Exemples text={text}/>
			<Separator right={true}/>
			<Partnership text={text}/>
			<Questions text={text}/>
		</div>
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
		alignSelf: "flex-start",
		margin: "auto 0 0 0",
	},
	text: {
		margin: "0 0 auto 0",
		fontSize: "2vh",
		color: 'var(--grey)',
		marginTop: '4vh',
	},
	squareGridStyles: {
		containerStyle: {
			position: "absolute",
			right: "-1%",
			top: "0",
			zIndex: "0",
		},
		squareStyle: {
			height: "19px",
			width: "17px",
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
		backgroundColor: "var(--flash)",
		height: "0.4vh",
		width: "25%",
	},
}

const exemplesStyles = {
	container: {
		display: "flex",
		justifyContent: "center",
		flexDirection: "column",
		marginTop: '15vh',
		marginBottom: '15vh',
		width: "100%",
		// backgroundColor: "red",
	},
	title: {
		width: '60vw',
		margin: "0 10%",
	},
	listContainer: {
		display: "flex",
		justifyContent: "space-between",
		marginTop:'2vh',
		margin: "0 10%",
		flexDirection: "row",
	},
	columnListContainer: {
		width: "48%",
		color:'var(--grey)',
		// backgroundColor: "yellow",
	}
}

const partnershipStyles = {
	container: {
		display: "flex",
		justifyContent: "center",
		flexDirection: "column",
		width: "100%",
		backgroundColor: "var(--grey-bg)",
		marginTop: "10vh",
		paddingTop: '7vh',
		paddingBottom: '10vh',
	},
	title: {
		margin: "0 10% 5vh 10%",
	},
	text: {
		margin: "0 10%",
		marginTop: '2vh',
		fontWeight: '500',
	},
	btn: {
		padding: "8px 25px",
		backgroundColor: "transparent",
		borderRadius: "50px",
		border: "2px solid var(--main)",
		color: "var(--main)",
		textTransform: "uppercase",
		transition: "all 0.3s ease 0s",
		cursor: 'pointer',
		fontWeight: '700',
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
		width: "100%",
		marginTop: '10vh',
		marginBottom: '25vh',
	},
	text: {
		color: 'var(--grey)',
		width: '22vw',
		marginTop: 0,
		textAlign: 'center',
		fontSize: '1.5rem',
		marginBottom: '4vh'
	},
}
