import * as React from 'react';
import * as CSS from 'csstype';
import Link from 'next/link';
import { useRouter } from "next/router";


interface IProps {
	name: string,
	route: string,
}

export interface IStyles {
	item: CSS.Properties,
}

const ItemNavbar = (props: IProps) => {

	const router = useRouter();

	let style : CSS.Properties = router.pathname === `/${props.route}` ? {...styles.item, borderBottom: "2px solid red"} : styles.item;

	return (
		<Link href={`/${props.route}`} replace>
			<p
				style={style}
			>
				{props.name}
			</p>
		</Link>
	);

}

export default ItemNavbar;

export const styles: IStyles =  {
	item: {
		textDecoration: "none",
		color: "inherit",
		cursor: "pointer",
	},
}