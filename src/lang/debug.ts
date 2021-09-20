import ILang from './interface';

const text : ILang = {
	Home: {
		header: {
			title: "{Home.header.title}",
			p: "{Home.header.p}",
			button: "{Home.header.button}",
			textImage: [	"{Home.header.textImage[0]}",
					"{Home.header.textImage[1]}",
					"{Home.header.textImage[2]}",
					"{Home.header.textImage[3]}",
			],
		},
		partners: {
			title: "{Home.partners.title}",
			li: [	"{Home.partners.li[0]",
				"{Home.partners.li[1]",
				"{Home.partners.li[2]",
				"{Home.partners.li[3]",
				"{Home.partners.li[4]",
				"{Home.partners.li[5]",
				"{Home.partners.li[6]",
				"{Home.partners.li[7]",
				"{Home.partners.li[8]",
				"{Home.partners.li[9]",
				"{Home.partners.li[10]",
				"{Home.partners.li[11]",
			],
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
			name: "{Home.opinion.name}",
			job: "{Home.opinion.job}",
			opinion: "{Home.opinion.opinion}",
			btn: "{Home.opinion.btn}",
		},
		callToAction: {
			title: "{Home.callToAction.title}",
			button: "{Home.callToAction.button}",
		}
	},
	Software: {
		header: {
			title: "{Software.header.title}",
			p: "{Software.header.p}",
			li: ["{Software.header.li[0]}", "{Software.header.li[1]}", "{Software.header.li[2]}"],
		},
		button: {
			label: "{Software.button.label}",
		},
		linkVideo : "{Software.linkVideo}",
		packOpe: {
			title: "{Software.packOpe.title}",
			descrip: "{Software.packOpe.descrip}",
			liTitles: ["{Software.packOpe.liTitle[0]}", "{Software.packOpe.liTitle[1]}", "{Software.packOpe.liTitle[2]}", "{Software.packOpe.liTitle[3]}", "{Software.packOpe.liTitle[4]}"],
			li: [
				"{Software.packOpe.li[0]}",
				"{Software.packOpe.li[1]}",
				"{Software.packOpe.li[2]}",
				"{Software.packOpe.li[3]}",
				"{Software.packOpe.li[4]}",
			],
		},
		packPeda: {
			title: "{Software.packPeda.title}",
			descrip: "{Software.packPeda.descrip}",
			liTitles: ["{Software.packPeda.liTitle[0]}", "{Software.packPeda.liTitle[1]}", "{Software.packPeda.liTitle[2]}", "{Software.packPeda.liTitle[3]}"],
			li: [
				"{Software.packPeda.li[0]}",
				"{Software.packPeda.li[1]}",
				"{Software.packPeda.li[2]}",
				"{Software.packPeda.li[3]}",
			],
		},
		packMes: {
			title: "{Software.packMes.title}",
			descrip: "{Software.packMes.descrip}",
			liTitles: ["{Software.packMes.liTitle[0]}", "{Software.packMes.liTitle[1]}", "{Software.packMes.liTitle[2]}", "{Software.packMes.liTitle[3]}"],
			li: [
				"{Software.packMes.li[0]}",
				"{Software.packMes.li[1]}",
				"{Software.packMes.li[2]}",
				"{Software.packMes.li[3]}",
			],
		},
		more: {
			title: "{Software.more.title}",
			links: ["{Software.more.links[0]}",
				"{Software.more.links[1]}",
				"{Software.more.links[2]}",
				"{Software.more.links[3]}",
				"{Software.more.links[4]}",
				"{Software.more.links[5]}",
			]
		},
		ask: {
			title: "{Software.ask.title}",
			text: "{Software.ask.text}",
			labelButton: "{Software.ask.labelButton}"
		},
	},
	About: {
		header: {
			title: "{About.header.title}",
		},
		gerald: {
			p: [	"{About.gerald.p[0]}",
				"{About.gerald.p[1]}",
				"{About.gerald.p[2]}",
				"{About.gerald.p[3]}",
				"{About.gerald.p[4]}",
			],
			pBorder: [	"{About.gerald.pBorder[0]}",
				"{About.gerald.pBorder[1]}",
				"{About.gerald.pBorder[2]}",
				"{About.gerald.pBorder[3]}",
				"{About.gerald.pBorder[4]}",
			],
		},
		alain: {
			p: [	"{About.alain.p[0]}",
				"{About.alain.p[1]}",
				"{About.alain.p[2]}",
				"{About.alain.p[3]}",
				"{About.alain.p[4]}",
				"{About.alain.p[5]}",
				"{About.alain.p[6]}",
			],
		},
		epilogue: "{About.epilogue}",
	},
	Books: {
		header: {
			title: "{Books.header.title}",
		},
		books: [{extract: "{Books.books[0].extract}", author: "{Books.books[0].author}"},
			{extract: "{Books.books[1].extract}", author: "{Books.books[1].author}"},
			{extract: "{Books.books[2].extract}", author: "{Books.books[2].author}"},
			{extract: "{Books.books[3].extract}", author: "{Books.books[3].author}"},
			{extract: "{Books.books[4].extract}", author: "{Books.books[4].author}"},
			{extract: "{Books.books[5].extract}", author: "{Books.books[5].author}"},
			{extract: "{Books.books[6].extract}", author: "{Books.books[6].author}"},
			{extract: "{Books.books[7].extract}", author: "{Books.books[7].author}"},
			{extract: "{Books.books[8].extract}", author: "{Books.books[8].author}"},
			{extract: "{Books.books[9].extract}", author: "{Books.books[9].author}"},
			{extract: "{Books.books[10].extract}", author: "{Books.books[10].author}"},
		],
	},
	Manuals: {
		header: {
			title: "{Manuals.header.title}",
			p: "{Manuals.header.p}",
			li: [	"{Manuals.header.li[0]}",
				"{Manuals.header.li[1]}",
				"{Manuals.header.li[2]}",
			],
		},
		manuals: [	"{Manuals.manuals[0]}",
				"{Manuals.manuals[1]}",
				"{Manuals.manuals[2]}",
				"{Manuals.manuals[3]}",
				"{Manuals.manuals[4]}",
		],
		validations: [	"{Manuals.validations[0]}",
				"{Manuals.validations[1]}",
				"{Manuals.validations[2]}",
				"{Manuals.validations[3]}",
				"{Manuals.validations[4]}",
				"{Manuals.validations[5]}",
		],
		internships: [	"{Manuals.internships[0]}",
				"{Manuals.internships[1]}",
				"{Manuals.internships[2]}",
				"{Manuals.internships[3]}",
				"{Manuals.internships[4]}",
		],
	},
	Product: {
		header: {
			title: "{Product.header.title}",
			p: "{Product.header.p}",
			button: "{Product.header.button}",
		},
		buttonKnowMore: "{Product.buttonKnowMore}",
		title: "{Product.title}",
		descrip: "{Product.descrip}",
		partE: {
			p: [	"{Product.partE.p[0]}",
				"{Product.partE.p[1]}",
				"{Product.partE.p[2]}",
				"{Product.partE.p[3]}",
				"{Product.partE.p[4]}",
			],
		},
		partD: {
			p: "{Product.partD.p}",
		},
		prerequisites: {
			title: "{Product.prerequisites.title}",
			p: "{Product.prerequisites.p}",
		},
		titlePrice: "{Product.titlePrice}",
		price: "{Product.price}",
		priceShipment: "{Product.priceShipment}",
		questions: {
			title: "{Product.questions.title}",
			p: "{Product.questions.p}",
		}
	},
	Training: {
		header: {
			title: "{Training.header.title}",
			p: "{Training.header.p}",
		},
		section1: {
			title: "{Training.section1.title}",
			li: [	"{Training.section1.li[0]}",
				"{Training.section1.li[1]}",
				"{Training.section1.li[2]}",
				"{Training.section1.li[3]}",
				"{Training.section1.li[4]}",
				"{Training.section1.li[5]}",
				"{Training.section1.li[6]}",
				"{Training.section1.li[7]}",
				"{Training.section1.li[8]}",
				"{Training.section1.li[9]}",
				"{Training.section1.li[10]}",
				"{Training.section1.li[11]}",
				"{Training.section1.li[12]}",
				"{Training.section1.li[13]}",

			],
		},
		section2: {
			title: "{Training.section2.title}",
			li: [	"{Training.section2.li[0]}",
				"{Training.section2.li[1]}",
				"{Training.section2.li[2]}",
				"{Training.section2.li[3]}",
			],
			button: "{Training.section2.button}"
		},
		questions: {
			title: "{Training.questions.title}",
			p: "{Training.questions.p}",
			button: "{Training.questions.button}",
		},
	},
	Videos: {
		header: {
			title: "{Videos.header.title}",
			p: "{Videos.header.p}",
			button: "{Videos.header.button}",
		},
		packTitle: "{Videos.packTitle}",
		packOpe: {
			name: "{Videos.packOpe.name}",
			label: "{Videos.packOpe.label}",
		},
		packPeda: {
			name: "{Videos.packPeda.name}",
			label: "{Videos.packPeda.label}",
		},
		packMes: {
			name: "{Videos.packMes.name}",
			label: "{Videos.packMes.label}",
		},
	},
	ContactForm: {
		title: "{ContactForm.title}",
		label: ["{ContactForm.label[0]}",
			"{ContactForm.label[1]}",
			"{ContactForm.label[2]}",
			"{ContactForm.label[3]}",
		],
		errorName: "{ContactForm.errorName}",
		errorEmail: [	"{ContactForm.errorEmail[0]}",
				"{ContactForm.errorEmail[1]}"
		],
		errorMessage: "{ContactForm.errorMessage}",
		button: "{ContactForm.button}",
		sending: "{ContactForm.sending}",
		messageSent: "{ContactForm.messageSent}",
		messageNotSent: "{ContactForm.messageNotSent}",
	},
	Footer: {
		col1: {
			p: [	"{Footer.col1.p[0]}",
				"{Footer.col1.p[1]}",
				"{Footer.col1.p[2]}",
				"{Footer.col1.p[3]}"
			],
		},
		col2: {
			title: "{Footer.col2.title}",
			p: [ 	"{Footer.col2.p[0]}",
				"{Footer.col2.p[1]}",
				"{Footer.col2.p[2]}",
			],
		},
		col3: {
			title: "{Footer.col3.title}",
			p: [	"{Footer.col3.p[0]}",
				"{Footer.col2.p[1]}",
				"{Footer.col2.p[2]}",
			],
		}
	},
	Navbar: {
		items: ["{Navbar.items[0]}",
			"{Navbar.items[1]}",
			"{Navbar.items[2]}",
			"{Navbar.items[3]}",
			"{Navbar.items[4]}"
		],
		button: "{Navbar.button}",
	}
}

export default text;
