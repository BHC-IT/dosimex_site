export default interface Lang {
	Home: {
		header: {
			title: string,
			p: string,
			button: string,
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

		},
		callToAction: {
			title: string,
			button: string,
		}
	},
	Software: {
		header: {
			title: string,
			p: string,
			li: string[],
		},
		button: {
			label: string,
		},
		packOpe: {
			title: string,
			descrip: string,
			liTitles: string[],
			li: string[],
		},
		packPeda: {
			title: string,
			descrip: string,
			liTitles: string[],
			li: string[],
		},
		packMes: {
			title: string,
			descrip: string,
			liTitles: string[],
			li: string[],
		},

	}
}