import type { ITitle, IWorkSteps } from '../elements';
import type { IDefaultBlockProps } from './IDefaultBlockProps';

export interface IWorkStepsBlockProps extends IDefaultBlockProps {
	title?: ITitle;
	data: {
		data: IWorkSteps;
	};
}
