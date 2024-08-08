import type { ICustomButtonProps } from '../shared';
import type { IDefaultBlockProps } from './IDefaultBlockProps';

export interface ICollectLinkMiniProps {
	id: number;
	attributes: {
		uniqueBlockName: string;
		title: string;
		description: string;
		button: ICustomButtonProps;
		infinityBar?: string;
		locale?: string;
		createdAt: string;
		updatedAt?: string;
		publishedAt: string;
	};
}

export interface ICollectLinkMiniBlockProps extends IDefaultBlockProps {
	data: {
		data: ICollectLinkMiniProps;
	};
}
