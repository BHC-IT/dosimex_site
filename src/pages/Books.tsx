import Book from '../Components/Book';

const text = {
	header: {
		title: "Lectures",
		p: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. At purus risus, dictum auctor massa quam scelerisque. Nibh lobortis feugiat orci donec mauris turpis sagittis malesuada nibh.",
	},
	book1: {
		extract:`Cet ouvrage s’adresse aux étudiants se destinant à l’industrie du nucléaire, à la médecine nucléaire ou encore à la recherche. Les utilisateurs de rayonnements ionisants, opérateurs, techniciens, ingénieurs, personnes compétentes en radioprotection, médecins du travail, pourront également y trouver des informations utiles et actualisées. Plus largement, toute personne ayant un intérêt pour les sciences aura un point complet sur les phénomènes liés à la radioactivité et aux rayonnements ionisants. Cet ouvrage propose des cours de physique nucléaire, allant des constituants de la matière aux interactions entre rayonnement et matière ; des cours de radioprotection, incluant la dosimétrie, la détection, les moyens de protection contre l’exposition aux rayonnements ionisants ; la réglementation liée à la radioprotection mise à jour. Un point complet sur la culture nucléaire est fait, allant de l’historique à l’utilisation de la radioactivité et des rayonnements ionisants, en passant par leurs effets biologiques ou encore les accidents et l’exposition de la population. \n
			 À chaque chapitre, des exercices d’application et des corrigés sont proposés. Ils permettent d’appréhender l’aspect quantitatif de la radioprotection, en étudiant la contamination, l’exposition du personnel ou encore des calculs d’activité. \n
			Ainsi, chaque lecteur y trouvera son compte…un lycéen en baccalauréat y trouvera des informations claires et actuelles ; un étudiant en BTS ou licence professionnelle aura toutes les bases pour ses cours dans un même ouvrage, avec des exercices d’entraînement ; un étudiant en école d’ingénieur ou master aura un point complet sur l’ensemble du spectre de la radioprotection et des méthodes de calculs associées ; un intervenant en nucléaire aura des informations précises sur le thème qui l’intéresse ; une PCR aura dans un seul ouvrage toutes les données et les formules nécessaires à ses missions, et un support de cours pour le passage des formations PCR.`,
		author:'Arnaud Boquet'
	}
	,
	book2: {
		extract:`Cet ouvrage a deux objectifs complémentaires : tout d’abord apporter au lecteur une compréhension des principes physiques à l’œuvre lorsqu’une cible est exposée à des rayonnements ionisants : ions lourds, électrons, photons ou neutrons, et dans un second temps lui proposer des outils de calcul simples permettant d’évaluer les doses absorbées pour l’ensemble de ces divers rayonnements.\n
			Suivant cette logique les premières parties sont consacrés à établir les modèles physiques permettant de calculer les dépôts d’énergie en fonctions des caractéristiques de la cible et du champ de rayonnement. Cette approche purement physique s’applique à tout type de milieu irradié, inerte ou vivant, se traduisant  à termes par la donnée d’une grandeur physique particulière : la dose absorbée.\n
			L’ouvrage se focalise ensuite sur une cible particulière, l’être humain, et s’intéresse aux grandeurs radiométriques règlementaires utilisées en radioprotection, doses équivalentes et doses efficaces, grandeurs particulières traduisant la réponse biologique d’un individu exposé aux rayonnement ionisants  En spécifiant les sources et les conditions d’irradiations on peut alors établir le lien entre l’activité d’une source radioactive et le risque encouru par un individu exposé à cette source, tant en irradiation externe qu’interne. Ces mêmes principes et modèles permettent enfin d’évaluer les moyens de protection vis à vis de ces divers rayonnements ainsi que les principes et les méthodes principales utilisé pour mesurer ces grandeurs dosimétriques règlementaires.`,
		author:'Alain Vivier et Gérald Lopez'
	}
	,
	book3: {
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
	}
	,
	book4: {
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
	}
	,
	book5: {
		extract:`Ce volume correspond au module pratique dédié aux installations de l'industrie et de la recherche concernées par la détention ou la gestion de générateurs X et de sources scellées. Conforme aux exigences réglementaires stipulant que ce module doit permettre d'appliquer les acquis de la formation théorique à des situations concrètes de travail susceptibles d'être rencontrées, il comprend 11 chapitres traitant les aspects suivants :\n
			- un panorama détaillé de l'application de ces sources dans l'industrie et la recherche ;\n
			- la radioprotection dans les installations de l'industrie et la recherche : les moyens de prévention, protection, formation, détection associés ;\n
			- les critères de choix des détecteurs, la mesure de la contamination radioactive et des fuites de rayonnement, l'exposition, associée à des méthodes d'estimation des débits de dose et des écrans de protection ;\n
			- la gestion des situations incidentelles et dégradées ;\n
			- la méthodologie d'analyse des postes de travail complétée par des études de cas pratiques.\n
			Cet ouvrage prépare ainsi efficacement au contrôle des connaissances du module pratique et constitue un outil d'aide indispensable à l'obtention de l'attestation PCR.`,
		author:'Jean-Claude Moreau et Marc Ammerich'
	}
	,
	book6: {
		extract:"Il était temps de retracer l’histoire de la physique nucléaire. Bernard Fernandez vous prend par la main pour vous guider à travers les méandres d’une science compliquée mais passionnante. Utilisant la langue française ordinaire, sans jargon scientifique ni formules mathématiques, il s’adresse à la fois aux lecteurs spécialisés, à qui il offre une perspective historique de leur science, et à l’honnête homme, qui désire s’informer sans posséder de connaissances scientifiques particulières. Dans ce récit toujours vivant se mêlent personnages connus et moins connus, théories élaborées dans l’enthousiasme et parfois démolies ensuite, protocoles d’expériences et descriptions minutieuses d’instruments. Une idée-force du livre est en effet que jamais la théorie ne doit s’affranchir de la réalité expérimentale",
		author:'Bernard Fernandez'
	}
	,
	book7: {
		extract:"Destiné à un large public, Le monde subatomique décrit l'évolution des idées sur les interactions et les constituants de la matière, avec leurs applications, depuis la découverte du neutron jusqu'à celle du boson Z°. Il remplace le premier volume, Approche élémentaire, de l'ouvrage antérieur de Luc Valentin, Physique subatomique, manuel de référence qui connaît en France et à l'étranger la faveur des enseignants et des étudiants.",
		author:'Luc Valentin',
	}
	,
	book8: {
		extract:`Cet ouvrage a pour ambition de faire la synthèse de nombreuses années d'expériences dans le domaine de la dosimétrie externe et des techniques de protection contre ce type d'exposition aussi bien dans les domaines industriels, de la recherche et du médical. \n
			Il est fondé sur la théorie liée à l'interaction des rayonnements ionisants avec la matière, des formules empiriques, des abaques et illustré par de nombreuses applications numériques. En outre, il fait référence en permanence à l'état de l'art et notamment dans le domaine des codes de calcul pour l'exposition externe et d'un certain nombre de projets médicaux et de recherche récents. Par ailleurs, il compile des données dispersées dans de nombreux ouvrages de référence, dont certains sont difficilement disponibles. \n
			Cet ouvrage est dédié aux professionnels de la radioprotection, de la dosimétrie, de la mesure nucléaire mais permet également  de compléter le cursus des étudiants de niveau technicien à ingénieur. \n
			Cet ouvrage est articulé autour de deux niveaux de lecture : le premier abordable par l'ensemble des lecteurs pour lequel des concepts de physiques élémentaires conduisant à la compréhension des phénomènes liés à l'exposition externe sont étayés par des applications numériques simples ; le second au travers de compléments d'informations (CI), accessibles en fin de chaque chapitre, détaillant des points plus complexes nécessitant le cas échéant des développements mathématiques non triviaux. \n
			Le premier chapitre traite de la définition des grandeurs radiométriques et dosimétriques fondamentales, permettant d'aborder l'interaction rayonnement matière sous un angle dédié au dépôt de la dose dans les tissus biologiques au travers du second chapitre, pour enfin définir et appliquer les grandeurs de protection et opérationnelles liée à la radioprotection au sein d'un troisième chapitre. \n
			Un accent particulier a été porté, dans les deux chapitres suivants, quant à la définition des risques et contre-mesures associées (i.e. protections biologiques) inhérents aux sources de rayonnements usuelles : radionucléides, générateurs X, accélérateurs (électrons, ions) … mais également pour des dispositifs plus « exotiques » dont certains sont liés à des domaines en expansion ou d'avenir : laser de puissance, accélérateurs … pour un domaine d'énergies que l'on peut qualifier de moyennes (0 à 200 MeV)\n
			Un chapitre en fin d'ouvrage est entièrement consacré aux codes de calculs de transport de particules exploitant la méthode Monte-Carlo. Les principes généraux y sont explicités avec une orientation particulière vers l'estimation de grandeurs radiométriques et dosimétriques décrites dans les chapitres antérieurs. Cette partie est là encore jalonnée d'applications numériques permettant d'éclaircir certaines thématiques. Rappelons que les codes de calculs dont les algorithmes exploitent cette méthode, constituent aujourd'hui des outils de références pour les calculs liés à la dosimétrie, la radioprotection et la radiophysique.`,
		author:'Rodolphe Antoni et Laurent Bourgois'
	}
	,
	book9: {
		extract:`Cet ouvrage fait le point sur l’état de l’art en matière de calculs dosimétriques, de métrologie des rayonnements ionisants et de radioprotection au travers de problèmes liés à des applications concrètes du domaine. \n
			Il propose des résolutions au moyen de formules analytiques et semi-empiriques issues de la théorie de la physique nucléaire et des derniers développements de la recherche. Pour certaines problématiques : théorie des cavités, calcul des doses absorbées pour les protons, calculs de grandeurs et dimensionnements autour des générateurs X, les données et les approches calculatoires les plus récentes figurent parmi les outils employés. De plus, dans l’essentiel des problèmes proposés, une inter-comparaison avec les résultats numériques issus d’un code de type Monte-Carlo est présentée. Le code MCNP, outil mondialement utilisé, a été choisi dans cet ouvrage pour fournir, le cas échéant, les « valeurs vraies » afin d’éprouver les résultats calculés analytiquement ou de façon semi-empirique. Pour chaque cas étudié, les fichiers d’entrée sont fournis dans leur globalité et leur architecture détaillée. Certaines géométries complexes intervenant dans la définition des scènes radiologiques simulées sont décrites ainsi que les fonctionnalités utilisées pour le suivi du transport des particules. Par ailleurs, un accent est mis sur les normalisations des résultats bruts de MCNP et sur les techniques de réduction de variance ajoutées pour faciliter, voire permettre la convergence des estimateurs statistiques vers le résultat final. \n
			Cet ouvrage s’adresse à un public possédant de solides bases dans les domaines concernés et peut être recommandé à partir d’un niveau de License de physique. Il apportera des éléments théoriques et techniques, aussi bien, aux ingénieurs pour des prestations de calculs qu’aux étudiants de troisième cycle pour leurs travaux de recherche. Concernant la démarche pédagogique proposée, chaque problème est indépendant avec un niveau croissant de difficulté ; le lecteur peut ainsi étudier les problématiques qui l’intéressent dans l’ordre qu’il désire.`,
		author:'Laurent Bourgois et Rodolphe Antoni'
	}
	,
	book10: {
		extract:`La radioactivité est partout, elle nous entoure. Pourtant nous avons vécu avec durant plusieurs siècles sans le savoir et ce n’est qu’en 1896 que Henri Becquerel, Pierre et Marie Curie l’ont découverte, nous laissant entrevoir alors un phénomène inconnu capable du pire comme du meilleur avec des sources de rayonnements diverses. \n
			Aujourd’hui, la radioactivité est encore perçue par le grand public comme un phénomène dangereux. En réalité, elle ne l’est que dans certains cas et sa surveillance n’en est que plus indispensable. Quand et comment s’en protéger ? C’est là tout le rôle d’une discipline appelée Radioprotection. \n
			Depuis la création de la première Commission en radioprotection jusqu’aux dernières réglementations, cet ouvrage met en avant tous les aspects du travail de protection de l’environnement et de l’Homme (matériel de détection, mesures, écrans, déchets, etc.). \n
			Une présentation des sources naturelles et artificielles nous montre également l’étendue des applications ou utilisations nécessitant une exposition limitée des travailleurs, patients ou tout autre personne. \n
			Ce livre, sans formule mathématique complexe, permettra à tous les lecteurs de mieux connaître le rôle et le travail des radioprotectionnistes et de ne plus appréhender la radioactivité !`,
		author:'Marc Ammerich'
	}
	,
	book11: {
		extract:'Ces livres sont adaptés aux étudiants en master radioprotection, école d’ingénieur mais aussi aux étudiants spécialisés en BTS ou licence radioprotection. Son but est d’apprendre à savoir maîtriser les différents cas proposés. Les problèmes abordent tous les thèmes allant de la radioactivité en passant par la dosimétrie physique, les expositions externes et internes, les effets biologiques, la détection, jusqu’aux aspects réglementaires.   Ce sont près de trente ans d’enseignement et de conception d’exercices et de problèmes qui me permettent de vous proposer ce livre.',
		author:'Marc Ammerich'
	}
}


