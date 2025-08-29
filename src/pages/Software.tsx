import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import CSS from 'csstype'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState, useRef, useEffect, CSSProperties } from 'react'
import { BrowserView, MobileView, isMobile } from 'react-device-detect'
import styled from 'styled-components'

import Button from '../Components/Button'
import { useIsMobile } from '../Hooks/useIsMobile'
import { useText } from '../Hooks/useText'
import ILang from '../lang/interface'
import { parseStringLink, handleLink, isLink } from '../utils/parseStringLink'

interface IMapOfStyle {
	[i: string]: CSS.Properties
}

interface IStyles {
	container: CSSProperties
	divImage: CSSProperties
	header: CSSProperties
	headerText: CSSProperties
	headerTitle: CSSProperties
	headerLink: CSSProperties
	arrow: CSSProperties
	partHeader: CSSProperties
	textPartHeader: CSSProperties
	questionsStyles: {
		container: CSSProperties
		text: CSSProperties
		title?: CSSProperties
	}
	divPack: CSSProperties
	divPackHeader: CSSProperties
	descrip: CSSProperties
	pLi: CSSProperties
	liLabel: IMapOfStyle
	divFlag: CSSProperties
	inlineIcon: CSSProperties
	iconSizeMobile: CSSProperties
	iconSizeDesktop: CSSProperties
	tooltipStyle: (isVisible: boolean, x: number) => CSS.Properties
	inlineDisplay: CSSProperties
	sectionContainer: CSSProperties
	sectionRowStart: CSSProperties
	sectionRowEnd: CSSProperties
	sectionMobileConditional: (i: number) => CSS.Properties
	flagSpacing: CSSProperties
	partColumn: CSSProperties
	textJustify: CSSProperties
	videoButtonMargin: CSSProperties
	moreSection: CSSProperties
	linkContainerFirst: CSSProperties
	linkContainer: CSSProperties
	linkText: CSSProperties
	simpleLinkText: CSSProperties
	mobileButtonContainer: CSSProperties
}

interface IQuestionsProps {
	text: ILang
	style: {
		container: CSSProperties
		text: CSSProperties
		title?: CSSProperties
	}
}

interface ILiLabelProps {
	text: string
	style: IMapOfStyle
	textOver?: string
	mainStyle: IStyles
}

interface ILinkVideoProps {
	link: string
	textOver?: string
	mainStyle: IStyles
}

const Questions = ({ text, style }: IQuestionsProps) => (
	<div style={style.container}>
		<h3 style={style.title}>{text.ask.title}</h3>
		<p style={style.text}>{text.ask.text}</p>
		<Button
			name={text.ask.labelButton}
			route='Contact'
		/>
	</div>
)

const LinkVideo = ({ link, textOver, mainStyle }: ILinkVideoProps) => {
	const [isVisible, setIsVisible] = useState(false)
	const [x, setX] = useState(0)

	return (
		<>
			<a
				href={handleLink(link)[1]}
				target='_blank'
				rel='noreferrer noopener'
				aria-label={`Open external link: ${handleLink(link)[0]} (opens in new tab)`}
				onMouseOver={e => {
					setIsVisible(true)
					setX(e.clientX)
				}}
				onMouseLeave={() => setIsVisible(false)}
			>
				{handleLink(link)[0]}
				<div style={mainStyle.inlineIcon}>
					<FontAwesomeIcon
						icon={faExternalLinkAlt}
						style={isMobile ? mainStyle.iconSizeMobile : mainStyle.iconSizeDesktop}
						aria-hidden="true"
					/>
				</div>
			</a>
			{isMobile ? null : (
				<p style={mainStyle.tooltipStyle(isVisible, x)}>
					{textOver}
				</p>
			)}
		</>
	)
}

