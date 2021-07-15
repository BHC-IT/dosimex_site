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
		packOpe: {
			title: "{Software.packOpe.title}",
			descrip: "{Software.packOpe.descrip}",
			liTitles: ["{Software.packOpe.liTitle[0]}", "{Software.packOpe.liTitle[1]}", "{Software.packOpe.liTitle[2]}", "{Software.packOpe.liTitle[3]}"],
			li: [
				"{Software.packOpe.li[0]}",
				"{Software.packOpe.li[1]}",
				"{Software.packOpe.li[2]}",
				"{Software.packOpe.li[3]}",
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
				"{Software.more.links[2]}"
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
			p: "{About.header.p}"
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
}

export default text;
