import Button from '../Components/Button';
import { useText } from '../Hooks/useText';

export default function Home() {

	const text = useText('Home');

	return (
		<>
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
		</>
	 );
}
