import { useText } from '../Hooks/useText';

export default function Manuals() {
	const text = useText('Manuals');

	console.log(text);

	return <div>{Manuals}</div>
}