const LiLabel = ({ text, style, textOver, mainStyle }: ILiLabelProps) => (
	<p style={style.global}>
		{parseStringLink(text).map((e, index) =>
			isLink(e) ? (
				<div
					style={style.link}
					key={e}
				>
					<LinkVideo
						link={e}
						textOver={textOver}
						mainStyle={mainStyle}
					/>
				</div>
			) : (
				<p
					key={index}
					style={mainStyle.inlineDisplay}
				>
					{e}
				</p>
			),
		)}
	</p>
)

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
		color: var(--main);
	}
`

const PartHeader = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	align-items: flex-end;
	width: 45vw;
	background-color: var(--yellow-bg);
	padding-top: 2vh;
	padding-bottom: 2vh;
	padding-left: 5vw;
	padding-right: 5vw;
`

const PartHeaderRight = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: flex-start;
	width: 50vw;
	background-color: var(--main);
	padding-top: 2vh;
	padding-bottom: 2vh;
	padding-left: 5vw;
	padding-right: 5vw;
`

interface PartImageProps {
	imageUrl: string
}

const PartImage = styled.div<PartImageProps>`
	width: 14vw;
	margin-left: 1.5vw;
	background: url(${props => props.imageUrl});
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
	position: relative;
`

const PartImageRight = styled.div<PartImageProps>`
	width: 14vw;
	margin-right: 1.5vw;
	background: url(${props => props.imageUrl});
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
	position: relative;
`

const PartImageColor = styled.div`
	width: 100%;
	height: 100%;
	background-color: rgba(255, 192, 61, 0.41);
	position: absolute;
	top: 0;
	left: 0;
`

const PartImageColorRight = styled.div`
	width: 100%;
	height: 100%;
	background-color: rgba(255, 37, 50, 0.47);
	position: absolute;
	top: 0;
	left: 0;
`

const CodeSection = styled.li`
	display: flex;
	width: 75%;
	justify-content: flex-start;
	align-items: center;
`

const LiTitle = styled.h5`
	flex-shrink: 0;
	width: 15vw;
	margin-bottom: 6px;
`

// const LiLabel= styled.p`
// 	margin-left: 1vw;
// `;

const hashes = ['#op', '#pedago', '#mesure']

// Constants for flag image dimensions
const FRANCE_FLAG_WIDTH = 2560
const FRANCE_FLAG_HEIGHT = 1707
const UK_FLAG_WIDTH = 1024
const UK_FLAG_HEIGHT = 683
const FRANCE_FLAG_RATIO = 0.012
const UK_FLAG_RATIO = 0.03

// Constants for click timeout
const CLICK_TIMEOUT_MS = 100

// Constants for motif image dimensions and styling
const MOTIF_WIDTH = 343
const MOTIF_HEIGHT = 334
const MOTIF_SCALE_SOFTWARE = 0.9
const HEADER_LINE_HEIGHT = 0.7

// Constants for UK flag removal indexes
const PACK_OPE_DOSIMEX_GAMMAGRAPHY_INDEX = 5
const PACK_PEDA_NUCLEAR_METER_INDEX = 4
const PACK_PEDA_RADIOACTIVE_DECAY_INDEX = 5
const PACK_MES_CALIBRATION_LINE_INDEX = 4

