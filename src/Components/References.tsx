import * as CSS from 'csstype'
import * as React from 'react'

import { useIsMobile } from '../Hooks/useIsMobile'

export interface IStyles {
	global: CSS.Properties
	container: CSS.Properties
	title: CSS.Properties
	subtitle: CSS.Properties
	referencesList: CSS.Properties
	referenceItem: CSS.Properties
	referenceTitle: CSS.Properties
	referenceMetadata: CSS.Properties
	referenceDescription: CSS.Properties
	referenceDescriptionContainer: CSS.Properties
	textButton: CSS.Properties
	internshipsSection: CSS.Properties
	internshipsText: CSS.Properties
	internshipsButton: CSS.Properties
}

interface IProps {
	text: {
		title: string
		subtitle: string
		btnText: string
		internshipsText: string
		internshipsBtn: string
		items: Array<{
			title: string
			description: string
			url: string
			year?: string
			journal?: string
			authors?: string
		}>
	}
}

const References = (props: IProps) => {
	const style = useIsMobile(styles)

	if (style === null) return null

	return (
		<div style={style.global}>
			<div style={style.container}>
				<h2 style={style.title}>{props.text.title}</h2>
				<p style={style.subtitle}>{props.text.subtitle}</p>
				<div style={style.referencesList}>
					{props.text.items.map((item, index) => (
						<div
							key={index}
							style={style.referenceItem}
						>
							<h4 style={style.referenceTitle}>{item.title}</h4>
							{(item.authors ?? item.year ?? item.journal) && (
								<div style={style.referenceMetadata}>
									{item.authors && <span>{item.authors}</span>}
									{item.year && <span> ({item.year})</span>}
									{item.journal && <span> - {item.journal}</span>}
								</div>
							)}
							<div style={style.referenceDescriptionContainer}>
								<p style={style.referenceDescription}>{item.description}</p>
								<a
									style={style.textButton}
									href={item.url}
									target='_blank'
									rel='noreferrer noopener'
								>
									{props.text.btnText}
								</a>
							</div>
						</div>
					))}
				</div>

				<div style={style.internshipsSection}>
					<p style={style.internshipsText}>{props.text.internshipsText}</p>
					<a
						style={style.internshipsButton}
						href='/Manuals#internships'
					>
						{props.text.internshipsBtn}
					</a>
				</div>
			</div>
		</div>
	)
}

export default References

export const styles = (mobile: boolean): IStyles => ({
	global: {
		backgroundColor: 'white',
		padding: mobile ? '6vh 5vw' : '8vh 8vw 6vh 8vw',
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
		maxWidth: '800px',
		margin: '0 auto 6vh auto',
	},
	referencesList: {
		display: 'flex',
		flexDirection: 'column',
		gap: mobile ? '3vh' : '2.5vh',
		marginBottom: mobile ? '4vh' : '6vh',
	},
	referenceItem: {
		borderRadius: '15px',
		padding: mobile ? '1vh 4vw' : '1vh 3vw',
		borderLeft: '4px solid var(--main)',
	},
	referenceTitle: {
		color: 'var(--dark)',
		fontSize: mobile ? '1.6rem' : '1.7rem',
		marginBottom: '1vh',
	},
	referenceMetadata: {
		fontSize: mobile ? '1.3rem' : '1.4rem',
		fontWeight: '600',
		fontStyle: 'italic',
		marginBottom: '1.5vh',
	},
	referenceDescription: {
		color: 'var(--grey)',
		fontSize: mobile ? '1.4rem' : '1.5rem',
		marginBottom: mobile ? '2vh' : '0',
		lineHeight: 1.5,
		margin: mobile ? '0 0 2vh 0' : '0',
		flex: 1,
	},
	referenceDescriptionContainer: {
		display: 'flex',
		flexDirection: mobile ? 'column' : 'row',
		alignItems: mobile ? 'flex-start' : 'center',
		gap: mobile ? '1.5vh' : '0',
	},
	textButton: {
		color: 'var(--main)',
		fontSize: mobile ? '1.4rem' : '1.5rem',
		fontWeight: 'bold',
		textDecoration: 'none',
		cursor: 'pointer',
		marginLeft: mobile ? '0' : '3vw',
		flexShrink: 0,
		whiteSpace: 'nowrap',
		alignSelf: mobile ? 'flex-start' : 'center',
		display: 'flex',
		alignItems: 'center',
		minHeight: mobile ? 'auto' : '3rem',
	},
	internshipsSection: {
		backgroundColor: 'var(--grey-bg)',
		borderRadius: '15px',
		padding: mobile ? '3vh 4vw' : '3vh 3vw',
		textAlign: 'center',
		borderLeft: '4px solid var(--main)',
	},
	internshipsText: {
		color: 'var(--dark)',
		fontSize: mobile ? '1.5rem' : '1.6rem',
		marginBottom: '2vh',
		lineHeight: 1.5,
	},
	internshipsButton: {
		color: 'var(--main)',
		fontSize: mobile ? '1.4rem' : '1.5rem',
		fontWeight: 'bold',
		textDecoration: 'none',
		cursor: 'pointer',
	},
})
