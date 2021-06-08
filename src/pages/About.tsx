import * as CSS from 'csstype';
import Radium from 'radium';

const text = {
	header: {
		title: "Notre équipe",
		p: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. At purus risus, dictum auctor massa quam scelerisque. Nibh lobortis feugiat orci donec mauris turpis sagittis malesuada nibh."
	},
	gerald: {
		p1: "J’ai commencé ma carrière, en 1997, dans la Marine Nationale en tant qu’électrotechnicien sur systèmes d’armement. Après une formation de technicien en radioprotection (TR), j’ai intégré le SPR de l’Ile Longue, avec diverses missions centrées sur les sous-marins nucléaires Lanceur d’engins (SNLE) : assistance radiologique, cartographies du compartiment réacteur, analyses radiologiques au laboratoire de moyenne activité, exercices de sécurité nucléaires…",
		p2: "En 2003, après une formation de technicien supérieur en radioprotection (TSR) à l’INSTN, j’ai rejoint l’Ecole des Applications Militaire à l’Energie Atomique (EAMEA) où j’ai enseigné la radioactivité, la radioprotection, la dosimétrie, la mesure nucléaire. A partir de cette époque, pour palier le manque flagrant d'outils, j’ai commencé à créer mes propres outils de calcul afin de réaliser simplement et rapidement des travaux dirigés dans le cadre de mes enseignements.",
		p3: "En 2010, J’ai intégré le SPR de l’Arsenal de Cherbourg en charge du 2SNM (Système de Surveillance Nucléaire Marine), système relié au Réseau Nationale de Mesure (RNM). Cette expérience m’a, entre autres, permis, de créer le code Dosimex-I, notamment sur l’option de transfert atmosphérique.",
		p4: "Depuis 2013, après avoir publié en collaboration avec Alain Vivier, l'ouvrage « Calcul de dose générée par les rayonnements ionisants, j’ai rejoint le service de radioprotection du site Orano de la Hague où j'ai été confronté à la plupart des problématiques de radioprotection du site :",
		pBorder: {
			p1: "2013 - 2015 : suivi des chantiers de démantèlement de l’unité de production UP2-400 sur le secteur Haute activité. Suivi spécifique du chantier de démantèlement d’un dissolveur de combustible type UNGG.",
			p2: "2015 - 2017 : conseiller démantèlement sur les périmètres ELAN2B et STE2 (Station de traitement des Effluents), analyse des démarches.",
			p3: "2017 - 2018 : responsable de l’échelon radioprotection du périmètre Haute Activité de l’usine UP2-400.",
			p4: "2018 - 2019 : responsable d’activité de l’Unité Opérationnelle Conditionnement : ateliers de vitrification (R7/T7), de traitement des déchets (AD2 et AD1/BDH) de compactage des coques (ACC) des usines UP2-800 et UP3 du site de la Hague.",
			p5: "Courant 2019 enfin, j’ai pris la responsabilité du pôle expertise en charge, avec une équipe, du soutien technique et de l’innovation pour l’ensemble des activités du secteur dans les domaines de la radioprotection et de la sécurité conventionnelle. Parallèlement, j’ai acquis une expérience solide sur les problématiques de risques mixtes amiante et radiologique.",
		},
		p5: "Dans la plupart des problèmes de radioprotection que j’ai eu à rencontrer, les outils du pack Dosimex ont été d’une grande utilité pour analyser le risque radiologique. A l'inverse, le retour d’expérience m’a permis d’enrichir ces codes.",
	},
	alain: {
		p1: "Après des études à l’Ecole de l’Air (promotion 80) et avoir été affecté à une unité de maintenance de Mirages IV, j’ai été désigné pour être PCR dans le cadre de radiographies sur les voilures. En dehors du générateur X, Je ne disposais alors ni du moindre radiamètre ni d’outils de calculs, n’ayant ainsi aucune idée du risque radiologique encouru. Cette expérience a sans doute semé une première petite graine pour la suite.",
		p2: "En 1990, j’ai rejoint l’Ecole Atomique de Cherbourg pour y passer un génie atomique. J’ai eu la chance de pouvoir y rester en tant qu’enseignant.",
		p3: "Responsable de l’enseignement de la physique nucléaire et d’un laboratoire de mesures, je commençai à comprendre les phénomènes d’interaction rayonnement-matière et j'ai réalisé qu’il devait être possible de calculer, et non pas seulement mesurer, un débit de dose d’une source de 1 GBq de Césium 137 posée à 1 m. Mon adjoint, TSR de formation, m’a répondu : « oui, c’est possible, cela s’appelle la dosimétrie ». J'ai compris, au travers de cette anecdote, que cette matière n’était pas suffisamment dispensée dans les formations.",
		p4: "Ma première expérience de modélisation concernait le calcul du pouvoir d’arrêt des particules chargées, à l’aide de la formule de Bethe (voir annexe E). J’ai alors été frappé par l’adéquation entre la prédiction théorique et les résultats des mesures avec des électrons de conversion et des cibles minces en cuivre. Cette validation croisée entre modélisation et mesure, l’une renforçant l’autre, a été une révélation.",
		p5: "En 1998, j’ai rejoint le CEA, tout d’abord au SPR de Cadarache à l’AtPu (Atelier plutonium), puis en 2000, à l’INSTN de Saclay. La première formation que j’y ai créée s’intitulait « dosimétrie des rayonnements ionisants ».",
		p6: "A l'occasion de visites à l'Ecole Atomique, j'ai rencontré Gérald Lopez. J'ai rapidement décelé ses compétences en modélisation, sa capacité d'analyse associée à une puissance de travail hors-norme. Il avait, déjà, à cette époque, jeté les bases de ce qui allait devenir Dosimex-GX.",
		p7: "En 2010, lorsque EDP a accepté d’éditer un ouvrage sur les calculs de doses, il m’est apparu clairement qu’un tel ouvrage devait être accompagné d’utilitaires de calculs, et surtout que Gérald Lopez était indispensable à la réalisation de ce projet. C’est ainsi qu’est né Dosimex.",
	},
	epilogue: "Epilogue : c’est grâce à Dosimex, que j’ai enfin pu avoir, 25 ans après, une idée du risque radiologique encouru avec les générateur X, risque qui est loin d’être négligeable",
}

