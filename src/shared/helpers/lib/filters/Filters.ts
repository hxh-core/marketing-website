import type { IFilters, IRequestPagination, ISort } from '@/shared/types';

export class Filters {
	pagination?: IRequestPagination;
	sort: ISort;
	query: string;

	constructor(sort: ISort, pagination?: IRequestPagination) {
		this.pagination = pagination;
		this.sort = sort;
		this.query = this.createQuery({ sort, pagination });
	}

	createQuery({ sort, pagination }: IFilters) {
		let newQuery = sort.map(({ value, type }, index) => {
			return type
				? `sort[${index}]=${value}:${type}`
				: `sort[${index}]=${value}`;
		});

		if (pagination) {
			if (pagination.page) {
				newQuery.push(`pagination[page]=${pagination.page}`);
			}

			if (pagination.pageSize) {
				newQuery.push(`pagination[pageSize]=${pagination.pageSize}`);
			}
		}

		const result = newQuery.join('&');
		this.query = result;
		return result;
	}

	logQuery() {
		console.log(this.query);
	}
}
