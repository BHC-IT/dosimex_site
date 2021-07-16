export default interface Lang {
	[key: string]: any,
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
		more: {
			title: string,
			links: string[]
		},
		ask: {
			title: string,
			text: string,
			labelButton: string,
		},
	},
	Training: {
		header: {
			title: string,
			p: string,
		},
		section1: {
			title: string,
			li: string[]
		},
		section2: {
			title: string,
			li: string[]
			button: string,
		},
		questions: {
			title: string,
			p: string,
			button: string,
		},
	},
	Videos: {
		header: {
			title: string,
			p: string,
			button: string,
		},
		packTitle: string,
		packOpe: {
			name: string,
			label: string,
		},
		packPeda: {
			name: string,
			label: string,
		},
		packMes: {
			name: string,
			label: string,
		},
	},
}