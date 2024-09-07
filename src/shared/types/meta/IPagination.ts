export interface IPagination {
	page: number;
	pageSize: number;
	pageCount: number;
	total: number;
}

export type IRequestPagination = Partial<IPagination>;
