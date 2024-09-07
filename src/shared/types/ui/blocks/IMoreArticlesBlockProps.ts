import type { ITitle } from '../elements';
import type { IDefaultBlockProps } from './IDefaultBlockProps';

interface IMoreArticlesOptions {
	sort: 'asc' | 'desc';
	sortField: string;
	limit: number;
	type?: string;
}

export interface IMoreArticlesBlockProps extends IDefaultBlockProps {
	title?: ITitle;
	data: IMoreArticlesOptions;
}
