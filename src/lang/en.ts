import ILang from './interface';

const text : ILang = {
	Home: {
		header: {
			title: "The référence des outils de calculs pour la radioprotection ",
			p: "Ensemble d'outils de calculs pratiques, simples d’emploi, validés, et répondant à de nombreuses situations rencontrées en radioprotection. Ils vous permettront d'améliorer votre niveau d'expertise.",
			button: "Découvrir",
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
			li1: "Pack opérationnel",
			li2: "Pack pédagogique",
			li3: "Pack mesures",
		},
		packOpe: {
			descrip: "Ces outils de calculs permettent d’estimer à leurs justes hauteurs les risques radiologiques et de concevoir les protections nécessaires",
			liTitle1: "DOSIMEX-GX 3.0 :",
			liTitle2: "DOSIMEX-B 3.0 :",
			liTitle3: "DOSIMEX-N 3.0 :",
			liTitle4: "DOSIMEX-I 3.0 :",
			li1: "code de calcul déterministe de débit de dose émetteurs gamma et générateur X, avec option feuille de calcul norme NF C15-160 /2018. Avec de nombreuses options : effet de ciel, rayonnement de freinage, zonage, build-up",
			li2: "code de calcul déterministe de débit de dose émetteur bêta et électrons monoénergétiques. Prise en compte sources volumiques (bécher, seringue) ou surfaciques (contamination peau)",
			li3: "code de calcul Monte-Carlo de débit de dose émetteur neutron (type Am/Be) avec protection biologique (eau, polyéthylène, Bore, Cadmium etc..). Module pédagogique avec visualisation trajectoire neutron",
			li4: "code de calcul expositions interne. Prise en compte cinétique fuite, renouvellement, dépôt au sol. Calculs de transfert atmosphérique. Calcul mélanges RAI/RAV/RCA",
		},
		packPeda: {
			descrip: "Ils permettent de mieux comprendre la physique de l’interaction rayonnement-matière, à l’origine des doses générées, ainsi que des capacités de protections des écrans susceptibles d’être mis en œuvre",
			liTitle1: "IRM photon 3.0 :",
			liTitle2: "IRM particules chargées 3.0 :",
			liTitle3: "Serious Game 3.0 :",
			liTitle4: "Coefficients ICRU 57 3.0 :",
			li1: "utilitaire mettant en œuvre les principes d’interactions photon –matières dans les matériaux avec diverses applications : calcul de kerma, de dose, de libre parcours moyen, effet Compton, visualisation de trajectoires (Monte-Carlo).",
			li2: "utilitaire mettant en œuvre les principes d’interactions particules chargées–matières dans les matériaux avec diverses applications : calcul de parcours, de coefficient fluence-dose, application aux spectres bêta.",
			li3: "utilitaire à vocation pédagogique permettant de mettre en évidence les paramètres essentiels de la radioprotection : distance, temps, écran, activité, nature radionucléide",
			li4: "utilitaire permettant de connaitre les coefficients fluence-équivalents de dose et kerma air normalisés pour les électrons, les photons et les neutrons.",
		},
		packMes: {
			descrip: "Utilitaires liés à l’aspect mesure des rayonnements ionisants",
			liTitle1: "Code TAGE (Total Absorption Gamma Efficiency) :",
			liTitle2: "Code Co3 :",
			liTitle3: "Composition de variables aléatoires :",
			liTitle4: "Calcul de seuil de décision :",
			li1: "code déterministe calculant le rendement d’absorption totale en spectrométrie gamma, avec correction de couches mortes (caractérisation), correction de coïncidence et rendement de pics sommes.",
			li2: "code de calcul de Coefficient de Conversion Contaminamètres permettant de calculer les rendements(Bq/cm2/ cps) de divers ictomètres et d’obtenir les activités surfaciques versus la nature de la sonde et le spectre isotopique mesuré.",
			li3: "utilitaire permettant de combiner par méthode Monte-Carlo jusqu’à 5 variables de types différents . Cet utilitaire est accompagné des documents de cours complets sur le sujet des calculs d’incertitudes",
			li4: "permettant de déterminer le seuil de décision et la limite de détection en mesure nucléaire. Cet utilitaire est accompagné des documents de cours.",
		},

	}
}

export default text;