export interface IStyles {
	global: CSS.Properties,
	header: CSS.Properties,
	headerSubtitle: CSS.Properties,
	div: CSS.Properties,
	circleImage: CSS.Properties,
	name: CSS.Properties,
	section: CSS.Properties,
	sectionFlex: CSS.Properties,
	pFlex: CSS.Properties,
	pBorder: CSS.Properties,
}

const About = () => {
	return (
		<div className="container" style={styles.global}>
			<div style={styles.header}>
				<h2>{text.header.title}</h2>
				<p style={styles.headerSubtitle}>{text.header.p}</p>
			</div>
			<div style={styles.section}>
				<div style={styles.sectionFlex}>
					<div style={styles.div}>
						<div style={{...styles.circleImage, backgroundImage: "url('/Images/Gerald.png')"}}></div>
						<h3 style={styles.name}>Gérald Lopez</h3>
					</div>
					<div style={styles.pFlex}>
						<p>{text.gerald.p1}</p>
						<p>{text.gerald.p2}</p>
						<p>{text.gerald.p3}</p>
					</div>
				</div>
				<p>{text.gerald.p4}</p>
				<div style={styles.pBorder}>
					<p>{text.gerald.pBorder.p1}</p>
					<p>{text.gerald.pBorder.p2}</p>
					<p>{text.gerald.pBorder.p3}</p>
					<p>{text.gerald.pBorder.p4}</p>
					<p>{text.gerald.pBorder.p5}</p>
				</div>
				<p>{text.gerald.p5}</p>
			</div>
			<div style={styles.section}>
				<div style={styles.sectionFlex}>
					<div style={{marginRight: "5%"}}>
						<p>{text.alain.p1}</p>
						<p>{text.alain.p2}</p>
						<p>{text.alain.p3}</p>
					</div>
					<div style={styles.div}>
						<div style={{...styles.circleImage, backgroundImage: "url('/Images/Alain.png')"}}></div>
						<h3 style={styles.name}>Alain Vivier</h3>
					</div>
				</div>
				<p style={{marginTop: "5vh"}}>{text.alain.p4}</p>
				<p>{text.alain.p5}</p>
				<p>{text.alain.p6}</p>
				<p>{text.alain.p7}</p>
				<p style={{fontStyle: "italic", textAlign: "center", marginTop: "8vh"}}>{text.epilogue}</p>
			</div>
		</div>
	);
}

export default Radium(About);

export const styles: IStyles =  {
	global: {
		color: "var(--dark)",
		textAlign: "justify",
		lineHeight: "3.2rem",
	},
	header: {
		textAlign: "center",
		padding: "20vh auto",
		marginTop: "15vh",
		marginBottom: "15vh",
	},
	headerSubtitle: {
		padding: "4vh 15vw",
		color: "var(--grey)",
		fontSize: "1.8rem",
	},
	div: {
		height: "45vh",
		width: "30vw",
	},
	circleImage: {
		width: "370px",
		height: "370px",
		backgroundPosition: 'center',
		backgroundRepeat: 'no-repeat',
		backgroundSize: 'cover',
		borderRadius: "50%",
	},
	name: {
		textAlign: "center",
		fontFamily: "var(--lato)",
		fontSize: "2.8rem",
		fontWeight: 900,
	},
	section: {
		marginTop: "8vh",
		marginBottom: "15vh",
	},
	sectionFlex: {
		display: "flex",
		alignItems: "center",
		justifyContent: "space-between",
		marginBottom: "2vh",
	},
	pFlex: {
		padding: "5% 0 5% 5%",
	},
	pBorder: {
		paddingLeft: "3vw",
		marginLeft: "3vw",
		marginTop: "5vh",
		marginBottom: "5vh",
		borderLeft: "3px solid var(--flash)",
	}
}