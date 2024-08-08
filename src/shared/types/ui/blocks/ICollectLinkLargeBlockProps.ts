import type { ICustomButtonProps } from '../shared';
import type { IDefaultBlockProps } from './IDefaultBlockProps';

export interface ICollectLinkLargeProps {
	id: number;
	attributes: {
		uniqueBlockName: string;
		title: string;
		description: string;
		button: ICustomButtonProps;
		locale?: string;
		createdAt: string;
		updatedAt?: string;
		publishedAt: string;
	};
}

export interface ICollectLinkLargeBlockProps extends IDefaultBlockProps {
	data: {
		data: ICollectLinkLargeProps;
	};
}