const Software = () => {
	const text = useText('Software')
	const style = useIsMobile(styles)
	const [dummy, setDummy] = useState(0)
	const opRef = useRef(null as HTMLDivElement | null)
	const pedaRef = useRef(null as HTMLDivElement | null)
	const mesureRef = useRef(null as HTMLDivElement | null)

	// Helper function to determine if a tool should show UK flag
	const shouldShowUkFlag = (packType: string, index: number): boolean => {
		// Remove UK flag for specific tools:
		// Pack Opé: DOSIMEX-GAMMAGRAPHIE (index 5)
		// Pack Peda: Compteur nucléaire (index 4), Décroissance radioactive (index 5)
		// Pack Mes: Droite étalonnage (index 4)
		if (packType === 'packOpe' && index === PACK_OPE_DOSIMEX_GAMMAGRAPHY_INDEX) return false // DOSIMEX-GAMMAGRAPHIE
		if (packType === 'packPeda' && (index === PACK_PEDA_NUCLEAR_METER_INDEX || index === PACK_PEDA_RADIOACTIVE_DECAY_INDEX)) return false // Nuclear meter, Radioactive decay
		if (packType === 'packMes' && index === PACK_MES_CALIBRATION_LINE_INDEX) return false // Calibration line
		return true
	}

	useEffect(() => {
		if (window.location.hash === '#op') {
			opRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'center' })
			opRef.current?.focus()
		}
		if (window.location.hash === '#pedago') {
			pedaRef.current?.scrollIntoView({
				behavior: 'smooth',
				block: 'start',
				inline: 'center',
			})
			pedaRef.current?.focus()
		}
		if (window.location.hash === '#mesure') {
			mesureRef.current?.scrollIntoView({
				behavior: 'smooth',
				block: 'start',
				inline: 'center',
			})
			mesureRef.current?.focus()
		}
	}, [dummy])

	if (style === null) return null

	return (
		<div>
			<div style={style.container}>
				<div style={style.divImage}>
					<Image
						quality={40}
						loading='lazy'
						src='/Images/motif_rect.svg'
						alt='Decorative pattern'
						width={MOTIF_WIDTH * MOTIF_SCALE_SOFTWARE}
						height={MOTIF_HEIGHT * MOTIF_SCALE_SOFTWARE}
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
									onClick={() => setTimeout(() => setDummy(dummy + 1), CLICK_TIMEOUT_MS)}
									href={hashes[i]}
									style={style.headerLink}
									aria-label={`Navigate to ${e} section`}
								>
									{e}
								</LinkLabel>
							</LinkZone>
						))}
					</ul>
				</div>
			</div>

			<BrowserView>
				<div
					style={{
						display: 'flex',
						flexDirection: 'column',
						marginTop: '25vh',
						width: '100%',
						alignItems: 'center',
					}}
				>
					<div
						ref={opRef}
						style={{
							display: 'flex',
							flexDirection: 'row',
							justifyContent: 'flex-start',
							width: '100%',
						}}
					>
						<PartHeader>
							<div style={style.partHeader}>
								<h3>{text.packOpe.title}</h3>
								<p style={style.textPartHeader}>{text.packOpe.descrip}</p>
							</div>
						</PartHeader>
						<PartImage imageUrl='/Images/packOpe.png'>
							<PartImageColor />
						</PartImage>
					</div>
					{text.packOpe.liTitles.map((e: string, i: number) => (
						<CodeSection
							key={e}
							style={{ marginTop: i === 0 ? '5vh' : 0 }}
						>
							<div style={style.divFlag}>
								<LiTitle>{e}</LiTitle>
								<div style={{ marginRight: '6px', display: 'inline' }}>
									<Image
										quality={40}
										loading='lazy'
										src='/Images/Flag_France.webp'
										alt='French flag'
										width={FRANCE_FLAG_WIDTH * FRANCE_FLAG_RATIO}
										height={FRANCE_FLAG_HEIGHT * FRANCE_FLAG_RATIO}
									/>
								</div>
								{shouldShowUkFlag('packOpe', i) && (
									<Image
										quality={40}
										loading='lazy'
										src='/Images/Flag_Uk.webp'
										alt='UK flag'
										width={UK_FLAG_WIDTH * UK_FLAG_RATIO}
										height={UK_FLAG_HEIGHT * UK_FLAG_RATIO}
									/>
								)}
							</div>
							<LiLabel
								text={text.packOpe.li[i]}
								style={style.liLabel}
								textOver={text.linkVideo}
								mainStyle={style}
							/>
						</CodeSection>
					))}
				</div>
				<div
					style={{
						display: 'flex',
						flexDirection: 'column',
						marginTop: '25vh',
						width: '100%',
						alignItems: 'center',
					}}
				>
					<div
						ref={pedaRef}
						style={{
							display: 'flex',
							flexDirection: 'row',
							justifyContent: 'flex-end',
							width: '100%',
						}}
					>
						<PartImageRight imageUrl='/Images/packPeda.png'>
							<PartImageColorRight />
						</PartImageRight>
						<PartHeaderRight>
							<div style={{ display: 'flex', flexDirection: 'column', width: '70%' }}>
								<h3>{text.packPeda.title}</h3>
								<p style={{ textAlign: 'justify' }}>{text.packPeda.descrip}</p>
							</div>
						</PartHeaderRight>
					</div>
					{text.packPeda.liTitles.map((e: string, i: number) => (
						<CodeSection
							key={e}
							style={{ marginTop: i === 0 ? '5vh' : 0 }}
						>
							<div style={style.divFlag}>
								<LiTitle>{e}</LiTitle>
								<div style={{ marginRight: '6px', display: 'inline' }}>
									<Image
										quality={40}
										loading='lazy'
										src='/Images/Flag_France.webp'
										alt='French flag'
										width={FRANCE_FLAG_WIDTH * FRANCE_FLAG_RATIO}
										height={FRANCE_FLAG_HEIGHT * FRANCE_FLAG_RATIO}
									/>
								</div>
								{shouldShowUkFlag('packPeda', i) && (
									<Image
										quality={40}
										loading='lazy'
										src='/Images/Flag_Uk.webp'
										alt='UK flag'
										width={UK_FLAG_WIDTH * UK_FLAG_RATIO}
										height={UK_FLAG_HEIGHT * UK_FLAG_RATIO}
									/>
								)}
							</div>
							<LiLabel
								text={text.packPeda.li[i]}
								style={style.liLabel}
								textOver={text.linkVideo}
								mainStyle={style}
							/>
						</CodeSection>
					))}
				</div>
				<div
					style={{
						display: 'flex',
						flexDirection: 'column',
						marginTop: '25vh',
						width: '100%',
						alignItems: 'center',
					}}
				>
					<div
						ref={mesureRef}
						style={{
							display: 'flex',
							flexDirection: 'row',
							justifyContent: 'flex-start',
							width: '100%',
						}}
					>
						<PartHeader>
							<div style={{ display: 'flex', flexDirection: 'column', width: '70%' }}>
								<h3>{text.packMes.title}</h3>
								<p style={{ textAlign: 'justify' }}>{text.packMes.descrip}</p>
							</div>
						</PartHeader>
						<PartImage imageUrl='/Images/packMesure.png'>
							<PartImageColor />
						</PartImage>
					</div>
					{text.packMes.liTitles.map((e: string, i: number) => (
						<CodeSection
							key={e}
							style={{ marginTop: i === 0 ? '5vh' : 0 }}
						>
							<div style={style.divFlag}>
								<LiTitle>{e}</LiTitle>
								<div style={{ marginRight: '6px', display: 'inline' }}>
									<Image
										quality={40}
										loading='lazy'
										src='/Images/Flag_France.webp'
										alt='French flag'
										width={FRANCE_FLAG_WIDTH * FRANCE_FLAG_RATIO}
										height={FRANCE_FLAG_HEIGHT * FRANCE_FLAG_RATIO}
									/>
								</div>
								{shouldShowUkFlag('packMes', i) && (
									<Image
										quality={40}
										loading='lazy'
										src='/Images/Flag_Uk.webp'
										alt='UK flag'
										width={UK_FLAG_WIDTH * UK_FLAG_RATIO}
										height={UK_FLAG_HEIGHT * UK_FLAG_RATIO}
									/>
								)}
							</div>
							<LiLabel
								text={text.packMes.li[i]}
								style={style.liLabel}
								textOver={text.linkVideo}
								mainStyle={style}
							/>
						</CodeSection>
					))}
					<div style={style.videoButtonMargin}>
						<Button
							name={text.button.label}
							route='Videos'
						/>
					</div>
				</div>
			</BrowserView>

			<MobileView>
				<div style={style.divPack}>
					<div
						ref={opRef}
						style={style.divPackHeader}
					>
						<h3>{text.packOpe.title}</h3>
						<p style={style.descrip}>{text.packOpe.descrip}</p>
					</div>
					{text.packOpe.liTitles.map((e: string, i: number) => (
						<div
							key={e}
							style={{ marginTop: i === 0 ? '5vh' : 0 }}
						>
							<div style={style.divFlag}>
								<p style={style.pLi}>{e}</p>
								<div style={{ marginRight: '6px', display: 'inline' }}>
									<Image
										quality={40}
										loading='lazy'
										src='/Images/Flag_France.webp'
										alt='French flag'
										width={FRANCE_FLAG_WIDTH * FRANCE_FLAG_RATIO}
										height={FRANCE_FLAG_HEIGHT * FRANCE_FLAG_RATIO}
									/>
								</div>
								{shouldShowUkFlag('packOpe', i) && (
									<Image
										quality={40}
										loading='lazy'
										src='/Images/Flag_Uk.webp'
										alt='UK flag'
										width={UK_FLAG_WIDTH * UK_FLAG_RATIO}
										height={UK_FLAG_HEIGHT * UK_FLAG_RATIO}
									/>
								)}
							</div>
							<LiLabel
								text={text.packOpe.li[i]}
								style={style.liLabel}
								mainStyle={style}
							/>
						</div>
					))}
				</div>
				<div style={style.divPack}>
					<div
						ref={pedaRef}
						style={style.divPackHeader}
					>
						<h3>{text.packPeda.title}</h3>
						<p style={style.descrip}>{text.packPeda.descrip}</p>
					</div>
					{text.packPeda.liTitles.map((e: string, i: number) => (
						<div
							key={e}
							style={{ marginTop: i === 0 ? '5vh' : 0 }}
						>
							<div style={style.divFlag}>
								<p style={style.pLi}>{e}</p>
								<div style={{ marginRight: '6px', display: 'inline' }}>
									<Image
										quality={40}
										loading='lazy'
										src='/Images/Flag_France.webp'
										alt='French flag'
										width={FRANCE_FLAG_WIDTH * FRANCE_FLAG_RATIO}
										height={FRANCE_FLAG_HEIGHT * FRANCE_FLAG_RATIO}
									/>
								</div>
								{shouldShowUkFlag('packPeda', i) && (
									<Image
										quality={40}
										loading='lazy'
										src='/Images/Flag_Uk.webp'
										alt='UK flag'
										width={UK_FLAG_WIDTH * UK_FLAG_RATIO}
										height={UK_FLAG_HEIGHT * UK_FLAG_RATIO}
									/>
								)}
							</div>
							<LiLabel
								text={text.packPeda.li[i]}
								style={style.liLabel}
								mainStyle={style}
							/>
						</div>
					))}
				</div>
				<div style={style.divPack}>
					<div
						ref={mesureRef}
						style={style.divPackHeader}
					>
						<h3>{text.packMes.title}</h3>
						<p style={style.descrip}>{text.packMes.descrip}</p>
					</div>
					{text.packMes.liTitles.map((e: string, i: number) => (
						<div
							key={e}
							style={{ marginTop: i === 0 ? '5vh' : 0 }}
						>
							<div style={style.divFlag}>
								<p style={style.pLi}>{e}</p>
								<div style={{ marginRight: '6px', display: 'inline' }}>
									<Image
										quality={40}
										loading='lazy'
										src='/Images/Flag_France.webp'
										alt='French flag'
										width={FRANCE_FLAG_WIDTH * FRANCE_FLAG_RATIO}
										height={FRANCE_FLAG_HEIGHT * FRANCE_FLAG_RATIO}
									/>
								</div>
								{shouldShowUkFlag('packMes', i) && (
									<Image
										quality={40}
										loading='lazy'
										src='/Images/Flag_Uk.webp'
										alt='UK flag'
										width={UK_FLAG_WIDTH * UK_FLAG_RATIO}
										height={UK_FLAG_HEIGHT * UK_FLAG_RATIO}
									/>
								)}
							</div>
							<LiLabel
								text={text.packMes.li[i]}
								style={style.liLabel}
								mainStyle={style}
							/>
						</div>
					))}
					<div style={style.mobileButtonContainer}>
						<Button
							name={text.button.label}
							route='Videos'
						/>
					</div>
				</div>
			</MobileView>

			<div
				style={{
					marginTop: '20vh',
					backgroundColor: 'var(--grey-bg)',
					width: '100%',
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					justifyContent: 'center',
					paddingTop: '3vh',
					paddingBottom: '6vh',
				}}
			>
				<h3>{text.more.title}</h3>
				<div style={{ width: '80%', marginTop: '3vh' }}>
					<Link
						href="/Manuals/#manuals"
						replace
					>
						<p
							style={{
								textDecoration: 'underline var(--dark)',
								cursor: 'pointer',
								fontFamily: 'var(--lato)',
							}}
						>
							{text.more.links[0].toUpperCase()}
						</p>
					</Link>
				</div>
				<div style={{ width: '80%', marginTop: '0.2vh' }}>
					<Link
						href="/Manuals/#validations"
						replace
					>
						<p
							style={{
								textDecoration: 'underline var(--dark)',
								cursor: 'pointer',
								fontFamily: 'var(--lato)',
							}}
						>
							{text.more.links[1].toUpperCase()}
						</p>
					</Link>
				</div>
				<div style={{ width: '80%', marginTop: '0.2vh' }}>
					<a
						href="../Folders/extrait_validation_gamma.pdf"
						target='_blank'
						rel='noreferrer'
					>
						<p style={{ textDecoration: 'underline var(--dark)', cursor: 'pointer' }}>
							{text.more.links[2].toUpperCase()}
						</p>
					</a>
				</div>
				<div style={{ width: '80%', marginTop: '0.2vh' }}>
					<a
						href="../Folders/extrait_validation_géné_X.pdf"
						target='_blank'
						rel='noreferrer'
					>
						<p style={{ textDecoration: 'underline var(--dark)', cursor: 'pointer' }}>
							{text.more.links[3].toUpperCase()}
						</p>
					</a>
				</div>
				<div style={{ width: '80%', marginTop: '0.2vh' }}>
					<a
						href="../Folders/Modification_Dosimex GX_3.0.pdf"
						target='_blank'
						rel='noreferrer'
					>
						<p style={{ textDecoration: 'underline var(--dark)', cursor: 'pointer' }}>
							{text.more.links[4].toUpperCase()}
						</p>
					</a>
				</div>
				<div style={{ width: '80%', marginTop: '0.2vh' }}>
					<Link
						href="/Books"
						replace
					>
						<p
							style={{
								textDecoration: 'underline var(--dark)',
								cursor: 'pointer',
								fontFamily: 'var(--lato)',
							}}
						>
							{text.more.links[5].toUpperCase()}
						</p>
					</Link>
				</div>
			</div>
			<Questions
				text={text}
				style={style.questionsStyles}
			/>
		</div>
	)
}

