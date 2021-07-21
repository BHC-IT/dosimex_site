import IArticle from '../interfaces/IArticle'
import * as mongoose from 'mongoose'

const ArticleSchema  = new mongoose.Schema(
	{
		title: { type: String, required: true },
		description: { type: String },
		markdown: { type: String, required: true },
		slug: { type: String, required: true, unique: true },
		urlImage: { type: String },
		author: {type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User'},
	},
		{
			timestamps: {
				createdAt: true
			}
		}
);

export default mongoose.models.Article || mongoose.model<IArticle>('Article', ArticleSchema);