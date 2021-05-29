import * as React from 'react';
import * as CSS from 'csstype';
import Link from 'next/link'
import { useRouter } from "next/router";


interface IProps {
	name: string,
	route?: string,
	isActive: boolean,
	onClick?: Function,
}

export interface IStyles {
	item: CSS.Properties,
	itemActive: CSS.Properties,
}

const ItemNavbar = (props: IProps) => {

	const handleClick = () => {
	}

	const router = useRouter();

	return (
		<Link href={`/${props.route}`} replace passHref>
			<a
				style={router.pathname == `/${props.route}` ? style.itemActive : style.item}
				onClick={handleClick}
			>
				{props.name}
			</a>
		</Link>
	);

}

export default ItemNavbar;

export const style: IStyles =  {
	item: {
		textDecoration: "none",
		color: "inherit",
		cursor: "pointer",
	},
	itemActive: {
		borderBottom: "2px solid red",
		textDecoration: "none",
		color: "inherit",
		cursor: "pointer",
	},
}