export default Software

export const styles = (mobile: boolean): IStyles => ({
	container: {
		marginTop: '20vh',
		display: 'flex',
		alignItems: 'flex-start',
		justifyContent: 'flex-start',
		paddingLeft: '3vw',
		width: '100vw',
	},
	divImage: {
		display: mobile ? 'none' : undefined,
		marginTop: 0,
	},
	header: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'flex-start',
		alignItems: 'flex-start',
		marginLeft: '8vw',
		width: mobile ? '80%' : '45vw',
	},
	headerText: {
		color: 'var(--dark)',
		textAlign: 'justify',
		marginTop: '5vh',
		fontSize: mobile ? '1.6rem' : undefined,
		fontWeight: 300,
	},
	headerTitle: {
		padding: 0,
		margin: 0,
		lineHeight: mobile ? undefined : HEADER_LINE_HEIGHT,
		textAlign: mobile ? 'center' : undefined,
	},
	headerLink: {
		fontSize: mobile ? '2rem' : '2.4rem',
		fontWeight: 400,
	},
	arrow: {
		color: 'var(--main)',
		fontSize: mobile ? '3rem' : '4.5rem',
		marginTop: 0,
		marginBottom: 0,
	},
	partHeader: {
		display: 'flex',
		flexDirection: 'column',
		width: mobile ? '100%' : '70%',
		height: mobile ? '40vh' : undefined,
	},
	textPartHeader: {
		textAlign: 'justify',
		fontSize: mobile ? '1.6rem' : undefined,
	},
	questionsStyles: {
		container: {
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',
			flexDirection: 'column',
			width: '100%',
			marginTop: '10vh',
			marginBottom: '25vh',
		},
		text: {
			color: 'var(--grey)',
			width: mobile ? '60%' : '22vw',
			marginTop: 0,
			textAlign: 'center',
			fontSize: '1.6rem',
			marginBottom: mobile ? '7vh' : '4vh',
		},
	},
	divPack: {
		width: '80%',
		margin: 'auto',
		marginTop: '8vh',
		textAlign: 'justify',
	},
	divPackHeader: {
		borderTop: '0.4vh solid var(--flash)',
	},
	descrip: {
		fontSize: '1.6rem',
	},
	pLi: {
		fontWeight: 'bold',
	},
	liLabel: {
		link: {
			cursor: 'pointer',
			textDecoration: 'underline',
			display: 'inline',
			color: '#007bff',
		},
		global: {
			marginLeft: '1vw',
		},
	},
	divFlag: {
		marginBottom: '3vh',
	},
	inlineIcon: {
		display: 'inline',
		paddingLeft: '5px',
	},
	iconSizeMobile: {
		width: '3vw',
	},
	iconSizeDesktop: {
		width: '0.75vw',
	},
	tooltipStyle: (isVisible: boolean, x: number): CSS.Properties => ({
		visibility: isVisible ? 'visible' : 'hidden',
		margin: '0',
		textAlign: 'center',
		backgroundColor: 'rgb(230,230,230)',
		color: 'var(--grey)',
		borderRadius: '50px',
		position: 'absolute',
		left: `${x}px`,
		padding: '0 12px',
	}),
	inlineDisplay: {
		display: 'inline',
	},
	sectionContainer: {
		display: 'flex',
		flexDirection: 'column',
		marginTop: '25vh',
		width: '100%',
		alignItems: 'center',
	},
	sectionRowStart: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'flex-start',
		width: '100%',
	},
	sectionRowEnd: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'flex-end',
		width: '100%',
	},
	sectionMobileConditional: (i: number): CSS.Properties => ({
		marginTop: i === 0 ? '5vh' : 0,
	}),
	flagSpacing: {
		marginRight: '6px',
		display: 'inline',
	},
	partColumn: {
		display: 'flex',
		flexDirection: 'column',
		width: '70%',
	},
	textJustify: {
		textAlign: 'justify',
	},
	videoButtonMargin: {
		marginTop: '8vh',
	},
	moreSection: {
		marginTop: '20vh',
		backgroundColor: 'var(--grey-bg)',
		width: '100%',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		paddingTop: '3vh',
		paddingBottom: '6vh',
	},
	linkContainerFirst: {
		width: '80%',
		marginTop: '3vh',
	},
	linkContainer: {
		width: '80%',
		marginTop: '0.2vh',
	},
	linkText: {
		textDecoration: 'underline var(--dark)',
		cursor: 'pointer',
		fontFamily: 'var(--lato)',
	},
	simpleLinkText: {
		textDecoration: 'underline var(--dark)',
		cursor: 'pointer',
	},
	mobileButtonContainer: {
		margin: '8vh auto',
		textAlign: 'center',
	},
})
