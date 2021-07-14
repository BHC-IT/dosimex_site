const text = {
	header: {
		title: "Manuels et validations",
		p: "Pour mieux vous permettre de juger des possibilités offertes avec Dosimex-GX, vous pouvez télécharger l’ensemble de la documentation associée à ce code :",
		li1: "Les manuels d’utilisation",
		li2: "Les dossiers de validation",
		li3: "Quelques rapports de stages de fin d'étude utilisant Dosimex",
	},
	manuals: {
		title: "Manuels d'utilisation",
		title1: "Manuel dose gamma",
		title2: "Manuel générateur x",
		title3: "Manuel + Validation NF C15-160",
		title4: "Grandeurs pratiques en radiologie",
	},
	validations: {
		title: "Dossiers de validation et références MCNP",
		title1: "Dossier de validation émission gamma",
		title2: "Dossier de validation générateur X",
		title3: "Référence géné X MCNP/CEA",
		title4: "Référence radionucléide MNCP/AREVA",
		title5: "Référence atténuation X",
	},
	internships: {
		title: "Rapports de stages de fin d’étude vs Dosimex",
		title1: "Mémoire Ulysse",
		title2: "Mémoire Microshield vs Dosimex 1",
		title3: "Mémoire Microshield vs Dosimex 2",
		title4: "Mémoire Microshield vs Dosimex 3",
	},
}


export default function Manuals() {
	console.log(text);
	return <div>Manuals</div>
}