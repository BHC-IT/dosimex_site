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
	'https://laboutique.edpsciences.fr/produit/1070/9782759823147/Physique%20nucleaire%20et%20radioprotection',
	'https://laboutique.edpsciences.fr/produit/843/9782759816736',
	'https://laboutique.edpsciences.fr/produit/29/9782759808458/Radioprotection%20pratique%20pour%20lindustrie%20et%20la%20recherche',
	'https://laboutique.edpsciences.fr/produit/953/9782759819928',
	'https://laboutique.edpsciences.fr/produit/43/9782759809363/Radioprotection%20pratique%20pour%20lindustrie%20et%20la%20recherche',
	'https://www.editions-ellipses.fr/accueil/4133-de-l-atome-au-noyau-une-approche-historique-de-la-physique-atomique-et-de-la-physique-nucleaire-9782340025158.html',
	'https://www.editions-hermann.fr/livre/9782705660437',
	'https://www.lavoisier.fr/livre/physique/physique-appliquee-a-l-exposition-externe/antoni/descriptif_2649448',
	'https://laboutique.edpsciences.fr/produit/1071/9782759823123/Resolutions%20de%20problemes%20sur%20les%20rayonnements%20ionisants',
	'https://laboutique.edpsciences.fr/produit/617/9782759809929/La%20radioactivite%20sous%20surveillance',
	'https://laboutique.edpsciences.fr/produit/1081/9782759823482/Exercices%20de%20radioprotection%20-%20Tome%203',
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
