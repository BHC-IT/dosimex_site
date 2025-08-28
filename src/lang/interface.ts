export default interface Lang {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	[key: string]: any // Keep this for backwards compatibility, but specific types are defined below
	altText: {
		logo: string
		flagUk: string
		decorativePattern: string
		radiationSymbol: string
		carouselMain: string
		carouselScreens: string
		trainingMaterials: string
		manualCover: string
		cardIcon: string
	}
	Home: {
		header: {
			title: string
			p: string
			promo: string
			button: string
			textImage: string[]
		}
		partners: {
			title: string
			li: string[]
		}
		offers: {
			title: string
			p: string
			card1: {
				title: string
				p: string
			}
			card2: {
				title: string
				p: string
			}
			card3: {
				title: string
				p: string
			}
		}
		numbers: {
			number1: string
			p1: string
			number2: string
			p2: string
			number3: string
			p3: string
		}
		videos: {
			title: string
			p: string
			button: string
		}
		opinion: {
			name: string
			job: string
			opinion: string
			btn: string
		}
		callToAction: {
			title: string
			button: string
		}
		videoLink: {
			pres: string
		}
	}
	Software: {
		header: {
			title: string
			p: string
			li: string[]
		}
		button: {
			label: string
		}
		linkVideo: string
		packOpe: {
			title: string
			descrip: string
			liTitles: string[]
			li: string[]
		}
		packPeda: {
			title: string
			descrip: string
			liTitles: string[]
			li: string[]
		}
		packMes: {
			title: string
			descrip: string
			liTitles: string[]
			li: string[]
		}
		more: {
			title: string
			links: string[]
		}
		ask: {
			title: string
			text: string
			labelButton: string
		}
	}
	About: {
		header: {
			title: string
		}
		gerald: {
			p: string[]
			pBorder: string[]
		}
		alain: {
			p: string[]
		}
		epilogue: string
	}
	Books: {
		header: {
			title: string
		}
		books: { extract: string; author: string }[]
	}
	Manuals: {
		header: {
			title: string
			p: string
			li: string[]
		}
		manuals: string[]
		validations: string[]
		internships: string[]
	}
	Product: {
		buttonKnowMore: string
		title: string
		descrip: string
		partE: {
			title: string
			p: string[]
		}
		between: string
		prerequisites: {
			title: string
			p: string
			italic: string
		}
		titlePrice: string
		questions: {
			title: string
			p: string
		}
	}
	Training: {
		header: {
			title: string
			p: string
		}
		section1: {
			title: string
			li: string[]
		}
		section2: {
			title: string
			li: string[]
			button: string
		}
		questions: {
			title: string
			p: string
			button: string
		}
	}
	Videos: {
		header: {
			title: string
			p: string
			button: string
		}
		packTitle: string
		packOpe: {
			name: string
			label: string
		}
		packPeda: {
			name: string
			label: string
		}
		packMes: {
			name: string
			label: string
		}
	}
	ContactForm: {
		title: string
		label: string[]
		errorName: string
		errorEmail: string[]
		errorPhone: string
		errorMessage: string
		button: string
		sending: string
		messageSent: string
		messageNotSent: string
	}
	Footer: {
		col1: {
			p: string[]
		}
		col2: {
			title: string
			p: string[]
		}
		col3: {
			title: string
			p: string[]
		}
	}
	Navbar: {
		items: string[]
		button: string
	}
}