export default function Books() {

	return (
		<>
			<div className="container" style={styles.global}>
				<div style={styles.header}>
					<h2>{text.header.title}</h2>
					<p style={styles.headerSubtitle}>{text.header.p}</p>
				</div>
				<div>
					<Book author={text.book1.author} text={text.book1.extract} href="/" imageUrl="livre1.png"/>
					<Book author={text.book2.author} text={text.book2.extract} href="/" imageUrl="livre2.png"/>
					<Book author={text.book3.author} text={text.book3.extract} href="/" imageUrl="livre3.png"/>
					<Book author={text.book4.author} text={text.book4.extract} href="/" imageUrl="livre4.png"/>
					<Book author={text.book5.author} text={text.book5.extract} href="/" imageUrl="livre5.png"/>
					<Book author={text.book6.author} text={text.book6.extract} href="/" imageUrl="livre6.png"/>
					<Book author={text.book7.author} text={text.book7.extract} href="/" imageUrl="livre7.png"/>
					<Book author={text.book8.author} text={text.book8.extract} href="/" imageUrl="livre8.png"/>
					<Book author={text.book9.author} text={text.book9.extract} href="/" imageUrl="livre9.png"/>
					<Book author={text.book10.author} text={text.book10.extract} href="/" imageUrl="livre10.png"/>
					<Book author={text.book11.author} text={text.book11.extract} href="/" imageUrl="livre11.png"/>
				</div>
			</div>
		</>
	);
}

export const styles = {
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
}