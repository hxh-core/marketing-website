import type { IRequestPagination } from './IPagination';
import type { ISort } from './ISort';

export interface IFilters {
	pagination?: IRequestPagination;
	sort: ISort;
}

export interface IArticlesFilters extends IFilters {
	type?: string;
}
