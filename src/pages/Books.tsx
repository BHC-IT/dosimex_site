const text = {
	header: {
		title: "Lectures",
		p: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. At purus risus, dictum auctor massa quam scelerisque. Nibh lobortis feugiat orci donec mauris turpis sagittis malesuada nibh.",
	},
	book: {
		title: "Physique nucléaire et radioprotection",
		author: "Arnaud Boquet",
		extract: "Cet ouvrage s’adresse aux étudiants se destinant à l’industrie du nucléaire, à la médecine nucléaire ou encore à la recherche. Les utilisateurs de rayonnements ionisants, opérateurs, techniciens, ingénieurs, personnes compétentes en radioprotection, médecins du travail, pourront également y trouver des informations utiles et actualisées. Plus largement, toute personne ayant un intérêt pour les sciences aura un point complet sur les phénomènes liés à la radioactivité et aux rayonnements ionisants. Cet ouvrage propose des cours de physique nucléaire, allant des constituants de la matière aux interactions entre rayonnement et matière ; des cours de radioprotection, incluant la dosimétrie, la détection, les moyens de protection contre l’exposition aux rayonnements ionisants ; la réglementation liée à la radioprotection mise à jour. Un point complet sur la culture nucléaire est fait, allant de l’historique à l’utilisation de la radioactivité et des rayonnements ionisants, en passant par leurs effets biologiques ou encore les accidents et l’exposition de la population. À chaque chapitre, des exercices d’application et des corrigés sont proposés. Ils permettent d’appréhender l’aspect quantitatif de la radioprotection, en étudiant la contamination, l’exposition du personnel ou encore des calculs d’activité. Ainsi, chaque lecteur y trouvera son compte…un lycéen en baccalauréat y trouvera des informations claires et actuelles ; un étudiant en BTS ou licence professionnelle aura toutes les bases pour ses cours dans un même ouvrage, avec des exercices d’entraînement ; un étudiant en école d’ingénieur ou master aura un point complet sur l’ensemble du spectre de la radioprotection et des méthodes de calculs associées ; un intervenant en nucléaire aura des informations précises sur le thème qui l’intéresse ; une PCR aura dans un seul ouvrage toutes les données et les formules nécessaires à ses missions, et un support de cours pour le passage des formations PCR.",
	}
}


export default function Books() {
	return (
		<>
			<h2>{text.header.title}</h2>
			<p>{text.header.p}</p>
			<div>
				<div></div>
				<div>
					<p>{text.book.title}</p>
					<p>{text.book.author}</p>
				</div>
				<div>
					{/*<Image />*/}
					<p>{text.book.extract}</p>
				</div>
			</div>
			<button>Voir plus</button>
		</>
	);
}