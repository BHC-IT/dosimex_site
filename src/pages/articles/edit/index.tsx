import ArticleForm from '../../../Components/ArticleForm'
import useUser from '../../../Hooks/useUser'

const ArticlePost = () => {

	const user = useUser()
	return (
		<>
			<ArticleForm user={user} method='POST'/>
		</>
	);
}

export default ArticlePost;