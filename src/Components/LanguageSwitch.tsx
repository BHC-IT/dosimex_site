import Link from 'next/link'
import Image from 'next/image'
import * as CSS from 'csstype'
import Icon from '@mdi/react'
import { mdiTranslate } from '@mdi/js'

interface IProps {
	route: string
	language?: string
}

export interface IStyles {
	item: CSS.Properties
	icon: CSS.Properties
	flex: CSS.Properties
	flag: CSS.Properties
}

const ratioFr: number = 0.012
const ratioUk: number = 0.03

const LanguageSwitch = (props: IProps) => {
	const isSelected = (lang: string) =>
		props.language === lang
			? styles.item
			: { ...styles.item, color: 'rgb(150,150,150)', fontWeight: undefined }

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
									width={2560 * ratioFr}
									height={1707 * ratioFr}
								/>
							</div>
							<p style={{ marginRight: '7px' }}>Fr</p>
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
									width={1024 * ratioUk}
									height={683 * ratioUk}
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
}
