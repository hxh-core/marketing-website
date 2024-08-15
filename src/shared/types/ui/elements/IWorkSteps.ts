import type { TPrimaryOrSecondaryColor } from '../shared';

export interface IWorkSteps {
	id: number;
	attributes: {
		uniqueBlockName: string;
		createdAt: string;
		updatedAt?: string;
		publishedAt: string;
		locale: string;
		data: IWorkStep[];
	};
}

export interface IWorkStep {
	id: number;
	label: string;
	value: string;
	color: TPrimaryOrSecondaryColor;
	helpText?: string;
}
