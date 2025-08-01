import * as CSS from 'csstype'
import dynamic from 'next/dynamic'

import SquareGrid, { IStyles as SquareStyle } from '../Components/SquareGrid'
import { useIsMobile } from '../Hooks/useIsMobile'
import { useText } from '../Hooks/useText'
import ILang from '../lang/interface'

const YouTube = dynamic(() => import('react-youtube'))

interface IMapOf<A> {
	[i: string]: A
}

type IMapOfStyle = IMapOf<CSS.Properties | Function>

type IStyles = IMapOf<IMapOfStyle | IMapOf<IMapOfStyle>>

interface IVideoStyle {
	container: CSS.Properties
	itemContainer: CSS.Properties
	itemLabel: Function
}

interface ISeparatorStyle {
	container: Function
	line: Function
}

interface IHeaderProps {
	text: ILang
	style: IMapOfStyle
}

interface ISeparatorProps {
	right?: boolean
	color?: string
	style: ISeparatorStyle
}

interface ILabelVideoProps {
	color: string
	label: string
	style: IVideoStyle
}
interface IItemVideoProps {
	color: string
	label: string
	id_yt: string
	style: IVideoStyle
}
interface IVideosLineProps {
	color: string
	videoIds: string[]
	label: string
	style: IVideoStyle
}
interface IPackProps {
	title: string
	color?: string
	videoIds: string[]
	text: ILang
	label: string
	right?: boolean
	style: IMapOf<CSS.Properties>
	styleVideo: IVideoStyle
}

const opts_yt = {
	height: '195',
	width: '320',
}

const center = {
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
}

const listVideoYt = {
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
}

const splitArrays = (nb: number, arr: any[]) => {
	const retour: any[][] = []
	let tmp: any[] = []
	arr.map(id => {
		tmp.push(id)
		if (tmp.length === 4) {
			retour.push(tmp)
			tmp = []
		}
	})
	if (tmp.length !== 0) retour.push(tmp)
	return retour
}

const Header = ({ text, style }: IHeaderProps) => (
	<div style={style.container as CSS.Properties}>
		<h2 style={style.title as CSS.Properties}>{text.header.title}</h2>
		<p style={style.text as CSS.Properties}>{text.header.p}</p>
		<div style={style.btn as CSS.Properties}>
			<a
				href='https://www.youtube.com/channel/UCmijJyGaFfJte4xsTk90MVA'
				target='_blank'
				rel='noreferrer noopener'
			>
				{text.header.button}
			</a>
		</div>
		<SquareGrid
			nbLine={6}
			nbColumn={6}
			styles={style.squareGridStyles as SquareStyle}
		/>
	</div>
)

const Separator = ({ right, color, style }: ISeparatorProps) => (
	<div style={style.container(right)}>
		<div style={style.line(color)} />
	</div>
)

const LabelVideo = ({ color, label, style }: ILabelVideoProps) => (
	<div style={{ ...center, ...{ position: 'relative', marginBottom: '1rem' } }}>
		<div style={style.itemLabel(color)}>
			<p style={{ margin: '0' }}>{label}</p>
		</div>
		<p style={{ position: 'absolute', color: color }}>{label}</p>
	</div>
)

const ItemVideo = ({ color, label, id_yt, style }: IItemVideoProps) => (
	<div style={style.itemContainer}>
		<LabelVideo
			color={color}
			label={label}
			style={style}
		/>
		<YouTube
			videoId={id_yt}
			opts={opts_yt}
		/>
	</div>
)

const VideosLine = ({ color, videoIds, label, style }: IVideosLineProps) => (
	<div style={style.container}>
		{videoIds.map((id, index) => {
			return (
				<ItemVideo
					key={index}
					color={color}
					label={label}
					id_yt={id}
					style={style}
				/>
			)
		})}
	</div>
)

const Pack = ({
	title,
	color,
	videoIds,
	text,
	label,
	right = false,
	style,
	styleVideo,
}: IPackProps) => (
	<div style={style.container}>
		<div
			style={{ ...style.titleContainer, justifyContent: !right ? 'flex-start' : 'flex-end' }}
		>
			<h3>{text.packTitle}</h3>
			<h3 style={{ ...style.titleSpe, color: color ?? 'var(--flash)' }}>{title}</h3>
		</div>
		{splitArrays(4, videoIds).map((listVidLine, index) => {
			return (
				<VideosLine
					key={index}
					color={color ?? 'var(--flash)'}
					videoIds={listVidLine}
					label={label}
					style={styleVideo}
				/>
			)
		})}
	</div>
)

