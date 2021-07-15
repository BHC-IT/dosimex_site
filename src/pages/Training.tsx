import * as CSS from 'csstype';
import SquareGrid from '../Components/SquareGrid'
import Btn from '../Components/Button'
import Image from 'next/image'

const text = {
	header: {
		title: "Formations",
		p: "Nous proposons des formations sur site de 2 à 3 jours. Ces formations s’appuient sur des travaux dirigés intégrant l’utilisation des outils Dosimex dans le cadre plus large de l’analyse des risques radiologiques appliqués à des cas concrets rencontrés dans le monde industriel et médical.",
	},
	section1: {
		title: "Exemples de thématiques abordées, modulables selon les besoins :",
		li1: "Calcul de protection autour de générateurs X médicaux et industriels",
		li2: "Application NF C 15-160",
		li3: "Gestion d’une source de Radium de forte activité",
		li4: "Seringue au Technétium 99m et protection opérateur",
		li5: "Contamination au Fluor 18",
		li6: "Gammagraphie Co60, Ir192, Sr95, Cs137",
		li7: "Les radionucléides préférés d'EDF",
		li8: "Approche ALARA sur tuyauterie primaire",
		li9: "Diffusion dans une chicane de blockhaus",
		li10: "Radioprotection autours d'une piscine de stockage combustibles",
		li11: "Protection biologique d'une source de Californium 252 (neutrons +gamma)",
		li12: "Ionisations alimentaires",
		li13: "Source Strontium-Yttrium 90 de forte activité",
		li14: "Analyse radioprotection d'un colis de déchets produit de fission ( CSDV)",
	},
	section2: {
		title: "Nous proposons en partenariat avec Safetechnologie d'autres formations sur les thématiques :",
		li1: "Physique nucléaire et radiactivité",
		li2: "Interaction rayonnements matière",
		li3: "Seuil de décision (ISO 11929)",
		li4: "Spéctrométrie gamma",
		button: "Catalogue de formation"
	},
	questions: {
		title: "Des questions ?",
		p: "Pour un devis, contactez nous ici ou par téléphone au 06 89 70 90 35",
		button: "Nous contacter",
	},
}

const Header = () =>
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

const Exemples = () =>
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

const Partnership = () =>
	<div style={partnershipStyles.container}>
		<h1 style={partnershipStyles.title}>{text.section2.title}</h1>
		<p style={partnershipStyles.text}>{text.section2.li1}</p>
		<p style={partnershipStyles.text}>{text.section2.li2}</p>
		<p style={partnershipStyles.text}>{text.section2.li3}</p>
		<p style={partnershipStyles.text}>{text.section2.li4}</p>
		<div style={{margin: "5vh auto 0 10%"}}><div style={partnershipStyles.btn}>{text.section2.button}</div></div>
	</div>

const Questions = () =>
	<div style={questionsStyles.container}>
		<h1 style={questionsStyles.title}>{text.questions.title}</h1>
		<p style={questionsStyles.text}>{text.questions.p}</p>
		<Btn name={text.questions.button} route={""}/>
	</div>

export default function Training() {
	return (
		<>
			<Header/>
			<Separator right={false}/>
			<Exemples/>
			<Separator right={true}/>
			<Partnership/>
			<Questions/>
		</>
	);
}

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
			backgroundColor: "yellow",
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
		backgroundColor: "yellow",
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
		backgroundColor: "lightgrey",
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