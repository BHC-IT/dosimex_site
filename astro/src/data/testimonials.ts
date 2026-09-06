export interface Testimonial {
	text: string
	name: string
	role: string
	org: string
}

export const testimonials: Testimonial[] = [
	{
		text: "Dosimex présente d'immenses qualités pédagogiques, tant par sa simplicité d'utilisation, sa clarté que par la qualité des explications dans le manuel. L'intérêt opérationnel découle en grande partie des points forts cités précédemment. La rapidité d'exécution, la clarté des explications et la complétude des dossiers de validation apportent un intérêt opérationnel à Dosimex dans le cadre d'instructions de dossiers de sûreté.",
		name: 'Jeremy Bez, Sophie Vecchiola, AYADI Ben Mekk Ayadi',
		role: '',
		org: 'IRSN',
	},
	{
		text: "Nous voyons un grand intérêt à l'utilisation de DOSIMEX. En effet, simple d'utilisation DOSIMEX permet de couvrir un très grand nombre de cas de calculs à réaliser en RP opérationnelle. C'est la calculette de l'ingénieur en RP et bien plus encore.",
		name: 'Marc Lestang',
		role: '',
		org: 'EDF',
	},
	{
		text: "Je vous remercie d'avoir créé ces outils et de les avoir rendus aussi performants et utiles.",
		name: 'Patrice Romane',
		role: '',
		org: 'EDF',
	},
	{
		text: "Dosimex est en plus d'être un logiciel de modélisation, une base de données importante et utile lorsque l'on travaille dans le domaine de la radioprotection. Son aspect pédagogique permet également à des novices d'appréhender et de se familiariser avec la physique et l'interaction des particules dans la matière.",
		name: 'Florian Veron',
		role: '',
		org: 'APAVE',
	},
	{
		text: "Sans Dosimex, je n'aurais jamais codé. L'utilisation de Dosimex GX m'a souvent permis d'argumenter mes choix en radioprotection.",
		name: 'Pauline Sarrus',
		role: '',
		org: 'ORANO',
	},
	{
		text: "Globalement je suis très satisfait de ce pack qui pour la recherche est un outil indispensable pour mon activité sur des radionucléides exotiques. Merci pour la formation et encore félicitations pour l'outil Dosimex.",
		name: 'Isidro Da Silva',
		role: '',
		org: 'CNRS',
	},
	{
		text: "9 PCRs de laboratoires CNRS de la délégation Centre Limousin Poitou Charentes ont suivi une formation Dosimex en mai 2015. Il est devenu un outil indispensable pour un grand nombre de laboratoires de recherche avec lequel je travaille. Un groupe de travail CNRS a été créé en 2016 pour travailler sur la mise en œuvre de la décision de l'ASN n°2013-DC-0349 et les difficultés d'application de la note de calcul défini dans la norme NFC15-160. L'outil Dosimex G a été utilisé pour proposer une démonstration théorique alternative. L'ASN a accepté cette approche. Une dizaine d'appareils de cristallographie ont ainsi pu être régularisés sur le campus CNRS d'Orléans.",
		name: 'Sébastien Bouillon',
		role: '',
		org: 'CNRS',
	},
	{
		text: "Nous avons utilisé le logiciel Dosimex dans le cadre de formations de personnes compétentes en radioprotection et dans certaines situations incidentelles. Les résultats obtenus ont été comparés à d'autres codes de calcul et à des mesures de terrain. Je suis confiant dans la pertinence de cet outil que nous utiliserons chaque fois que nécessaire.",
		name: 'Médecin en Chef Xavier Michel',
		role: '',
		org: 'SPRA',
	},
	{
		text: "J'utilise DOSIMEX, qui me donne totalement satisfaction, tant par la qualité de ses résultats que par sa facilité d'usage, dans les formations du personnel du ministère des armées. Il possède, entre autres, la force de tenir compte de situations courantes auxquelles sont confrontées les agents de MinArm, tant dans les rôles de PCR médicaux (merci au module de calcul X !) que les intervenants de tous niveaux dans le domaine industriel (du PNR à l'ingénieur). Enfin son usage est si simple que quasiment tous les PCR que nous formons l'ont adopté dans leurs unités.",
		name: 'Jean-Lionel Trolet',
		role: '',
		org: "EAMEA \u2014 \u00C9cole des Applications Militaires de l'\u00C9nergie Atomique",
	},
	{
		text: "J'utilise Dosimex depuis 2014. Initialement pour l'application de la NFC 15-160. J'ai ensuite utilisé l'application GénéX. Il permet de calculer l'atténuation derrière un écran, quelle que soit sa composition, aussi bien pour le faisceau primaire que diffusé. Des études de postes avec estimation de la dose cristallin sont réalisées au bloc. Les résultats sont confirmés par dosimétrie.",
		name: 'Dr Dominique Schiedts',
		role: '',
		org: 'Centre hospitalier public du Cotentin',
	},
	{
		text: "J'ai d'abord et davantage fais confiance à mes propres validations plus qu'aux dossiers fournis. La validation croisée avec RayXpert a été un surcroît de confiance important. Toutes les évolutions qui pourraient renforcer/étendre l'utilisation de DOSIMEX sur le terrain et en formation sont les bienvenues +++. Cet outil joue maintenant le rôle qu'a joué le Delacroix et al. quand j'ai débuté.",
		name: 'Sébastien Balduyck',
		role: 'Unité de radiophysique et radioprotection',
		org: 'CHU de Toulouse',
	},
	{
		text: "PCR au Centre Hospitalier Universitaire de Nîmes depuis 2015, je suis utilisateur de DOSIMEX depuis ses premières versions de 2013. Ces deux outils de travail (bouquin et logiciel) ont été un atout précieux pour développer mes connaissances en calculs de dose et en sont à présent intégrés dans mon quotidien de PCR.",
		name: 'Cyril Duverger',
		role: 'Cellule de radioprotection',
		org: 'CHU de Nîmes',
	},
	{
		text: "Je suis utilisateur de Dosimex depuis sa 1re version en 2013. Je l'utilise de manière régulière (plusieurs fois par semaine) et tout particulièrement : Dosimex pédagogique « Serious Game » lors des formations initiales de radioprotection des travailleurs pour que le stagiaire visualise l'effet du temps/écran/distance. Le module NF C 15160 de dosimex-GX lors des formations PCR pour des cas « hors norme » (tension, filtration non indiquée\u2026) ; Mais également de manière plus spécifique en médecine nucléaire pour l'évaluation dosimétrique prévisionnelle, liée à l'utilisation de nouveaux radionucléides (177Lutétium 223 Radium).",
		name: 'Benjamin Menard',
		role: 'PCR Service de radiophysique',
		org: 'CLCC Fran\u00e7ois Baclesse',
	},
	{
		text: "Je tiens à vous féliciter ainsi que les autres auteurs pour le développement de ce code très utile pour la communauté \u00ab\u00A0Rayonnements ionisants et Radioprotection\u00A0\u00bb et surtout pour les étudiants en formation initiale et en alternance.",
		name: 'Pr Abdel-Mijd Nourredine',
		role: 'Directeur UFR Physique et Ingénierie',
		org: 'Université de Strasbourg',
	},
	{
		text: "Je vous félicite, le logiciel est performant et convivial. Son intérêt pédagogique est avéré. Je le présenterai à quelques collègues également responsables d'enseignements portant sur les risques radiologiques, qui j'en suis certain y trouveront également un grand intérêt.",
		name: 'Franck Falco',
		role: 'Directeur des études, licence professionnelle Radioprotection et Sûreté Nucléaire',
		org: 'IUT Aix-Marseille',
	},
	{
		text: "A l'évidence, trois points forts caractérisent Dosimex : 1) Une facilité d'utilisation remarquable. La diversité des géométries possibles déjà intégrées dans le code, la diversité des écrans et radionucléides disponibles permettent une modélisation extrêmement rapide. 2) Une possibilité de calcul de débit de dose non seulement lié à un environnement gamma (comme le font la plupart des codes de calcul), mais également à un environnement Beta, Neutrons ou \u00ab\u00A0nuages\u00A0\u00bb. 3) Une dimension pédagogique évidente qui permet de montrer aux stagiaires en formation l'impact de divers paramètres, mais également (au travers des annexes disponibles) l'origine des principes physiques utilisés.",
		name: 'Olivier Dieudonné',
		role: '',
		org: 'Safe Technologies',
	},
	{
		text: "Chargé des analyses en Radioprotection, je dois réaliser de nombreuses modélisations de colis de déchets radioactifs. Après avoir utilisé des logiciels en code Monte-carlo ou calcul simplifié, mon choix s'est porté sur Dosimex : simplicité d'utilisation, liste des radionucléides complète, rapidité d'exécution, précision des résultats même pour les énergies faibles, aspect ludique, coût imbattable du produit, accompagnement du produit avec le guide manuel, service après-vente : disponibilité et écoute des concepteurs du produit.",
		name: 'Philippe Tranchant',
		role: 'Expert radioprotection',
		org: 'ONET',
	},
]
