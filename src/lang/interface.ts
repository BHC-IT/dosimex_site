export default interface Lang {
	Home: {
		header: {
			title: string,
			p: string,
			button: string,
			textImage: string[],
		},
		partners: {
			title: string,
		},
		offers: {
			title: string,
			p: string,
			card1: {
				title: string,
				p: string,
			},
			card2: {
				title: string,
				p: string,
			},
			card3: {
				title: string,
				p: string,
			}
		},
		numbers: {
			number1: string,
			p1: string,
			number2: string,
			p2: string,
			number3: string,
			p3: string,
		},
		videos: {
			title: string,
			p: string,
			button: string,
		},
		opinion: {
			name: string,
			job: string,
			opinion: string,
		},
		callToAction: {
			title: string,
			button: string,
		}
	}
}