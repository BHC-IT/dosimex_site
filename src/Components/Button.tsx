import * as React from 'react';
import Link from 'next/link';
import Radium from 'radium';

interface IProps {
	name: string,
	route: string,
}

const Button = (props: IProps) => {

	return (
		<div style={styles}>
			<Link href={`/${props.route}`} replace>{props.name}</Link>
		</div>
	);

}

export default Radium(Button);

export const styles =  {
	padding: "8px 25px",
	backgroundColor: "var(--main)",
	borderRadius: "50px",
	color: "white",
	textTransform: "uppercase",
	transition: "all 0.3s ease 0s",
	':hover': {
		color: "white",
		transform: "translateY(-4px)",
		boxShadow: "0px 5px 5px rgba(0, 0, 0, 0.1)",
	}
}