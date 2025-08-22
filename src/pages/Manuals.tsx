import * as CSS from 'csstype'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React, { useState, useRef, useEffect } from 'react'
import styled from 'styled-components'

import { useIsMobile } from '../Hooks/useIsMobile'
import { useText } from '../Hooks/useText'

const LinkZone = styled.li`
	display: flex;
	align-items: center;
	justify-content: flex-start;
	margin-top: 1vh;
	cursor: pointer;
`

const LinkLabel = styled.a`
	margin-left: 1.5vw;
	color: var(--dark);
	font-family: var(--lato);
	font-weight: 300;
	font-size: 2.2rem;

	${LinkZone}:hover & {
		cursor: pointer;
		color: var(--flash);
	}
`

const hashes = ['#manuals', '#validations', '#internships']

interface IStyles {
	[key: string]: CSS.Properties
	listItem: CSS.Properties
	centerText: CSS.Properties
}

export default function Manuals() {
	const text = useText('Manuals')
	const style = useIsMobile(styles)
	const route = useRouter()
	const isEnglishVersion = route.locale === 'en-US'

	const [dummy, setDummy] = useState(0)

	const manualsRef = useRef(null as HTMLDivElement | null)
	const validationsRef = useRef(null as HTMLDivElement | null)
	const internshipsRef = useRef(null as HTMLDivElement | null)

	useEffect(() => {
		if (window.location.hash === '#manuals') {
			manualsRef.current?.scrollIntoView({
				behavior: 'smooth',
				block: 'start',
				inline: 'center',
			})
			manualsRef.current?.focus()
		}
		if (window.location.hash === '#validations') {
			validationsRef.current?.scrollIntoView({
				behavior: 'smooth',
				block: 'start',
				inline: 'center',
			})
			validationsRef.current?.focus()
		}
		if (window.location.hash === '#internships') {
			internshipsRef.current?.scrollIntoView({
				behavior: 'smooth',
				block: 'start',
				inline: 'center',
			})
			internshipsRef.current?.focus()
		}
	}, [dummy])

	const manuals = {
		manuals: [
			{
				img: isEnglishVersion ? 'handbook1.png' : 'manuel1.png',
				pdf: isEnglishVersion
					? 'Handbook1_Radionucléide.pdf'
					: 'Manuel_1_Radionucléide_3.0.pdf',
				text: text.manuals[1],
			},
			{
				img: isEnglishVersion ? 'handbook2.png' : 'manuel2.png',
				pdf: isEnglishVersion ? 'Handbook2_Xgenerator.pdf' : 'Manuel_2_Géné_X_3.0.pdf',
				text: text.manuals[2],
			},
			{ img: 'manuel3.png', pdf: 'Manuel_3_Application_15_160.pdf', text: text.manuals[3] },
			{ img: 'manuel4.png', pdf: 'Annexe_S_ radiologie.pdf', text: text.manuals[4] },
		],
		validations: [
			{
				img: isEnglishVersion ? 'validation1en.png' : 'Validation1.png',
				pdf: isEnglishVersion
					? 'Validation1_Radionuclide.pdf'
					: 'Validation_1_Radionucléide_3.0.pdf',
				text: text.validations[1],
			},
			{
				img: isEnglishVersion ? 'validation2en.png' : 'Validation2.png',
				pdf: isEnglishVersion
					? 'Validation2_Xgenerator.pdf'
					: 'Validation_2_Géné X_3.0.pdf',
				text: text.validations[2],
			},
			{ img: 'Validation3.png', pdf: 'CEA-R-6452.pdf', text: text.validations[3] },
			{
				img: 'Validation4.png',
				pdf: 'NT_101682_42_0001_A-DOSIMEX.pdf',
				text: text.validations[4],
			},
			{
				img: 'Validation5.png',
				pdf: 'Article_facteur_transmission_L_Bourgois.pdf',
				text: text.validations[5],
			},
		],
		internships: [
			{
				img: 'Rapport1.png',
				pdf: 'Rapport_ULYSSE_reactor_dismantling.pdf',
				text: text.internships[1],
			},
			{ img: 'Rapport2.png', pdf: 'Rapport_mémoire_AREVA.pdf', text: text.internships[2] },
			{
				img: 'Rapport3.png',
				pdf: 'Rapport_mémoire_SPR_Cadarache.pdf',
				text: text.internships[3],
			},
			{ img: 'Rapport4.png', pdf: 'Rapport_CJ_AREVA_2016.pdf', text: text.internships[4] },
		],
	}

	if (style === null) return null

	return (
		<div>
			<div style={style.container}>
				<div style={style.headerImage}>
					<Image
						src='/Images/motif_rect.svg'
						alt='Decorative pattern'
						width={343 * 0.9}
						height={334 * 0.9}
					/>
				</div>
				<div style={style.header}>
					<h2 style={style.headerTitle}>{text.header.title}</h2>
					<p style={style.headerText}>{text.header.p}</p>
					<ul>
						{text.header.li.map((e: string, i: number) => (
							<LinkZone key={e}>
								<p style={style.arrow}>→</p>
								<LinkLabel
									onClick={() => setTimeout(() => setDummy(dummy + 1), 100)}
									href={hashes[i]}
									style={style.headerLink}
								>
									{e}
								</LinkLabel>
							</LinkZone>
						))}
					</ul>
				</div>
			</div>

			<section
				className='container'
				ref={manualsRef}
				style={style.section}
			>
				<div style={style.sectionTitle}>
					<h3>{text.manuals[0]}</h3>
				</div>
				<ul style={style.list}>
					{manuals.manuals.map((e: unknown, i: number) => {
						const manual = e as { pdf: string; img: string; text: string }
						return (
							<li
								key={i}
								style={style.listItem}
							>
								<a
									href={`../Folders/${manual.pdf}`}
									target='_blank'
									rel='noreferrer noopener'
								>
									<div style={style.centerText}>
										<Image
											src={`/Images/${manual.img}`}
											alt='couverture manuel'
											width={230}
											height={324}
										/>
										<p style={style.label}>{manual.text}</p>
									</div>
								</a>
							</li>
						)
					})}
				</ul>
			</section>

			<section
				className='container'
				ref={validationsRef}
				style={style.section}
			>
				<div style={style.sectionTitle}>
					<h3>{text.validations[0]}</h3>
				</div>
				<ul style={style.list}>
					{manuals.validations.map((e: unknown, i: number) => {
						const validation = e as { pdf: string; img: string; text: string }
						return (
							<li
								key={i}
								style={style.listItem}
							>
								<a
									href={`../Folders/${validation.pdf}`}
									target='_blank'
									rel='noreferrer noopener'
								>
									<div style={style.centerText}>
										<Image
											src={`/Images/${validation.img}`}
											alt='couverture manuel'
											width={230}
											height={324}
										/>
										<p style={style.label}>{validation.text}</p>
									</div>
								</a>
							</li>
						)
					})}
				</ul>
			</section>

			<section
				className='container'
				ref={internshipsRef}
				style={style.section}
			>
				<div style={style.sectionTitle}>
					<h3>{text.internships[0]}</h3>
				</div>
				<ul style={style.list3}>
					{manuals.internships.map((e: unknown, i: number) => {
						const internship = e as { pdf: string; img: string; text: string }
						return (
							<li
								key={i}
								style={style.listItem}
							>
								<a
									href={`../Folders/${internship.pdf}`}
									target='_blank'
									rel='noreferrer noopener'
								>
									<div style={style.centerText}>
										<Image
											src={`/Images/${internship.img}`}
											alt='couverture manuel'
											width={230}
											height={324}
										/>
										<p style={style.label}>{internship.text}</p>
									</div>
								</a>
							</li>
						)
					})}
				</ul>
			</section>
		</div>
	)
}

