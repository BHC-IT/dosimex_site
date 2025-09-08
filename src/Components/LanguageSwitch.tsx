import { mdiTranslate } from '@mdi/js'
import Icon from '@mdi/react'
import * as CSS from 'csstype'
import Image from 'next/image'
import Link from 'next/link'

interface IProps {
	route: string
	language?: string
}

export interface IStyles {
	item: CSS.Properties
	icon: CSS.Properties
	flex: CSS.Properties
	flag: CSS.Properties
	languageText: CSS.Properties
}

// Constants for flag image dimensions
const FRANCE_FLAG_WIDTH = 2560
const FRANCE_FLAG_HEIGHT = 1707
const UK_FLAG_WIDTH = 1024
const UK_FLAG_HEIGHT = 683
const FRANCE_FLAG_RATIO = 0.012
const UK_FLAG_RATIO = 0.03

const LanguageSwitch = (props: IProps) => {
	const isSelected = (lang: string) =>
		props.language === lang
			? styles.item
			: { ...styles.item, color: '#767676', fontWeight: undefined }

	return (
		<li>
			<div style={styles.flex}>
				<div style={styles.icon}>
					<Icon
						path={mdiTranslate}
						size={1.4}
					/>
				</div>
				<div>
					<Link
						href={props.route}
						locale='fr'
						replace
					>
						<div style={isSelected('fr')}>
							<div style={styles.flag}>
								<Image
									src='/Images/Flag_France.png'
									alt='French flag'
									width={FRANCE_FLAG_WIDTH * FRANCE_FLAG_RATIO}
									height={FRANCE_FLAG_HEIGHT * FRANCE_FLAG_RATIO}
								/>
							</div>
							<p style={styles.languageText}>Fr</p>
						</div>
					</Link>
				</div>
				<div>
					<Link
						href={props.route}
						locale='en-US'
						replace
					>
						<div style={isSelected('en-US')}>
							<div style={styles.flag}>
								<Image
									src='/Images/Flag_Uk.jpg'
									alt='UK flag'
									width={UK_FLAG_WIDTH * UK_FLAG_RATIO}
									height={UK_FLAG_HEIGHT * UK_FLAG_RATIO}
								/>
							</div>
							<p>En</p>
						</div>
					</Link>
				</div>
			</div>
		</li>
	)
}

export default LanguageSwitch

export const styles: IStyles = {
	item: {
		color: 'inherit',
		cursor: 'pointer',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between',
		fontWeight: 400,
	},
	icon: {
		paddingLeft: '1.7vw',
		paddingRight: '8px',
		paddingTop: '3px',
	},
	flex: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
	flag: {
		marginRight: '5px',
	},
	languageText: {
		marginRight: '7px',
	},
}
