import * as React from 'react';
import * as CSS from 'csstype';
import Link from 'next/link';
import { useRouter } from "next/router";
import { useIsMobile } from '../Hooks/useIsMobile';

interface IProps {
	name: string,
	route: string,
}

export interface IStyles {
	item: CSS.Properties,
}

const ItemNavbar = (props: IProps) => {
	const style = useIsMobile(styles);

	if (style === null)
		return null

	const router = useRouter();

	let styleItem : CSS.Properties = router.pathname === `/${props.route}` ?
					{...style.item, borderBottom: "2px solid red"} :
					style.item;

	return (
		<Link href={`/${props.route}`}>
			<p style={styleItem}>{props.name}</p>
		</Link>
	);

}

export default ItemNavbar;

export const styles = (mobile: boolean): IStyles => ({
	item: {
		textDecoration: "none",
		color: "inherit",
		cursor: "pointer",
		fontSize: mobile ? '1.65rem' : '0.9vw',
	},
})