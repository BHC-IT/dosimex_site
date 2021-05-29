import * as React from 'react';
import * as CSS from 'csstype';
import Link from 'next/link'


interface IProps {
	children: string,
	isActive: boolean,
	route?: string,
	onClick?: Function,
}

interface IState {
	isActive: boolean,
}

export interface IStyles {
	item: CSS.Properties,
	itemActive: CSS.Properties,
}

export default class ItemNavbar extends React.Component<IProps, IState> {

	constructor(props : IProps) {
		super(props);

		this.state = {
			isActive: false,
		}
	}

	handleClick = (isActive : boolean) => this.setState({isActive: isActive});

	render() {
		return (
			<Link href={`/${this.props.route}`} replace>
				<li
					style={this.state.isActive ? style.itemActive : style.item}
					onClick={() => this.handleClick(this.props.isActive)}
				>
				{this.props.children}
				</li>
			</Link>
		);
	}
}

export const style: IStyles =  {
	item: {
		padding: "3px 5px",
	},
	itemActive: {
		padding: "3px 5px",
		borderBottom: "1px solid red",
	},
}