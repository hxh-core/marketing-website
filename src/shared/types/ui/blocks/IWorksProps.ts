import type { ITitle, IWorkCardLarge, IWorkCardMini } from '../elements';
import type { IDefaultBlockProps } from './IDefaultBlockProps';

export interface IWorksMiniProps extends IDefaultBlockProps {
	title?: ITitle;
	data: {
		data: IWorkCardMini[];
	};
}
export interface IWorksLargeProps extends IDefaultBlockProps {
	title?: ITitle;
	data: {
		data: IWorkCardLarge[];
	};
}
