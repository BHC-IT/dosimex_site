import Link from 'next/link'
import * as CSS from 'csstype';

interface IProps {
	route: string,
	language?: string,
}

export interface IStyles {
	item: CSS.Properties,
}

function LanguageSwitch(props : IProps) {

	const isSelected = (lang: string) => props.language === lang ? styles.item : {...styles.item, color: "grey"};

	return (
		<li>
			<div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
				<div style={{paddingLeft: "20px"}}><i className="flaticon-translation"/></div>
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
}