export default function Videos() {
	const text = useText('Videos')
	const style = useIsMobile(styles)

	if (style === null) return null

	return (
		<div style={{ display: 'flex', flexDirection: 'column', overflowX: 'hidden' }}>
			<Header
				text={text}
				style={style.headerStyle}
			/>
			<Separator
				color='var(--main)'
				style={style.separatorStyle as unknown as ISeparatorStyle}
			/>
			<Pack
				title={text.packOpe.name}
				color='var(--main)'
				videoIds={listVideoYt.packOpe}
				text={text}
				label={text.packOpe.label}
				style={style.packStyle as IMapOf<CSS.Properties>}
				styleVideo={style.videosLineStyle as unknown as IVideoStyle}
			/>
			<Separator
				right
				style={style.separatorStyle as unknown as ISeparatorStyle}
			/>
			<Pack
				right
				title={text.packPeda.name}
				videoIds={listVideoYt.packPeda}
				text={text}
				label={text.packPeda.label}
				style={style.packStyle as IMapOf<CSS.Properties>}
				styleVideo={style.videosLineStyle as unknown as IVideoStyle}
			/>
			<Separator
				color='var(--orange)'
				style={style.separatorStyle as unknown as ISeparatorStyle}
			/>
			<Pack
				title={text.packMes.name}
				color='var(--orange)'
				videoIds={listVideoYt.packMes}
				text={text}
				label={text.packMes.label}
				style={style.packStyle as IMapOf<CSS.Properties>}
				styleVideo={style.videosLineStyle as unknown as IVideoStyle}
			/>
		</div>
	)
}

export const styles = (mobile: boolean): IStyles => ({
	headerStyle: {
		container: {
			...center,
			alignItems: mobile ? 'center' : 'flex-start',
			position: 'relative',
			width: '100%',
			flexDirection: 'column',
		} as CSS.Properties,
		title: {
			margin: mobile ? '20vh 5% 5vh 5%' : '20vh 0 0 30vw',
			zIndex: 1,
		} as CSS.Properties,
		text: {
			margin: mobile ? '0 5% 5vh 5%' : '0 15% 0 30vw',
			zIndex: 1,
			color: 'var(--dark)',
			fontSize: mobile ? '1.6rem' : '1.8rem',
			textAlign: mobile ? 'justify' : undefined,
			fontWeight: 100,
		} as CSS.Properties,
		btn: {
			zIndex: 1,
			margin: mobile ? '0 5% 15vh 5%' : '3vh 0 20vh 30vw',
			padding: '8px 25px',
			backgroundColor: 'var(--main)',
			borderRadius: '50px',
			color: 'white',
			cursor: 'pointer',
			textTransform: 'uppercase' as 'uppercase',
		} as CSS.Properties,
		squareGridStyles: {
			containerStyle: {
				display: mobile ? 'none' : undefined,
				position: 'absolute',
				left: '-1%',
				zIndex: 0,
			} as CSS.Properties,
			squareStyle: {
				height: '19px',
				width: '17px',
				margin: '1.5rem 2.5rem',
				backgroundColor: 'var(--flashTrans)',
			} as CSS.Properties,
		},
	} as IMapOf<CSS.Properties | IMapOfStyle>,
	separatorStyle: {
		container: (right?: boolean): CSS.Properties => {
			return {
				display: 'flex',
				justifyContent: right ? 'flex-end' : 'flex-start',
				width: '100%',
			}
		},
		line: (color?: string): CSS.Properties => {
			return {
				backgroundColor: color ?? 'var(--flash)',
				height: '0.4vh',
				minWidth: mobile ? '40%' : '25%',
			}
		},
	},
	packStyle: {
		container: {
			marginTop: '5vh',
			marginBottom: '15vh',
		} as CSS.Properties,
		titleContainer: {
			display: 'flex',
			flexDirection: mobile ? 'column' : 'row',
			marginLeft: '10vw',
			marginRight: '10vw',
			marginBottom: '3vh',
			alignItems: 'center',
		} as CSS.Properties,
		titleSpe: {
			marginLeft: mobile ? 0 : '1rem',
			marginTop: mobile ? 0 : undefined,
		} as CSS.Properties,
	},
	videosLineStyle: {
		container: {
			...center,
			flexDirection: mobile ? 'column' : undefined,
			width: '100%',
			justifyContent: 'flex-start', // "space-between",
			margin: mobile ? undefined : '0 0 2% 2%',
		} as CSS.Properties,
		itemContainer: {
			...center,
			alignItems: mobile ? 'center' : 'flex-start',
			flexDirection: 'column',
			width: mobile ? '50%' : '23%',
			marginRight: mobile ? undefined : '4vw',
			marginBottom: mobile ? '5vh' : undefined,
		} as CSS.Properties,
		itemLabel: (color: string): CSS.Properties => {
			return {
				backgroundColor: color,
				borderRadius: '50px',
				padding: '0.5rem 2rem',
				opacity: '0.1',
				color: color,
			}
		},
	},
})
