import type { IAdvantage, ITitle } from '../elements';
import type { IDefaultBlockProps } from './IDefaultBlockProps';

export interface IAdvantagesBlockProps extends IDefaultBlockProps {
	title?: ITitle;
	data: IAdvantage[];
}
