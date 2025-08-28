import dynamic from 'next/dynamic'
import Image from 'next/image'

import Btn from '../Components/Button'
import SquareGrid from '../Components/SquareGrid'
import { useIsMobile, useMobile } from '../Hooks/useIsMobile'
import { useText } from '../Hooks/useText'
import ILang from '../lang/interface'

import {
	getHeaderStyles,
	getSeparatorStyles,
	getExemplesStyles,
	getPartnershipStyles,
	getQuestionsStyles,
	getMainStyles,
} from './Training.styles.helper'

const YouTube = dynamic(() => import('react-youtube'))

// Constants for training image dimensions
const TRAINING_IMAGE_WIDTH = 732
const TRAINING_IMAGE_HEIGHT = 503
const TRAINING_IMAGE_SCALE = 0.9

type IStyles = { [key: string]: any }

interface IProps {
	text: ILang
	style: IStyles
	mainStyle?: IStyles
	altText?: { trainingMaterials: string } | null
}

const Header = ({ text, style }: IProps) => (
	<div style={style.container}>
		<div style={style.textContainer}>
			<h2 style={style.title}>{text.header.title}</h2>
			<p style={style.text}>{text.header.p}</p>
		</div>
		<div style={style.imgContainer}>
			<YouTube
				videoId='l0bIZ201gLo'
				opts={{ height: '320', width: '550' }}
			/>
		</div>
		<SquareGrid
			nbLine={6}
			nbColumn={4}
			styles={style.squareGridStyles}
		/>
	</div>
)

const Separator = ({ right, style }: { right?: boolean; style: any }) => (
	<div style={style.container(right)}>
		<div style={style.line} />
	</div>
)

const Exemples = ({ text, style }: IProps) => (
	<div style={style.container}>
		<h3 style={style.title}>{text.section1.title}</h3>
		<div style={style.listContainer}>
			<div style={style.columnListContainer}>
				<p>{text.section1.li[0]}</p>
				<p>{text.section1.li[1]}</p>
				<p>{text.section1.li[2]}</p>
				<p>{text.section1.li[3]}</p>
				<p>{text.section1.li[4]}</p>
				<p>{text.section1.li[5]}</p>
				<p>{text.section1.li[6]}</p>
			</div>
			<div style={style.columnListContainer}>
				<p>{text.section1.li[7]}</p>
				<p>{text.section1.li[8]}</p>
				<p>{text.section1.li[9]}</p>
				<p>{text.section1.li[10]}</p>
				<p>{text.section1.li[11]}</p>
				<p>{text.section1.li[12]}</p>
				<p>{text.section1.li[13]}</p>
			</div>
		</div>
	</div>
)

const Partnership = ({ text, style, mainStyle, altText }: IProps) => {
	const mobile = useMobile()

	if (mobile === null || !mainStyle) return null

	if (mobile === true)
		return (
			<div style={style.container}>
				<h3 style={style.title}>{text.section2.title}</h3>
				<p style={style.text}>{text.section2.li[0]}</p>
				<p style={style.text}>{text.section2.li[1]}</p>
				<p style={style.text}>{text.section2.li[2]}</p>
				<p style={style.text}>{text.section2.li[3]}</p>
				<div style={mainStyle.buttonMargin}>
					<a
						style={style.btn}
						href='../Folders/catalogue_formation_VNS_v7.pdf'
						target='_blank'
						rel='noreferrer noopener'
					>
						{text.section2.button}
						<img
							style={style.icon}
							src='/Images/icon_download.png'
							alt='icône télécharger'
						/>
					</a>
				</div>
			</div>
		)

	return (
		<div style={style.container}>
			<h3 style={style.title}>{text.section2.title}</h3>
			<div style={mainStyle.desktopRow}>
				<div style={mainStyle.desktopHalfWidth}>
					<p style={style.text}>{text.section2.li[0]}</p>
					<p style={style.text}>{text.section2.li[1]}</p>
					<p style={style.text}>{text.section2.li[2]}</p>
					<p style={style.text}>{text.section2.li[3]}</p>
					<div style={mainStyle.buttonMargin}>
						<a
							style={style.btn}
							href='../Folders/catalogue_formation_VNS_v7.pdf'
							target='_blank'
							rel='noreferrer noopener'
						>
							{text.section2.button}
							<img
								style={style.icon}
								src='/Images/icon_download.png'
								alt='icône télécharger'
							/>
						</a>
					</div>
				</div>
				<div style={mainStyle.desktopFlexHalfWidth}>
					<div style={style.imgContainer}>
						<Image
							src='/Images/formation.png'
							alt={altText?.trainingMaterials ?? 'DOSIMEX radiation safety training course materials'}
							width={TRAINING_IMAGE_WIDTH * TRAINING_IMAGE_SCALE}
							height={TRAINING_IMAGE_HEIGHT * TRAINING_IMAGE_SCALE}
							quality={80}
							loading="lazy"
						/>
					</div>
				</div>
			</div>
		</div>
	)
}

const Questions = ({ text, style }: IProps) => (
	<div style={style.container}>
		<h3 style={style.title}>{text.questions.title}</h3>
		<p style={style.text}>{text.questions.p}</p>
		<Btn
			name={text.questions.button}
			route='Contact'
		/>
	</div>
)

const Training = () => {
	const text = useText('Training')
	const altText = useText('altText') as { trainingMaterials: string } | null
	const style = useIsMobile(styles)

	if (style === null) return null

	return (
		<div style={style.mainContainer}>
			<Header
				text={text}
				style={style.headerStyles as unknown as IStyles}
			/>
			<Separator
				right={false}
				style={style.separatorStyles}
			/>
			<Exemples
				text={text}
				style={style.exemplesStyles as unknown as IStyles}
			/>
			<Separator
				right
				style={style.separatorStyles}
			/>
			<Partnership
				text={text}
				style={style.partnershipStyles}
				mainStyle={style}
				altText={altText}
			/>
			<Questions
				text={text}
				style={style.questionsStyles}
			/>
		</div>
	)
}

export default Training

export const styles = (mobile: boolean) => ({
	headerStyles: getHeaderStyles(mobile),
	separatorStyles: getSeparatorStyles(mobile),
	exemplesStyles: getExemplesStyles(mobile),
	partnershipStyles: getPartnershipStyles(mobile),
	questionsStyles: getQuestionsStyles(mobile),
	...getMainStyles(),
})
