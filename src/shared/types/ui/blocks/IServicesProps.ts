import type { IService, ITitle } from '../elements';
import type { IDefaultBlockProps } from './IDefaultBlockProps';

export interface IServiceBlockProps extends IDefaultBlockProps {
	title?: ITitle;
	data: {
		data: IService[];
	};
}