export const styles = (mobile: boolean): IStyles => ({
	container: {
		display: 'flex',
		alignItems: 'flex-start',
		justifyContent: 'flex-start',
		paddingLeft: '3vw',
		paddingBottom: '12vh',
		marginTop: '20vh',
		width: '100vw',
	},
	header: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'flex-start',
		alignItems: 'flex-start',
		marginLeft: '8vw',
		width: mobile ? '80%' : '45vw',
	},
	headerImage: {
		marginTop: 0,
		display: mobile ? 'none' : undefined,
	},
	headerTitle: {
		padding: 0,
		margin: 0,
		lineHeight: mobile ? undefined : 0.7,
	},
	headerText: {
		color: 'var(--dark)',
		textAlign: 'justify',
		marginTop: '5vh',
		fontWeight: 100,
	},
	headerLink: {
		fontSize: mobile ? '2rem' : '2.4rem',
		fontWeight: 400,
	},
	section: {
		paddingBottom: '10vh',
		marginTop: '5vh',
	},
	sectionTitle: {
		borderLeft: '3px solid var(--main)',
		paddingLeft: '2vw',
		marginBottom: '10vh',
	},
	arrow: {
		color: 'var(--flash)',
		fontSize: mobile ? '3rem' : '4.5rem',
		marginTop: 0,
		marginBottom: 0,
	},
	list: {
		display: 'flex',
		flexWrap: 'wrap',
		justifyContent: 'space-around',
	},
	list3: {
		display: 'flex',
		flexWrap: 'wrap',
		justifyContent: 'space-around',
		paddingBottom: '15vh',
	},
	label: {
		textTransform: 'uppercase' as 'uppercase',
		paddingLeft: '2%',
		paddingRight: '2%',
	},
	listItem: {
		cursor: 'pointer',
	},
	centerText: {
		textAlign: 'center',
	},
})
