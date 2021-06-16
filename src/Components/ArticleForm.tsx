import * as React from 'react';
import * as CSS from 'csstype';
import IArticle from '../../interfaces/IArticle';
import * as axios from 'axios';
import verifyToken from '../../middleware/auth';
import Input from './Input';

const text = {
	label_title: "Titre",
	label_description: "Description",
	label_markdown: "Markdown",
	label_urlImage: "Image URL",
}

interface IProps {
	article?: IArticle,
	user: string | null,
	method: string,
}

interface IStyles {

}

const Article = (props: IProps) => {


	const [title, setTitle] = React.useState<string | null>(null);
	const [description, setDescription] = React.useState<string | null>(null);
	const [markdown, setMarkdown] = React.useState<string | null>(null);
	const [urlImage, setUrlImage] = React.useState<string | null>(null);

	console.log(title)
	console.log(props.user)

	return (
		<div style={{display: 'flex', flexDirection: 'column', width: '100%', height:'100%', justifyContent:'center', alignItems:'center'}} >
			<div style={{display: 'flex', flexDirection: 'column', height:'50%', width: '50%', justifyContent:'space-evenly', alignItems:'center'}} >

				<Input
						value={props.article?.title}
						type="text"
						id="title"
						label={text.label_title}
						onChange={(value : string) => setTitle(value)}
				/>
				<Input
						value={props.article?.description}
						type="text"
						id="description"
						label={text.label_description}
						onChange={(value : string) => setDescription(value)}
				/>
				<Input
						value={props.article?.markdown}
						type="text"
						id="markdown"
						label={text.label_markdown}
						onChange={(value : string) => setMarkdown(value)}
				/>
				<Input
						value={props.article?.urlImage}
						type="text"
						id="urlImage"
						label={text.label_urlImage}
						onChange={(value : string) => setUrlImage(value)}
				/>

				<div>
					<button onClick={async () => {
						if (props.method === 'POST') {

							try {
								await axios.post('http://localhost:3000/api/articles', {
									title: title,
									description: description,
									markdown: markdown,
									urlImage: urlImage,
								}, {headers: {authorization : `Bearer ${props.user}`}});
							} catch (e) {
								console.error(e.response)
							}
						} else if (props.method === 'PATCH') {
							try {
								await axios.patch(`http://localhost:3000/api/articles/${props.article?.slug}`, {
									title: title,
									description: description,
									markdown: markdown,
									urlImage: urlImage,
								},{headers: {authorization : `Bearer ${props.user}`}});
							} catch (e) {
								console.error(e)
							}
						}
					}} >
						<p>Envoyer</p>
					</button>
				</div>

			</div>
		</div>
	);

}

export default Article;

export const styles: IStyles =  {

}