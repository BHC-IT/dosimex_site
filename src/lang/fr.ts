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
	Books: {
		header: {
			title: "Lectures",
			p: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. At purus risus, dictum auctor massa quam scelerisque. Nibh lobortis feugiat orci donec mauris turpis sagittis malesuada nibh.",
		},
		books: [
			{
				extract:`Cet ouvrage s’adresse aux étudiants se destinant à l’industrie du nucléaire, à la médecine nucléaire ou encore à la recherche. Les utilisateurs de rayonnements ionisants, opérateurs, techniciens, ingénieurs, personnes compétentes en radioprotection, médecins du travail, pourront également y trouver des informations utiles et actualisées. Plus largement, toute personne ayant un intérêt pour les sciences aura un point complet sur les phénomènes liés à la radioactivité et aux rayonnements ionisants. Cet ouvrage propose des cours de physique nucléaire, allant des constituants de la matière aux interactions entre rayonnement et matière ; des cours de radioprotection, incluant la dosimétrie, la détection, les moyens de protection contre l’exposition aux rayonnements ionisants ; la réglementation liée à la radioprotection mise à jour. Un point complet sur la culture nucléaire est fait, allant de l’historique à l’utilisation de la radioactivité et des rayonnements ionisants, en passant par leurs effets biologiques ou encore les accidents et l’exposition de la population. \n
				 À chaque chapitre, des exercices d’application et des corrigés sont proposés. Ils permettent d’appréhender l’aspect quantitatif de la radioprotection, en étudiant la contamination, l’exposition du personnel ou encore des calculs d’activité. \n
				Ainsi, chaque lecteur y trouvera son compte…un lycéen en baccalauréat y trouvera des informations claires et actuelles ; un étudiant en BTS ou licence professionnelle aura toutes les bases pour ses cours dans un même ouvrage, avec des exercices d’entraînement ; un étudiant en école d’ingénieur ou master aura un point complet sur l’ensemble du spectre de la radioprotection et des méthodes de calculs associées ; un intervenant en nucléaire aura des informations précises sur le thème qui l’intéresse ; une PCR aura dans un seul ouvrage toutes les données et les formules nécessaires à ses missions, et un support de cours pour le passage des formations PCR.`,
				author:'Arnaud Boquet'
			},
			{
				extract:`Cet ouvrage a deux objectifs complémentaires : tout d’abord apporter au lecteur une compréhension des principes physiques à l’œuvre lorsqu’une cible est exposée à des rayonnements ionisants : ions lourds, électrons, photons ou neutrons, et dans un second temps lui proposer des outils de calcul simples permettant d’évaluer les doses absorbées pour l’ensemble de ces divers rayonnements.\n
				Suivant cette logique les premières parties sont consacrés à établir les modèles physiques permettant de calculer les dépôts d’énergie en fonctions des caractéristiques de la cible et du champ de rayonnement. Cette approche purement physique s’applique à tout type de milieu irradié, inerte ou vivant, se traduisant  à termes par la donnée d’une grandeur physique particulière : la dose absorbée.\n
				L’ouvrage se focalise ensuite sur une cible particulière, l’être humain, et s’intéresse aux grandeurs radiométriques règlementaires utilisées en radioprotection, doses équivalentes et doses efficaces, grandeurs particulières traduisant la réponse biologique d’un individu exposé aux rayonnement ionisants  En spécifiant les sources et les conditions d’irradiations on peut alors établir le lien entre l’activité d’une source radioactive et le risque encouru par un individu exposé à cette source, tant en irradiation externe qu’interne. Ces mêmes principes et modèles permettent enfin d’évaluer les moyens de protection vis à vis de ces divers rayonnements ainsi que les principes et les méthodes principales utilisé pour mesurer ces grandeurs dosimétriques règlementaires.`,
				author:'Alain Vivier et Gérald Lopez'
			},
			{
				extract:`Ce volume correspond au module pratique dédié aux installations de l'industrie et de la recherche concernées par la détention ou la gestion de sources non scellées et de sources scellées nécessaires à leur contrôle. Conforme aux exigences réglementaires stipulant que ce module doit permettre d'appliquer les acquis de la formation théorique à des situations concrètes de travail susceptibles d'être rencontrées, il comprend 8 chapitres traitant les aspects suivants :\n
				- la radioprotection dans les installations de l'industrie et la recherche : utilisation des sources et risques associés, aménagement des locaux, évaluation des expositions, contrôles de radioprotection, \n
				- l'utilisation des appareils de détection et de mesure de la contamination radioactive et de l'exposition, associée à des méthodes et outils de calcul, \n
				- la gestion des déchets radioactifs, \n
				- la gestion des situations incidentelles et dégradées, \n
				- la méthodologie d'analyse des postes de travail complétée par l'application à des cas pratiques rencontrés dans les laboratoires.\n
				Dans certains chapitres, des situations concrètes de travail sont proposées au lecteur qui endosse le rôle d'acteur. Par ailleurs, ce dernier peut vérifier sa compréhension et l'acquisition des notions traitées grâce aux rubriques « Faîtes le point » qui clôturent les autres parties de ce volume.
				Cet ouvrage prépare ainsi efficacement au contrôle des connaissances du module pratique et constitue un outil d'aide indispensable à l'obtention de l'attestation PCR.
				Les auteurs sont des experts en radioprotection, impliqués dans la formation de personnes compétentes ou même PCR issues des secteurs de l'industrie et de la recherche.`,
				author:'Hugues Bruchet'
			},
			{
				extract:`Le rôle de la personne compétente en radioprotection (PCR) s’est largement développé ces dernières années pour occuper une fonction essentielle au sein des établissements. Désignée par l’employeur, la PCR doit obligatoirement suivre avec succès une formation dont les modalités sont définies par l’arrêté du 6 décembre 2013. Cette formation, structurée en deux modules\n
				– théorique et appliqué\n
				– est adaptée à l’importance du risque radiologique (« niveau » de formation), à la nature des activités concernées (secteur) et éventuellement au type d’utilisation de sources de rayonnements ionisants (option).\n
				Ce volume s’adresse aux PCR ou futures PCR concernées par les installations du secteur médical.
				Il traitera des différents types de sources utilisés : sources radioactives scellées (curiethérapie), sources radioactives non scellées (médecine nucléaire), ainsi que les dispositifs électriques émettant des rayonnements ionisants : générateurs de rayonnements X utilisés en radiologie conventionnelle et dentaire, scanners, accélérateurs en radiothérapie…
				Il comprend 9 chapitres traitant les domaines suivants :
				les aspects réglementaires et pratiques de la radioprotection dans les installations du secteur médical ;\n
				 - la description des différents types d’application des rayonnements ionisants du secteur médical : radiologie, radiothérapie, curiethérapie et médecine nucléaire\n
				 - la gestion des déchets et des effluents radioactifs générés par certaines de ces applications ;\n
				 - la mesure de l’exposition externe et la détection, avec une application à un cas concret de contamination surfacique ;\n
				 - la gestion des situations incidentelles et dégradées dans le milieu médical ;\n
				 - la méthodologie d’analyse de postes de travail et d’évaluation des risques, complétée par l’application à des cas pratiques rencontrés dans le secteur médical : scanographie, radiologie interventionnelle, curiethérapie et médecine nucléaire.\n
				 Grâce à ce nouveau volume, la PCR exerçant dans le milieu médical disposera de toutes les informations indispensables à l’exercice de ses missions, depuis l’acquisition des notions réglementaires à respecter jusqu’au calcul des protections en passant par un rôle essentiel, celui de la mise en oeuvre des analyses de postes de travail.`,
				author:'Hugues Bruchet, Amélie Roué et Christine Jimonet'
			},
			{
				extract:`Ce volume correspond au module pratique dédié aux installations de l'industrie et de la recherche concernées par la détention ou la gestion de générateurs X et de sources scellées. Conforme aux exigences réglementaires stipulant que ce module doit permettre d'appliquer les acquis de la formation théorique à des situations concrètes de travail susceptibles d'être rencontrées, il comprend 11 chapitres traitant les aspects suivants :\n
				- un panorama détaillé de l'application de ces sources dans l'industrie et la recherche ;\n
				- la radioprotection dans les installations de l'industrie et la recherche : les moyens de prévention, protection, formation, détection associés ;\n
				- les critères de choix des détecteurs, la mesure de la contamination radioactive et des fuites de rayonnement, l'exposition, associée à des méthodes d'estimation des débits de dose et des écrans de protection ;\n
				- la gestion des situations incidentelles et dégradées ;\n
				- la méthodologie d'analyse des postes de travail complétée par des études de cas pratiques.\n
				Cet ouvrage prépare ainsi efficacement au contrôle des connaissances du module pratique et constitue un outil d'aide indispensable à l'obtention de l'attestation PCR.`,
				author:'Jean-Claude Moreau et Marc Ammerich'
			},
			{
				extract:"Il était temps de retracer l’histoire de la physique nucléaire. Bernard Fernandez vous prend par la main pour vous guider à travers les méandres d’une science compliquée mais passionnante. Utilisant la langue française ordinaire, sans jargon scientifique ni formules mathématiques, il s’adresse à la fois aux lecteurs spécialisés, à qui il offre une perspective historique de leur science, et à l’honnête homme, qui désire s’informer sans posséder de connaissances scientifiques particulières. Dans ce récit toujours vivant se mêlent personnages connus et moins connus, théories élaborées dans l’enthousiasme et parfois démolies ensuite, protocoles d’expériences et descriptions minutieuses d’instruments. Une idée-force du livre est en effet que jamais la théorie ne doit s’affranchir de la réalité expérimentale",
				author:'Bernard Fernandez'
			},
			{
				extract:"Destiné à un large public, Le monde subatomique décrit l'évolution des idées sur les interactions et les constituants de la matière, avec leurs applications, depuis la découverte du neutron jusqu'à celle du boson Z°. Il remplace le premier volume, Approche élémentaire, de l'ouvrage antérieur de Luc Valentin, Physique subatomique, manuel de référence qui connaît en France et à l'étranger la faveur des enseignants et des étudiants.",
				author:'Luc Valentin'
			},
			{
				extract:`Cet ouvrage a pour ambition de faire la synthèse de nombreuses années d'expériences dans le domaine de la dosimétrie externe et des techniques de protection contre ce type d'exposition aussi bien dans les domaines industriels, de la recherche et du médical. \n
				Il est fondé sur la théorie liée à l'interaction des rayonnements ionisants avec la matière, des formules empiriques, des abaques et illustré par de nombreuses applications numériques. En outre, il fait référence en permanence à l'état de l'art et notamment dans le domaine des codes de calcul pour l'exposition externe et d'un certain nombre de projets médicaux et de recherche récents. Par ailleurs, il compile des données dispersées dans de nombreux ouvrages de référence, dont certains sont difficilement disponibles. \n
				Cet ouvrage est dédié aux professionnels de la radioprotection, de la dosimétrie, de la mesure nucléaire mais permet également  de compléter le cursus des étudiants de niveau technicien à ingénieur. \n
				Cet ouvrage est articulé autour de deux niveaux de lecture : le premier abordable par l'ensemble des lecteurs pour lequel des concepts de physiques élémentaires conduisant à la compréhension des phénomènes liés à l'exposition externe sont étayés par des applications numériques simples ; le second au travers de compléments d'informations (CI), accessibles en fin de chaque chapitre, détaillant des points plus complexes nécessitant le cas échéant des développements mathématiques non triviaux. \n
				Le premier chapitre traite de la définition des grandeurs radiométriques et dosimétriques fondamentales, permettant d'aborder l'interaction rayonnement matière sous un angle dédié au dépôt de la dose dans les tissus biologiques au travers du second chapitre, pour enfin définir et appliquer les grandeurs de protection et opérationnelles liée à la radioprotection au sein d'un troisième chapitre. \n
				Un accent particulier a été porté, dans les deux chapitres suivants, quant à la définition des risques et contre-mesures associées (i.e. protections biologiques) inhérents aux sources de rayonnements usuelles : radionucléides, générateurs X, accélérateurs (électrons, ions) … mais également pour des dispositifs plus « exotiques » dont certains sont liés à des domaines en expansion ou d'avenir : laser de puissance, accélérateurs … pour un domaine d'énergies que l'on peut qualifier de moyennes (0 à 200 MeV)\n
				Un chapitre en fin d'ouvrage est entièrement consacré aux codes de calculs de transport de particules exploitant la méthode Monte-Carlo. Les principes généraux y sont explicités avec une orientation particulière vers l'estimation de grandeurs radiométriques et dosimétriques décrites dans les chapitres antérieurs. Cette partie est là encore jalonnée d'applications numériques permettant d'éclaircir certaines thématiques. Rappelons que les codes de calculs dont les algorithmes exploitent cette méthode, constituent aujourd'hui des outils de références pour les calculs liés à la dosimétrie, la radioprotection et la radiophysique.`,
				author:'Rodolphe Antoni et Laurent Bourgois'
			},
			{
				extract:`Cet ouvrage fait le point sur l’état de l’art en matière de calculs dosimétriques, de métrologie des rayonnements ionisants et de radioprotection au travers de problèmes liés à des applications concrètes du domaine. \n
				Il propose des résolutions au moyen de formules analytiques et semi-empiriques issues de la théorie de la physique nucléaire et des derniers développements de la recherche. Pour certaines problématiques : théorie des cavités, calcul des doses absorbées pour les protons, calculs de grandeurs et dimensionnements autour des générateurs X, les données et les approches calculatoires les plus récentes figurent parmi les outils employés. De plus, dans l’essentiel des problèmes proposés, une inter-comparaison avec les résultats numériques issus d’un code de type Monte-Carlo est présentée. Le code MCNP, outil mondialement utilisé, a été choisi dans cet ouvrage pour fournir, le cas échéant, les « valeurs vraies » afin d’éprouver les résultats calculés analytiquement ou de façon semi-empirique. Pour chaque cas étudié, les fichiers d’entrée sont fournis dans leur globalité et leur architecture détaillée. Certaines géométries complexes intervenant dans la définition des scènes radiologiques simulées sont décrites ainsi que les fonctionnalités utilisées pour le suivi du transport des particules. Par ailleurs, un accent est mis sur les normalisations des résultats bruts de MCNP et sur les techniques de réduction de variance ajoutées pour faciliter, voire permettre la convergence des estimateurs statistiques vers le résultat final. \n
				Cet ouvrage s’adresse à un public possédant de solides bases dans les domaines concernés et peut être recommandé à partir d’un niveau de License de physique. Il apportera des éléments théoriques et techniques, aussi bien, aux ingénieurs pour des prestations de calculs qu’aux étudiants de troisième cycle pour leurs travaux de recherche. Concernant la démarche pédagogique proposée, chaque problème est indépendant avec un niveau croissant de difficulté ; le lecteur peut ainsi étudier les problématiques qui l’intéressent dans l’ordre qu’il désire.`,
				author:'Laurent Bourgois et Rodolphe Antoni'
			},
			{
				extract:`La radioactivité est partout, elle nous entoure. Pourtant nous avons vécu avec durant plusieurs siècles sans le savoir et ce n’est qu’en 1896 que Henri Becquerel, Pierre et Marie Curie l’ont découverte, nous laissant entrevoir alors un phénomène inconnu capable du pire comme du meilleur avec des sources de rayonnements diverses. \n
				Aujourd’hui, la radioactivité est encore perçue par le grand public comme un phénomène dangereux. En réalité, elle ne l’est que dans certains cas et sa surveillance n’en est que plus indispensable. Quand et comment s’en protéger ? C’est là tout le rôle d’une discipline appelée Radioprotection. \n
				Depuis la création de la première Commission en radioprotection jusqu’aux dernières réglementations, cet ouvrage met en avant tous les aspects du travail de protection de l’environnement et de l’Homme (matériel de détection, mesures, écrans, déchets, etc.). \n
				Une présentation des sources naturelles et artificielles nous montre également l’étendue des applications ou utilisations nécessitant une exposition limitée des travailleurs, patients ou tout autre personne. \n
				Ce livre, sans formule mathématique complexe, permettra à tous les lecteurs de mieux connaître le rôle et le travail des radioprotectionnistes et de ne plus appréhender la radioactivité !`,
				author:'Marc Ammerich'
			},
			{
				extract:'Ces livres sont adaptés aux étudiants en master radioprotection, école d’ingénieur mais aussi aux étudiants spécialisés en BTS ou licence radioprotection. Son but est d’apprendre à savoir maîtriser les différents cas proposés. Les problèmes abordent tous les thèmes allant de la radioactivité en passant par la dosimétrie physique, les expositions externes et internes, les effets biologiques, la détection, jusqu’aux aspects réglementaires.   Ce sont près de trente ans d’enseignement et de conception d’exercices et de problèmes qui me permettent de vous proposer ce livre.',
				author:'Marc Ammerich'
			},
		],
	},
}

export default text;
