import type { IArticle } from '../elements';
import type { IDefaultBlockProps } from './IDefaultBlockProps';

export interface IArticleBlockProps extends IDefaultBlockProps {
	data: {
		data: IArticle;
	};
}
