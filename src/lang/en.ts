import ILang from './interface';

const text : ILang = {
	Home: {
		header: {
			title: "The référence des outils de calculs pour la radioprotection ",
			p: "Ensemble d'outils de calculs pratiques, simples d’emploi, validés, et répondant à de nombreuses situations rencontrées en radioprotection. Ils vous permettront d'améliorer votre niveau d'expertise.",
			button: "Découvrir",
			textImage: ["Dosimex GX Générateur X"],
		},
		partners: {
			title: "Nos partenaires",
		},
		offers: {
			title: "Ce que nous proposons",
			p: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque integer dignissim sit pellentesque enim tortor quam tortor, odio. Tempor felis egestas blandit turpis. Id libero non amet augue elementum urna. Ornare.Pack logiciel",
			card1: {
				title: "Pack logiciel",
				p: "Retrouvez tous les utilitaires Dosimex avec des vidéos spécifiques : pack opérationnel, pack pédagogique, pack mesure",
			},
			card2: {
				title: "Manuels et validations",
				p: "Accéder à l’ensemble de la documentation associée à Dosimex-GX",
			},
			card3: {
				title: "Formations",
				p: "Nous vous accompagnons pour prendre en mains ces outils de calculs en nous adaptant à vos problèmes specifiques.",
			}
		},
		numbers: {
			number1: "30 ans",
			p1: "d'expérience",
			number2: "+1000",
			p2: "radioprotectionnistes convaincus",
			number3: "??",
			p3: "???????????",
		},
		videos: {
			title: "Retrouvez-nous sur Youtube",
			p: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent blandit donec et cursus magna orci, hac convallis mi.",
			button: "Découvrir les autres vidéos",
		},
		opinion: {
			name: "Jean-Lionel Trolet",
			job: "EAMEA",
			opinion: "J’utilise DOSIMEX, qui me donne totalement satisfaction, tant par la qualité de ses résultats que par sa facilité d’usage, dans les formations du personnel du ministère des armées. Il possède, entre autres, la force de tenir compte de situations courantes auxquelles sont confrontées les agents de MinArm, tant dans les rôles de PCR médicaux (merci au module de calcul X !) que les intervenants de tous niveaux dans le domaine industriel (du PNR à l’ingénieur). Enfin son usage est si simple que quasiment tous les PCR que nous formons l’ont adopté dans leurs unités."
		},
		callToAction: {
			title: "Phrase call to action lorem ipsum magnalus rib te lesatre",
			button: "Acheter Dosimex",
		}
	},
	Software: {
		header: {
			title: "Nos offres",
			p: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque magnis pulvinar risus adipiscing eu sit dui dui eget. Tincidunt congue lobortis vitae velit morbi fusce varius.",
			li: ["Pack opérationnel", "Pack pédagogique", "Pack mesures"]
		},
		button: {
			label: "voir les vidéos",
		},
		packOpe: {
			title: "Pack opérationnel",
			descrip: "Ces outils de calculs permettent d’estimer à leurs justes hauteurs les risques radiologiques et de concevoir les protections nécessaires",
			liTitles: ["DOSIMEX-GX 3.0", "DOSIMEX-B 3.0", "DOSIMEX-N 3.0", "DOSIMEX-I 3.0"],
			li: [	"code de calcul déterministe de débit de dose émetteurs gamma et générateur X, avec option feuille de calcul norme NF C15-160 /2018. Avec de nombreuses options : effet de ciel, rayonnement de freinage, zonage, build-up",
				"code de calcul déterministe de débit de dose émetteur bêta et électrons monoénergétiques. Prise en compte sources volumiques (bécher, seringue) ou surfaciques (contamination peau)",
				"code de calcul Monte-Carlo de débit de dose émetteur neutron (type Am/Be) avec protection biologique (eau, polyéthylène, Bore, Cadmium etc..). Module pédagogique avec visualisation trajectoire neutron",
				"code de calcul expositions interne. Prise en compte cinétique fuite, renouvellement, dépôt au sol. Calculs de transfert atmosphérique. Calcul mélanges RAI/RAV/RCA"
			],
		},
		packPeda: {
			title: "Pack pédagogique",
			descrip: "Ils permettent de mieux comprendre la physique de l’interaction rayonnement-matière, à l’origine des doses générées, ainsi que des capacités de protections des écrans susceptibles d’être mis en œuvre",
			liTitles: ["IRM photon 3.0", "IRM particules chargées 3.0", "Serious Game 3.0", "Coefficients ICRU 57 3.0"],
			li: [	"utilitaire mettant en œuvre les principes d’interactions photon –matières dans les matériaux avec diverses applications : calcul de kerma, de dose, de libre parcours moyen, effet Compton, visualisation de trajectoires (Monte-Carlo).",
				"utilitaire mettant en œuvre les principes d’interactions particules chargées–matières dans les matériaux avec diverses applications : calcul de parcours, de coefficient fluence-dose, application aux spectres bêta.",
				"utilitaire à vocation pédagogique permettant de mettre en évidence les paramètres essentiels de la radioprotection : distance, temps, écran, activité, nature radionucléide",
				"utilitaire permettant de connaitre les coefficients fluence-équivalents de dose et kerma air normalisés pour les électrons, les photons et les neutrons."
			],
		},
		packMes: {
			title: "Pack mesures",
			descrip: "Utilitaires liés à l’aspect mesure des rayonnements ionisants",
			liTitles: ["Code TAGE (Total Absorption Gamma Efficiency)", "Code Co3", "Composition de variables aléatoires", "Calcul de seuil de décision"],
			li: [	"code déterministe calculant le rendement d’absorption totale en spectrométrie gamma, avec correction de couches mortes (caractérisation), correction de coïncidence et rendement de pics sommes.",
				"code de calcul de Coefficient de Conversion Contaminamètres permettant de calculer les rendements(Bq/cm2/ cps) de divers ictomètres et d’obtenir les activités surfaciques versus la nature de la sonde et le spectre isotopique mesuré.",
				"utilitaire permettant de combiner par méthode Monte-Carlo jusqu’à 5 variables de types différents . Cet utilitaire est accompagné des documents de cours complets sur le sujet des calculs d’incertitudes",
				"utilitaire permettant de déterminer le seuil de décision et la limite de détection en mesure nucléaire. Cet utilitaire est accompagné des documents de cours."
			],
		},
		more: {
			title: "Plus de ressources",
			links: ["manuels d’utilisation de Dosimex-GX pour en découvrir toutes les possibilités",
				"dossiers de validation complets Ou aux extraits validation source gamma et validation générateur X",
				"Les nouveautés à découvrir dans Dosimex-GX 3.0"
			]
		},
		ask: {
			title: "Des questions ?",
			text: "Pour un devis, n’hésitez pas à nous contacter ici ou par téléphone au 06 89 70 90 35",
			labelButton: "Nous contacter"
		},
	},
	About: {
		header: {
			title: "Notre équipe",
			p: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. At purus risus, dictum auctor massa quam scelerisque. Nibh lobortis feugiat orci donec mauris turpis sagittis malesuada nibh."
		},
		gerald: {
			p: [	"J’ai commencé ma carrière, en 1997, dans la Marine Nationale en tant qu’électrotechnicien sur systèmes d’armement. Après une formation de technicien en radioprotection (TR), j’ai intégré le SPR de l’Ile Longue, avec diverses missions centrées sur les sous-marins nucléaires Lanceur d’engins (SNLE) : assistance radiologique, cartographies du compartiment réacteur, analyses radiologiques au laboratoire de moyenne activité, exercices de sécurité nucléaires…",
				"En 2003, après une formation de technicien supérieur en radioprotection (TSR) à l’INSTN, j’ai rejoint l’Ecole des Applications Militaire à l’Energie Atomique (EAMEA) où j’ai enseigné la radioactivité, la radioprotection, la dosimétrie, la mesure nucléaire. A partir de cette époque, pour palier le manque flagrant d'outils, j’ai commencé à créer mes propres outils de calcul afin de réaliser simplement et rapidement des travaux dirigés dans le cadre de mes enseignements.",
				"En 2010, J’ai intégré le SPR de l’Arsenal de Cherbourg en charge du 2SNM (Système de Surveillance Nucléaire Marine), système relié au Réseau Nationale de Mesure (RNM). Cette expérience m’a, entre autres, permis, de créer le code Dosimex-I, notamment sur l’option de transfert atmosphérique.",
				"Depuis 2013, après avoir publié en collaboration avec Alain Vivier, l'ouvrage « Calcul de dose générée par les rayonnements ionisants, j’ai rejoint le service de radioprotection du site Orano de la Hague où j'ai été confronté à la plupart des problématiques de radioprotection du site :",
				"Dans la plupart des problèmes de radioprotection que j’ai eu à rencontrer, les outils du pack Dosimex ont été d’une grande utilité pour analyser le risque radiologique. A l'inverse, le retour d’expérience m’a permis d’enrichir ces codes.",
			],
			pBorder: ["2013 - 2015 : suivi des chantiers de démantèlement de l’unité de production UP2-400 sur le secteur Haute activité. Suivi spécifique du chantier de démantèlement d’un dissolveur de combustible type UNGG.",
				"2015 - 2017 : conseiller démantèlement sur les périmètres ELAN2B et STE2 (Station de traitement des Effluents), analyse des démarches.",
				"2017 - 2018 : responsable de l’échelon radioprotection du périmètre Haute Activité de l’usine UP2-400.",
				"2018 - 2019 : responsable d’activité de l’Unité Opérationnelle Conditionnement : ateliers de vitrification (R7/T7), de traitement des déchets (AD2 et AD1/BDH) de compactage des coques (ACC) des usines UP2-800 et UP3 du site de la Hague.",
				"Courant 2019 enfin, j’ai pris la responsabilité du pôle expertise en charge, avec une équipe, du soutien technique et de l’innovation pour l’ensemble des activités du secteur dans les domaines de la radioprotection et de la sécurité conventionnelle. Parallèlement, j’ai acquis une expérience solide sur les problématiques de risques mixtes amiante et radiologique.",
			],
		},
		alain: {
			p: [	"Après des études à l’Ecole de l’Air (promotion 80) et avoir été affecté à une unité de maintenance de Mirages IV, j’ai été désigné pour être PCR dans le cadre de radiographies sur les voilures. En dehors du générateur X, Je ne disposais alors ni du moindre radiamètre ni d’outils de calculs, n’ayant ainsi aucune idée du risque radiologique encouru. Cette expérience a sans doute semé une première petite graine pour la suite.",
				"En 1990, j’ai rejoint l’Ecole Atomique de Cherbourg pour y passer un génie atomique. J’ai eu la chance de pouvoir y rester en tant qu’enseignant.",
				"Responsable de l’enseignement de la physique nucléaire et d’un laboratoire de mesures, je commençai à comprendre les phénomènes d’interaction rayonnement-matière et j'ai réalisé qu’il devait être possible de calculer, et non pas seulement mesurer, un débit de dose d’une source de 1 GBq de Césium 137 posée à 1 m. Mon adjoint, TSR de formation, m’a répondu : « oui, c’est possible, cela s’appelle la dosimétrie ». J'ai compris, au travers de cette anecdote, que cette matière n’était pas suffisamment dispensée dans les formations.",
				"Ma première expérience de modélisation concernait le calcul du pouvoir d’arrêt des particules chargées, à l’aide de la formule de Bethe (voir annexe E). J’ai alors été frappé par l’adéquation entre la prédiction théorique et les résultats des mesures avec des électrons de conversion et des cibles minces en cuivre. Cette validation croisée entre modélisation et mesure, l’une renforçant l’autre, a été une révélation.",
				"En 1998, j’ai rejoint le CEA, tout d’abord au SPR de Cadarache à l’AtPu (Atelier plutonium), puis en 2000, à l’INSTN de Saclay. La première formation que j’y ai créée s’intitulait « dosimétrie des rayonnements ionisants ».",
				"A l'occasion de visites à l'Ecole Atomique, j'ai rencontré Gérald Lopez. J'ai rapidement décelé ses compétences en modélisation, sa capacité d'analyse associée à une puissance de travail hors-norme. Il avait, déjà, à cette époque, jeté les bases de ce qui allait devenir Dosimex-GX.",
				"En 2010, lorsque EDP a accepté d’éditer un ouvrage sur les calculs de doses, il m’est apparu clairement qu’un tel ouvrage devait être accompagné d’utilitaires de calculs, et surtout que Gérald Lopez était indispensable à la réalisation de ce projet. C’est ainsi qu’est né Dosimex.",
			],
		},
		epilogue: "Epilogue : c’est grâce à Dosimex, que j’ai enfin pu avoir, 25 ans après, une idée du risque radiologique encouru avec les générateur X, risque qui est loin d’être négligeable",
	},
}

export default text;
