import * as CSS from 'csstype';
import SquareGrid from '../Components/SquareGrid'
import Btn from '../Components/Button'
import Image from 'next/image'
import { useIsMobile } from '../Hooks/useIsMobile';
import { useText } from '../Hooks/useText';
import ILang from '../lang/interface';

interface IMapOfStyle {
	[i: string]: CSS.Properties
}

interface IMapOf<A> {
	[i: string]: A
}

type IStyles = IMapOf<IMapOfStyle | IMapOf<IMapOfStyle>>

interface IProps {
	text: ILang,
	style: IStyles,
}

const center =  {
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
}

const Header = ({text, style} : IProps) =>
	<div style={style.container}>
		<div style={style.textContainer}>
			<h2 style={style.title}>{text.header.title}</h2>
			<p style={style.text}>{text.header.p}</p>
		</div>
		<div style={style.imgContainer}>
			<Image src="/Images/formation.png" width={732*0.9} height={503*0.9} />
		</div>
		<SquareGrid nbLine={6} nbColumn={4} styles={style.squareGridStyles}/>
	</div>

const Separator = ({right, style} : {right ?: boolean, style: any}) =>	<div style={style.container(right)}><div style={style.line}/></div>

const Exemples = ({text, style} : IProps) =>
	<div style={style.container}>
		<h3 style={style.title}>{text.section1.title}</h3>
		<div style={style.listContainer}>
			<div style={style.columnListContainer}>
				<p>{text.section1.li[0]}</p>
				<p>{text.section1.li[1]}</p>
				<p>{text.section1.li[2]}</p>
				<p>{text.section1.li[3]}</p>
				<p>{text.section1.li[4]}</p>
				<p>{text.section1.li[5]}</p>
				<p>{text.section1.li[6]}</p>
			</div>
			<div style={style.columnListContainer}>
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

const Partnership = ({text, style} : IProps) =>
	<div style={style.container}>
		<h3 style={style.title}>{text.section2.title}</h3>
		<p style={style.text}>{text.section2.li[0]}</p>
		<p style={style.text}>{text.section2.li[1]}</p>
		<p style={style.text}>{text.section2.li[2]}</p>
		<p style={style.text}>{text.section2.li[3]}</p>
		<div style={{margin: "5vh auto 0 10%"}}>
			<a
				style={style.btn}
				href="../Folders/le_catalogue_de_formation_safe_technologies_v2.2.pdf"
				target="_blank"
				rel="noreferrer noopener">{text.section2.button}
				<img style={style.icon} src="/Images/icon_download.png" alt="icône télécharger" />
			</a>
		</div>
	</div>

const Questions = ({text, style} : IProps) =>
	<div style={style.container}>
		<h3 style={style.title}>{text.questions.title}</h3>
		<p style={style.text} >{text.questions.p}</p>
		<Btn name={text.questions.button} route="Contact"/>
	</div>

const Training = () => {
	const text = useText('Training');
	const style = useIsMobile(styles);

	if (style === null)
		return null

	return (
		<div style={{display: 'flex', flexDirection: 'column', overflowX: 'hidden'}} >
			<Header text={text} style={style.headerStyles}/>
			<Separator right={false} style={style.separatorStyles}/>
			<Exemples text={text} style={style.exemplesStyles}/>
			<Separator right={true} style={style.separatorStyles}/>
			<Partnership text={text} style={style.partnershipStyles}/>
			<Questions text={text} style={style.questionsStyles}/>
		</div>
	);
}

export default Training;

export const styles = (mobile: boolean): IStyles => ({
	headerStyles: {
		container: {
			...center,
			flexDirection: mobile ? "column" : undefined,
			position: mobile ? undefined : "relative" as "relative",
			height: mobile ? undefined : "65vh",
			width: "100%",
			overflow: "hidden",
			marginTop: mobile ? "15vh" : undefined,
			marginBottom: mobile ? "10vh" : undefined,
		},
		textContainer: {
			...center,
			justifyContent: mobile ? undefined : "flex-start",
			flexDirection: "column",
			height: mobile ? undefined : "65%",
			width: mobile ? undefined : "40%",
			marginRight: mobile ? "8vw" : "5rem",
			marginLeft: mobile ? "8vw" : undefined,
			marginBottom: mobile ? "8vh" : undefined,
			textAlign: mobile ? "center" : undefined,
		},
		imgContainer: {
			...center,
			height: mobile ? "20vh" : "65%",
			width: mobile ? "40vh" : "35%",
			backgroundColor: "transparent",
			zIndex: 1,
		},
		title: {
			alignSelf: mobile ? "center" : "flex-start",
			margin: "auto 0 0 0",
		},
		text: {
			margin: "0 0 auto 0",
			fontSize: mobile ? "1.6rem" : "1.8rem",
			color: 'var(--grey)',
			marginTop: '4vh',
		},
		squareGridStyles: {
			containerStyle: {
				position: "absolute",
				right: "-1%",
				top: "0",
				zIndex: 0,
				display: mobile ? "none" : undefined,
			},
			squareStyle: {
				height: "19px",
				width: "17px",
				margin: "1.5rem 2.5rem",
				backgroundColor: "var(--flashTrans)",
			},
		},
	},
	separatorStyles: {
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
			width: mobile ? "40%" : "25%",
		},
	},
	exemplesStyles: {
		container: {
			display: "flex",
			justifyContent: "center",
			flexDirection: "column",
			marginTop: mobile ? '10vh' : '15vh',
			marginBottom: '15vh',
			width: "100%",
		},
		title: {
			width: mobile ? '80%' : '60vw',
			fontSize: mobile ? "2.5rem" : undefined,
			margin: "0 10% 5vh 10%",
		},
		listContainer: {
			display: "flex",
			flexDirection: mobile ? "column" : "row",
			justifyContent: "space-between",
			margin: "0 10%",
		},
		columnListContainer: {
			width: mobile ? "100%" : "48%",
			color:'var(--grey)',
		},
	},
	partnershipStyles: {
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
			fontSize: mobile ? "2.5rem" : undefined,
		},
		text: {
			margin: "0 10%",
			marginTop: '2vh',
			fontWeight: 500,
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
			fontWeight: 700,
			':hover': {
				color: "white",
				transform: "translateY(-4px)",
				boxShadow: "0px 5px 5px rgba(0, 0, 0, 0.1)",
			},
			display: "flex",
			alignItems: "center",
			justifyContent: "space-around",
			width: mobile ? "75vw" : "18vw",
			margin: mobile ? "0 5%" : undefined,
			fontSize: mobile ? "1.4rem" : undefined,
		},
		icon: {
			width: mobile ? "4.7vw" : "1.2vw",
			minWidth: mobile ? undefined : "25px",
			maxWidth: mobile ? "25px" : undefined,
		},
	},
	questionsStyles: {
		container: {
			...center,
			flexDirection: "column",
			width: "100%",
			marginTop: '10vh',
			marginBottom: '25vh',
		},
		text: {
			color: 'var(--grey)',
			width: mobile ? '60%' : '22vw',
			marginTop: 0,
			textAlign: 'center',
			fontSize: '1.5rem',
			marginBottom: mobile ? '7vh' : '4vh'
		},
	}
})
