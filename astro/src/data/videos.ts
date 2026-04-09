export const videoIds = {
	packOpe: [
		'E5eWKTJaNxQ',
		'wkuVxTBXc8g',
		'ksOJEbihuvA',
		'Ga4roi63sSM',
		'4Cfya_rHa04',
		'7emAJHES-fw',
		'CnqQhyB6cEo',
		'sj-FVjP87jA',
	],
	packPeda: ['Ltk5x2dW_VI', 'vXT2h8GJ8Qk', 'cBQ5-CiqqT4', 'pYbgwudKniA'],
	packMes: ['vSI75UZ_9UQ', 'aA4QUutuaJc', '2Mq-TR8cG-o'],
	presentation: 'q9QXG78ciXY',
	training: 'l0bIZ201gLo',
	channelUrl: 'https://www.youtube.com/channel/UCmijJyGaFfJte4xsTk90MVA',
} as const

export const partnerLogos = [
	'alara.webp',
	'apave.webp',
	'b2c.webp',
	'cls.webp',
	'cossen.webp',
	'edp.webp',
	'lea.webp',
	'rpcirkus.webp',
	'veolia.webp',
	'trad.webp',
] as const

export const partnerLogoAlts = [
	'Logo ALARA',
	'Logo APAVE',
	'Logo B2C',
	'Logo CLS',
	'Logo COSSEN',
	'Logo EDP Sciences',
	'Logo LEA',
	'Logo RP Cirkus',
	'Logo Veolia Nuclear Solutions',
	'Logo TRAD',
] as const

export const bookImages = [
	'livre1.png',
	'livre2.png',
	'livre3.png',
	'livre4.png',
	'livre5.png',
	'livre6.png',
	'livre7.png',
	'livre8.png',
	'livre9.png',
	'livre10.png',
	'livre11.png',
] as const

export const bookUrls = [
	'https://www.edp-open.org/books/edp-open-books/381-la-radioprotection-des-travailleurs-des-patients-et-du-public',
	'https://www.edp-open.org/books/edp-open-books/289-calcul-de-doses-generees-par-les-rayonnements-ionisants',
	'https://www.edp-open.org/books/edp-open-books/299-personne-competente-en-radioprotection-principes-de-radioprotection-reglementation',
	'https://www.edp-open.org/books/edp-open-books/300-personne-competente-en-radioprotection-secteur-medical',
	'https://www.edp-open.org/books/edp-open-books/298-personne-competente-en-radioprotection-secteur-industrie-et-recherche',
	'https://www.babelio.com/livres/Fernandez-De-latome-au-noyau--Une-approche-historique-de-la/110994',
	'https://www.decitre.fr/livres/le-monde-subatomique-9782706108273.html',
	'https://www.edp-sciences.fr/livre/9782759823888-techniques-de-blindage-et-de-radioprotection',
	'https://www.edp-sciences.fr/livre/9782759823895-dosimetrie-des-rayonnements-ionisants-et-radioprotection',
	'https://www.edp-open.org/books/edp-open-books/286-la-radioactivite-sous-surveillance',
	'https://www.edp-sciences.fr/livre/9782759818075-exercices-de-radioprotection-tome-1',
] as const

export const getManualPdfs = (locale: 'fr' | 'en') => ({
	manuals: [
		locale === 'fr' ? '/Folders/1_Manuel_Radionucléide.pdf' : '/Folders/Handbook1_Radionucléide.pdf',
		locale === 'fr' ? '/Folders/2_Manuel_Géné_X.pdf' : '/Folders/Handbook2_Xgenerator.pdf',
		'/Folders/3_Manuel_Application_15_160.pdf',
		'/Folders/Annexe_S_ radiologie.pdf',
	],
	validations: [
		locale === 'fr' ? '/Folders/Validation_1_Radionucléide_3.0.pdf' : '/Folders/Validation1_Radionuclide.pdf',
		locale === 'fr' ? '/Folders/Validation_2_Géné X_3.0.pdf' : '/Folders/Validation2_Xgenerator.pdf',
		'/Folders/CEA-R-6452.pdf',
		'/Folders/NT_101682_42_0001_A-DOSIMEX.pdf',
		'/Folders/Article_facteur_transmission_L_Bourgois.pdf',
	],
	internships: [
		'/Folders/Rapport_ULYSSE_reactor_dismantling.pdf',
		'/Folders/Rapport_mémoire_AREVA.pdf',
		'/Folders/Rapport_mémoire_SPR_Cadarache.pdf',
		'/Folders/Rapport_CJ_AREVA_2016.pdf',
	],
}) as const
