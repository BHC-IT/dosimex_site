import Button from '../Components/Button';

const text = {
	header: {
		title: "La référence des outils de calculs pour la radioprotection ",
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
}


export default function Home() {
	return (
		<body>
			<header>
				<div>
					<h1>{text.header.title}</h1>
					<p>{text.header.p}</p>
					<Button name={text.header.button} route="Software"/>
				</div>
				<div>
					{/*<Image />
					<Image />*/}
				</div>
			</header>

			<section>
				<h3>{text.partners.title}</h3>
				<div>
					<div>Map component Partners</div>
					{/*<Carousel />*/}
				</div>
			</section>

			<section>
				<h2>{text.offers.title}</h2>
				<p>{text.offers.p}</p>
				{/*<CardHome />
				<CardHome />
				<CardHome />*/}
			</section>

			<section>
				<div>
					<div>
						<h2>{text.numbers.number1}</h2>
						<p>{text.numbers.p1}</p>
					</div>
					<div>
						<h2>{text.numbers.number2}</h2>
						<p>{text.numbers.p2}</p>
					</div>
					<div>
						<h2>{text.numbers.number3}</h2>
						<p>{text.numbers.p3}</p>
					</div>
				</div>
			</section>

			<section>
				<div></div>
				<div>
					<h2>{text.videos.title}</h2>
					<p>{text.videos.p}</p>
					<Button name={text.videos.button} route="Videos"/>
				</div>
				{/*<Image />*/}
			</section>

			<section>
				<div>

				</div>
				{/*<Carousel />*/}
			</section>

			<h2>{text.callToAction.title}</h2>
			<Button name={text.callToAction.button} route="Product"/>
		</body>
	 );
}
