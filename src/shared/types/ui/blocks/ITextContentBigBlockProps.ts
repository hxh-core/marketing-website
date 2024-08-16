import type { ITitle } from '../elements';
import type { IDefaultBlockProps } from './IDefaultBlockProps';

export interface ITextContentBigProps {
	id: number;
	attributes: {
		uniqueBlockName: string;
		publishDate: string;
		content: string;
		locale?: string;
		createdAt: string;
		updatedAt?: string;
		publishedAt: string;
	};
}

export interface ITextContentBigBlockProps extends IDefaultBlockProps {
	title: ITitle;
	data: {
		data: ITextContentBigProps;
	};
}
