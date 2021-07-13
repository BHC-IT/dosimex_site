import ILang from './interface';

const text : ILang = {
	Home: {
		header: {
			title: "{Home.header.title}",
			p: "{Home.header.p}",
			button: "{Home.header.button}",
		},
		partners: {
			title: "{Home.partners.title}",
		},
		offers: {
			title: "{Home.offers.title}",
			p: "{Home.offers.p}",
			card1: {
				title: "{Home.offers.card1.title}",
				p: "{Home.offers.card1.p}",
			},
			card2: {
				title: "{Home.offers.card2.title}",
				p: "{Home.offers.card2.p}",
			},
			card3: {
				title: "{Home.offers.card3.title}",
				p: "{Home.offers.card1.p}",
			}
		},
		numbers: {
			number1: "{Home.numbers.number1}",
			p1: "{Home.numbers.p1}",
			number2: "{Home.numbers.number2}",
			p2: "{Home.numbers.p2}",
			number3: "{Home.numbers.number3}",
			p3: "{Home.numbers.p3}",
		},
		videos: {
			title: "{Home.video.title}",
			p: "{Home.video.p}",
			button: "{Home.video.button}",
		},
		opinion: {

		},
		callToAction: {
			title: "{Home.callToAction.title}",
			button: "{Home.callToAction.button}",
		}
	}
}

export default text;
