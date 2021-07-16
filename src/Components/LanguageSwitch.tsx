import Link from 'next/link';
import * as CSS from 'csstype';
import Icon from '@mdi/react';
import { mdiTranslate } from '@mdi/js';

interface IProps {
	route: string,
	language?: string,
}

export interface IStyles {
	item: CSS.Properties,
	icon: CSS.Properties,
	flex: CSS.Properties,
}

const LanguageSwitch = (props : IProps) => {

	const isSelected = (lang: string) => props.language === lang ? styles.item : {...styles.item, color: "var(--grey)"};

	return (
		<li>
			<div style={styles.flex}>
				<div style={styles.icon}>
					<Icon path={mdiTranslate} size={1.2}/>
				</div>
				<div>
					<Link href={props.route} locale="fr">
						<p style={isSelected('fr')}>Fr</p>
					</Link>
				</div>
				<p>|</p>
				<div>
					<Link href={props.route} locale="en-US">
						<p style={isSelected('en-US')}>En</p>
					</Link>
				</div>
			</div>
		</li>
	)
}

export default LanguageSwitch;

export const styles: IStyles =  {
	item: {
		color: "inherit",
		cursor: "pointer",
	},
	icon: {
		paddingLeft: "1.7vw",
		paddingRight: "0.2vw",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
	},
	flex: {
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
	}
}