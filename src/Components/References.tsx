import * as CSS from 'csstype'
import * as React from 'react'

import { useIsMobile } from '../Hooks/useIsMobile'

export interface IStyles {
	global: CSS.Properties
	container: CSS.Properties
	title: CSS.Properties
	subtitle: CSS.Properties
	articlesContainer: CSS.Properties
	articleCard: CSS.Properties
	articleTitle: CSS.Properties
	articleDescription: CSS.Properties
	button: {
		base: CSS.Properties
		hover: CSS.Properties
	}
	icon: CSS.Properties
}

interface IProps {
	text: {
		title: string
		subtitle: string
		btnText: string
		article1: {
			title: string
			description: string
		}
		article2: {
			title: string
			description: string
		}
	}
}

const References = (props: IProps) => {
	const [hoveredIndex, setHoveredIndex] = React.useState<number | null>(null)
	const style = useIsMobile(styles)

	if (style === null) return null

	const getButtonStyle = (index: number) => ({
		...style.button.base,
		...(hoveredIndex === index ? style.button.hover : {}),
	})

	const articles = [
		{ ...props.text.article1, href: '#' },
		{ ...props.text.article2, href: '#' },
	]

	return (
		<div style={style.global}>
			<div style={style.container}>
				<h2 style={style.title}>{props.text.title}</h2>
				<p style={style.subtitle}>{props.text.subtitle}</p>
				<div style={style.articlesContainer}>
					{articles.map((article, index) => (
						<div
							key={index}
							style={style.articleCard}
						>
							<h3 style={style.articleTitle}>{article.title}</h3>
							<p style={style.articleDescription}>{article.description}</p>
							<a
								style={getButtonStyle(index)}
								href={article.href}
								target='_blank'
								rel='noreferrer noopener'
								onMouseEnter={() => setHoveredIndex(index)}
								onMouseLeave={() => setHoveredIndex(null)}
							>
								{props.text.btnText}
								<img
									style={style.icon}
									src='/Images/icon_download.png'
									alt='icône télécharger'
								/>
							</a>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}

export default References

export const styles = (mobile: boolean): IStyles => ({
	global: {
		backgroundColor: 'white',
		padding: mobile ? '8vh 5vw' : '12vh 8vw 6vh 8vw',
	},
	container: {
		maxWidth: '1200px',
		margin: '0 auto',
	},
	title: {
		textAlign: 'center',
		color: 'var(--dark)',
		fontSize: mobile ? '3rem' : '3.6rem',
		marginBottom: '2vh',
	},
	subtitle: {
		textAlign: 'center',
		color: 'var(--grey)',
		fontSize: mobile ? '1.6rem' : '1.8rem',
		marginBottom: '6vh',
		maxWidth: '800px',
		margin: '0 auto 6vh auto',
	},
	articlesContainer: {
		display: 'flex',
		flexDirection: mobile ? 'column' : 'row',
		gap: mobile ? '4vh' : '3vw',
		justifyContent: 'center',
		alignItems: 'stretch',
	},
	articleCard: {
		backgroundColor: 'var(--flashTrans)',
		padding: mobile ? '4vh 4vw' : '4vh 3vw',
		borderRadius: '20px',
		flex: 1,
		display: 'flex',
		flexDirection: 'column',
		maxWidth: mobile ? '100%' : '500px',
	},
	articleTitle: {
		color: 'var(--dark)',
		fontSize: mobile ? '2rem' : '2.4rem',
		marginBottom: '2vh',
	},
	articleDescription: {
		color: 'var(--grey)',
		fontSize: mobile ? '1.4rem' : '1.6rem',
		marginBottom: '3vh',
		lineHeight: 1.6,
		flex: 1,
	},
	button: {
		base: {
			padding: '8px 25px',
			border: '2px solid var(--main)',
			borderRadius: '50px',
			color: 'var(--main)',
			textTransform: 'uppercase',
			transition: 'all 0.3s ease 0s',
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
			gap: '10px',
			width: 'fit-content',
			marginTop: 'auto',
			textDecoration: 'none',
			fontSize: mobile ? '1.4rem' : '1.6rem',
		},
		hover: {
			transform: 'translateY(-4px)',
			boxShadow: '0px 5px 5px rgba(0, 0, 0, 0.1)',
			backgroundColor: 'var(--main)',
			color: 'white',
		},
	},
	icon: {
		width: mobile ? '4.7vw' : '1.2vw',
		minWidth: mobile ? undefined : '20px',
		maxWidth: mobile ? '20px' : undefined,
	},
})
