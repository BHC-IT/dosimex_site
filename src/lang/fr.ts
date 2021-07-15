import ILang from './interface';

const text : ILang = {
	Home: {
		header: {
			title: "La référence des outils de calculs pour la radioprotection ",
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
				"dossiers de validation complets",
				"Ou aux extraits validation source gamma et validation générateur X",
				"Les nouveautés à découvrir dans Dosimex-GX 3.0"
			]
		},
		ask: {
			title: "Des questions ?",
			text: "Pour un devis, n’hésitez pas à nous contacter ici ou par téléphone au 06 89 70 90 35",
			labelButton: "Nous contacter"
		},
	},

	Training: {
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
	},
	Videos: {
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
}

export default text;
