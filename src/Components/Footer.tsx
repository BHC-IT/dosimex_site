import * as React from 'react';
import * as CSS from 'csstype';
import Image from 'next/image';

interface IProps {
}

interface IState {

}

export interface IStyles {

}

class ContactForm extends React.Component<IProps, IState> {

	constructor(props : IProps) {
		super(props);

		this.state = {
		}
	}

	render() {
		return (
			<div>
				<div>
					<Image />
					<p></p>
					<p></p>
					<div>
						<Image />
						<Image />
						<p></p>
					</div>
					<div>
						<Image />
						<Image />
						<p></p>
					</div>
				</div>
				<div>
					<h5></h5>
					<p></p>
					<p></p>
					<p></p>
				</div>
				<div>
					<h5></h5>
					<p></p>
					<p></p>
					<p></p>
				</div>
			</div>
		);
	}
}

export default ContactForm;

export const styles: IStyles =  {

}