import Button from '../Components/Button';


export default function Home() {
	return (
		<body>
			<header>
				<div>
					<h1>La référence des outils de calculs pour la radioprotection </h1>
					<p>Ensemble d'outils de calculs pratiques, simples d’emploi, validés, et répondant à de nombreuses situations rencontrées en radioprotection. Ils vous permettront d'améliorer votre niveau d'expertise.</p>
					<Button name="Découvrir" route="Software"/>
				</div>
				<div>
					{/*<Image />
					<Image />*/}
				</div>
			</header>

			<section>
				<h3>Nos partenaires</h3>
				<div>
					<div>Map component Partners</div>
					{/*<Carousel />*/}
				</div>
			</section>

			<section>
				<h2>Ce que nous proposons</h2>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque integer dignissim sit pellentesque enim tortor quam tortor, odio. Tempor felis egestas blandit turpis. Id libero non amet augue elementum urna. Ornare.</p>
				{/*<CardHome />
				<CardHome />
				<CardHome />*/}
			</section>

			<section>
				<div>
					<div>
						<h2>30 ans</h2>
						<p>d'expérience</p>
					</div>
					<div>
						<h2>+1000</h2>
						<p>radioprotectionnistes convaincus</p>
					</div>
					<div>
						<h2>??</h2>
						<p>?????????????????</p>
					</div>
				</div>
			</section>

			<section>
				<div></div>
				<div>
					<h2>Retrouvez-nous sur Youtube</h2>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent blandit donec et cursus magna orci, hac convallis mi.</p>
					<Button name="Découvrir les autres vidéos" route="Videos"/>
				</div>
				{/*<Image />*/}
			</section>

			<section>
				<div>
					<div>
						<p>Jean-Lionel Trolet</p>
						<p>EAMEA</p>
					</div>
					<div>icon quote</div>
					<p>J’utilise DOSIMEX, qui me donne totalement satisfaction, tant par la qualité de ses résultats que par sa facilité d’usage, dans les formations du personnel du ministère des armées. Il possède, entre autres, la force de tenir compte de situations courantes auxquelles sont confrontées les agents de MinArm, tant dans les rôles de PCR médicaux (merci au module de calcul X !) que les intervenants de tous niveaux dans le domaine industriel (du PNR à l’ingénieur). Enfin son usage est si simple que quasiment tous les PCR que nous formons l’ont adopté dans leurs unités.</p>
				</div>
				{/*<Carousel />*/}
			</section>

			<h2>Phrase call to action lorem ipsum magnalus rib te lesatre</h2>
			<Button name="Acheter Dosimex" route="Product"/>
		</body>
	 );
}
